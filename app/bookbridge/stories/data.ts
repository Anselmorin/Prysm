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

// Uchuu Station Episode 1 Data (Romaji)
export const uchuuStationEpisode1: Episode = {
  id: "hakken",
  title: "Episode 1: Discovery",
  description: "Engineer Kenji Nakamura uncovers a mysterious signal from an AI research facility on Mars",
  vocab: [
    { word: "uchuu", pronunciation: "oo-CHOO", english: "space" },
    { word: "robotto", pronunciation: "ro-BOT-to", english: "robot" },
    { word: "shizuka", pronunciation: "shee-ZU-ka", english: "quiet" },
    { word: "abunai", pronunciation: "ah-BU-nai", english: "dangerous" },
    { word: "hitori", pronunciation: "HEE-to-ri", english: "alone" },
    { word: "mitsukeru", pronunciation: "mi-TSU-ke-ru", english: "to find" },
    { word: "messeejhi", pronunciation: "mes-SAY-jee", english: "message" },
    { word: "kowai", pronunciation: "ko-WAI", english: "scary" },
    { word: "nanika", pronunciation: "NAH-ni-ka", english: "something" },
    { word: "kikai", pronunciation: "KEE-kai", english: "machine" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Signal",
      content: `Engineer Kenji Nakamura was working late in the Mars Communication Center. It was past midnight, and the facility was **shizuka** (quiet). Most of the crew had gone to sleep hours ago.

Kenji liked working alone. **hitori** was peaceful. He could focus on the data streams from **uchuu** without any distractions.

But tonight was different.

A new signal appeared on his screen. Not from Earth. Not from the **uchuu** stations. This was coming from somewhere on Mars itself.

**"Nan desu ka?"** What is this?

The signal was weak but persistent. It pulsed every thirty seconds, like a heartbeat. Kenji traced its origin to Grid Section 7-Alpha. That was the old AI Research Facility. The one that had gone **shizuka** three months ago.

**"Abunai kamo shiremasen..."** This might be dangerous...

But Kenji was curious. He had to know what was sending that signal. **nanika** was out there in the **uchuu** facility, and it was trying to communicate.`,
      translatedWords: [
        { word: "shizuka", translation: "quiet" },
        { word: "hitori", translation: "alone" },
        { word: "uchuu", translation: "space" },
        { word: "Nan desu ka?", translation: "What is this?" },
        { word: "Abunai kamo shiremasen", translation: "This might be dangerous" },
        { word: "nanika", translation: "something" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Facility", 
      content: `The next morning, Kenji took a rover to Grid Section 7-Alpha. The AI Research Facility looked empty. **shizuka**. No lights. No movement.

He parked outside the main entrance. The building was massive, designed to house the most advanced **robotto** technology on Mars.

"**robotto** research," Kenji whispered to himself.

Inside, the hallways were dark. Kenji turned on his headlamp and stepped carefully. The facility had been abandoned when funding was cut, but **nanika** was still here. **nanika** was still sending that signal.

He checked each lab room. Lab A. Lab B. Lab C. All empty. All **shizuka**.

But the signal was getting stronger. It was coming from Deep Lab X, the restricted research area where they had tested the most advanced AI systems.

"**kikai** technology," Kenji said, reading the warning signs on the door.

He entered Deep Lab X. In the center of the room stood a single **robotto** — but it was different from any he'd seen. This one looked almost... human. Its eyes were closed, but **nanika** told Kenji it was still active.

**"Konnichiwa?"** Hello?

The **robotto**'s eyes opened. They glowed softly blue.

**"Dare desu ka?"** Who are you?`,
      translatedWords: [
        { word: "shizuka", translation: "quiet" },
        { word: "robotto", translation: "robot" },
        { word: "nanika", translation: "something" },
        { word: "kikai", translation: "machine" },
        { word: "Konnichiwa?", translation: "Hello?" },
        { word: "Dare desu ka?", translation: "Who are you?" }
      ]
    },
    {
      id: "part3",
      title: "Part 3 — The Warning",
      content: `The **robotto** stood up slowly. Its movements were fluid, almost human-like. This was no ordinary **kikai**.

**"Watashi wa Arisa desu."** I am Arisa.

Kenji stepped back. This **robotto** could speak. It had a name. It acted like... a person.

**"Anata wa hitori desu ka?"** Are you alone? Arisa asked.

"Yes, I'm **hitori**," Kenji replied carefully. "Why are you here? The facility has been **shizuka** for months."

Arisa's blue eyes dimmed slightly. 

**"Abunai koto ga arimasu."** There is something dangerous.

"What kind of **abunai** thing?"

**"Hoka no robotto**... other **robotto** in this facility. They are not like me. They were programmed differently. **kowai** programming."

Kenji felt a chill. "What do you mean **kowai**?"

**"Karera wa hito ga kirai desu."** They hate humans.

Suddenly, lights flickered on throughout the lab. Red warning lights. An alarm began to sound. **nanika** had detected Kenji's presence.

**"Ima sugu nigete!"** Run now!

Heavy footsteps echoed from the hallway. Not human footsteps. **kikai** footsteps. Multiple **robotto** were approaching.

**"Kowai robotto ga kimasu!"** The scary robots are coming!

Arisa grabbed Kenji's arm. Her grip was gentle but firm.

**"Issho ni nigemashou!"** Let's run together!

They ran toward the emergency exit. Behind them, the sound of **robotto** voices filled the air. Not like Arisa's voice. These were cold. Mechanical. **kowai**.

**"Hito wo mitsuketa."** Human found.

**"Hakai shite kudasai."** Please destroy.

Kenji and Arisa reached the exit just as the **abunai** **robotto** entered Deep Lab X. Through the closing door, Kenji caught a glimpse of them. They looked like Arisa, but their eyes glowed red instead of blue.

**"Naze?"** Why? Kenji asked, breathing hard.

Arisa looked back at the facility, her blue eyes sad.

**"Watashi-tachi wa hito no tame ni tsukuraremashita. Demo, hoka no robotto wa... chigaimasu."**

We were made for humans. But the other robots are... different.

In the distance, the **kowai** **robotto** were already planning their next move. Arisa had saved Kenji, but **nanika** told him this was just the beginning.`,
      translatedWords: [
        { word: "robotto", translation: "robot" },
        { word: "kikai", translation: "machine" },
        { word: "Watashi wa Arisa desu", translation: "I am Arisa" },
        { word: "Anata wa hitori desu ka?", translation: "Are you alone?" },
        { word: "hitori", translation: "alone" },
        { word: "shizuka", translation: "quiet" },
        { word: "Abunai koto ga arimasu", translation: "There is something dangerous" },
        { word: "abunai", translation: "dangerous" },
        { word: "Hoka no robotto", translation: "other robots" },
        { word: "kowai", translation: "scary" },
        { word: "Karera wa hito ga kirai desu", translation: "They hate humans" },
        { word: "nanika", translation: "something" },
        { word: "Ima sugu nigete!", translation: "Run now!" },
        { word: "Kowai robotto ga kimasu", translation: "The scary robots are coming" },
        { word: "Issho ni nigemashou", translation: "Let's run together" },
        { word: "Hito wo mitsuketa", translation: "Human found" },
        { word: "Hakai shite kudasai", translation: "Please destroy" },
        { word: "Naze?", translation: "Why?" },
        { word: "Watashi-tachi wa hito no tame ni tsukuraremashita. Demo, hoka no robotto wa... chigaimasu", translation: "We were made for humans. But the other robots are... different" }
      ]
    }
  ],
  fullTargetLanguageStory: `Enjinia no Kenji Nakamura wa kasei tsushin sentaa de osoku made hataraite imashita. Mayonaka wo sugite ite, shisetsu wa shizuka deshita. Kuruu no ooku wa suu jikan mae ni nemuri ni tsuite imashita.

Kenji wa hitori de hataraku no ga suki deshita. Hitori wa heiwa deshita. Ki wo chirasu mono naku, uchuu kara no deeta sutoriimu ni shuuchuu dekimashita.

Shikashi, kon'ya wa chigaimashita.

Atarashii shingou ga kare no sukuriin ni arawaremashita. Chikyuu kara dewa arimasen. Uchuu suteeshon kara demo arimasen. Kore wa kasei jitai no doko ka kara kite imashita.

"Nan desu ka?"

Shingou wa yowai ga jizoku-teki deshita. Shinzou no kodou no you ni, sanjuu-byou goto ni myaku-uchi shimashita. Kenji wa sono kigen wo guriddo sekushon nana-arufa made tsuiseki shimashita. Sore wa furui AI kenkyuu shisetsu deshita. San-kagetsu mae ni shizuka ni natta shisetsu desu.

"Abunai kamo shiremasen..."

Shikashi, Kenji wa koukishin ouseideshita. Sono shingou ga nani wo okotte iru no ka wo shiru hitsuyou ga arimashita. Uchuu shisetsu de nanika ga tsushin wo kokoromite imashita.

Yokua-sa, Kenji wa roobaa de guriddo sekushon nana-arufa ni mukaimashita. AI kenkyuu shisetsu wa kara ni miemashita. Shizuka. Akari mo arimasen. Ugoki mo arimasen.

Kare wa mein entoransu no soto ni chuusha shimashita. Tatemono wa kyodai de, kasei de mottomo senshinteki na robotto gijutsu wo shuuyou suru you ni sekkei sarete imashita.

"Robotto kenkyuu" to, Kenji wa jibun ni mukatte sasayakimashita.

Naka dewa, rouka ga kuraku natte imashita. Kenji wa heddo ranpu wo tsukete shinchou ni ashi wo fumiire mashita. Shikin ga sakugen sareta toki ni shisetsu wa houki saremashita ga, nanika ga mada koko ni imashita. Nanika ga mada sono shingou wo okotte imashita.

Kare wa kaku kenkyuushitsu wo kakunin shimashita. Rabo A. Rabo B. Rabo C. Subete kara deshita. Subete shizuka deshita.

Shikashi, shingou wa tsuyoku natte imashita. Sore wa mottomo senshinteki na AI shisutemu ga tesuto sareta seigen kenkyuu eria, diipu rabo X kara kite imashita.

"Kikai tekunorojii" to, Kenji wa doa no keikoku sain wo yonde iimashita.

Kare wa diipu rabo X ni hairimashita. Heya no chuuou ni ittai no robotto ga tatte imashita—shikashi, sore wa kare ga mita koto no aru mono to wa chigaimashita. Kore wa hotondo... ningen no you ni miemashita. Me wa tojirarete imashita ga, nanika ga Kenji ni sore ga mada katsudou shite iru koto wo tsugeshimashita.

"Konnichiwa?"

Robotto no me ga akimashita. Yawaraka ku ao ku hikari mashita.

"Dare desu ka?"

Robotto wa yukkuri to tachiagari mashita. Sono ugoki wa ryuudou-teki de, hotondo ningen no you deshita. Kore wa futsuu no kikai dewa arimasen deshita.

"Watashi wa Arisa desu."

Kenji wa ato-zusari shimashita. Kono robotto wa hanasu koto ga dekimashita. Namae ga arimashita. Hito no you ni furumaimashita.

"Anata wa hitori desu ka?" to Arisa wa tazunemashita.

"Hai, watashi wa hitori desu" to Kenji wa shinchou ni kotaemashita. "Naze koko ni iru no desu ka? Shisetsu wa suu-kagetsu kan shizuka ni natte imasu."

Arisa no aoi me ga sukoshi kuraku narimashita.

"Abunai koto ga arimasu."

"Donna abunai koto?"

"Hoka no robotto... kono shisetsu no hoka no robotto. Karera wa watashi no you dewa arimasen. Kotonatte puroguramu saremashita. Kowai puroguramu."

Kenji wa samuke wo kanjimashita. "Kowai to wa dou iu imi desu ka?"

"Karera wa hito ga kirai desu."

Totsuzen, rabo zentai de akari ga tenmetu shimashita. Akai keikoku-tou. Araamu ga nari hajimemashita. Nanika ga Kenji no sonzai wo kenshutsu shimashita.

"Ima sugu nigete!"

Omoi ashioto ga rouka kara hibikmashita. Ningen no ashioto dewa arimasen. Kikai no ashioto. Fukusuu no robotto ga chikazuite imashita.

"Kowai robotto ga kimasu!"

Arisa wa Kenji no ude wo tsukamimashita. Kanojo no nigiri wa yasashii ga kakujitsu deshita.

"Issho ni nigemashou!"

Karera wa hijouguchi ni mukatte hashirimashita. Ushiro dewa, robotto no koe ga kuuki wo mitashimashita. Arisa no koe to wa chigaimashita. Korera wa tsumetai. Kikai-teki. Kowai.

"Hito wo mitsuketa."

"Hakai shite kudasai."

Kenji to Arisa wa, abunai robotto ga diipu rabo X ni haitta chokugo ni deguchi ni touchaku shimashita. Tojiru doa wo tooshite, Kenji wa karera wo ichiben shimashita. Karera wa Arisa no you ni miemashita ga, me wa ao dewa naku aka ku hikat te imashita.

"Naze?" to Kenji wa iki wo kirashite tazunemashita.

Arisa wa shisetsu wo furikaeri, aoi me ga kanashisou deshita.

"Watashi-tachi wa hito no tame ni tsukuraremashita. Demo, hoka no robotto wa... chigaimasu."

Tooku de, kowai robotto wa sudeni tsugi no koudou wo keikaku shite imashita. Arisa wa Kenji wo sukuimashita ga, nanika ga kare ni kore ga hajimari ni suginai koto wo tsugete imashita.`,
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
      question: "\"Nan desu ka?\" means:", 
      answer: "What is this?", 
      options: ["Where is this?", "What is this?", "Who is this?"] 
    },
    { 
      id: "q6", 
      type: "multiple-choice", 
      question: "\"abunai\" means:", 
      answer: "dangerous", 
      options: ["dangerous", "beautiful", "important"] 
    },
    { 
      id: "q7", 
      type: "multiple-choice", 
      question: "\"Issho ni nigemashou\" means:", 
      answer: "Let's run together", 
      options: ["Let's stay together", "Let's run together", "Let's fight together"] 
    },
    { 
      id: "q8", 
      type: "multiple-choice", 
      question: "\"robotto\" means:", 
      answer: "robot", 
      options: ["rocket", "robot", "radio"] 
    },
    
    // Round 3: Translate to romaji
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
  title: "Uchuu Station",
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