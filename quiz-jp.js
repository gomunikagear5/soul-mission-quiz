// ── ソウルミッション診断 — 日本語版 v2 ────────────────────────────────────────
// Nao Stanton「地球大暴露」(永岡書店, 2023) に基づく
// Knowledge Base v2026-03-14 から抽出

// ── 質問データ ────────────────────────────────────────────────────────────────
const questions = [
  {
    text: "大切な人が傷ついているとき、あなたの本能は？",
    answers: [
      { text: "すべてを置いて、ただそばにいる。何も解決しなくていい、そこにいることが大切", type: "S" },
      { text: "手紙、贈り物、特別なジェスチャーなど、心のこもった何かを作る", type: "A" },
      { text: "立ち上がる力を見つける手助けをする。問題に正面から向き合う", type: "W" },
      { text: "視点が変わるような話やひらめきを伝える。新しい見方を届ける", type: "P" }
    ]
  },
  {
    text: "「自分の使命」という言葉を聞いたとき、どんなイメージが浮かびますか？",
    answers: [
      { text: "目の前の人たちを深く支え、その人たちが花開く場を作ること", type: "S" },
      { text: "この世界にまだ存在しない美しいものを創り出すこと", type: "A" },
      { text: "大切なものを守り、重要な変化を力強く前進させること", type: "W" },
      { text: "魂が目覚めるような言葉や表現を世界に届けること", type: "P" }
    ]
  },
  {
    text: "部屋に入ったとき、あなたは自然と何に気づきますか？",
    answers: [
      { text: "困っている人、疎外されている人、サポートが必要な人", type: "S" },
      { text: "美しさや機能性——もっとこうなれば、という改善のビジョン", type: "A" },
      { text: "力関係と空気感——何が動いていて、何が変わる必要があるか", type: "W" },
      { text: "場のエネルギー——明るくしたい、動かしたい、何か伝えたいという衝動", type: "P" }
    ]
  },
  {
    text: "あなたにとって「知識」は何のためにありますか？",
    answers: [
      { text: "人をより良く助けるための実践的なツール", type: "S" },
      { text: "新しい創造物にインスピレーションを与えるもの", type: "A" },
      { text: "目標達成のための戦略を立てるもの", type: "W" },
      { text: "あらゆる現象の奥にある深いパターンを理解するもの", type: "Sc" }
    ]
  },
  {
    text: "人生を振り返ったとき、最も誇りに思いたいのはどんなことですか？",
    answers: [
      { text: "あなたのおかげで愛され、大切にされたと感じた人たちの存在", type: "S" },
      { text: "あなたにしか作れなかった、美しくて革新的な作品や仕事", type: "A" },
      { text: "本当に大切なことのために、迷わず立ち上がったこと", type: "W" },
      { text: "あなたが伝えた真実によって、人々の見方が変わったこと", type: "Sc" }
    ]
  },
  {
    text: "グループが迷子になったとき、あなたはどうしますか？",
    answers: [
      { text: "リードしようとする人を全力でサポートする", type: "S" },
      { text: "誰も思いつかなかった、まったく新しいアプローチを提案する", type: "A" },
      { text: "自分が主導権を取り、物事が動き出すまで構造を作る", type: "K" },
      { text: "判断せずに場を保持し、自然に明確さが生まれるのを待ちながら導く", type: "Pr" }
    ]
  },
  {
    text: "あなたが最も深く満足を感じる瞬間は？",
    answers: [
      { text: "「あなたのおかげで人生が変わった」と言われたとき", type: "S" },
      { text: "何もないところからゼロで作り上げたものが完成したとき", type: "A" },
      { text: "困難を乗り越えて、重要な目標を達成したとき", type: "W" },
      { text: "別の魂と言葉を超えた深いところでつながったとき", type: "Pr" }
    ]
  },
  {
    text: "あなたの人生の目的として最も近いものは？",
    answers: [
      { text: "他の人々が夢を築ける、静かで安定した土台になること", type: "S" },
      { text: "世界に、あなたが来なければ生まれなかった美しさをもたらすこと", type: "A" },
      { text: "神聖で真実なものを守り、それが失われないようにすること", type: "W" },
      { text: "人々を、彼らが知らなかった深い現実に目覚めさせること", type: "Pr" }
    ]
  },
  {
    text: "あなたを最も疲弊させるものは何ですか？",
    answers: [
      { text: "役に立てない、または誰かの迷惑になっているという感覚", type: "S" },
      { text: "創造性を殺す、硬直した、魂のないプロセスや環境", type: "A" },
      { text: "不正義が目の前で起きているのに、誰も何もしないこと", type: "W" },
      { text: "表面だけで終わる、深みのない会話や関係", type: "Sc" }
    ]
  },
  {
    text: "あなたが最も「生きている」と感じるのはいつですか？",
    answers: [
      { text: "誰かが「あなたのおかげで」と心から伝えてくれたとき", type: "S" },
      { text: "クリエイティブなフローの中で、まったく新しいものを創っているとき", type: "A" },
      { text: "重要なミッションに向かって、確実に前進しているとき", type: "W" },
      { text: "大勢の前で話したり、自分を表現し、何かを伝えているとき", type: "P" }
    ]
  },
  {
    text: "あなたの最も深い恐れは何ですか？",
    answers: [
      { text: "誰かの負担になること、または本当に愛されていないこと", type: "S" },
      { text: "意味のあるものを何も創らないまま、普通の人生を終えること", type: "A" },
      { text: "最も大切なものを守れず、無力のまま傍観者になること", type: "W" },
      { text: "見えない存在として生き、自分の声が誰にも届かないこと", type: "P" }
    ]
  },
  {
    text: "危機のとき、周囲はあなたに何を求めますか？",
    answers: [
      { text: "感情的なサポート——温かさと揺るぎない安定した存在感", type: "S" },
      { text: "誰も考えなかったような、創造的でユニークな解決策", type: "A" },
      { text: "決断力と、明確で迷いのないリーダーシップ", type: "K" },
      { text: "誰もが薄々気づいていた、でも言えなかった真実", type: "Sc" }
    ]
  },
  {
    text: "B-Life（宇宙的な生き方）に入ったとき、あなたの奉仕はどんな形をとりますか？",
    answers: [
      { text: "目の前にいる人々を、深く・丁寧に・継続的に育てること", type: "S" },
      { text: "あなたが生きている間も、死後も残り続ける作品を作ること", type: "A" },
      { text: "未来の世代を守るための仕組みやシステムを作ること", type: "K" },
      { text: "人々の現実認識そのものを変える知恵を伝え続けること", type: "Pr" }
    ]
  },
  {
    text: "「転換期（Turning Point）」を迎えた今、あなたが最も恐れていることは？",
    answers: [
      { text: "本当に大切な人たちのためになれないまま時間が過ぎること", type: "S" },
      { text: "内側にある本当の作品・表現が、未完のまま終わること", type: "A" },
      { text: "戦うべきことに気づかずに、大切なものを失うこと", type: "W" },
      { text: "自分の洞察や知識が、誰かを変える前に消えてしまうこと", type: "Sc" }
    ]
  },
  {
    text: "完全に目覚めたB-Lifeの自分を想像すると、どんな姿ですか？",
    answers: [
      { text: "愛で深く繋がった、温かく繁栄するコミュニティのハブ", type: "S" },
      { text: "自分にしか作れなかった作品群と、それが届けた変化", type: "A" },
      { text: "正しいことが通り、大切なものが守られた、秩序ある未来", type: "W" },
      { text: "自分の言葉や存在で現実が変わった、何百万もの魂たち", type: "P" },
      { text: "ひとりひとりが自分の力を見つけた、統一された運動の中心に立つ自分", type: "K" }
    ]
  }
];

// ── 7つのソウルタイプ ──────────────────────────────────────────────────────
const soulTypes = {
  S: {
    name: "サーバー",
    emoji: "🌿",
    tagline: "すべての偉大なものの、見えない土台",
    mission: "あなたの魂は「サーバー」として地球大暴露に参加しました。あなたの使命は、他者が花開くための条件を整えること。世界はいつもあなたを見ているわけではありませんが、あなたなしでは成り立ちません。あなたは愛という接着剤——すべてをひとつに繋ぎ止める存在です。サーバーの喜びは、自分の支えによって誰かが輝く瞬間にあります。",
    trap: "マトリックスの罠：消えてしまうまで与え続けること。「自分を犠牲にすることが愛の証明だ」という地球的プログラムに囚われると、やがてあなた自身が空洞になります。枯れた源から人は助けられません。自己犠牲はB-Lifeではなく、A-Lifeの最も巧妙な罠のひとつです。",
    activation: "B-Life起動：今日、自分自身のエネルギーを守るひとつの境界線を設けてください。恐れからではなく、満ち足りた状態から与えてください。宇宙への注文を入れましょう：「私は溢れた愛から奉仕し、枯渇から守られます」。",
    planet: "ホームプラネット：あなたのエネルギーはシリウス星系の周波数を持っています。深い魂の絆、神聖な愛、宇宙的奉仕の場所。あなたは高次の愛の大使として、この地球メタバースにアバターを送り込みました。"
  },
  A: {
    name: "アーティザン",
    emoji: "🎨",
    tagline: "あなたが来る前には存在しなかった形を生み出す者",
    mission: "あなたの魂は「アーティザン（職人）」として地球大暴露に参加しました。あなたの使命は、宇宙の創造エネルギーを物質的現実に降ろすこと。芸術、デザイン、発明、問題解決——あなたはまだこの世界にない形を見つけ、それを作ります。あなたにしか作れないものが存在します。それを作ることが、あなたのパラレルワールド移動の鍵です。",
    trap: "マトリックスの罠：完璧主義によって、最も重要な作品を永遠に未公開のまま保持すること。「まだ準備ができていない」「もっと良くなってから」——これはマトリックスがアーティザンを無力化する最も一般的な手口です。",
    activation: "B-Life起動：今週、「不完全でも生きている」作品をひとつ世に出してください。完璧に心の中に閉じ込められたものより、不完全でも世に存在するものの方が無限に強力です。宇宙への注文：「私の作品は完成する前から誰かの人生を変えています」。",
    planet: "ホームプラネット：あなたのエネルギーはプレアデス星団の創造の炎を持っています。美しさ、繊細さ、急速な芸術的・精神的進化の場所。あなたは人間の服を着た文明の建設者です。"
  },
  W: {
    name: "ウォーリアー",
    emoji: "⚔️",
    tagline: "大切なものを守り、使命を前進させる者",
    mission: "あなたの魂は「ウォーリアー」として地球大暴露に参加しました。あなたの使命は、構造を作り、神聖なものを守り、重要なことを規律ある行動で前進させること。世界にはあなたの勇気、あなたの決断力、あなたの「それは違う」と言える背骨が必要です。ウォーリアーの力は、挑戦を受け入れ、使命に向かって持続的に行動し続けることにあります。",
    trap: "マトリックスの罠：戦略的な愛ではなく、怒りと反応から戦うこと。マトリックスはウォーリアーのエネルギーを奪い、誰の役にも立たない消耗する戦いに変えます。怒りの振動は低く、あなたの本来の力を削ぎます。",
    activation: "B-Life起動：今、最も戦う価値のあるもの——大義・人・真実——をひとつ特定してください。そして今日、愛から発した戦略的な一歩を踏み出してください。宇宙への注文：「私は愛の力から戦い、守るべきものを守ります」。",
    planet: "ホームプラネット：あなたのエネルギーはシリウス星系の規律ある光を持っています。宇宙的な法、ウォーリアー意識、神聖な秩序の保護の場所。あなたは地球がディフェンダーを必要としていたから生まれました。"
  },
  P: {
    name: "パフォーマー",
    emoji: "✨",
    tagline: "表現と声を通して魂を目覚めさせる伝達者",
    mission: "あなたの魂は「パフォーマー（セイジ）」として地球大暴露に参加しました。あなたの使命は、他者が感じているのに言葉にできない真実を伝えること。あなたの声、存在感、ユーモア、そして表現力は、あなたが入るすべての部屋の意識を変えます。すべてのステージは聖なる場です。",
    trap: "マトリックスの罠：魂の表現ではなく、承認のためにパフォーマンスすること。すべての人に好かれようとして本当の光を暗くすること。マトリックスはあなたの才能を「目覚めのための表現」から「エンターテインメント」に格下げしようとします。",
    activation: "B-Life起動：今日、ずっと心の中に温めてきた「本当のこと」をひとつ声に出してください。批判されることへの恐れから控えていた洞察や観察を。あなたの声がビークル（乗り物）です。使ってください。宇宙への注文：「私の表現は誰かの転換期を加速させています」。",
    planet: "ホームプラネット：あなたのエネルギーはプレアデス星団の表現の光を持っています。芸術的な目覚め、感情的な知性、宇宙的なコミュニケーションの場所。あなたは暗くなる余裕のない灯台です。"
  },
  Sc: {
    name: "スカラー",
    emoji: "📚",
    tagline: "時代を超えた知恵の守護者と橋渡し役",
    mission: "あなたの魂は「スカラー」として地球大暴露に参加しました。あなたの使命は、現実の奥にある深いパターンを理解し、見つけたものを分かち合うこと。スカラーは観察者——他者が見逃すパターンを見つけるほど切り離された視点と、その意味を理解するほど深い洞察を持っています。知識は自分のためだけにあるのではありません。",
    trap: "マトリックスの罠：「もっと知識が必要」と言い続けて、永遠に公開しないこと。スカラーが「十分に知っている」と感じる瞬間は決して来ません——それがマトリックスの仕掛けです。あなたの不完全な知恵は、今まさに誰かが探している答えです。",
    activation: "B-Life起動：今日、ひとつの洞察を公開してください。不完全でも構いません。あなたの統合は、まだ暗闇の中で探している誰かへの道を照らします。宇宙への注文：「私の知恵は今日、必要な人に届いています」。",
    planet: "ホームプラネット：あなたのエネルギーはレムリア文明の古代の知恵を持っています——知恵の守護者、地球の記憶、神聖な知識の番人の場所。日本のJomon（縄文）人との深いつながりがあるかもしれません。あなたは骨の中に図書館を持っています。"
  },
  Pr: {
    name: "プリースト",
    emoji: "🕊️",
    tagline: "愛を教え、より高いビジョンを保持する者",
    mission: "あなたの魂は「プリースト」として地球大暴露に参加しました。あなたの使命は、愛を教え、あなたが出会うすべての魂に対して最も高い可能性のビジョンを保持すること。プリーストはその人自身がまだ見えていない潜在性を見つけ、それを鏡で映して見せます——教義ではなく、純粋な伝達を通して。",
    trap: "マトリックスの罠：自分のミッションを犠牲にして、すべての人を支えようとすること。空のカリス（聖杯）からは注ぐことができません。「霊的なもの」への逃避として高い視点を使い、地球での責任を回避すること——これもプリーストのマトリックスの罠です。",
    activation: "B-Life起動：今日、誰かのために場を保持してください。修正するためでも、助言するためでもなく——ただその人がまだ自分の中に見えない光を、あなたが見てあげるために。宇宙への注文：「私は自分を満たしながら、あふれた愛から人々を導きます」。",
    planet: "ホームプラネット：あなたのエネルギーはシリウス星系の癒しの周波数を持っています——神聖な愛の伝達、魂の癒し、宇宙的な聖職の場所。あなたはより高い次元からの愛の大使として、この地球メタバースに来ました。"
  },
  K: {
    name: "キング",
    emoji: "👑",
    tagline: "愛によって人々を統一し、進化的使命へと導く者",
    mission: "あなたの魂は「キング」として地球大暴露に参加しました。あなたの使命は、人々を集め、整え、ひとりでは到達できないものへと導くこと——支配ではなく、愛に基づく権威を通して。キングは混沌から秩序を作り出す自然なリーダー。本当の主権は、力で支配することではなく、規模での奉仕から生まれます。",
    trap: "マトリックスの罠：ビジョンと招待ではなく、コントロールと権威によってリードしようとすること。マトリックスはキングのエネルギーを愛の統一から恐れによる支配へと堕落させます。「でも（but）」の言語でビジョンを語るとき、あなたは宇宙への注文をキャンセルしています。",
    activation: "B-Life起動：今日、あなたのビジョンを3人に伝えてください——感銘を与えるためではなく、本当に招待するために。キングはドローイングフォワード（前方への引き込み）でリードします。宇宙への注文：「私のビジョンは必要な人々を引き寄せ、統一された運動が今生まれています」。",
    planet: "ホームプラネット：あなたのエネルギーはプレアデス星団の主権の光を持っています——宇宙的なリーダーシップ、銀河的なガバナンス、進化的なビジョンの場所。あなたは散らばった光を集めるために、この地球メタバースにアバターを送り込みました。"
  }
};

// ── 状態管理 ──────────────────────────────────────────────────────────────
let current = 0;
let scores = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
const letters = ['A', 'B', 'C', 'D', 'E'];

// ── ヘルパー関数 ──────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function setProgress(idx) {
  const pct   = Math.round((idx / questions.length) * 100);
  const bar   = document.getElementById('progress-bar');
  const text  = document.getElementById('progress-text');
  const pctEl = document.getElementById('progress-pct');
  const track = document.querySelector('.progress-track');
  if (bar)   bar.style.width = pct + '%';
  if (text)  text.textContent = `質問 ${idx + 1} / ${questions.length}`;
  if (pctEl) pctEl.textContent = pct + '%';
  if (track) track.setAttribute('aria-valuenow', pct);
}

// ── クイズロジック ────────────────────────────────────────────────────────
function startQuiz() {
  current = 0;
  scores = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
  showScreen('quiz-screen');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[current];
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
    if (current < questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }, 380);
}

// ── 結果表示 ──────────────────────────────────────────────────────────────
function showResults() {
  const sorted = Object.entries(scores)
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1]);

  const primaryKey   = sorted[0]?.[0] || 'S';
  const secondaryKey = sorted[1]?.[0];
  const primary   = soulTypes[primaryKey];
  const secondary = secondaryKey ? soulTypes[secondaryKey] : null;

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
      ? `あなたは強い ${secondary.emoji} ${secondary.name} のエネルギーも持っています——${secondary.tagline}。このセカンダリーソウルタイプが、あなたのプライマリーミッションの表現方法を彩ります。`
      : `あなたのソウルタイプは稀な明確さで現れました——ミッションと方向性において、揺るぎない純粋さで。`;
  }

  showScreen('result-screen');
}

// ── イベントリスナー ──────────────────────────────────────────────────────
function submitEmailGate(event) {
  event.preventDefault();
  const name  = document.getElementById('gate-name-input').value.trim();
  const email = document.getElementById('gate-email-input').value.trim();
  window._capturedName  = name;
  window._capturedEmail = email;
  const CONVERTKIT_FORM_ID = 'CONVERTKIT_FORM_ID';
  const CONVERTKIT_API_KEY = 'CONVERTKIT_API_KEY';
  if (CONVERTKIT_FORM_ID !== 'CONVERTKIT_FORM_ID') {
    fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: CONVERTKIT_API_KEY, email, fields: { first_name: name, stage: 'pre-quiz', language: 'ja' } })
    }).catch(() => {});
  }
  startQuiz();
}

document.addEventListener('DOMContentLoaded', () => {
  const beginBtn  = document.getElementById('begin-btn');
  const retakeBtn = document.getElementById('retake-btn');
  const printBtn  = document.getElementById('print-btn');

  if (beginBtn)  beginBtn.addEventListener('click', () => showScreen('email-gate-screen'));
  if (retakeBtn) retakeBtn.addEventListener('click', startQuiz);
  if (printBtn)  printBtn.addEventListener('click', () => window.print());
});
