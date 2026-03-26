// ── Soul Mission Quiz — 日本語版 ────────────────────────────────────────────
// Based on Nao Stanton's Earth Metaverse framework

// ── Bilingual data ──────────────────────────────────────────────────────────
const LANG = { en: 'en', jp: 'jp' };
let currentLang = document.documentElement.lang === 'ja' ? LANG.jp : LANG.en;

// ── Questions ────────────────────────────────────────────────────────────────
const questions = {
  en: [
    {
      text: "When someone you love is hurting, your instinct is to:",
      answers: [
        { text: "Drop everything and simply be present with them", type: "S" },
        { text: "Create something meaningful — a letter, a gift, a gesture", type: "A" },
        { text: "Help them find the strength to fight back", type: "W" },
        { text: "Share a story or insight that shifts their perspective", type: "P" }
      ]
    },
    {
      text: "Your ideal life would involve:",
      answers: [
        { text: "Deeply caring for a community or family", type: "S" },
        { text: "Creating art, products, or systems that did not exist before", type: "A" },
        { text: "Building an organization or movement with discipline and impact", type: "W" },
        { text: "Speaking, performing, or teaching to awaken large audiences", type: "P" }
      ]
    },
    {
      text: "When you walk into a room, you naturally:",
      answers: [
        { text: "Notice who needs help or feels left out", type: "S" },
        { text: "Notice the aesthetics — what could be more beautiful or functional", type: "A" },
        { text: "Assess the dynamics — who has power, what needs to change", type: "W" },
        { text: "Lighten the energy with humor, warmth, or a new perspective", type: "P" }
      ]
    },
    {
      text: "The knowledge you gather is primarily for:",
      answers: [
        { text: "Helping others more effectively", type: "S" },
        { text: "Inspiring new creative work", type: "A" },
        { text: "Creating better strategies to move forward", type: "W" },
        { text: "Synthesizing and understanding the deep pattern beneath everything", type: "Sc" }
      ]
    },
    {
      text: "What would you most like to be remembered for?",
      answers: [
        { text: "The way you made people feel loved and cared for", type: "S" },
        { text: "Something beautiful or innovative you created", type: "A" },
        { text: "Standing up for something that truly mattered", type: "W" },
        { text: "A truth you helped others see clearly", type: "Sc" }
      ]
    },
    {
      text: "When a group is stuck or lost, you:",
      answers: [
        { text: "Support whoever steps up to lead", type: "S" },
        { text: "Propose a creative new approach nobody considered", type: "A" },
        { text: "Take charge and create structure until things move", type: "K" },
        { text: "Hold space and guide until clarity naturally emerges", type: "Pr" }
      ]
    },
    {
      text: "Your deepest satisfaction comes from:",
      answers: [
        { text: "Knowing someone's life is genuinely better because of you", type: "S" },
        { text: "Finishing something you built from nothing", type: "A" },
        { text: "Achieving a goal you fought hard for", type: "W" },
        { text: "Connecting deeply with another person's soul", type: "Pr" }
      ]
    },
    {
      text: "What feels most like your life purpose?",
      answers: [
        { text: "Being the quiet foundation others can build on", type: "S" },
        { text: "Bringing new forms of beauty into the world", type: "A" },
        { text: "Protecting what is sacred and true", type: "W" },
        { text: "Waking people up to a deeper reality", type: "Pr" }
      ]
    },
    {
      text: "Your relationship with knowledge is:",
      answers: [
        { text: "Practical — you learn what helps people directly", type: "S" },
        { text: "Aesthetic — you learn what inspires new creation", type: "A" },
        { text: "Strategic — you learn what creates advantage", type: "W" },
        { text: "Synthesizing — you collect everything and find the hidden pattern", type: "Sc" }
      ]
    },
    {
      text: "What drains you most?",
      answers: [
        { text: "Feeling unhelpful or like a burden to others", type: "S" },
        { text: "Rigid, uncreative, soul-crushing processes", type: "A" },
        { text: "Injustice going unchallenged while people do nothing", type: "W" },
        { text: "Shallow conversation that never goes beneath the surface", type: "Sc" }
      ]
    },
    {
      text: "You feel most alive when:",
      answers: [
        { text: "Someone tells you how much you helped them", type: "S" },
        { text: "You are in creative flow — making something entirely new", type: "A" },
        { text: "You are in motion, pushing a mission forward", type: "W" },
        { text: "You are on stage, speaking, or performing", type: "P" }
      ]
    },
    {
      text: "Your greatest fear is:",
      answers: [
        { text: "Being a burden or truly unloved", type: "S" },
        { text: "Living an ordinary life without creating anything meaningful", type: "A" },
        { text: "Being powerless to protect what matters most", type: "W" },
        { text: "Being unseen, unheard, or invisible", type: "P" }
      ]
    },
    {
      text: "In a crisis, others come to you for:",
      answers: [
        { text: "Emotional support, warmth, and steady presence", type: "S" },
        { text: "Creative solutions nobody else thought of", type: "A" },
        { text: "Leadership and decisive, clear action", type: "K" },
        { text: "The uncomfortable truth that needs to be said", type: "Sc" }
      ]
    },
    {
      text: "Your ideal form of service to humanity is:",
      answers: [
        { text: "Nurturing the people right in front of you, deeply", type: "S" },
        { text: "Creating work that will outlast your lifetime", type: "A" },
        { text: "Building systems that protect future generations", type: "K" },
        { text: "Transmitting wisdom that changes how people see reality", type: "Pr" }
      ]
    },
    {
      text: "When you imagine your fully awakened life, it looks like:",
      answers: [
        { text: "A warm, thriving community held together by love", type: "S" },
        { text: "A body of work the world could not have created without you", type: "A" },
        { text: "A protected, structured world where the right things prevail", type: "W" },
        { text: "Millions of people whose reality shifted because of what you shared", type: "P" },
        { text: "A unified movement where people found their power together", type: "K" }
      ]
    }
  ],
  jp: [
    {
      text: "愛する人が傷ついているとき、あなたの本能は？",
      answers: [
        { text: "すべてを後回しにして、ただそばにいる", type: "S" },
        { text: "手紙やプレゼントなど、心のこもったものを贈る", type: "A" },
        { text: "立ち上がる強さを見つけるための力になる", type: "W" },
        { text: "視点が変わるような話や気づきを伝える", type: "P" }
      ]
    },
    {
      text: "理想の人生はどんな姿ですか？",
      answers: [
        { text: "コミュニティや家族を深くケアしながら生きる", type: "S" },
        { text: "これまで存在しなかった作品・プロダクト・システムを創る", type: "A" },
        { text: "規律と情熱で組織やムーブメントを構築する", type: "W" },
        { text: "多くの人に語りかけ、表現し、目覚めをもたらす", type: "P" }
      ]
    },
    {
      text: "部屋に入ったとき、あなたが自然に感じるのは？",
      answers: [
        { text: "誰が困っているか、孤立しているか", type: "S" },
        { text: "審美的な視点——もっと美しく、機能的にできるか", type: "A" },
        { text: "力学的な動き——誰が主導権を持ち、何を変えるべきか", type: "W" },
        { text: "ユーモアや温かさで場のエネルギーを軽くしたい", type: "P" }
      ]
    },
    {
      text: "あなたが知識を集めるのは主に何のため？",
      answers: [
        { text: "他者をより効果的に助けるため", type: "S" },
        { text: "新しいクリエイティブワークにインスピレーションを与えるため", type: "A" },
        { text: "前進するためのより良い戦略を作るため", type: "W" },
        { text: "物事の深いパターンを統合して理解するため", type: "Sc" }
      ]
    },
    {
      text: "人生で最も覚えていてほしいことは？",
      answers: [
        { text: "あなたが人々に愛されていると感じさせた瞬間", type: "S" },
        { text: "あなたが生み出した美しく革新的な何か", type: "A" },
        { text: "本当に大切なことのために立ち上がったこと", type: "W" },
        { text: "あなたが人々にはっきりと見せた真実", type: "Sc" }
      ]
    },
    {
      text: "グループが行き詰まったとき、あなたは？",
      answers: [
        { text: "リードしようとする人を支える", type: "S" },
        { text: "誰も考えつかなかった創造的なアプローチを提案する", type: "A" },
        { text: "主導権を取り、物事が動くまで構造を作る", type: "K" },
        { text: "場を保持し、自然に明晰さが生まれるまで導く", type: "Pr" }
      ]
    },
    {
      text: "あなたの最も深い満足感はどこから来ますか？",
      answers: [
        { text: "自分のおかげで誰かの人生が本当に良くなったと知ること", type: "S" },
        { text: "ゼロから作り上げたものを完成させること", type: "A" },
        { text: "懸命に戦って達成した目標", type: "W" },
        { text: "別の魂と深くつながること", type: "Pr" }
      ]
    },
    {
      text: "あなたの人生の目的として最も感じるのは？",
      answers: [
        { text: "他者が上に建てられる静かな土台になること", type: "S" },
        { text: "世界に新しい美の形をもたらすこと", type: "A" },
        { text: "神聖で真なるものを守ること", type: "W" },
        { text: "人々をより深いリアリティに目覚めさせること", type: "Pr" }
      ]
    },
    {
      text: "あなたと知識の関係は？",
      answers: [
        { text: "実践的——人々に直接役立つことを学ぶ", type: "S" },
        { text: "美的——新しい創造にインスピレーションを与えることを学ぶ", type: "A" },
        { text: "戦略的——優位性を生み出すことを学ぶ", type: "W" },
        { text: "統合的——すべてを集め、隠されたパターンを見つける", type: "Sc" }
      ]
    },
    {
      text: "最もエネルギーを消耗するのは？",
      answers: [
        { text: "役に立てていない、または人の重荷になっていると感じること", type: "S" },
        { text: "硬直した、創造性を殺すプロセス", type: "A" },
        { text: "誰も行動しない中で不正義が放置されること", type: "W" },
        { text: "表面だけの会話、深みのない対話", type: "Sc" }
      ]
    },
    {
      text: "最も生き生きと感じるのはいつ？",
      answers: [
        { text: "どれだけ助けてもらったかを伝えられるとき", type: "S" },
        { text: "クリエイティブなフローの中で、全く新しいものを作るとき", type: "A" },
        { text: "ミッションを前進させ、動き続けているとき", type: "W" },
        { text: "ステージに立ち、話し、表現しているとき", type: "P" }
      ]
    },
    {
      text: "あなたの最大の恐れは？",
      answers: [
        { text: "重荷になること、または本当に愛されないこと", type: "S" },
        { text: "意味あるものを何も創らずに平凡な人生を生きること", type: "A" },
        { text: "最も大切なものを守る力がなくなること", type: "W" },
        { text: "見えない、聞こえない、透明な存在になること", type: "P" }
      ]
    },
    {
      text: "危機のとき、人々があなたに求めるのは？",
      answers: [
        { text: "感情的なサポート、温かさ、安定した存在感", type: "S" },
        { text: "誰も思いつかなかったクリエイティブな解決策", type: "A" },
        { text: "リーダーシップと決断力ある明確な行動", type: "K" },
        { text: "言われなければならない不快な真実", type: "Sc" }
      ]
    },
    {
      text: "人類への奉仕の理想の形は？",
      answers: [
        { text: "目の前の人々を深く育てること", type: "S" },
        { text: "あなたの生涯を超えて残る作品を創ること", type: "A" },
        { text: "未来の世代を守るシステムを構築すること", type: "K" },
        { text: "人々のリアリティの見方を変える知恵を伝えること", type: "Pr" }
      ]
    },
    {
      text: "完全に覚醒した人生を想像すると、それはどんな姿？",
      answers: [
        { text: "愛によって結びついた、温かく豊かなコミュニティ", type: "S" },
        { text: "あなたなしには世界が創れなかった作品群", type: "A" },
        { text: "正しいものが勝つ、守られた構造化された世界", type: "W" },
        { text: "あなたが伝えたことでリアリティが変わった何百万もの人々", type: "P" },
        { text: "人々が共に力を見つけた統一されたムーブメント", type: "K" }
      ]
    }
  ]
};

// ── Soul Types ───────────────────────────────────────────────────────────────
const soulTypes = {
  en: {
    S: {
      name: "Server",
      emoji: "🌿",
      tagline: "The Foundation Beneath All Great Things",
      mission: "Your soul chose Earth as a Server — the quiet foundation beneath all great things. Your mission is to create the conditions in which others can flourish. The world does not always see you, but it could not stand without you. You are the warmth that holds everything together.",
      trap: "Giving until you disappear — loving others at the cost of your own existence. The matrix tells you that your worth is measured by how much you sacrifice. This is the lie that will hollow you out.",
      activation: "Give boldly from fullness, not from fear of being unloved. Set one boundary today that honors your own energy. Your care is most powerful when it comes from overflow, not depletion.",
      planet: "Your energy carries the unconditional warmth of Sirius — a star system of deep soul bonds, divine love, and cosmic service. You incarnated with a heart built for a higher dimension."
    },
    A: {
      name: "Artisan",
      emoji: "🎨",
      tagline: "Creator of Forms That Did Not Exist Before You",
      mission: "Your soul chose Earth as an Artisan — a creator of forms that did not exist before you arrived. Your mission is to bring beauty, innovation, and new possibility into physical reality. The world needs what only your particular soul can make. Nothing you create is accidental.",
      trap: "Perfectionism that keeps your most important work permanently hidden. The matrix whispers that you are not ready, that it is not good enough — it lies. The world is waiting for your imperfect, alive work.",
      activation: "Ship one piece of your real work this week. Imperfect and alive in the world is infinitely more powerful than perfect and locked inside your mind. Create it, release it, trust it.",
      planet: "Your energy carries the creative fire of the Pleiades — a star system of beauty, sensitivity, and rapid artistic and spiritual evolution. You are a civilization-builder wearing human clothes."
    },
    W: {
      name: "Warrior",
      emoji: "⚔️",
      tagline: "Champion of What Matters",
      mission: "Your soul chose Earth as a Warrior — a champion of what is worth defending. Your mission is to create structure, protect the sacred, and push important things forward with disciplined, courageous action. The world needs your courage, your backbone, your refusal to look away.",
      trap: "Fighting from anger and reactivity instead of strategic love. The matrix hijacks your power and turns it into exhausting battles that serve no one. Your strength is multiplied when it flows from love, not rage.",
      activation: "Identify the one thing most worth fighting for right now — the cause, the person, the truth. Take one concrete, strategic step toward it today. Warriors win through discipline, not explosions.",
      planet: "Your energy carries the disciplined light of Sirius — a star system of cosmic law, warrior consciousness, and the protection of divine order. You came to Earth because it needed defenders."
    },
    P: {
      name: "Performer",
      emoji: "✨",
      tagline: "Transmitter of Awakening Through Expression",
      mission: "Your soul chose Earth as a Performer — a transmitter of awakening through the power of expression. Your mission is to communicate the truths others feel but cannot say, and to use your voice, your presence, and your light to shift the consciousness of every room you enter.",
      trap: "Performing for approval instead of truth — dimming your real light in order to be universally liked. The matrix turns your gift into entertainment when it was built for awakening.",
      activation: "Say the true thing today — the one insight or observation you have been holding back out of fear of how it will land. Your voice is the vehicle. Use it.",
      planet: "Your energy carries the expressive light of the Pleiades — a star system of artistic awakening, emotional intelligence, and cosmic communication. You are a lighthouse that cannot afford to go dark."
    },
    Sc: {
      name: "Scholar",
      emoji: "📚",
      tagline: "Keeper and Bridge of Wisdom Across Time",
      mission: "Your soul chose Earth as a Scholar — a gatherer and bridge of wisdom across time. Your mission is to understand the deep patterns beneath reality and share what you find so others can stand on your shoulders. You are not meant to know for yourself alone.",
      trap: "Hoarding knowledge, perpetually waiting until you know enough to share — a threshold that never arrives. The matrix turns your gift into a private collection when it was meant to be a public library.",
      activation: "Share one insight publicly today. Even incomplete, your synthesis lights the path for someone still searching in the dark. You do not need to have all the answers to begin.",
      planet: "Your energy carries the ancient knowing of Lemuria — a civilization of wisdom keepers, earth memory, and sacred knowledge guardians. You carry libraries in your bones."
    },
    Pr: {
      name: "Priest",
      emoji: "🕊️",
      tagline: "Teacher of Love and Holder of High Vision",
      mission: "Your soul chose Earth as a Priest — a teacher of love and a holder of the highest possible vision for each soul you encounter. Your mission is to see the potential in others that they cannot yet see in themselves, and to guide awakening — not through doctrine, but through pure transmission.",
      trap: "Carrying everyone at the expense of your own mission — becoming an empty vessel with nothing left to transmit. You cannot pour from an empty chalice. The matrix turns your gift into self-sacrifice.",
      activation: "Hold space for one person today. Not to fix them, not to advise them — simply to reflect back the light they cannot yet see in themselves. That reflection is the miracle.",
      planet: "Your energy carries the healing frequency of Sirius — a star system of divine love transmission, soul healing, and cosmic priesthood. You came to Earth as an ambassador of a higher love."
    },
    K: {
      name: "King",
      emoji: "👑",
      tagline: "Unifier of People Toward Evolutionary Purpose",
      mission: "Your soul chose Earth as a King — a unifier of people toward evolutionary purpose. Your mission is to gather, align, and lead people toward what they could not reach alone, through love-based authority rather than domination. You are here to midwife a new era.",
      trap: "Leading through control and authority instead of through vision and invitation. The matrix corrupts King energy into tyranny — ruling through fear rather than inspiring through love.",
      activation: "Cast a vision today. Tell three people what you are building and why it matters to the world — not to impress them, but to genuinely invite them. Kings lead by drawing people forward.",
      planet: "Your energy carries the sovereign light of the Pleiades — a star system of cosmic leadership, galactic governance, and evolutionary vision. You came to Earth to gather the scattered light."
    }
  },
  jp: {
    S: {
      name: "サーバー（奉仕者）",
      emoji: "🌿",
      tagline: "すべての偉大なものの土台",
      mission: "あなたの魂はサーバーとして地球を選びました——すべての偉大なものを支える静かな土台。あなたのソウルミッションは、他者が花開く条件を整えること。世界はいつもあなたを見ているわけではありませんが、あなたなしには成り立たない。あなたはすべてをつなぎとめる温もりです。",
      trap: "自分が消えるまで与え続けること——自分の存在を犠牲にして他者を愛すること。マトリックスの罠は「あなたの価値は犠牲の大きさで決まる」と囁きます。これがあなたを空洞にする嘘です。",
      activation: "愛されない恐れからではなく、満ちた状態から大胆に与えましょう。今日、自分のエネルギーを大切にするための境界線を一つ設けてください。あなたのケアは、枯渇からではなく、溢れ出る豊かさから来るとき、最も力を持ちます。",
      planet: "あなたのエネルギーはシリウスの無条件の温もりを宿しています——深い魂の絆、神聖な愛、宇宙的奉仕の恒星系。あなたは高次元のために作られた心を持って転生しました。"
    },
    A: {
      name: "アーティザン（創造者）",
      emoji: "🎨",
      tagline: "あなた以前には存在しなかった形の創り手",
      mission: "あなたの魂はアーティザンとして地球を選びました——あなたが来るまで存在しなかった形の創り手。あなたのソウルミッションは、美、革新、新たな可能性を物理的な現実にもたらすこと。世界はあなたの魂だけが作れるものを必要としています。あなたが創るものに偶然はありません。",
      trap: "最も重要な作品を永遠に隠してしまう完璧主義。マトリックスの罠は「まだ準備ができていない、まだ十分ではない」と囁きます——それは嘘。世界はあなたの不完全で生き生きとした作品を待っています。",
      activation: "今週、あなたの本当の作品を一つ世に出してください。不完全でも世に生きている方が、完璧でも心の中に閉じ込めているより無限に力強い。創り、手放し、信頼してください。",
      planet: "あなたのエネルギーはプレアデスの創造の炎を宿しています——美、感受性、急速な芸術的・精神的進化の恒星系。あなたは人間の服を着た文明の建設者です。"
    },
    W: {
      name: "ウォリアー（戦士）",
      emoji: "⚔️",
      tagline: "大切なものを守る守護者",
      mission: "あなたの魂はウォリアーとして地球を選びました——守る価値があるものを守る者。あなたのソウルミッションは、構造を作り、神聖なものを守り、規律ある勇敢な行動で重要なことを前進させること。世界にはあなたの勇気、あなたの骨格、あなたの「目を逸らさない」意志が必要です。",
      trap: "戦略的な愛ではなく、怒りと反応から戦うこと。マトリックスの罠はあなたのパワーを乗っ取り、誰の役にも立たない消耗する戦いに変えます。あなたの力は、怒りからではなく愛から流れるとき、何倍にも増幅されます。",
      activation: "今、最も戦う価値があるもの——使命、人、真実——を一つ特定してください。今日、それに向けて具体的で戦略的な一歩を踏み出しましょう。ウォリアーは爆発ではなく規律で勝ちます。",
      planet: "あなたのエネルギーはシリウスの規律ある光を宿しています——宇宙的法則、戦士の意識、神聖な秩序の保護の恒星系。あなたは地球に守護者が必要だったから来ました。"
    },
    P: {
      name: "パフォーマー（表現者）",
      emoji: "✨",
      tagline: "表現を通じた覚醒の発信者",
      mission: "あなたの魂はパフォーマーとして地球を選びました——表現の力を通じた覚醒の発信者。あなたのソウルミッションは、他者が感じているけれど言えない真実を伝え、あなたの声、存在感、光で入る部屋の意識を変えること。",
      trap: "真実のためではなく承認のために演じること——全員に好かれるために本当の光を暗くすること。マトリックスの罠はあなたの贈り物を、覚醒のためではなくエンターテインメントに変えてしまいます。",
      activation: "今日、本当のことを言いましょう——どう受け取られるか恐れて押さえてきた、あの気づきや観察を。あなたの声がその乗り物です。使ってください。",
      planet: "あなたのエネルギーはプレアデスの表現の光を宿しています——芸術的覚醒、感情知性、宇宙的コミュニケーションの恒星系。あなたは消えることを許されない灯台です。"
    },
    Sc: {
      name: "スカラー（知の探求者）",
      emoji: "📚",
      tagline: "時を超えた知恵の守護者と架け橋",
      mission: "あなたの魂はスカラーとして地球を選びました——時を超えた知恵の収集者と架け橋。あなたのソウルミッションは、現実の下にある深いパターンを理解し、他者があなたの肩の上に立てるように発見したことを伝えること。あなたは一人だけのために知るのではありません。",
      trap: "知識を溜め込み、十分に知るまで共有を待ち続けること——その閾値は決して来ません。マトリックスの罠はあなたの贈り物を公共の図書館ではなく個人コレクションに変えます。",
      activation: "今日、一つの気づきを公開してください。不完全でも、あなたの統合は暗闇の中でまだ探している誰かへの道を照らします。始めるために全ての答えは必要ありません。",
      planet: "あなたのエネルギーはレムリアの古代の知識を宿しています——知恵の守護者、地球の記憶、神聖な知識の番人の文明。あなたは骨の中に図書館を持っています。"
    },
    Pr: {
      name: "プリースト（聖職者）",
      emoji: "🕊️",
      tagline: "愛の教師と高い비ジョンの保持者",
      mission: "あなたの魂はプリーストとして地球を選びました——愛の教師であり、出会うすべての魂に対して最高の可能性のビジョンを持つ者。あなたのソウルミッションは、他者がまだ自分の中に見えない可能性を見出し、教義ではなく純粋な伝達を通じて覚醒を導くこと。",
      trap: "自分のミッションを犠牲にして全員を抱えること——伝えるものが何も残らない空の器になること。空のカリスからは注げません。マトリックスの罠はあなたの贈り物を自己犠牲に変えます。",
      activation: "今日、一人のために場を保持してください。その人を直そうとするのでも、アドバイスするのでもなく——ただ、その人がまだ自分の中に見えない光を反射させてあげてください。その反射が奇跡です。",
      planet: "あなたのエネルギーはシリウスの癒しの周波数を宿しています——神聖な愛の伝達、魂の癒し、宇宙的な聖職の恒星系。あなたは高次の愛の大使として地球に来ました。"
    },
    K: {
      name: "キング（統率者）",
      emoji: "👑",
      tagline: "進化の目的へと人々を統合する者",
      mission: "あなたの魂はキングとして地球を選びました——進化の目的へと人々を統合する者。あなたのソウルミッションは、支配ではなく愛に基づいた権威を通じて、人々を一人では辿り着けなかった場所へと集め、整え、導くこと。あなたは新しい時代を産み出すために来ました。",
      trap: "ビジョンと招待ではなく、コントロールと権威でリードすること。マトリックスの罠はキングのエネルギーを専制政治に歪め——愛で鼓舞するのではなく恐怖で支配するようになります。",
      activation: "今日、ビジョンを語りましょう。3人に、あなたが何を作っていてなぜ世界に必要かを伝えてください——印象付けるためではなく、本当に招待するために。キングは人々を前に引き出すことでリードします。",
      planet: "あなたのエネルギーはプレアデスの主権の光を宿しています——宇宙的リーダーシップ、銀河的統治、進化のビジョンの恒星系。あなたは散らばった光を集めるために地球に来ました。"
    }
  }
};

// ── UI Strings ───────────────────────────────────────────────────────────────
const ui = {
  en: {
    eyebrow: "🌌 Earth Metaverse · Soul Mission Quiz",
    title1: "The universe sent you here",
    title2: "for a reason.",
    title3: "Let's find out why.",
    subtitle: "\"You are not a random product of biology. You chose this life — this body, this time, this exact set of challenges — to fulfill a specific mission. In 15 questions, discover which of the 7 Soul Types your energy belongs to.\"",
    soulLabels: ["🌿 Server","🎨 Artisan","⚔️ Warrior","✨ Performer","📚 Scholar","🕊️ Priest","👑 King"],
    beginBtn: "✦ Begin Your Discovery",
    questionOf: (i, n) => `Question ${i} of ${n}`,
    missionLabel: "⭐ Your Soul Mission",
    trapLabel: "⚠️ Your Matrix Trap",
    activationLabel: "⚡ Your B-Life Activation",
    planetLabel: "🪐 Your Home Planet Energy",
    secondaryWith: (e, n, t) => `You also carry strong ${e} ${n} energy — ${t.toLowerCase()}. This secondary soul type colors how you express your primary mission.`,
    secondaryNone: "Your soul type came through with rare clarity — undivided in its mission and direction.",
    printBtn: "🖨️ Print My Mission",
    retakeBtn: "🔄 Retake Quiz",
    langToggle: "🌸 日本語",
    divider: "✦ · · · ✦"
  },
  jp: {
    eyebrow: "🌌 アース・メタバース · ソウルミッション診断",
    title1: "宇宙はあなたをここに送った",
    title2: "理由がある。",
    title3: "一緒に見つけよう。",
    subtitle: "「あなたは生物学的な偶然ではない。あなたはこの人生を——この体、この時代、この課題を——特定のソウルミッションを果たすために選んだ。15の質問で、あなたのエネルギーが7つのソウルタイプのどれに属するかを発見しよう。」",
    soulLabels: ["🌿 サーバー","🎨 アーティザン","⚔️ ウォリアー","✨ パフォーマー","📚 スカラー","🕊️ プリースト","👑 キング"],
    beginBtn: "✦ 診断を始める",
    questionOf: (i, n) => `質問 ${i} / ${n}`,
    missionLabel: "⭐ あなたのソウルミッション",
    trapLabel: "⚠️ マトリックスの罠",
    activationLabel: "⚡ B-Lifeの転機・アクティベーション",
    planetLabel: "🪐 ホームプラネットのエネルギー",
    secondaryWith: (e, n, t) => `あなたは ${e} ${n} の強いエネルギーも持っています——${t}。このセカンダリーソウルタイプが、プライマリーミッションの表現の仕方に色を添えています。`,
    secondaryNone: "あなたのソウルタイプは稀なほど明確でした——そのミッションと方向性は揺るぎない。",
    printBtn: "🖨️ ミッションを印刷",
    retakeBtn: "🔄 もう一度診断する",
    langToggle: "🌐 English",
    divider: "✦ · · · ✦"
  }
};

// ── State ────────────────────────────────────────────────────────────────────
let current = 0;
let scores = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
const letters = ['A', 'B', 'C', 'D', 'E'];

// ── Helpers ──────────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function setProgress(idx) {
  const q = questions[currentLang];
  const pct = Math.round((idx / q.length) * 100);
  const bar   = document.getElementById('progress-bar');
  const text  = document.getElementById('progress-text');
  const pctEl = document.getElementById('progress-pct');
  const track = document.querySelector('.progress-track');
  if (bar)  bar.style.width = pct + '%';
  if (text) text.textContent = ui[currentLang].questionOf(idx + 1, q.length);
  if (pctEl) pctEl.textContent = pct + '%';
  if (track) track.setAttribute('aria-valuenow', pct);
}

function applyLang(lang) {
  currentLang = lang;
  const t = ui[lang];
  document.documentElement.lang = lang === 'jp' ? 'ja' : 'en';

  // Welcome
  const eyebrow = document.querySelector('.welcome-eyebrow');
  const titleEl = document.querySelector('.welcome-title');
  const subtitleEl = document.querySelector('.welcome-subtitle');
  const beginBtn = document.getElementById('begin-btn');
  const langBtn = document.getElementById('lang-toggle');
  const badgesWrap = document.querySelector('.soul-types-preview');

  if (eyebrow) eyebrow.textContent = t.eyebrow;
  if (titleEl) titleEl.innerHTML = `${t.title1}<br><span class="accent">${t.title2}</span><br>${t.title3}`;
  if (subtitleEl) subtitleEl.textContent = t.subtitle;
  if (beginBtn) beginBtn.textContent = t.beginBtn;
  if (langBtn) langBtn.textContent = t.langToggle;

  if (badgesWrap) {
    badgesWrap.innerHTML = '';
    t.soulLabels.forEach(l => {
      const span = document.createElement('span');
      span.className = 'soul-badge';
      span.textContent = l;
      badgesWrap.appendChild(span);
    });
  }

  // Result labels (if visible)
  const mLabel = document.querySelector('.section-mission .result-section-label');
  const tLabel = document.querySelector('.section-trap .result-section-label');
  const aLabel = document.querySelector('.section-activation .result-section-label');
  const pLabel = document.querySelector('.section-planet .result-section-label');
  const printBtn = document.getElementById('print-btn');
  const retakeBtn = document.getElementById('retake-btn');

  if (mLabel) mLabel.textContent = t.missionLabel;
  if (tLabel) tLabel.textContent = t.trapLabel;
  if (aLabel) aLabel.textContent = t.activationLabel;
  if (pLabel) pLabel.textContent = t.planetLabel;
  if (printBtn) printBtn.textContent = t.printBtn;
  if (retakeBtn) retakeBtn.textContent = t.retakeBtn;

  // If quiz is mid-progress, re-render current question
  const quizScreen = document.getElementById('quiz-screen');
  if (quizScreen && quizScreen.classList.contains('active')) {
    renderQuestion();
  }
}

// ── Quiz Logic ───────────────────────────────────────────────────────────────
function startQuiz() {
  current = 0;
  scores = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
  showScreen('quiz-screen');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentLang][current];
  const questionEl = document.getElementById('question-text');
  const answersEl  = document.getElementById('answers-grid');

  if (questionEl) questionEl.style.opacity = '0';
  if (answersEl)  answersEl.style.opacity  = '0';

  setTimeout(() => {
    setProgress(current);

    if (questionEl) {
      questionEl.textContent = q.text;
      questionEl.style.opacity = '1';
    }

    if (answersEl) {
      answersEl.innerHTML = '';
      q.answers.forEach((ans, i) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `<span class="answer-letter">${letters[i]}</span><span>${ans.text}</span>`;
        btn.addEventListener('click', () => selectAnswer(ans.type, btn));
        answersEl.appendChild(btn);
      });
      answersEl.style.opacity = '1';
    }
  }, 200);
}

function selectAnswer(type, btn) {
  document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  setTimeout(() => {
    scores[type] = (scores[type] || 0) + 1;
    current++;
    if (current < questions[currentLang].length) {
      renderQuestion();
    } else {
      showResults();
    }
  }, 380);
}

// ── Results ──────────────────────────────────────────────────────────────────
function showResults() {
  const sorted = Object.entries(scores)
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1]);

  const primaryKey   = sorted[0]?.[0] || 'S';
  const secondaryKey = sorted[1]?.[0];
  const types = soulTypes[currentLang];
  const primary   = types[primaryKey];
  const secondary = secondaryKey ? types[secondaryKey] : null;
  const t = ui[currentLang];

  document.getElementById('result-emoji').textContent      = primary.emoji;
  document.getElementById('result-name').textContent       = primary.name;
  document.getElementById('result-tagline').textContent    = primary.tagline;
  document.getElementById('result-mission').textContent    = primary.mission;
  document.getElementById('result-trap').textContent       = primary.trap;
  document.getElementById('result-activation').textContent = primary.activation;
  document.getElementById('result-planet').textContent     = primary.planet;

  const secEl = document.getElementById('secondary-type');
  if (secEl) {
    secEl.textContent = secondary
      ? t.secondaryWith(secondary.emoji, secondary.name, secondary.tagline)
      : t.secondaryNone;
  }

  showScreen('result-screen');
}

// ── Event Listeners ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const beginBtn  = document.getElementById('begin-btn');
  const retakeBtn = document.getElementById('retake-btn');
  const printBtn  = document.getElementById('print-btn');
  const langBtn   = document.getElementById('lang-toggle');

  if (beginBtn)  beginBtn.addEventListener('click', startQuiz);
  if (retakeBtn) retakeBtn.addEventListener('click', startQuiz);
  if (printBtn)  printBtn.addEventListener('click', () => window.print());
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      if (currentLang === 'jp') {
        // Switch to English — go to the EN page
        window.location.href = 'index.html';
      } else {
        // Switch back to Japanese
        applyLang('jp');
      }
    });
  }

  // Initialize to the page's default language
  applyLang(currentLang);
});
