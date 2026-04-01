export interface VocabWord {
  spanish: string;
  pronunciation: string;
  english: string;
}

export interface SpanishWord {
  word: string;
  translation: string;
}

export interface StorySection {
  id: string;
  title: string;
  content: string;
  spanishWords: SpanishWord[];
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
  fullSpanishStory: string;
  quiz: QuizQuestion[];
}

export interface Series {
  id: string;
  title: string;
  description: string;
  category: string;
  language: string;
  episodes: Episode[];
}

// La Estación Episode 1 Data
export const laEstacionEpisode1: Episode = {
  id: "arrival",
  title: "Episode 1: Arrival",
  description: "Captain Mara Chen discovers something strange about Station Orion-7",
  vocab: [
    { spanish: "la estación", pronunciation: "lah es-tah-see-OHN", english: "the station" },
    { spanish: "la nave", pronunciation: "lah NAH-beh", english: "the ship" },
    { spanish: "silencioso/a", pronunciation: "see-len-see-OH-soh", english: "silent" },
    { spanish: "oscuro/a", pronunciation: "ohs-KOO-roh", english: "dark" },
    { spanish: "la tripulación", pronunciation: "lah tree-poo-lah-see-OHN", english: "the crew" },
    { spanish: "encontrar", pronunciation: "en-kon-TRAR", english: "to find" },
    { spanish: "el mensaje", pronunciation: "el men-SAH-heh", english: "the message" },
    { spanish: "detrás de", pronunciation: "deh-TRAHS deh", english: "behind" },
    { spanish: "algo", pronunciation: "AHL-goh", english: "something" },
    { spanish: "solo/a", pronunciation: "SOH-loh", english: "alone" }
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
      spanishWords: [
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
      spanishWords: [
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
      spanishWords: [
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
  fullSpanishStory: `La Capitana Mara Chen estaba de pie al frente de su nave, mirando por la ventana. Después de tres meses en el espacio, estaba cansada. Su tripulación estaba cansada. Todos querían volver a casa.

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

// Series data
export const sciFiSeries: Series = {
  id: "la-estacion",
  title: "La Estación",
  description: "A thrilling sci-fi series about space exploration and mysterious discoveries",
  category: "sci-fi",
  language: "spanish",
  episodes: [laEstacionEpisode1]
};

// All series (for future expansion)
export const allSeries: Series[] = [sciFiSeries];

// Helper functions
export function getSeriesById(id: string): Series | undefined {
  return allSeries.find(series => series.id === id);
}

export function getEpisodeById(seriesId: string, episodeId: string): Episode | undefined {
  const series = getSeriesById(seriesId);
  return series?.episodes.find(episode => episode.id === episodeId);
}