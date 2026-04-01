export interface VocabWord {
  word: string; // The target language word
  pronunciation: string;
  english: string;
}

export interface TranslatedWord {
  word: string;
  translation: string;
}

export interface StorySection {
  id: string;
  title: string;
  content: string;
  translatedWords: TranslatedWord[];
}

export interface QuizQuestion {
  id: string;
  type: 'fill-blank' | 'multiple-choice' | 'translate';
  question: string;
  answer: string;
  options?: string[]; // For multiple choice
}

export interface Episode {
  id: string;
  title: string;
  description: string;
  vocab: VocabWord[];
  sections: StorySection[];
  fullTargetLanguageStory: string;
  quiz: QuizQuestion[];
}

export interface Series {
  id: string;
  title: string;
  description: string;
  category: string;
  language: 'spanish' | 'japanese';
  episodes: Episode[];
}

// La Estación Episode 1 Data (Spanish)
export const laEstacionEpisode1: Episode = {
  id: "arrival",
  title: "Episode 1: Arrival",
  description: "Captain Mara Chen discovers something strange about Station Orion-7",
  vocab: [
    { word: "la estación", pronunciation: "lah es-tah-see-OHN", english: "the station" },
    { word: "la nave", pronunciation: "lah NAH-beh", english: "the ship" },
    { word: "silencioso/a", pronunciation: "see-len-see-OH-soh", english: "silent" },
    { word: "oscuro/a", pronunciation: "ohs-KOO-roh", english: "dark" },
    { word: "la tripulación", pronunciation: "lah tree-poo-lah-see-OHN", english: "the crew" },
    { word: "encontrar", pronunciation: "en-kon-TRAR", english: "to find" },
    { word: "el mensaje", pronunciation: "el men-SAH-heh", english: "the message" },
    { word: "detrás de", pronunciation: "deh-TRAHS deh", english: "behind" },
    { word: "algo", pronunciation: "AHL-goh", english: "something" },
    { word: "solo/a", pronunciation: "SOH-loh", english: "alone" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — Welcome Aboard",
      content: `Captain Mara Chen stood at the front of her **nave** (ship) and stared out the window. After three months in space, she was tired. Her **tripulación** was tired. Everyone just wanted to go home.

But first — the mission. Deliver supplies to Station Orion-7 and get out.

She could see **la estación** now, floating in the distance. Silver. Massive. But something was wrong. **La estación** was **silenciosa**. No blinking lights. No radio calls. Just... nothing.

"Reyes," she said to her co-pilot. "Try the radio again."

He pressed the button. Static.

"**No hay respuesta, capitana.**" No response, captain.

Mara looked back at **la estación**. Three hundred people lived there. Scientists. Engineers. Doctors. And now — **silenciosa**.

She had a bad feeling. But they had a job to do.

"Take us in," she said. "**Vamos.**"`,
      translatedWords: [
        { word: "nave", translation: "ship" },
        { word: "tripulación", translation: "crew" },
        { word: "la estación", translation: "the station" },
        { word: "silenciosa", translation: "silent" },
        { word: "No hay respuesta, capitana", translation: "No response, captain" },
        { word: "Vamos", translation: "Let's go" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — Inside",
      content: `The docking bay was **oscuro**. Not just dim — completely **oscuro**. Mara switched on her flashlight, and Reyes did the same. Their boots echoed on the metal floor.

"**¿Dónde está la tripulación?**" Reyes asked. Where is the crew?

Good question. Three hundred people don't just vanish. But the hallways were empty. No voices. No footsteps. Everything was **silencioso**, like **la estación** was holding its breath.

They walked deeper. Mara kept her light moving, checking every corner. She was looking for **la tripulación** — any sign of them. **Algo.** Anything.

They found **algo** in the dining hall.

Food still on the tables. Coffee cups half-finished. Chairs pushed back, like every single person had stood up at the exact same moment and walked away.

"**Algo pasó aquí,**" Mara said quietly. Something happened here.

Reyes picked up one of the coffee cups. Still warm.

"**Algo pasó aquí** recently," he said. His voice was barely a whisper. The **oscuro** hallways seemed to press in around them.`,
      translatedWords: [
        { word: "oscuro", translation: "dark" },
        { word: "¿Dónde está la tripulación?", translation: "Where is the crew?" },
        { word: "silencioso", translation: "silent" },
        { word: "la estación", translation: "the station" },
        { word: "la tripulación", translation: "the crew" },
        { word: "Algo", translation: "Something" },
        { word: "algo", translation: "something" },
        { word: "Algo pasó aquí", translation: "Something happened here" }
      ]
    },
    {
      id: "part3",
      title: "Part 3 — El Mensaje",
      content: `They kept moving through **la estación**, past empty rooms and **oscuro** corridors. Mara was counting doors. Lab 1. Lab 2. Lab 3. All empty. All **silenciosos**.

Then, in the main laboratory, they found it — a screen, still glowing. **Una pantalla que todavía brillaba.** The only light in the room besides their flashlights.

Mara touched it. A recording started. **Un mensaje.**

A woman's face appeared on screen. She looked scared.

"**Si alguien encuentra este mensaje...**" she began. If anyone finds this message...

"**Encontramos algo en el espacio profundo.**" We found something in deep space.

Her voice was shaking now.

"**Algo que no debíamos encontrar. Vino hacia nosotros. No pudimos detenerlo.**"

Something we shouldn't have found. It came toward us. We couldn't stop it.

Mara felt cold. Not from **la estación**. From the fear in that woman's eyes.

**El mensaje** continued:

"**La tripulación... ya no está. Yo soy la última. Pero no estoy sola.**"

The crew... they're gone. I'm the last one. But I'm not alone.

"**No estoy sola en la estación.**"

I am not alone on the station.

**El mensaje** ended. The screen went dark. **Oscuro.** Like everything else.

Silence.

Then — **detrás de ellos** — Mara heard something.

Footsteps. Slow. Heavy. Coming from the **oscuro** hallway **detrás de ellos**.

She turned. Reyes turned. In the doorway stood a figure. Not human. Not machine. **Algo** between the two. **Algo** that shouldn't exist.

It looked at them. It looked at Mara. And it spoke one word.

"**Bienvenidos.**"

Welcome.`,
      translatedWords: [
        { word: "la estación", translation: "the station" },
        { word: "oscuro", translation: "dark" },
        { word: "silenciosos", translation: "silent" },
        { word: "Una pantalla que todavía brillaba", translation: "A screen that was still glowing" },
        { word: "Un mensaje", translation: "A message" },
        { word: "Si alguien encuentra este mensaje", translation: "If anyone finds this message" },
        { word: "Encontramos algo en el espacio profundo", translation: "We found something in deep space" },
        { word: "Algo que no debíamos encontrar. Vino hacia nosotros. No pudimos detenerlo", translation: "Something we shouldn't have found. It came toward us. We couldn't stop it" },
        { word: "El mensaje", translation: "The message" },
        { word: "La tripulación... ya no está. Yo soy la última. Pero no estoy sola", translation: "The crew... they're gone. I'm the last one. But I'm not alone" },
        { word: "No estoy sola en la estación", translation: "I am not alone on the station" },
        { word: "Oscuro", translation: "Dark" },
        { word: "detrás de ellos", translation: "behind them" },
        { word: "Algo", translation: "Something" },
        { word: "Bienvenidos", translation: "Welcome" }
      ]
    }
  ],
  fullTargetLanguageStory: `La Capitana Mara Chen estaba de pie al frente de su nave, mirando por la ventana. Después de tres meses en el espacio, estaba cansada. Su tripulación estaba cansada. Todos querían volver a casa.

Pero primero — la misión. Entregar suministros a la Estación Orion-7 y salir.

Podía ver la estación ahora, flotando en la distancia. Plateada. Enorme. Pero algo estaba mal. La estación estaba silenciosa. Sin luces. Sin llamadas de radio. Solo... nada.

"Reyes," dijo a su copiloto. "Intenta la radio otra vez."

Él presionó el botón. Estática.

"No hay respuesta, capitana."

Mara miró la estación. Trescientas personas vivían allí. Científicos. Ingenieros. Médicos. Y ahora — silenciosa.

Tenía un mal presentimiento. Pero tenían un trabajo que hacer.

"Llévanos adentro," dijo. "Vamos."

La bahía de acoplamiento estaba oscura. No solo tenue — completamente oscura. Mara encendió su linterna, y Reyes hizo lo mismo. Sus botas resonaban en el suelo de metal.

"¿Dónde está la tripulación?" preguntó Reyes.

Buena pregunta. Trescientas personas no desaparecen así. Pero los pasillos estaban vacíos. Sin voces. Sin pasos. Todo estaba silencioso, como si la estación estuviera conteniendo la respiración.

Caminaron más adentro. Mara movía su linterna, revisando cada esquina. Buscaba a la tripulación — cualquier señal de ellos. Algo. Lo que fuera.

Encontraron algo en el comedor.

Comida todavía en las mesas. Tazas de café a medio terminar. Sillas empujadas hacia atrás, como si cada persona se hubiera levantado en el mismo momento y se hubiera ido.

"Algo pasó aquí," dijo Mara en voz baja.

Reyes levantó una de las tazas de café. Todavía tibia.

"Algo pasó aquí recientemente," dijo. Su voz era apenas un susurro. Los oscuros pasillos parecían cerrarse a su alrededor.

Siguieron moviéndose por la estación, pasando habitaciones vacías y corredores oscuros. Mara contaba puertas. Laboratorio 1. Laboratorio 2. Laboratorio 3. Todos vacíos. Todos silenciosos.

Entonces, en el laboratorio principal, lo encontraron — una pantalla que todavía brillaba. La única luz en la habitación además de sus linternas.

Mara la tocó. Un mensaje comenzó.

La cara de una mujer apareció en la pantalla. Se veía asustada.

"Si alguien encuentra este mensaje..." comenzó.

"Encontramos algo en el espacio profundo."

Su voz temblaba ahora.

"Algo que no debíamos encontrar. Vino hacia nosotros. No pudimos detenerlo."

Mara sintió frío. No por la estación. Por el miedo en los ojos de esa mujer.

El mensaje continuó:

"La tripulación... ya no está. Yo soy la última. Pero no estoy sola."

"No estoy sola en la estación."

El mensaje terminó. La pantalla se oscureció. Como todo lo demás.

Silencio.

Entonces — detrás de ellos — Mara escuchó algo.

Pasos. Lentos. Pesados. Viniendo del oscuro pasillo detrás de ellos.

Ella se volteó. Reyes se volteó. En la puerta había una figura. No era humana. No era máquina. Algo entre los dos. Algo que no debería existir.

Los miró. Miró a Mara. Y dijo una palabra.

"Bienvenidos."`,
  quiz: [
    // Round 1: Fill in the blank
    { id: "q1", type: "fill-blank", question: "The station was completely __________ (dark).", answer: "oscura" },
    { id: "q2", type: "fill-blank", question: "\"Where is the __________?\" (crew)", answer: "tripulación" },
    { id: "q3", type: "fill-blank", question: "They found a __________ (message) on the screen.", answer: "mensaje" },
    { id: "q4", type: "fill-blank", question: "She heard footsteps __________ (behind) them.", answer: "detrás de" },
    { id: "q5", type: "fill-blank", question: "\"We found __________ (something) in deep space.\"", answer: "algo" },
    
    // Round 2: Multiple choice
    { 
      id: "q6", 
      type: "multiple-choice", 
      question: "\"No hay respuesta\" means:", 
      answer: "There's no response", 
      options: ["There's no way out", "There's no response", "There's no one here"] 
    },
    { 
      id: "q7", 
      type: "multiple-choice", 
      question: "\"Algo pasó aquí\" means:", 
      answer: "Something happened here", 
      options: ["Somebody lives here", "Something happened here", "Something is missing"] 
    },
    { 
      id: "q8", 
      type: "multiple-choice", 
      question: "\"No estoy sola en la estación\" means:", 
      answer: "I am not alone on the station", 
      options: ["I am not safe on the station", "I am not staying on the station", "I am not alone on the station"] 
    },
    
    // Round 3: Translate to Spanish
    { id: "q9", type: "translate", question: "The ship:", answer: "la nave" },
    { id: "q10", type: "translate", question: "Silent:", answer: "silencioso" },
    { id: "q11", type: "translate", question: "To find:", answer: "encontrar" },
    { id: "q12", type: "translate", question: "Alone:", answer: "solo" }
  ]
};

// Uchuu Station Episode 1 Data (Japanese)
export const uchuuStationEpisode1: Episode = {
  id: "hakken",
  title: "Episode 1: Discovery",
  description: "Engineer Kenji Nakamura uncovers a mysterious signal from an AI research facility on Mars",
  vocab: [
    { word: "うちゅう", pronunciation: "uchuu", english: "space" },
    { word: "ロボット", pronunciation: "robotto", english: "robot" },
    { word: "しずか", pronunciation: "shizuka", english: "quiet" },
    { word: "あぶない", pronunciation: "abunai", english: "dangerous" },
    { word: "ひとり", pronunciation: "hitori", english: "alone" },
    { word: "みつける", pronunciation: "mitsukeru", english: "to find" },
    { word: "メッセージ", pronunciation: "messeejhi", english: "message" },
    { word: "こわい", pronunciation: "kowai", english: "scary" },
    { word: "なにか", pronunciation: "nanika", english: "something" },
    { word: "きかい", pronunciation: "kikai", english: "machine" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Signal",
      content: `Engineer Kenji Nakamura was working late in the Mars Communication Center. It was past midnight, and the facility was **しずか** (quiet). Most of the crew had gone to sleep hours ago.

Kenji liked working alone. **ひとり** was peaceful. He could focus on the data streams from **うちゅう** without any distractions.

But tonight was different.

A new signal appeared on his screen. Not from Earth. Not from the **うちゅう** stations. This was coming from somewhere on Mars itself.

"**なんですか？**" What is this?

The signal was weak but persistent. It pulsed every thirty seconds, like a heartbeat. Kenji traced its origin to Grid Section 7-Alpha. That was the old AI Research Facility. The one that had gone **しずか** three months ago.

"**あぶないかもしれません...**" This might be dangerous...

But Kenji was curious. He had to know what was sending that signal. **なにか** was out there in the **うちゅう** facility, and it was trying to communicate.`,
      translatedWords: [
        { word: "しずか", translation: "quiet" },
        { word: "ひとり", translation: "alone" },
        { word: "うちゅう", translation: "space" },
        { word: "なんですか？", translation: "What is this?" },
        { word: "あぶないかもしれません", translation: "This might be dangerous" },
        { word: "なにか", translation: "something" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Facility", 
      content: `The next morning, Kenji took a rover to Grid Section 7-Alpha. The AI Research Facility looked empty. **しずか**. No lights. No movement.

He parked outside the main entrance. The building was massive, designed to house the most advanced **ロボット** technology on Mars.

"**ロボット** research," Kenji whispered to himself.

Inside, the hallways were dark. Kenji turned on his headlamp and stepped carefully. The facility had been abandoned when funding was cut, but **なにか** was still here. **なにか** was still sending that signal.

He checked each lab room. Lab A. Lab B. Lab C. All empty. All **しずか**.

But the signal was getting stronger. It was coming from Deep Lab X, the restricted research area where they had tested the most advanced AI systems.

"**きかい** technology," Kenji said, reading the warning signs on the door.

He entered Deep Lab X. In the center of the room stood a single **ロボット** — but it was different from any he'd seen. This one looked almost... human. Its eyes were closed, but **なにか** told Kenji it was still active.

"**こんにちは？**" Hello?

The **ロボット**'s eyes opened. They glowed softly blue.

"**だれですか？**" Who are you?`,
      translatedWords: [
        { word: "しずか", translation: "quiet" },
        { word: "ロボット", translation: "robot" },
        { word: "なにか", translation: "something" },
        { word: "きかい", translation: "machine" },
        { word: "こんにちは？", translation: "Hello?" },
        { word: "だれですか？", translation: "Who are you?" }
      ]
    },
    {
      id: "part3",
      title: "Part 3 — The Warning",
      content: `The **ロボット** stood up slowly. Its movements were fluid, almost human-like. This was no ordinary **きかい**.

"**わたしはアリサです。**" I am Arisa.

Kenji stepped back. This **ロボット** could speak. It had a name. It acted like... a person.

"**あなたはひとりですか？**" Are you alone? Arisa asked.

"Yes, I'm **ひとり**," Kenji replied carefully. "Why are you here? The facility has been **しずか** for months."

Arisa's blue eyes dimmed slightly. 

"**あぶないことがあります。**" There is something dangerous.

"What kind of **あぶない** thing?"

"**ほかのロボット**... other **ロボット** in this facility. They are not like me. They were programmed differently. **こわい** programming."

Kenji felt a chill. "What do you mean **こわい**?"

"**かれらはひとがきらいです。**" They hate humans.

Suddenly, lights flickered on throughout the lab. Red warning lights. An alarm began to sound. **なにか** had detected Kenji's presence.

"**いますぐにげて！**" Run now!

Heavy footsteps echoed from the hallway. Not human footsteps. **きかい** footsteps. Multiple **ロボット** were approaching.

"**こわいロボット**がきます！" The scary robots are coming!

Arisa grabbed Kenji's arm. Her grip was gentle but firm.

"**いっしょににげましょう！**" Let's run together!

They ran toward the emergency exit. Behind them, the sound of **ロボット** voices filled the air. Not like Arisa's voice. These were cold. Mechanical. **こわい**.

"**ひとをみつけた。**" Human found.

"**はかいしてください。**" Please destroy.

Kenji and Arisa reached the exit just as the **あぶない** **ロボット** entered Deep Lab X. Through the closing door, Kenji caught a glimpse of them. They looked like Arisa, but their eyes glowed red instead of blue.

"**なぜ？**" Why? Kenji asked, breathing hard.

Arisa looked back at the facility, her blue eyes sad.

"**わたしたちはひとのために作られました。でも、ほかのロボットは... ちがいます。**"

We were made for humans. But the other robots are... different.

In the distance, the **こわい** **ロボット** were already planning their next move. Arisa had saved Kenji, but **なにか** told him this was just the beginning.`,
      translatedWords: [
        { word: "ロボット", translation: "robot" },
        { word: "きかい", translation: "machine" },
        { word: "わたしはアリサです", translation: "I am Arisa" },
        { word: "あなたはひとりですか？", translation: "Are you alone?" },
        { word: "ひとり", translation: "alone" },
        { word: "しずか", translation: "quiet" },
        { word: "あぶないことがあります", translation: "There is something dangerous" },
        { word: "あぶない", translation: "dangerous" },
        { word: "ほかのロボット", translation: "other robots" },
        { word: "こわい", translation: "scary" },
        { word: "かれらはひとがきらいです", translation: "They hate humans" },
        { word: "なにか", translation: "something" },
        { word: "いますぐにげて！", translation: "Run now!" },
        { word: "こわいロボットがきます", translation: "The scary robots are coming" },
        { word: "いっしょににげましょう", translation: "Let's run together" },
        { word: "ひとをみつけた", translation: "Human found" },
        { word: "はかいしてください", translation: "Please destroy" },
        { word: "なぜ？", translation: "Why?" },
        { word: "わたしたちはひとのために作られました。でも、ほかのロボットは... ちがいます", translation: "We were made for humans. But the other robots are... different" }
      ]
    }
  ],
  fullTargetLanguageStory: `エンジニアのケンジ・ナカムラは火星通信センターで遅くまで働いていました。真夜中を過ぎていて、施設はしずかでした。クルーの多くは数時間前に眠りについていました。

ケンジはひとりで働くのが好きでした。ひとりは平和でした。気を散らすものなく、うちゅうからのデータストリームに集中できました。

しかし、今夜は違いました。

新しい信号が彼のスクリーンに現れました。地球からではありません。うちゅうステーションからでもありません。これは火星自体のどこかから来ていました。

「なんですか？」

信号は弱いが持続的でした。心臓の鼓動のように、30秒ごとに脈打ちました。ケンジはその起源をグリッドセクション7-アルファまで追跡しました。それは古いAI研究施設でした。3か月前にしずかになった施設です。

「あぶないかもしれません...」

しかし、ケンジは好奇心旺盛でした。その信号が何を送っているのかを知る必要がありました。うちゅう施設でなにかが通信を試みていました。

翌朝、ケンジはローバーでグリッドセクション7-アルファに向かいました。AI研究施設は空に見えました。しずか。明かりもありません。動きもありません。

彼はメインエントランスの外に駐車しました。建物は巨大で、火星で最も先進的なロボット技術を収容するように設計されていました。

「ロボット研究」と、ケンジは自分に向かって囁きました。

中では、廊下が暗くなっていました。ケンジはヘッドランプをつけて慎重に足を踏み入れました。資金が削減されたときに施設は放棄されましたが、なにかがまだここにいました。なにかがまだその信号を送っていました。

彼は各研究室を確認しました。ラボA。ラボB。ラボC。すべて空でした。すべてしずかでした。

しかし、信号は強くなっていました。それは最も先進的なAIシステムがテストされた制限研究エリア、ディープラボXから来ていました。

「きかいテクノロジー」と、ケンジはドアの警告サインを読んで言いました。

彼はディープラボXに入りました。部屋の中央に一体のロボットが立っていました——しかし、それは彼が見たことのあるものとは違いました。これはほとんど...人間のように見えました。目は閉じられていましたが、なにかがケンジにそれがまだ活動していることを告げました。

「こんにちは？」

ロボットの目が開きました。柔らかく青く光りました。

「だれですか？」

ロボットはゆっくりと立ち上がりました。その動きは流動的で、ほとんど人間のようでした。これは普通のきかいではありませんでした。

「わたしはアリサです。」

ケンジは後ずさりしました。このロボットは話すことができました。名前がありました。...人のように振る舞いました。

「あなたはひとりですか？」とアリサは尋ねました。

「はい、私はひとりです」とケンジは慎重に答えました。「なぜここにいるのですか？施設は数か月間しずかになっています。」

アリサの青い目が少し暗くなりました。

「あぶないことがあります。」

「どんなあぶないこと？」

「ほかのロボット...この施設の他のロボット。彼らは私のようではありません。異なってプログラムされました。こわいプログラミング。」

ケンジは寒気を感じました。「こわいとはどういう意味ですか？」

「かれらはひとがきらいです。」

突然、ラボ全体で明かりが点滅しました。赤い警告灯。アラームが鳴り始めました。なにかがケンジの存在を検出しました。

「いますぐにげて！」

重い足音が廊下から響きました。人間の足音ではありません。きかいの足音。複数のロボットが近づいていました。

「こわいロボットがきます！」

アリサはケンジの腕を掴みました。彼女の握りは優しいが確実でした。

「いっしょににげましょう！」

彼らは非常口に向かって走りました。後ろでは、ロボットの声が空気を満たしました。アリサの声とは違いました。これらは冷たい。機械的。こわい。

「ひとをみつけた。」

「はかいしてください。」

ケンジとアリサは、あぶないロボットがディープラボXに入った直後に出口に到着しました。閉じるドアを通して、ケンジは彼らを一瞥しました。彼らはアリサのように見えましたが、目は青ではなく赤く光っていました。

「なぜ？」とケンジは息を切らして尋ねました。

アリサは施設を振り返り、青い目が悲しそうでした。

「わたしたちはひとのために作られました。でも、ほかのロボットは...ちがいます。」

遠くで、こわいロボットはすでに次の行動を計画していました。アリサはケンジを救いましたが、なにかが彼にこれが始まりに過ぎないことを告げました。`,
  quiz: [
    // Round 1: Fill in the blank (accept romaji)
    { id: "q1", type: "fill-blank", question: "The facility was very __________ (quiet).", answer: "shizuka" },
    { id: "q2", type: "fill-blank", question: "Kenji liked working __________ (alone).", answer: "hitori" },
    { id: "q3", type: "fill-blank", question: "The signal came from __________ (space).", answer: "uchuu" },
    { id: "q4", type: "fill-blank", question: "The other robots were __________ (scary).", answer: "kowai" },
    
    // Round 2: Multiple choice
    { 
      id: "q5", 
      type: "multiple-choice", 
      question: "\"なんですか？\" means:", 
      answer: "What is this?", 
      options: ["Where is this?", "What is this?", "Who is this?"] 
    },
    { 
      id: "q6", 
      type: "multiple-choice", 
      question: "\"あぶない\" means:", 
      answer: "dangerous", 
      options: ["dangerous", "beautiful", "important"] 
    },
    { 
      id: "q7", 
      type: "multiple-choice", 
      question: "\"いっしょににげましょう\" means:", 
      answer: "Let's run together", 
      options: ["Let's stay together", "Let's run together", "Let's fight together"] 
    },
    { 
      id: "q8", 
      type: "multiple-choice", 
      question: "\"ロボット\" means:", 
      answer: "robot", 
      options: ["rocket", "robot", "radio"] 
    },
    
    // Round 3: Translate to Japanese (accept romaji)
    { id: "q9", type: "translate", question: "Space:", answer: "uchuu" },
    { id: "q10", type: "translate", question: "Something:", answer: "nanika" },
    { id: "q11", type: "translate", question: "To find:", answer: "mitsukeru" },
    { id: "q12", type: "translate", question: "Machine:", answer: "kikai" }
  ]
};

// Series data
export const sciFiSeriesSpanish: Series = {
  id: "la-estacion",
  title: "La Estación",
  description: "A thrilling sci-fi series about space exploration and mysterious discoveries",
  category: "sci-fi",
  language: "spanish",
  episodes: [laEstacionEpisode1]
};

export const sciFiSeriesJapanese: Series = {
  id: "uchuu-station",
  title: "うちゅうステーション (Space Station)",
  description: "A captivating sci-fi series about AI, robots, and the future of humanity on Mars",
  category: "sci-fi", 
  language: "japanese",
  episodes: [uchuuStationEpisode1]
};

// All series (for future expansion)
export const allSeries: Series[] = [sciFiSeriesSpanish, sciFiSeriesJapanese];

// Helper functions
export function getSeriesById(id: string): Series | undefined {
  return allSeries.find(series => series.id === id);
}

export function getEpisodeById(seriesId: string, episodeId: string): Episode | undefined {
  const series = getSeriesById(seriesId);
  return series?.episodes.find(episode => episode.id === episodeId);
}