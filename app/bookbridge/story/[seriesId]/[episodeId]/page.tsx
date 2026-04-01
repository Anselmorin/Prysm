"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getEpisodeById } from "../../../stories/data";
import type { Episode, QuizQuestion } from "../../../stories/data";

// Fuzzy answer checking — strips accents, ignores case, allows close spellings
function normalize(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .replace(/[^a-z0-9\s]/g, "");   // strip punctuation
}

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
  return dp[m][n];
}

function isCloseEnough(userAnswer: string, correctAnswer: string): boolean {
  const normUser = normalize(userAnswer);
  const normCorrect = normalize(correctAnswer);
  // Exact match after normalization (handles accents, case)
  if (normUser === normCorrect) return true;
  // Allow edit distance based on word length
  const maxDist = normCorrect.length <= 4 ? 1 : 2;
  return levenshtein(normUser, normCorrect) <= maxDist;
}

interface PageProps {
  params: Promise<{ seriesId: string; episodeId: string }>;
}

export default function StoryReaderPage(props: PageProps) {
  const [params, setParams] = useState<{ seriesId: string; episodeId: string } | null>(null);
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [vocabExpanded, setVocabExpanded] = useState(false);
  const [fullStoryExpanded, setFullStoryExpanded] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState<Record<string, boolean>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    props.params.then(resolvedParams => {
      setParams(resolvedParams);
      const foundEpisode = getEpisodeById(resolvedParams.seriesId, resolvedParams.episodeId);
      setEpisode(foundEpisode || null);
    });
  }, [props.params]);

  if (!params || !episode) {
    return (
      <div className="min-h-screen bg-[var(--prysm-bg)] text-[var(--prysm-text)] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">📚</div>
          <h1 className="text-2xl font-bold mb-2">Story Not Found</h1>
          <p className="text-[var(--prysm-muted)] mb-6">The story you're looking for doesn't exist.</p>
          <Link 
            href="/bookbridge" 
            className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors"
          >
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswerSubmit = (questionId: string, answer: string) => {
    const question = episode.quiz.find(q => q.id === questionId);
    if (!question) return;

    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    setShowResult(prev => ({ ...prev, [questionId]: true }));

    // Auto-advance after showing result
    setTimeout(() => {
      if (currentQuestionIndex < episode.quiz.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // Quiz completed - calculate final score
        const finalAnswers = { ...answers, [questionId]: answer };
        const correctCount = episode.quiz.filter(q => {
          const userAnswer = finalAnswers[q.id] || "";
          return isCloseEnough(userAnswer, q.answer);
        }).length;
        
        setScore(correctCount);
        setQuizCompleted(true);
      }
    }, 1500);
  };

  const renderWordWithTooltips = (text: string, spanishWords: Array<{ word: string; translation: string }>) => {
    let result = text;
    
    spanishWords.forEach(({ word, translation }) => {
      const regex = new RegExp(`\\*\\*${word}\\*\\*`, 'gi');
      result = result.replace(regex, `<span class="spanish-word" data-translation="${translation}">${word}</span>`);
    });
    
    return result;
  };

  const renderQuestion = (question: QuizQuestion) => {
    const hasAnswered = showResult[question.id];
    const userAnswer = answers[question.id];
    const isCorrect = userAnswer ? isCloseEnough(userAnswer, question.answer) : false;

    return (
      <div className="bg-[var(--prysm-surface)] border border-[var(--prysm-border)] rounded-xl p-6">
        <div className="mb-4">
          <span className="text-sm text-purple-400 font-medium">
            Question {currentQuestionIndex + 1} of {episode.quiz.length}
          </span>
          <h3 className="text-lg font-semibold mt-1">{question.question}</h3>
        </div>

        {question.type === "fill-blank" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Type your answer..."
              className="w-full px-4 py-3 rounded-lg bg-[var(--prysm-bg)] border border-[var(--prysm-border)] text-white placeholder-[var(--prysm-muted)] focus:border-purple-400 focus:outline-none"
              disabled={hasAnswered}
              defaultValue={userAnswer || ""}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !hasAnswered) {
                  handleAnswerSubmit(question.id, e.currentTarget.value);
                }
              }}
            />
            {!hasAnswered && (
              <button
                onClick={(e) => {
                  const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                  handleAnswerSubmit(question.id, input.value);
                }}
                className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        )}

        {question.type === "multiple-choice" && (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => !hasAnswered && handleAnswerSubmit(question.id, option)}
                disabled={hasAnswered}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                  hasAnswered
                    ? option === question.answer
                      ? "bg-green-500/20 border-green-400 text-green-300"
                      : option === userAnswer
                      ? "bg-red-500/20 border-red-400 text-red-300"
                      : "bg-[var(--prysm-bg)] border-[var(--prysm-border)] text-[var(--prysm-muted)]"
                    : "bg-[var(--prysm-bg)] border-[var(--prysm-border)] hover:border-purple-400 text-white"
                }`}
              >
                {String.fromCharCode(97 + index)}) {option}
              </button>
            ))}
          </div>
        )}

        {question.type === "translate" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Translate to Spanish..."
              className="w-full px-4 py-3 rounded-lg bg-[var(--prysm-bg)] border border-[var(--prysm-border)] text-white placeholder-[var(--prysm-muted)] focus:border-purple-400 focus:outline-none"
              disabled={hasAnswered}
              defaultValue={userAnswer || ""}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !hasAnswered) {
                  handleAnswerSubmit(question.id, e.currentTarget.value);
                }
              }}
            />
            {!hasAnswered && (
              <button
                onClick={(e) => {
                  const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                  handleAnswerSubmit(question.id, input.value);
                }}
                className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        )}

        {hasAnswered && (
          <div className={`mt-4 p-4 rounded-lg ${isCorrect ? "bg-green-500/20 border border-green-400" : "bg-red-500/20 border border-red-400"}`}>
            <div className="flex items-center gap-2">
              <span className="text-lg">{isCorrect ? "✅" : "❌"}</span>
              <span className={`font-medium ${isCorrect ? "text-green-300" : "text-red-300"}`}>
                {isCorrect
                  ? normalize(userAnswer || "") === normalize(question.answer)
                    ? "Correct!"
                    : "Close enough! ✨"
                  : "Incorrect"}
              </span>
            </div>
            {isCorrect && normalize(userAnswer || "") !== normalize(question.answer) && (
              <p className="mt-2 text-sm text-gray-300">
                Exact spelling: <span className="font-semibold text-white">{question.answer}</span>
              </p>
            )}
            {!isCorrect && (
              <p className="mt-2 text-sm text-gray-300">
                Correct answer: <span className="font-semibold text-white">{question.answer}</span>
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[var(--prysm-bg)] text-[var(--prysm-text)]">
      {/* Header */}
      <nav className="border-b border-[var(--prysm-border)] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link 
            href="/bookbridge" 
            className="text-sm text-[var(--prysm-muted)] hover:text-white transition-colors flex items-center gap-2"
          >
            ← Back to BookBridge
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold">La Estación</h1>
            <p className="text-sm text-[var(--prysm-muted)]">{episode.title}</p>
          </div>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Vocab Preview */}
        <section className="bg-[var(--prysm-surface)] border border-[var(--prysm-border)] rounded-xl overflow-hidden">
          <button
            onClick={() => setVocabExpanded(!vocabExpanded)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-500/10 transition-colors"
          >
            <div>
              <h2 className="text-lg font-semibold">Palabras Clave — Key Words</h2>
              <p className="text-sm text-[var(--prysm-muted)]">Preview the vocabulary you'll encounter</p>
            </div>
            <span className={`text-xl transition-transform ${vocabExpanded ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>
          
          {vocabExpanded && (
            <div className="px-6 pb-6">
              <div className="grid gap-3">
                {episode.vocab.map((word, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-[var(--prysm-border)] last:border-b-0">
                    <div className="flex-1">
                      <span className="text-purple-400 font-medium">{word.spanish}</span>
                      <span className="text-sm text-[var(--prysm-muted)] ml-2">({word.pronunciation})</span>
                    </div>
                    <span className="text-[var(--prysm-text)]">{word.english}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Story Sections */}
        <div className="space-y-6">
          {episode.sections.map((section) => (
            <section key={section.id} className="bg-[var(--prysm-surface)] border border-[var(--prysm-border)] rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 text-purple-400">{section.title}</h2>
              <div 
                className="prose prose-invert max-w-none leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: renderWordWithTooltips(section.content, section.spanishWords)
                    .replace(/\n\n/g, '</p><p class="mt-4">')
                    .replace(/^/, '<p>')
                    .replace(/$/, '</p>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
              <style jsx>{`
                .prose :global(.spanish-word) {
                  color: #a855f7;
                  cursor: pointer;
                  position: relative;
                  font-weight: 600;
                }
                .prose :global(.spanish-word:hover::after) {
                  content: attr(data-translation);
                  position: absolute;
                  bottom: 100%;
                  left: 50%;
                  transform: translateX(-50%);
                  background: #1e1e2e;
                  border: 1px solid #3b3b4f;
                  padding: 4px 8px;
                  border-radius: 6px;
                  font-size: 14px;
                  white-space: nowrap;
                  z-index: 10;
                  color: #e2e2e8;
                  font-weight: normal;
                }
              `}</style>
            </section>
          ))}
        </div>

        {/* Full Spanish Story */}
        <section className="bg-[var(--prysm-surface)] border border-[var(--prysm-border)] rounded-xl overflow-hidden">
          <button
            onClick={() => setFullStoryExpanded(!fullStoryExpanded)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-500/10 transition-colors"
          >
            <div>
              <h2 className="text-lg font-semibold">La Historia Completa — En Español</h2>
              <p className="text-sm text-[var(--prysm-muted)]">Read the complete story in Spanish</p>
            </div>
            <span className={`text-xl transition-transform ${fullStoryExpanded ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>
          
          {fullStoryExpanded && (
            <div className="px-6 pb-6">
              <div className="prose prose-invert max-w-none leading-relaxed text-[var(--prysm-text)]">
                {episode.fullSpanishStory.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Interactive Quiz */}
        <section className="bg-[var(--prysm-surface)] border border-[var(--prysm-border)] rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--prysm-border)]">
            <h2 className="text-lg font-semibold">Quiz — ¿Cuánto Aprendiste?</h2>
            <p className="text-sm text-[var(--prysm-muted)]">Test your understanding with interactive questions</p>
          </div>
          
          <div className="p-6">
            {!quizStarted && !quizCompleted ? (
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-2">Ready to test your Spanish?</h3>
                <p className="text-[var(--prysm-muted)] mb-6">
                  {episode.quiz.length} questions covering vocabulary, comprehension, and translation.
                </p>
                <button
                  onClick={() => setQuizStarted(true)}
                  className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors"
                >
                  Start Quiz
                </button>
              </div>
            ) : quizCompleted ? (
              <div className="text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2">¡Felicidades!</h3>
                <p className="text-xl mb-4">
                  You scored <span className="text-purple-400 font-bold">{score}/{episode.quiz.length}</span>
                </p>
                <p className="text-[var(--prysm-muted)] mb-6">
                  {score === episode.quiz.length 
                    ? "Perfect! You've mastered this episode."
                    : score >= episode.quiz.length * 0.7
                    ? "Great work! You're making excellent progress."
                    : "Good effort! Try reviewing the story again to improve."}
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => {
                      setQuizStarted(false);
                      setQuizCompleted(false);
                      setCurrentQuestionIndex(0);
                      setAnswers({});
                      setShowResult({});
                      setScore(0);
                    }}
                    className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
                  >
                    Retake Quiz
                  </button>
                  <Link
                    href="/bookbridge"
                    className="px-6 py-3 rounded-lg border border-[var(--prysm-border)] hover:border-purple-400 text-white font-medium transition-colors"
                  >
                    Back to Library
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-[var(--prysm-muted)] mb-2">
                    <span>Progress</span>
                    <span>{currentQuestionIndex + 1} / {episode.quiz.length}</span>
                  </div>
                  <div className="w-full bg-[var(--prysm-bg)] rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestionIndex + 1) / episode.quiz.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Current Question */}
                {renderQuestion(episode.quiz[currentQuestionIndex])}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}