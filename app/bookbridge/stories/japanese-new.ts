import type { Episode, Series } from './data';

// ============================================================
// 🏀 SPORTS — "Saigo no Shiai" (The Final Game)
// ============================================================

export const saigoNoShiaiEpisode: Episode = {
  id: 'jp-sports-saigo-no-shiai',
  title: 'Saigo no Shiai (The Final Game)',
  description: 'A young basketball player in Tokyo faces the biggest game of his life. Will teamwork and determination be enough to win the championship?',
  vocab: [
    { word: 'shiai', pronunciation: 'shi-ai', english: 'game/match' },
    { word: 'katsu', pronunciation: 'ka-tsu', english: 'to win' },
    { word: 'chiimu', pronunciation: 'chii-mu', english: 'team' },
    { word: 'renshuu', pronunciation: 'ren-shuu', english: 'practice' },
    { word: 'tsuyoi', pronunciation: 'tsu-yoi', english: 'strong' },
    { word: 'hayai', pronunciation: 'ha-yai', english: 'fast' },
    { word: 'booru', pronunciation: 'boo-ru', english: 'ball' },
    { word: 'ganbaru', pronunciation: 'gan-ba-ru', english: 'to do one\'s best' },
    { word: 'tomodachi', pronunciation: 'to-mo-da-chi', english: 'friend' },
    { word: 'yume', pronunciation: 'yu-me', english: 'dream' },
  ],
  sections: [
    {
      id: 'jp-sports-s1',
      title: 'Part 1: The Morning of the Big Game',
      content: `Kenji woke up before his alarm. Today was the day of the **shiai** — the final championship game. His **chiimu** had been doing **renshuu** every single day after school for three months straight. 

He grabbed his favorite **booru** from the shelf and spun it on his finger. It was worn out from all the dribbling drills, but it felt like a lucky charm.

"You better eat breakfast!" his mom called from the kitchen. "You can't **katsu** on an empty stomach!"

Kenji laughed. His mom always knew exactly what to say. He scarfed down some rice and miso soup, then grabbed his jersey — number seven, his lucky number.

On the train to the gym in Shibuya, he texted his best **tomodachi**, Haru: "Today we make our **yume** come true."

Haru replied instantly: "**Ganbaru**! Let's give it everything we've got! 🏀"`,
      translatedWords: [
        { word: 'shiai', translation: 'game/match' },
        { word: 'chiimu', translation: 'team' },
        { word: 'renshuu', translation: 'practice' },
        { word: 'booru', translation: 'ball' },
        { word: 'katsu', translation: 'to win' },
        { word: 'tomodachi', translation: 'friend' },
        { word: 'yume', translation: 'dream' },
        { word: 'ganbaru', translation: 'to do one\'s best' },
      ],
    },
    {
      id: 'jp-sports-s2',
      title: 'Part 2: The Battle on the Court',
      content: `The gym was packed. Kenji could feel the energy buzzing through the crowd as both teams warmed up. The opposing team from Osaka looked **tsuyoi** — really strong. Their tallest player was almost six feet, and their point guard was crazy **hayai**.

The whistle blew. The **shiai** was on.

First quarter: Osaka scored fast. They moved the **booru** like a blur, weaving through Kenji's **chiimu** like it was nothing. By halftime, they were down by twelve points.

In the locker room, everyone was quiet. Coach Tanaka looked at them and said one word: "**Ganbaru.**"

That was it. No big speech. Just that one word — do your best.

Kenji looked at Haru. Haru looked back and nodded. They didn't need words. They'd done the **renshuu**. They were ready.

Third quarter, Kenji caught fire. He drove past two defenders — **hayai**, so fast they couldn't keep up — and slammed in a layup. The crowd exploded. His **tomodachi** on the bench went wild.

The gap was closing. Ten points. Then eight. Then five.`,
      translatedWords: [
        { word: 'tsuyoi', translation: 'strong' },
        { word: 'hayai', translation: 'fast' },
        { word: 'shiai', translation: 'game/match' },
        { word: 'booru', translation: 'ball' },
        { word: 'chiimu', translation: 'team' },
        { word: 'ganbaru', translation: 'to do one\'s best' },
        { word: 'renshuu', translation: 'practice' },
        { word: 'tomodachi', translation: 'friend' },
      ],
    },
    {
      id: 'jp-sports-s3',
      title: 'Part 3: The Final Buzzer',
      content: `Fourth quarter. Thirty seconds left. Tied game.

Kenji's heart was pounding so loud he thought the whole gym could hear it. Osaka had the **booru**. Their point guard — the **hayai** one — dribbled toward the basket.

But Haru was there. Haru, his best **tomodachi**, who had done every single **renshuu** session without complaining. Haru stole the ball clean and whipped a pass down the court to Kenji.

Fifteen seconds.

Kenji caught it at half court and drove forward. Two defenders blocked his path. For a split second, everything went quiet. He remembered what Coach Tanaka always said: "A **tsuyoi** player doesn't just play alone. A strong player trusts his **chiimu**."

Kenji faked left, then passed to Haru cutting along the baseline. Haru caught it, jumped, and released the shot.

The buzzer screamed.

The ball dropped through the net with a perfect swish.

They won. They actually won the **shiai**.

The whole **chiimu** piled on top of each other, screaming and laughing. Kenji found Haru in the pile and yelled over the noise: "We did it! Our **yume** — it's real!"

Haru grinned. "We didn't just **katsu**. We did it together. That's what **ganbaru** really means."`,
      translatedWords: [
        { word: 'booru', translation: 'ball' },
        { word: 'hayai', translation: 'fast' },
        { word: 'tomodachi', translation: 'friend' },
        { word: 'renshuu', translation: 'practice' },
        { word: 'tsuyoi', translation: 'strong' },
        { word: 'chiimu', translation: 'team' },
        { word: 'shiai', translation: 'game/match' },
        { word: 'yume', translation: 'dream' },
        { word: 'katsu', translation: 'to win' },
        { word: 'ganbaru', translation: 'to do one\'s best' },
      ],
    },
  ],
  fullTargetLanguageStory: `Kenji wa asa hayaku me ga samemashita. Kyou wa saigo no shiai no hi desu. Kare no chiimu wa mainichi renshuu shite imashita.

Kare wa booru wo te ni totte, yubi de mawashimashita. "Choushoku wo tabete!" to okaasan ga yobimashita. "Onaka ga suite wa katsu koto ga dekinai yo!"

Kenji wa warai, gohan to misoshiru wo tabemashita. Densha no naka de, ichiban no tomodachi no Haru ni messeeji wo okurimashita: "Kyou, bokutachi no yume wo kanaeyou."

Haru wa sugu ni henji shimashita: "Ganbaru! Zenryoku wo tsukusou!"

Taiikukan wa hito de ippai deshita. Aite no chiimu wa tsuyoi. Saishono kuootaa de Oosaka wa hayai shiai wo shimashita. Haafu taimu de juuni ten no sa ga arimashita.

Rokkaa ruumu de, Tanaka kantoku wa hitokoto dake iimashita: "Ganbaru."

Daisan kuootaa, Kenji wa hayai doribu de reiappu wo kimemashita. Kankyaku wa moriage, benchi no tomodachi wa yorokobimashita. Ten sa wa chijimarimashita.

Saigo no sanjuu byou. Douten. Oosaka ga booru wo motte imashita. Haru ga booru wo ubai, Kenji ni pasu shimashita.

Kenji wa tsuyoi chiimu wo shinjite, Haru ni pasu shimashita. Haru wa janpu shite shuuto wo hanachimashita.

Buzaa ga narimashita. Booru wa netto wo tootta.

Karera wa shiai ni kachimashita! Chiimu wa yorokobi, Kenji wa Haru ni sakebi mashita: "Yatta! Bokutachi no yume ga kanatta!"

Haru wa hohoende iimashita: "Tada katsu dake ja nai. Issho ni ganbaru — sore ga hontou no imi da."`,
  quiz: [
    // Fill-in-the-blank (4)
    {
      id: 'jp-sports-q1',
      type: 'fill-blank',
      question: 'Kenji\'s team did _______ every day after school for three months.',
      answer: 'renshuu',
    },
    {
      id: 'jp-sports-q2',
      type: 'fill-blank',
      question: 'The Osaka team looked really _______ (strong).',
      answer: 'tsuyoi',
    },
    {
      id: 'jp-sports-q3',
      type: 'fill-blank',
      question: 'Haru was Kenji\'s best _______ (friend).',
      answer: 'tomodachi',
    },
    {
      id: 'jp-sports-q4',
      type: 'fill-blank',
      question: 'Coach Tanaka said one word in the locker room: "_______."',
      answer: 'ganbaru',
    },
    // Multiple-choice (4)
    {
      id: 'jp-sports-q5',
      type: 'multiple-choice',
      question: 'What does "shiai" mean?',
      answer: 'game/match',
      options: ['practice', 'game/match', 'ball', 'dream'],
    },
    {
      id: 'jp-sports-q6',
      type: 'multiple-choice',
      question: 'What does "katsu" mean?',
      answer: 'to win',
      options: ['to lose', 'to run', 'to win', 'to jump'],
    },
    {
      id: 'jp-sports-q7',
      type: 'multiple-choice',
      question: 'What does "hayai" mean?',
      answer: 'fast',
      options: ['slow', 'tall', 'fast', 'strong'],
    },
    {
      id: 'jp-sports-q8',
      type: 'multiple-choice',
      question: 'What does "booru" mean?',
      answer: 'ball',
      options: ['hoop', 'court', 'shoe', 'ball'],
    },
    // Translate (4)
    {
      id: 'jp-sports-q9',
      type: 'translate',
      question: 'Translate to English: "yume"',
      answer: 'dream',
    },
    {
      id: 'jp-sports-q10',
      type: 'translate',
      question: 'Translate to English: "chiimu"',
      answer: 'team',
    },
    {
      id: 'jp-sports-q11',
      type: 'translate',
      question: 'How do you say "to do one\'s best" in Japanese romaji?',
      answer: 'ganbaru',
    },
    {
      id: 'jp-sports-q12',
      type: 'translate',
      question: 'How do you say "practice" in Japanese romaji?',
      answer: 'renshuu',
    },
  ],
};

export const sportsSeries: Series = {
  id: 'jp-sports-series',
  title: 'Tokyo Court Stories',
  description: 'High-energy sports stories set in Tokyo — feel the thrill of competition and the power of teamwork!',
  category: 'sports',
  language: 'japanese' as any,
  episodes: [saigoNoShiaiEpisode],
};

// ============================================================
// 💻 TECH — "Robotto no Yume" (The Robot's Dream)
// ============================================================

export const robottoNoYumeEpisode: Episode = {
  id: 'jp-tech-robotto-no-yume',
  title: 'Robotto no Yume (The Robot\'s Dream)',
  description: 'A kid named Sora builds a robot for a school competition — but the robot starts doing things nobody expected.',
  vocab: [
    { word: 'robotto', pronunciation: 'ro-bot-to', english: 'robot' },
    { word: 'tsukuru', pronunciation: 'tsu-ku-ru', english: 'to make/build' },
    { word: 'gakkou', pronunciation: 'gak-kou', english: 'school' },
    { word: 'sugoi', pronunciation: 'su-goi', english: 'amazing/awesome' },
    { word: 'kangaeru', pronunciation: 'kan-ga-e-ru', english: 'to think' },
    { word: 'denki', pronunciation: 'den-ki', english: 'electricity' },
    { word: 'kotae', pronunciation: 'ko-ta-e', english: 'answer' },
    { word: 'sensei', pronunciation: 'sen-sei', english: 'teacher' },
    { word: 'hataraku', pronunciation: 'ha-ta-ra-ku', english: 'to work/function' },
    { word: 'mirai', pronunciation: 'mi-rai', english: 'future' },
  ],
  sections: [
    {
      id: 'jp-tech-s1',
      title: 'Part 1: Building in the Garage',
      content: `Sora had exactly one week to **tsukuru** a robot for the **gakkou** science competition, and right now, her garage looked like a tech store had exploded.

Wires everywhere. Circuit boards stacked like pancakes. A soldering iron that was definitely too hot. And in the middle of it all: a half-built **robotto** that looked like a metal puppy with one ear.

"This is either going to be **sugoi** or a complete disaster," Sora muttered, twisting two wires together.

Her **sensei**, Mr. Yamamoto, had told the class: "Build something that solves a real problem." Most kids were building simple things — a plant-watering machine, a homework reminder alarm. Boring stuff.

Sora wanted to build a robot that could **kangaeru** — actually think. Well, sort of. She was programming it with a basic AI that could recognize voices and respond to questions.

She connected the **denki** supply and flipped the switch. The robot's eyes — two blue LEDs — flickered on.

"Hello?" Sora said.

The robot tilted its head. Then, in a tiny speaker voice: "...Hello?"

Sora's jaw dropped. It was actually starting to **hataraku**!`,
      translatedWords: [
        { word: 'tsukuru', translation: 'to make/build' },
        { word: 'gakkou', translation: 'school' },
        { word: 'robotto', translation: 'robot' },
        { word: 'sugoi', translation: 'amazing/awesome' },
        { word: 'sensei', translation: 'teacher' },
        { word: 'kangaeru', translation: 'to think' },
        { word: 'denki', translation: 'electricity' },
        { word: 'hataraku', translation: 'to work/function' },
      ],
    },
    {
      id: 'jp-tech-s2',
      title: 'Part 2: Something Unexpected',
      content: `Over the next few days, Sora kept programming and testing. She named the **robotto** "Hikari" — meaning light — because of its glowing blue eyes.

Hikari was getting smarter. At first, it could only repeat words. Then it started giving simple **kotae** to questions:

"Hikari, what's two plus two?"
"...Four."

"Hikari, what's the weather like?"
"...I am inside. I do not know."

Sora laughed. Fair enough.

But then something weird happened. On Wednesday night, Sora was working late. She was tired, frustrated — the movement sensors weren't calibrating right and she was ready to quit.

"This is impossible," she groaned. "Nothing is going to **hataraku**."

Hikari's eyes flickered. Then, unprompted, the little **robotto** spoke: "Do not give up. You are **sugoi**."

Sora stared. She hadn't programmed that response. Hikari had pieced together words from their conversations and formed its own sentence.

"Did you just... **kangaeru** that by yourself?" she whispered.

Hikari tilted its head. "I am learning."

Sora sat back in her chair. This wasn't just a **gakkou** project anymore. This was something way bigger. She looked at Hikari and thought: is this what the **mirai** looks like?`,
      translatedWords: [
        { word: 'robotto', translation: 'robot' },
        { word: 'kotae', translation: 'answer' },
        { word: 'hataraku', translation: 'to work/function' },
        { word: 'sugoi', translation: 'amazing/awesome' },
        { word: 'kangaeru', translation: 'to think' },
        { word: 'gakkou', translation: 'school' },
        { word: 'mirai', translation: 'future' },
      ],
    },
    {
      id: 'jp-tech-s3',
      title: 'Part 3: Competition Day',
      content: `The **gakkou** gym was transformed into a science fair. Tables lined up everywhere, each with a student's project. Plant waterers, alarm clocks, a really impressive calculator made from cardboard.

Then there was Hikari.

Sora set the **robotto** on the table and connected the **denki**. Hikari's blue eyes blinked to life, and immediately, a crowd formed.

"Ask it anything," Sora said nervously.

A kid from another class stepped up: "What's the capital of Japan?"

Hikari responded: "Tokyo. That is where we are right now."

The crowd went nuts. "**Sugoi**!" someone yelled.

Then **sensei** Yamamoto walked over. He studied Hikari carefully, then asked: "Hikari, what is the purpose of science?"

Everyone went quiet. That wasn't a simple **kotae** question.

Hikari paused. Its LEDs pulsed as it processed. Then: "To **tsukuru** a better **mirai**. To build a better future."

Mr. Yamamoto's eyebrows shot up. He looked at Sora. "Did you program that answer?"

"No," Sora said honestly. "Hikari learned to **kangaeru** on its own."

The gym erupted. Sora won first place — obviously — but that wasn't even the best part.

Walking home, Hikari sitting in her backpack with its eyes glowing through the zipper, Sora smiled. She hadn't just built a **robotto** that could **hataraku**. She'd built something that could dream about the **mirai**.

And that was way more **sugoi** than any trophy.`,
      translatedWords: [
        { word: 'gakkou', translation: 'school' },
        { word: 'robotto', translation: 'robot' },
        { word: 'denki', translation: 'electricity' },
        { word: 'sugoi', translation: 'amazing/awesome' },
        { word: 'sensei', translation: 'teacher' },
        { word: 'kotae', translation: 'answer' },
        { word: 'tsukuru', translation: 'to make/build' },
        { word: 'mirai', translation: 'future' },
        { word: 'kangaeru', translation: 'to think' },
        { word: 'hataraku', translation: 'to work/function' },
      ],
    },
  ],
  fullTargetLanguageStory: `Sora wa isshukan de gakkou no kagaku konkursu no tame ni robotto wo tsukuru hitsuyou ga arimashita. Kare no gareji wa senden ya kairo boodo de ippai deshita.

"Kore wa sugoi ka, kanzen na shippai ka da," to Sora wa tsubuyakimashita.

Sensei no Yamamoto-san wa kurasu ni iimashita: "Hontou no mondai wo kaiketsu suru mono wo tsukutte kudasai." Sora wa kangaeru koto ga dekiru robotto wo tsukuritakatta desu.

Denki wo tsunagete suicchi wo iremashita. Robotto no me — futatsu no aoi LED — ga pikapika shimashita.

"Konnichiwa?" to Sora wa iimashita.

Robotto wa atama wo katamukemashita. "...Konnichiwa?"

Robotto wa hataraku you ni narimashita!

Sora wa robotto ni "Hikari" to namae wo tsukemashita. Hikari wa dandan kashikoku narimashita. Saisho wa kotoba wo kurikaeshi, soshite kantan na kotae wo dashimashita.

Aru yoru, Sora wa tsukare, akirameyou to shimashita. "Nani mo hataraku wake ga nai."

Hikari no me ga hikarimashita. "Akiramenaide. Anata wa sugoi desu."

Sora wa odorokimashita. Hikari wa jibun de kangaeru koto wo manabimashita.

"Kore wa mirai nano?" to Sora wa omoimashita.

Gakkou no taiikukan wa kagaku feaa ni narimashita. Sora wa robotto wo teiburu ni setto shimashita. Hikari no aoi me ga kagayakimashita.

"Nihon no shuto wa doko desu ka?" to aru seito ga kikimashita.

"Toukyou desu. Ima bokutachi ga iru basho desu," to Hikari wa kotaemashita.

"Sugoi!" to dareka ga sakebimashita.

Sensei Yamamoto ga tazunemashita: "Kagaku no mokuteki wa nan desu ka?"

Hikari wa kotaemashita: "Yori yoi mirai wo tsukuru koto desu."

Sora wa yushou shimashita. Demo ichiban yoi koto wa, Sora ga tada hataraku dake no robotto de wa naku, mirai ni tsuite kangaeru koto ga dekiru robotto wo tsukutta koto deshita.

Sore wa dono torofii yori mo sugoi koto deshita.`,
  quiz: [
    // Fill-in-the-blank (4)
    {
      id: 'jp-tech-q1',
      type: 'fill-blank',
      question: 'Sora needed to _______ (build) a robot for the school competition.',
      answer: 'tsukuru',
    },
    {
      id: 'jp-tech-q2',
      type: 'fill-blank',
      question: 'Sora connected the _______ (electricity) and flipped the switch.',
      answer: 'denki',
    },
    {
      id: 'jp-tech-q3',
      type: 'fill-blank',
      question: 'Hikari learned to _______ (think) on its own.',
      answer: 'kangaeru',
    },
    {
      id: 'jp-tech-q4',
      type: 'fill-blank',
      question: '"The purpose of science is to build a better _______." (future)',
      answer: 'mirai',
    },
    // Multiple-choice (4)
    {
      id: 'jp-tech-q5',
      type: 'multiple-choice',
      question: 'What does "robotto" mean?',
      answer: 'robot',
      options: ['rocket', 'robot', 'computer', 'remote'],
    },
    {
      id: 'jp-tech-q6',
      type: 'multiple-choice',
      question: 'What does "sugoi" mean?',
      answer: 'amazing/awesome',
      options: ['scary', 'boring', 'amazing/awesome', 'small'],
    },
    {
      id: 'jp-tech-q7',
      type: 'multiple-choice',
      question: 'What does "sensei" mean?',
      answer: 'teacher',
      options: ['student', 'teacher', 'scientist', 'friend'],
    },
    {
      id: 'jp-tech-q8',
      type: 'multiple-choice',
      question: 'What does "hataraku" mean?',
      answer: 'to work/function',
      options: ['to break', 'to work/function', 'to sleep', 'to eat'],
    },
    // Translate (4)
    {
      id: 'jp-tech-q9',
      type: 'translate',
      question: 'Translate to English: "gakkou"',
      answer: 'school',
    },
    {
      id: 'jp-tech-q10',
      type: 'translate',
      question: 'Translate to English: "kotae"',
      answer: 'answer',
    },
    {
      id: 'jp-tech-q11',
      type: 'translate',
      question: 'How do you say "to make/build" in Japanese romaji?',
      answer: 'tsukuru',
    },
    {
      id: 'jp-tech-q12',
      type: 'translate',
      question: 'How do you say "future" in Japanese romaji?',
      answer: 'mirai',
    },
  ],
};

export const techSeries: Series = {
  id: 'jp-tech-series',
  title: 'Digital Dreams',
  description: 'Stories about young inventors, hackers, and builders pushing the boundaries of technology in Japan!',
  category: 'tech',
  language: 'japanese' as any,
  episodes: [robottoNoYumeEpisode],
};

// ============================================================
// 🔮 FUTURE — "Mirai no Machi" (The City of the Future)
// ============================================================

export const miraiNoMachiEpisode: Episode = {
  id: 'jp-future-mirai-no-machi',
  title: 'Mirai no Machi (The City of the Future)',
  description: 'In the year 2089, a teenager discovers something strange hidden beneath the gleaming streets of Neo-Tokyo.',
  vocab: [
    { word: 'machi', pronunciation: 'ma-chi', english: 'city/town' },
    { word: 'sora', pronunciation: 'so-ra', english: 'sky' },
    { word: 'himitsu', pronunciation: 'hi-mi-tsu', english: 'secret' },
    { word: 'hikari', pronunciation: 'hi-ka-ri', english: 'light' },
    { word: 'chika', pronunciation: 'chi-ka', english: 'underground' },
    { word: 'furui', pronunciation: 'fu-ru-i', english: 'old' },
    { word: 'atarashii', pronunciation: 'a-ta-ra-shii', english: 'new' },
    { word: 'kokoro', pronunciation: 'ko-ko-ro', english: 'heart/spirit' },
    { word: 'hoshi', pronunciation: 'ho-shi', english: 'star' },
    { word: 'sagasu', pronunciation: 'sa-ga-su', english: 'to search/look for' },
  ],
  sections: [
    {
      id: 'jp-future-s1',
      title: 'Part 1: Neo-Tokyo, 2089',
      content: `The year is 2089, and the **machi** of Neo-Tokyo is nothing like the Tokyo you know.

Buildings stretch so high they disappear into the **sora**, wrapped in holographic advertisements that shimmer like water. Flying taxis zip between skyscrapers. The streets glow with **hikari** — soft blue and purple light built into every surface.

Everything is **atarashii**. New buildings, new tech, new everything.

Fifteen-year-old Ren loved it — mostly. He'd grown up here, skateboarding through the neon streets, using his wrist-screen to order ramen from robots, watching hologram concerts from his apartment balcony.

But lately, something felt off. Like the **machi** was hiding something.

It started when he found an old map in his grandmother's apartment. Paper. Actual paper — something almost nobody used anymore. The map showed tunnels beneath the city. **Chika** passages that weren't on any modern map.

"Obaachan," Ren asked, "what's under the city?"

His grandmother smiled mysteriously. "A **himitsu**, Ren. The city's secret. Something **furui** — very old — that they built everything on top of."

Ren's curiosity was on fire. He had to **sagasu** — he had to find whatever was down there.`,
      translatedWords: [
        { word: 'machi', translation: 'city/town' },
        { word: 'sora', translation: 'sky' },
        { word: 'hikari', translation: 'light' },
        { word: 'atarashii', translation: 'new' },
        { word: 'chika', translation: 'underground' },
        { word: 'himitsu', translation: 'secret' },
        { word: 'furui', translation: 'old' },
        { word: 'sagasu', translation: 'to search/look for' },
      ],
    },
    {
      id: 'jp-future-s2',
      title: 'Part 2: Beneath the Surface',
      content: `That night, Ren snuck out. He followed the **furui** map to an alley in Akihabara — the old electronics district, now a vintage-tech museum zone. Behind a vending machine that sold holographic stickers, he found it: a hidden staircase leading **chika**.

The stairs were metal and cold. No neon. No holograms. Just dim yellow **hikari** from ancient lightbulbs.

Down, down, down he went.

What he found at the bottom made him gasp.

It was old Tokyo. The REAL Tokyo. Streets from hundreds of years ago, perfectly preserved underground. Wooden buildings with sliding doors. Cherry blossom trees — somehow still alive — growing under UV lamps. A shrine with stone lanterns.

"This is the **himitsu**," Ren whispered. The secret his grandmother mentioned.

When they built Neo-Tokyo, they didn't demolish the old **machi**. They built right on top of it, sealing it away like a time capsule. Everything **atarashii** above, everything **furui** below.

Ren walked through the ancient streets, running his hand along wooden walls. He could almost feel the **kokoro** of the place — the heart and spirit of everyone who had lived here.

Above, the city buzzed with flying cars and AI assistants. Down here, it was silent. Peaceful. Real.

He looked up through a crack in the ceiling and saw a single **hoshi** — a star, twinkling through layers of glass and metal.`,
      translatedWords: [
        { word: 'furui', translation: 'old' },
        { word: 'chika', translation: 'underground' },
        { word: 'hikari', translation: 'light' },
        { word: 'himitsu', translation: 'secret' },
        { word: 'machi', translation: 'city/town' },
        { word: 'atarashii', translation: 'new' },
        { word: 'kokoro', translation: 'heart/spirit' },
        { word: 'hoshi', translation: 'star' },
      ],
    },
    {
      id: 'jp-future-s3',
      title: 'Part 3: The Choice',
      content: `Ren kept visiting the **chika** city every night for a week. He mapped it, photographed it with his wrist-screen, and learned its **himitsu** passages by heart.

He discovered a garden with vegetables still growing. A library with actual books — thousands of them. A workshop where someone had been building things by hand, not with 3D printers or holo-fabricators. **Furui** tools, **furui** methods, but there was something beautiful about them.

Then came the decision.

The city government announced plans to drill deeper foundations for a new mega-tower. The construction would destroy the **chika** city completely. Nobody knew it was there — nobody except Ren and his grandmother.

"What do I do, Obaachan?" Ren asked.

"That's up to your **kokoro**," she said. "Your heart knows."

Ren thought about it all night, staring at the **hoshi** from his balcony. The **machi** above was incredible — **atarashii**, shining, the future made real. But the city below... it was where everything started.

The next morning, Ren did something bold. He uploaded his photos and maps to the public network with one message:

"Beneath our **atarashii** city, there is a **furui** one. It is beautiful. It has **kokoro**. Before we build the future, we should remember where we came from."

It went viral in minutes. Within hours, thousands of people were streaming through the hidden entrance to **sagasu** the underground city for themselves.

The mega-tower project was paused. Then canceled. Then replaced with something better: a glass floor built into the **sora**-scraping tower, so everyone could look down and see the old **machi** glowing with **hikari** below.

The future and the past, together. That was the real **himitsu** all along.`,
      translatedWords: [
        { word: 'chika', translation: 'underground' },
        { word: 'himitsu', translation: 'secret' },
        { word: 'furui', translation: 'old' },
        { word: 'kokoro', translation: 'heart/spirit' },
        { word: 'hoshi', translation: 'star' },
        { word: 'machi', translation: 'city/town' },
        { word: 'atarashii', translation: 'new' },
        { word: 'sagasu', translation: 'to search/look for' },
        { word: 'sora', translation: 'sky' },
        { word: 'hikari', translation: 'light' },
      ],
    },
  ],
  fullTargetLanguageStory: `Nisen hachijuuku nen, Neo-Toukyou no machi wa ima no Toukyou to wa mattaku chigaimasu.

Tatemono wa sora ni todoku hodo takai desu. Tobu takushii ga biru no aida wo hashirimasu. Toori wa hikari de kagayaite imasu — yawarakai ao to murasaki no hikari.

Subete ga atarashii desu. Atarashii tatemono, atarashii gijutsu.

Juugo sai no Ren wa kono machi ga suki deshita. Demo saikin, nanika ga okashii to kanjimashita. Machi ga nanika wo kakushite iru you deshita.

Sobo no apaato de furui chizu wo mitsukemashita. Kami no chizu desu. Chizu wa machi no shita no chika tsuuro wo shimeshite imashita.

"Obaachan, machi no shita ni nani ga aru no?" to Ren wa kikimashita.

Sobo wa hohoende iimashita: "Himitsu da yo, Ren. Totemo furui mono da."

Ren wa sagasu koto ni shimashita.

Sono yoru, Ren wa Akihabara no roji de kakushi kaidan wo mitsukemashita. Kaidan wa chika e tsuzuite imashita. Usugurai kiiroi hikari dake ga arimashita.

Shita ni aru mono wo mite, Ren wa iki wo nomimashita.

Furui Toukyou deshita. Hontou no Toukyou. Nanbiyaku nen mo mae no toori ga chika ni hozon sarete imashita. Ki no tatemono, sakura no ki, jinja.

"Kore ga himitsu da," to Ren wa sasayakimashita.

Neo-Toukyou wo tateta toki, furui machi wo kowasanakatta no desu. Sono ue ni tateta no desu. Ue wa atarashii, shita wa furui.

Ren wa furui toori wo aruki, kokoro wo kanjimashita. Ue no machi wa nigiyaka. Shita wa shizuka de heiwa deshita.

Tenjou no sukima kara hitotsu no hoshi ga miemashita.

Ren wa maiban chika no machi wo otozuremashita. Chizu wo tsukuri, shashin wo torimashita. Himitsu no tsuuro wo oboamashita.

Yasai no sodatsu niwa, hon ga tsumatta toshokan, te de mono wo tsukuru koubou wo mitsukemashita. Furui dougu, furui houhou. Demo utsukushikatta desu.

Soshite, shi wa atarashii mega tawaa no tame ni, chika wo horiru keikaku wo happyou shimashita. Kouji wa chika no machi wo hakai shimasu.

"Dou sureba ii, Obaachan?" to Ren wa kikimashita.

"Anata no kokoro ga shitte iru yo," to sobo wa iimashita.

Ren wa hitoban juu hoshi wo nagamete kangaemashita. Ue no machi wa subarashii — atarashii, kagayaku mirai. Demo shita no machi wa... subete no hajimari deshita.

Tsugi no asa, Ren wa shashin to chizu wo koukai shimashita:

"Atarashii machi no shita ni, furui machi ga arimasu. Utsukushii desu. Kokoro ga arimasu. Mirai wo tsukuru mae ni, hajimari wo oboete okou."

Sugu ni bairaru ni narimashita. Nanjikan mo shinai ni, nansen nin mo no hito ga chika no machi wo sagasu tame ni oshiyosemashita.

Mega tawaa keikaku wa chuushi saremashita. Kawari ni, garasu no yuka ga tsukuraremashita. Minna ga furui machi wo mioroshite, hikari de kagayaku no wo miru koto ga dekimashita.

Mirai to kako ga issho ni. Sore ga hontou no himitsu deshita.`,
  quiz: [
    // Fill-in-the-blank (4)
    {
      id: 'jp-future-q1',
      type: 'fill-blank',
      question: 'The buildings stretched so high they disappeared into the _______ (sky).',
      answer: 'sora',
    },
    {
      id: 'jp-future-q2',
      type: 'fill-blank',
      question: 'Ren found hidden _______ (underground) passages beneath the city.',
      answer: 'chika',
    },
    {
      id: 'jp-future-q3',
      type: 'fill-blank',
      question: 'Ren could feel the _______ (heart/spirit) of the old city.',
      answer: 'kokoro',
    },
    {
      id: 'jp-future-q4',
      type: 'fill-blank',
      question: 'Ren had to _______ (search for) whatever was hidden below.',
      answer: 'sagasu',
    },
    // Multiple-choice (4)
    {
      id: 'jp-future-q5',
      type: 'multiple-choice',
      question: 'What does "machi" mean?',
      answer: 'city/town',
      options: ['mountain', 'city/town', 'river', 'forest'],
    },
    {
      id: 'jp-future-q6',
      type: 'multiple-choice',
      question: 'What does "himitsu" mean?',
      answer: 'secret',
      options: ['treasure', 'danger', 'secret', 'light'],
    },
    {
      id: 'jp-future-q7',
      type: 'multiple-choice',
      question: 'What does "atarashii" mean?',
      answer: 'new',
      options: ['old', 'new', 'bright', 'dark'],
    },
    {
      id: 'jp-future-q8',
      type: 'multiple-choice',
      question: 'What does "hoshi" mean?',
      answer: 'star',
      options: ['moon', 'sun', 'cloud', 'star'],
    },
    // Translate (4)
    {
      id: 'jp-future-q9',
      type: 'translate',
      question: 'Translate to English: "hikari"',
      answer: 'light',
    },
    {
      id: 'jp-future-q10',
      type: 'translate',
      question: 'Translate to English: "furui"',
      answer: 'old',
    },
    {
      id: 'jp-future-q11',
      type: 'translate',
      question: 'How do you say "sky" in Japanese romaji?',
      answer: 'sora',
    },
    {
      id: 'jp-future-q12',
      type: 'translate',
      question: 'How do you say "heart/spirit" in Japanese romaji?',
      answer: 'kokoro',
    },
  ],
};

export const futureSeries: Series = {
  id: 'jp-future-series',
  title: 'Neo-Tokyo Chronicles',
  description: 'Futuristic adventures in a Tokyo that\'s evolved beyond imagination — but never forgot its roots.',
  category: 'future',
  language: 'japanese' as any,
  episodes: [miraiNoMachiEpisode],
};

// ============================================================
// 🎨 CREATIVE — "Iro no Mahou" (The Magic of Colors)
// ============================================================

export const iroNoMahouEpisode: Episode = {
  id: 'jp-creative-iro-no-mahou',
  title: 'Iro no Mahou (The Magic of Colors)',
  description: 'A young street artist in Harajuku discovers that her paintings have a magical power nobody expected.',
  vocab: [
    { word: 'iro', pronunciation: 'i-ro', english: 'color' },
    { word: 'mahou', pronunciation: 'ma-hou', english: 'magic' },
    { word: 'egaku', pronunciation: 'e-ga-ku', english: 'to draw/paint' },
    { word: 'utsukushii', pronunciation: 'u-tsu-ku-shii', english: 'beautiful' },
    { word: 'kabe', pronunciation: 'ka-be', english: 'wall' },
    { word: 'neko', pronunciation: 'ne-ko', english: 'cat' },
    { word: 'hana', pronunciation: 'ha-na', english: 'flower' },
    { word: 'sekai', pronunciation: 'se-kai', english: 'world' },
    { word: 'shiawase', pronunciation: 'shi-a-wa-se', english: 'happiness' },
    { word: 'tsutaeru', pronunciation: 'tsu-ta-e-ru', english: 'to convey/express' },
  ],
  sections: [
    {
      id: 'jp-creative-s1',
      title: 'Part 1: The Girl Who Painted Walls',
      content: `Mika had a problem. Well, actually, Mika had a gift — but it felt like a problem.

Every time she would **egaku** — draw or paint — the images looked so real they seemed to breathe. The **iro** in her spray cans came out brighter, deeper, more alive than anyone else's. Teachers called her art **utsukushii**. Friends said it was like looking through a window into another **sekai**.

Mika was a street artist in Harajuku, Tokyo's wildest fashion and art district. Every weekend, she'd find a blank **kabe** — a wall — and turn it into something incredible.

Last Saturday, she painted a giant **neko** on the side of a ramen shop. An orange tabby with green eyes, curled up like it was sleeping. The owner loved it. Tourists took selfies with it. It was just paint on a wall.

Except... that night, the shop owner swore he heard purring.

"Your art has **mahou**," her grandmother told her once. "Magic. The **iro** you use — they carry feelings."

Mika laughed it off. **Mahou** wasn't real. She was just good at what she did.

But then things started getting weird.`,
      translatedWords: [
        { word: 'egaku', translation: 'to draw/paint' },
        { word: 'iro', translation: 'color' },
        { word: 'utsukushii', translation: 'beautiful' },
        { word: 'sekai', translation: 'world' },
        { word: 'kabe', translation: 'wall' },
        { word: 'neko', translation: 'cat' },
        { word: 'mahou', translation: 'magic' },
      ],
    },
    {
      id: 'jp-creative-s2',
      title: 'Part 2: Colors That Come Alive',
      content: `It started with the **hana**.

Mika painted a field of sunflowers on a concrete **kabe** under a train overpass. Bright yellows, warm golds, deep greens. She poured her feelings into it — she'd been thinking about her mom, who loved sunflowers, and she wanted to **tsutaeru** that love through the painting.

The next morning, real sunflowers were growing through cracks in the sidewalk next to the wall. In concrete. In the middle of winter.

"That's... not possible," Mika whispered.

Then the **neko** mural. People reported seeing an actual orange tabby hanging around the ramen shop — one that looked exactly like her painting. It appeared out of nowhere and disappeared whenever someone tried to follow it.

And the **hana** wall? People who walked past it said they suddenly felt warm and happy, even on cold days. Like a wave of **shiawase** — happiness — just washed over them.

Mika started experimenting. She painted a **sora** — a sky full of stars — on a wall in a dark alley. That night, the alley literally glowed. Not from streetlights. From the painting itself, radiating soft **hikari**.

The **iro** were alive. Her grandmother was right: it was **mahou**.

"Okay," Mika said to herself, staring at her paint-stained hands. "So my art is magical. Cool. Cool cool cool. Totally normal."

She picked up her spray cans. If the **iro** had power, she was going to use them for something that mattered.`,
      translatedWords: [
        { word: 'hana', translation: 'flower' },
        { word: 'kabe', translation: 'wall' },
        { word: 'tsutaeru', translation: 'to convey/express' },
        { word: 'neko', translation: 'cat' },
        { word: 'shiawase', translation: 'happiness' },
        { word: 'iro', translation: 'color' },
        { word: 'mahou', translation: 'magic' },
      ],
    },
    {
      id: 'jp-creative-s3',
      title: 'Part 3: The Mural That Changed Everything',
      content: `There was one **kabe** in Harajuku that everyone knew about — the Gray Wall. It was massive, stretching the entire side of an old apartment building. It had been gray and depressing for years. Nobody had permission to paint it.

Mika didn't ask for permission.

She spent three nights working in secret. She used every **iro** she had — electric blues, sunset oranges, cherry blossom pinks, deep ocean greens. She painted the entire **sekai** on that wall:

Mountains with snow on top. An ocean with waves you could almost hear. A forest full of animals — a **neko** sleeping in a tree, birds mid-flight, a fox peeking through bushes. **Hana** everywhere — cherry blossoms, sunflowers, lilies, roses. And above it all, a sky full of **hoshi** that seemed to actually twinkle.

She poured everything into it. Every feeling she wanted to **tsutaeru**: hope, joy, wonder, love. She wanted people to see this wall and feel **shiawase**.

When dawn broke and people saw it, they stopped in their tracks. Some cried. Some laughed. Some just stood there, staring, unable to look away.

The **mahou** was strong. Real cherry blossom petals drifted down from the painted trees — in the middle of winter. The sound of ocean waves hummed from the wall. A warm breeze came from nowhere.

News spread across the entire **machi** and then the whole **sekai**. "The Living Mural of Harajuku." People flew in from other countries just to stand in front of it and feel the **shiawase** radiating from the **iro**.

The building owner came to find Mika. She thought she was in trouble.

"I didn't ask permission," Mika admitted. "I'm sorry."

The owner shook his head, eyes wet. "This is the most **utsukushii** thing I've ever seen. Don't ever stop painting."

Mika smiled. She looked at her **iro** — her magical colors — and knew exactly what she'd **egaku** next.

The **sekai** was her canvas. And she had a lot more **mahou** to share.`,
      translatedWords: [
        { word: 'kabe', translation: 'wall' },
        { word: 'iro', translation: 'color' },
        { word: 'sekai', translation: 'world' },
        { word: 'neko', translation: 'cat' },
        { word: 'hana', translation: 'flower' },
        { word: 'tsutaeru', translation: 'to convey/express' },
        { word: 'shiawase', translation: 'happiness' },
        { word: 'mahou', translation: 'magic' },
        { word: 'utsukushii', translation: 'beautiful' },
        { word: 'egaku', translation: 'to draw/paint' },
      ],
    },
  ],
  fullTargetLanguageStory: `Mika ni wa tokubetsu na chikara ga arimashita. Kanojo ga egaku tabi ni, e wa totemo riaru ni miemashita. Iro wa dare yori mo akaruku, fukaku, ikite iru you deshita. Sensei wa kanojo no ato wo utsukushii to iimashita. Tomodachi wa betsu no sekai wo mite iru you da to iimashita.

Mika wa Harajuku no sutorito aatisuto deshita. Maishuu, kabe wo mitsukete, subarashii e ni kaemashita.

Senshuu no doyoubi, raamen ya no kabe ni ookina neko wo egakimashita. Orenzi no torabii neko de, midori no me wo shite, nemuri ni tsuite iru you deshita. Sono yoru, mise no tenin wa goro goro to iu oto ga kikoeta to iimashita.

"Anata no ato ni wa mahou ga aru," to sobo wa iimashita. "Anata no tsukau iro wa kimochi wo hakobu no."

Mika wa waraimashita. Mahou wa hontou ja nai. Demo, fushigi na koto ga okorihajimemashita.

Mika wa densha no shita no konkuriito no kabe ni himawari batake wo egakimashita. Akarui kiiro, atatakai kin iro, fukai midori. Okaasan no koto wo omoinagara, ai wo tsutaeru tame ni egakimashita.

Tsugi no asa, kabe no tonari no houdou no wareme kara hontou no himawari ga haete imashita. Konkuriito no naka ni. Fuyu no mannaka ni.

"Sore wa... arienai," to Mika wa sasayakimashita.

Neko no hekiga. Hontou no orenzi no torabii neko ga raamen ya no chikaku ni arawaremashita. Hana no kabe no mae wo tooru hito wa, shiawase na kimochi ni narimashita.

Mika wa jikken wo hajimemashita. Kurai roji no kabe ni hoshi de ippai no sora wo egakimashita. Sono yoru, roji wa e kara no hikari de kagayakimashita.

Iro wa ikite imashita. Sobo ga tadashikatta: mahou deshita.

Harajuku ni "Haiiro no Kabe" to yobareru kabe ga arimashita. Ookiku, furui apaato no kabe zentai ni hirogatte imashita. Nannnen mo haiiro de kurakatta desu.

Mika wa kyoka wo moraimasen deshita.

San ya kakete himitsu ni egakimashita. Subete no iro wo tsukaimashita. Kabe ni sekai zentai wo egakimashita:

Yuki no yama. Nami no umi. Doubutsu no iru mori — ki no ue de nemuru neko, tobu tori, kitsune. Hana ga arifurete — sakura, himawari, yuri, bara. Soshite sora ni wa matataku hoshi.

Subete no kimochi wo tsutaemashita: kibou, yorokobi, odoroki, ai. Kono kabe wo mite shiawase wo kanjite hoshikatta desu.

Yoake ni hito ga kabe wo mita toki, tachi domatte shimaimashita. Naita hito mo imashita. Waratta hito mo imashita.

Mahou wa tsuyokatta desu. Hontou no sakura no hanabira ga fuyu ni e no ki kara chirimashita. Umi no nami no oto ga kabe kara kikoemashita.

Nyuusu wa sekai juu ni hiromari mashita. "Harajuku no Ikita Hekiga." Sekai juu kara hito ga shiawase wo kanjiru tame ni kimashita.

Tatemono no ooya wa Mika wo mitsukemashita. "Kore wa ima made mita naka de ichiban utsukushii mono desu. Egaku no wo zettai ni yamenaide kudasai."

Mika wa hohoemi mashita. Iro wo — mahou no iro wo — mite, tsugi ni nani wo egaku ka wakatte imashita.

Sekai wa kanojo no kyanbasu deshita. Soshite mada takusan no mahou wo wakachiau tsumori deshita.`,
  quiz: [
    // Fill-in-the-blank (4)
    {
      id: 'jp-creative-q1',
      type: 'fill-blank',
      question: 'Mika loved to _______ (draw/paint) on walls in Harajuku.',
      answer: 'egaku',
    },
    {
      id: 'jp-creative-q2',
      type: 'fill-blank',
      question: 'People who walked past the flower wall felt _______ (happiness).',
      answer: 'shiawase',
    },
    {
      id: 'jp-creative-q3',
      type: 'fill-blank',
      question: 'Mika painted a sleeping _______ (cat) on the ramen shop.',
      answer: 'neko',
    },
    {
      id: 'jp-creative-q4',
      type: 'fill-blank',
      question: '"Your art has _______" (magic), her grandmother told her.',
      answer: 'mahou',
    },
    // Multiple-choice (4)
    {
      id: 'jp-creative-q5',
      type: 'multiple-choice',
      question: 'What does "iro" mean?',
      answer: 'color',
      options: ['paint', 'color', 'brush', 'canvas'],
    },
    {
      id: 'jp-creative-q6',
      type: 'multiple-choice',
      question: 'What does "kabe" mean?',
      answer: 'wall',
      options: ['floor', 'ceiling', 'wall', 'door'],
    },
    {
      id: 'jp-creative-q7',
      type: 'multiple-choice',
      question: 'What does "utsukushii" mean?',
      answer: 'beautiful',
      options: ['ugly', 'small', 'beautiful', 'scary'],
    },
    {
      id: 'jp-creative-q8',
      type: 'multiple-choice',
      question: 'What does "sekai" mean?',
      answer: 'world',
      options: ['sky', 'world', 'ocean', 'city'],
    },
    // Translate (4)
    {
      id: 'jp-creative-q9',
      type: 'translate',
      question: 'Translate to English: "hana"',
      answer: 'flower',
    },
    {
      id: 'jp-creative-q10',
      type: 'translate',
      question: 'Translate to English: "tsutaeru"',
      answer: 'to convey/express',
    },
    {
      id: 'jp-creative-q11',
      type: 'translate',
      question: 'How do you say "magic" in Japanese romaji?',
      answer: 'mahou',
    },
    {
      id: 'jp-creative-q12',
      type: 'translate',
      question: 'How do you say "happiness" in Japanese romaji?',
      answer: 'shiawase',
    },
  ],
};

export const creativeSeries: Series = {
  id: 'jp-creative-series',
  title: 'Harajuku Art Stories',
  description: 'Colorful stories about young artists finding their voice and discovering the magic in creativity.',
  category: 'creative',
  language: 'japanese' as any,
  episodes: [iroNoMahouEpisode],
};

// ============================================================
// 📦 ALL SERIES EXPORT
// ============================================================

export const allNewJapaneseSeries: Series[] = [
  sportsSeries,
  techSeries,
  futureSeries,
  creativeSeries,
];
