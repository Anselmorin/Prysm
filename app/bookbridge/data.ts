export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  categories: Category[];
  description: string;
}

export type Category = "sci-fi" | "sports" | "tech" | "future" | "creative";
export type Language = "spanish" | "french" | "italian" | "japanese";

export const CATEGORIES: { id: Category; label: string; icon: string }[] = [
  { id: "sci-fi", label: "Sci-Fi", icon: "🚀" },
  { id: "sports", label: "Sports", icon: "🏀" },
  { id: "tech", label: "Tech", icon: "💻" },
  { id: "future", label: "Future", icon: "🔮" },
  { id: "creative", label: "Creative", icon: "🎨" },
];

export const LANGUAGES: { id: Language; label: string; flag: string }[] = [
  { id: "spanish", label: "Spanish", flag: "🇪🇸" },
  { id: "french", label: "French", flag: "🇫🇷" },
  { id: "italian", label: "Italian", flag: "🇮🇹" },
  { id: "japanese", label: "Japanese", flag: "🇯🇵" },
];

export const books: Book[] = [
  // Sci-Fi
  {
    id: "enders-game",
    title: "Ender's Game",
    author: "Orson Scott Card",
    isbn: "9780812550702",
    categories: ["sci-fi"],
    description: "In a future where Earth is threatened by an alien race, young Ender Wiggin is recruited into a military academy in space, where he must prove himself through increasingly difficult war games.",
  },
  {
    id: "dune",
    title: "Dune",
    author: "Frank Herbert",
    isbn: "9780441013593",
    categories: ["sci-fi", "future"],
    description: "Set in a distant future amidst a feudal interstellar society, Dune tells the story of young Paul Atreides as his family takes control of the desert planet Arrakis, the only source of the most valuable substance in the universe.",
  },
  {
    id: "hitchhikers-guide",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    isbn: "9780345391803",
    categories: ["sci-fi"],
    description: "Seconds before Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, beginning a wild journey through space.",
  },
  {
    id: "ready-player-one",
    title: "Ready Player One",
    author: "Ernest Cline",
    isbn: "9780307887436",
    categories: ["sci-fi", "tech"],
    description: "In a dystopian 2045, teenager Wade Watts escapes reality through a virtual universe called the OASIS, where he joins a treasure hunt that could make him incredibly rich.",
  },
  {
    id: "the-martian",
    title: "The Martian",
    author: "Andy Weir",
    isbn: "9780553418026",
    categories: ["sci-fi", "tech"],
    description: "Astronaut Mark Watney is stranded alone on Mars after his crew evacuates, and must use his ingenuity and engineering skills to survive and find a way home.",
  },
  // Sports
  {
    id: "boys-in-the-boat",
    title: "The Boys in the Boat",
    author: "Daniel James Brown",
    isbn: "9780143125471",
    categories: ["sports"],
    description: "The true story of the University of Washington's 1936 eight-oar crew and their quest for gold at the Berlin Olympics, a tale of grit, determination, and teamwork.",
  },
  {
    id: "friday-night-lights",
    title: "Friday Night Lights",
    author: "Buzz Bissinger",
    isbn: "9780306812828",
    categories: ["sports"],
    description: "A gripping account of a season with the Permian High School Panthers football team in Odessa, Texas, exploring the role of high school football in American culture.",
  },
  {
    id: "moneyball",
    title: "Moneyball",
    author: "Michael Lewis",
    isbn: "9780393324815",
    categories: ["sports", "tech"],
    description: "The story of how Oakland A's general manager Billy Beane used data analytics to build a competitive baseball team on a fraction of the budget of wealthier teams.",
  },
  {
    id: "the-blind-side",
    title: "The Blind Side",
    author: "Michael Lewis",
    isbn: "9780393330472",
    categories: ["sports"],
    description: "The remarkable true story of Michael Oher, a homeless teenager who was taken in by a wealthy family and went on to become an NFL first-round draft pick.",
  },
  // Tech
  {
    id: "steve-jobs",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isbn: "9781451648539",
    categories: ["tech", "creative"],
    description: "The definitive biography of Apple co-founder Steve Jobs, based on more than forty interviews conducted over two years, exploring the life of an intense perfectionist and creative entrepreneur.",
  },
  {
    id: "elon-musk",
    title: "Elon Musk",
    author: "Ashlee Vance",
    isbn: "9780062301239",
    categories: ["tech", "future"],
    description: "A revealing biography of the entrepreneur behind SpaceX, Tesla, and PayPal, tracing his journey from a difficult childhood in South Africa to becoming one of the most influential figures in technology.",
  },
  {
    id: "the-innovators",
    title: "The Innovators",
    author: "Walter Isaacson",
    isbn: "9781476708706",
    categories: ["tech"],
    description: "A sweeping history of the digital revolution, from Ada Lovelace and Alan Turing to the creators of the internet and the personal computer.",
  },
  {
    id: "hackers",
    title: "Hackers",
    author: "Steven Levy",
    isbn: "9781449388393",
    categories: ["tech"],
    description: "The classic account of the hacker ethic and the pioneers of the computer revolution, from the MIT model railroad club to the rise of personal computing.",
  },
  // Future
  {
    id: "1984",
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    categories: ["future"],
    description: "In a totalitarian society ruled by Big Brother, Winston Smith struggles with oppression and secretly dreams of rebellion in this chilling vision of a dystopian future.",
  },
  {
    id: "brave-new-world",
    title: "Brave New World",
    author: "Aldous Huxley",
    isbn: "9780060850524",
    categories: ["future"],
    description: "In a technologically advanced future, humans are genetically modified and socially conditioned to serve a seemingly utopian society, but one man dares to question it all.",
  },
  {
    id: "fahrenheit-451",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    isbn: "9781451673319",
    categories: ["future", "sci-fi"],
    description: "In a future society where books are outlawed and firemen burn them, Guy Montag begins to question the destructive practice and risks everything to preserve knowledge.",
  },
  {
    id: "the-giver",
    title: "The Giver",
    author: "Lois Lowry",
    isbn: "9780544336261",
    categories: ["future"],
    description: "In a seemingly perfect community without conflict or pain, twelve-year-old Jonas is chosen to inherit the position of Receiver of Memory and discovers the dark truth behind his society.",
  },
  {
    id: "divergent",
    title: "Divergent",
    author: "Veronica Roth",
    isbn: "9780062024039",
    categories: ["future"],
    description: "In a future Chicago divided into five factions based on virtues, sixteen-year-old Tris discovers she is Divergent — fitting into none — and uncovers a conspiracy threatening everyone she loves.",
  },
  // Creative
  {
    id: "steal-like-an-artist",
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    isbn: "9780761169253",
    categories: ["creative"],
    description: "Ten transformative principles for unleashing your creativity, showing that nothing is truly original and all creative work builds on what came before.",
  },
  {
    id: "big-magic",
    title: "Big Magic",
    author: "Elizabeth Gilbert",
    isbn: "9781594634727",
    categories: ["creative"],
    description: "The author of Eat Pray Love shares her wisdom on creative living, exploring the attitudes, approaches, and habits needed to live a life driven by curiosity rather than fear.",
  },
  {
    id: "the-war-of-art",
    title: "The War of Art",
    author: "Steven Pressfield",
    isbn: "9781936891023",
    categories: ["creative"],
    description: "A powerful guide to overcoming the internal barriers — what Pressfield calls Resistance — that prevent us from doing our best creative work.",
  },
  {
    id: "creative-confidence",
    title: "Creative Confidence",
    author: "Tom Kelley & David Kelley",
    isbn: "9780385349369",
    categories: ["creative", "tech"],
    description: "The founders of IDEO and Stanford's d.school show how to unlock the creativity that lies within each of us, providing strategies for unleashing bold new ideas.",
  },
];

export function getBook(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export function getCategoryLabel(id: Category): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

export function getCategoryIcon(id: Category): string {
  return CATEGORIES.find((c) => c.id === id)?.icon ?? "";
}

export function coverUrl(isbn: string, size: "S" | "M" | "L" = "M"): string {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
}

// Series data for Future category (others show "Coming Soon")
export interface Chapter {
  number: number;
  title: string;
  lessons: string[];
}

export interface Series {
  category: Category;
  language: Language;
  title: string;
  description: string;
  chapters: Chapter[];
}

export const futureSeries: Record<Language, Series> = {
  spanish: {
    category: "future",
    language: "spanish",
    title: "Futuros Distópicos",
    description: "Learn Spanish through the lens of dystopian fiction. Explore vocabulary for society, control, freedom, and rebellion.",
    chapters: [
      { number: 1, title: "El Mundo Controlado", lessons: ["Vocabulary: Society & Government", "Grammar: Present Tense Narration", "Reading: Surveillance State Excerpt", "Practice: Describe Your Ideal Society"] },
      { number: 2, title: "La Rebelión Interior", lessons: ["Vocabulary: Emotions & Resistance", "Grammar: Subjunctive Mood", "Reading: The Rebel's Dilemma", "Practice: Writing a Manifesto"] },
      { number: 3, title: "Tecnología y Humanidad", lessons: ["Vocabulary: Technology & Ethics", "Grammar: Future Tense", "Reading: The Machine Stops", "Practice: Debating the Future"] },
      { number: 4, title: "Libertad Reclamada", lessons: ["Vocabulary: Freedom & Identity", "Grammar: Past Tenses in Storytelling", "Reading: Escape Narratives", "Practice: Your Dystopian Short Story"] },
    ],
  },
  french: {
    category: "future",
    language: "french",
    title: "Futurs Dystopiques",
    description: "Apprenez le français à travers la fiction dystopique. Explorez le vocabulaire de la société, du contrôle et de la liberté.",
    chapters: [
      { number: 1, title: "Le Monde Sous Contrôle", lessons: ["Vocabulaire : Société et Gouvernement", "Grammaire : Le Présent Narratif", "Lecture : Extrait d'un État Surveillé", "Pratique : Décrire Votre Société Idéale"] },
      { number: 2, title: "La Résistance Intérieure", lessons: ["Vocabulaire : Émotions et Résistance", "Grammaire : Le Subjonctif", "Lecture : Le Dilemme du Rebelle", "Pratique : Écrire un Manifeste"] },
      { number: 3, title: "Technologie et Humanité", lessons: ["Vocabulaire : Technologie et Éthique", "Grammaire : Le Futur Simple", "Lecture : La Machine S'arrête", "Pratique : Débattre de l'Avenir"] },
      { number: 4, title: "Liberté Reconquise", lessons: ["Vocabulaire : Liberté et Identité", "Grammaire : Les Temps du Passé", "Lecture : Récits d'Évasion", "Pratique : Votre Nouvelle Dystopique"] },
    ],
  },
  italian: {
    category: "future",
    language: "italian",
    title: "Futuri Distopici",
    description: "Impara l'italiano attraverso la narrativa distopica. Esplora il vocabolario della società, del controllo e della libertà.",
    chapters: [
      { number: 1, title: "Il Mondo Controllato", lessons: ["Vocabolario: Società e Governo", "Grammatica: Il Presente Narrativo", "Lettura: Estratto di uno Stato Sorvegliato", "Pratica: Descrivere la Società Ideale"] },
      { number: 2, title: "La Ribellione Interiore", lessons: ["Vocabolario: Emozioni e Resistenza", "Grammatica: Il Congiuntivo", "Lettura: Il Dilemma del Ribelle", "Pratica: Scrivere un Manifesto"] },
      { number: 3, title: "Tecnologia e Umanità", lessons: ["Vocabolario: Tecnologia ed Etica", "Grammatica: Il Futuro Semplice", "Lettura: La Macchina Si Ferma", "Pratica: Dibattere il Futuro"] },
      { number: 4, title: "Libertà Riconquistata", lessons: ["Vocabolario: Libertà e Identità", "Grammatica: I Tempi del Passato", "Lettura: Racconti di Fuga", "Pratica: Il Tuo Racconto Distopico"] },
    ],
  },
  japanese: {
    category: "future",
    language: "japanese",
    title: "ディストピアの未来",
    description: "ディストピア小説を通じて日本語を学びましょう。社会、支配、自由、反乱に関する語彙を探求します。",
    chapters: [
      { number: 1, title: "管理された世界", lessons: ["語彙：社会と政府", "文法：現在形の物語", "読解：監視国家の抜粋", "練習：理想の社会を描写する"] },
      { number: 2, title: "内なる反乱", lessons: ["語彙：感情と抵抗", "文法：仮定形", "読解：反逆者のジレンマ", "練習：宣言文を書く"] },
      { number: 3, title: "テクノロジーと人間性", lessons: ["語彙：テクノロジーと倫理", "文法：未来表現", "読解：機械が止まる時", "練習：未来について議論する"] },
      { number: 4, title: "取り戻された自由", lessons: ["語彙：自由とアイデンティティ", "文法：過去形での物語", "読解：脱出の物語", "練習：あなたのディストピア短編"] },
    ],
  },
};
