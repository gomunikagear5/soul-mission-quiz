// ── ソウルミッション診断 — 日本語版 ────────────────────────────────────────────
// Nao Stantonの「地球大暴露」に基づく

// ── 質問データ ──────────────────────────────────────────────────────────
const questions = [
  {
    text: "大切な人が傷ついているとき、あなたの本能は？",
    answers: [
      { text: "すべてを置いて、ただそばにいる", type: "S" },
      { text: "手紙、贈り物、特別なジェスチャーなど、心のこもった何かを作る", type: "A" },
      { text: "立ち上がる力を見つける手助けをする", type: "W" },
      { text: "視点が変わるような話やひらめきを分かち合う", type: "P" }
    ]
  },
  {
    text: "あなたの理想の人生は？",
    answers: [
      { text: "コミュニティや家族を深く大切にすること", type: "S" },
      { text: "これまでなかった芸術・製品・仕組みを創り出すこと", type: "A" },
      { text: "規律と影響力を持った組織や運動を築くこと", type: "W" },
      { text: "大きな聴衆に語りかけ、教え、目覚めをもたらすこと", type: "P" }
    ]
  },
  {
    text: "部屋に入ったとき、あなたは自然と何をしますか？",
    answers: [
      { text: "困っている人や疎外されている人に気づく", type: "S" },
      { text: "美しさや機能性を観察し、改善点を見つける", type: "A" },
      { text: "力関係を読み取り、何を変えるべきか考える", type: "W" },
      { text: "ユーモアや温かさや新しい視点でエネルギーを明るくする", type: "P" }
    ]
  },
  {
    text: "あなたが知識を集める主な目的は？",
    answers: [
      { text: "人をより効果的に助けるため", type: "S" },
      { text: "新しい創造的な作品にインスピレーションを得るため", type: "A" },
      { text: "前進するためのより良い戦略を作るため", type: "W" },
      { text: "すべての底にある隠れたパターンを見つけるため", type: "Sc" }
    ]
  },
  {
    text: "最も記憶されたいのはどんなことですか？",
    answers: [
      { text: "人々が愛され大切にされたと感じさせた方法", type: "S" },
      { text: "あなたが創り出した美しくて革新的な何か", type: "A" },
      { text: "本当に大切なことのために立ち上がったこと", type: "W" },
      { text: "あなたが人々に明確に見せた真実", type: "Sc" }
    ]
  },
  {
    text: "グループが行き詰まったとき、あなたはどうしますか？",
    answers: [
      { text: "リードする人をサポートする", type: "S" },
      { text: "誰も考えなかった創造的なアプローチを提案する", type: "A" },
      { text: "主導権を取り、物事が動くまで構造を作る", type: "K" },
      { text: "自然に明確さが生まれるまで場を保持し導く", type: "Pr" }
    ]
  },
  {
    text: "あなたが最も深く満足を感じるのはいつですか？",
    answers: [
      { text: "自分のおかげで誰かの人生が本当に良くなったと知るとき", type: "S" },
      { text: "ゼロから作り上げたものを完成させたとき", type: "A" },
      { text: "懸命に戦って達成した目標があるとき", type: "W" },
      { text: "別の魂と深くつながったとき", type: "Pr" }
    ]
  },
  {
    text: "あなたの人生の目的として最も近いものは？",
    answers: [
      { text: "他者が築ける静かな土台となること", type: "S" },
      { text: "世界に新しい美の形をもたらすこと", type: "A" },
      { text: "神聖で真実なものを守ること", type: "W" },
      { text: "人々をより深い現実に目覚めさせること", type: "Pr" }
    ]
  },
  {
    text: "知識との関係を表すと？",
    answers: [
      { text: "実践的——人を直接助けることを学ぶ", type: "S" },
      { text: "美的——新しい創造にインスピレーションを得るものを学ぶ", type: "A" },
      { text: "戦略的——優位性を生み出すものを学ぶ", type: "W" },
      { text: "統合的——すべてを集めて隠れたパターンを見つける", type: "Sc" }
    ]
  },
  {
    text: "最もエネルギーを消耗するのは？",
    answers: [
      { text: "役に立てない、または他者に迷惑をかけていると感じること", type: "S" },
      { text: "硬直した、創造性のない、魂を押しつぶすようなプロセス", type: "A" },
      { text: "不正義が誰も何もしない中で見過ごされること", type: "W" },
      { text: "表面以下に決して行かない浅い会話", type: "Sc" }
    ]
  },
  {
    text: "最も生き生きするのはいつですか？",
    answers: [
      { text: "どれほど助けてもらったかを伝えられるとき", type: "S" },
      { text: "クリエイティブなフローの中で、全く新しいものを作っているとき", type: "A" },
      { text: "動き続けながらミッションを前進させているとき", type: "W" },
      { text: "ステージ上で話したり、パフォーマンスしているとき", type: "P" }
    ]
  },
  {
    text: "あなたの最大の恐れは？",
    answers: [
      { text: "迷惑な存在、または本当に愛されていないこと", type: "S" },
      { text: "何も意味のあるものを創らない平凡な人生を送ること", type: "A" },
      { text: "最も大切なものを守れないこと", type: "W" },
      { text: "見えない、聞こえない、存在を無視されること", type: "P" }
    ]
  },
  {
    text: "危機のとき、周囲はあなたに何を求めますか？",
    answers: [
      { text: "感情的なサポート、温かさ、安定した存在感", type: "S" },
      { text: "誰も思いつかなかった創造的な解決策", type: "A" },
      { text: "リーダーシップと決断力のある明確な行動", type: "K" },
      { text: "言われなければならない不快な真実", type: "Sc" }
    ]
  },
  {
    text: "人類への奉仕の理想の形は？",
    answers: [
      { text: "目の前の人々を深く育てること", type: "S" },
      { text: "一生続く作品を創ること", type: "A" },
      { text: "未来の世代を守るシステムを築くこと", type: "K" },
      { text: "人々の現実の見方を変える知恵を伝えること", type: "Pr" }
    ]
  },
  {
    text: "完全に目覚めた人生を想像すると、どんな姿ですか？",
    answers: [
      { text: "愛で結ばれた温かく繁栄するコミュニティ", type: "S" },
      { text: "あなたなしでは世界が創れなかった作品群", type: "A" },
      { text: "正しいことが通る守られた秩序ある世界", type: "W" },
      { text: "あなたが分かち合ったことで現実が変わった何百万もの人々", type: "P" },
      { text: "人々が自分の力を見つけた統一された運動", type: "K" }
    ]
  }
];

// ── 7つのソウルタイプ ──────────────────────────────────────────────────────
const soulTypes = {
  S: {
    name: "サーバー",
    emoji: "🌿",
    tagline: "すべての偉大なものの土台",
    mission: "あなたの魂はサーバーとして地球を選びました——偉大なすべての静かな土台として。あなたのミッションは、他者が花開くための条件を整えることです。世界はいつもあなたを見ているわけではありませんが、あなたなしでは成り立ちません。あなたはすべてをひとつに繋ぎ止める温かさなのです。",
    trap: "消えてしまうまで与え続ける——自分の存在を犠牲にして他者を愛すること。マトリックスはあなたに、犠牲の量が価値の尺度だと告げます。これがあなたを空洞にする嘘です。",
    activation: "恐れからではなく、満ち足りた状態から大胆に与えてください。今日、自分自身のエネルギーを尊重するひとつの境界線を設けましょう。あなたの愛情は枯渇からではなく、溢れるところから来るとき最も強くなります。",
    planet: "あなたのエネルギーはシリウスの無条件の温かさを持っています——深い魂の絆、神聖な愛、宇宙的奉仕の星系。あなたは高次の次元のために作られた心を持ってこの世界に生まれました。"
  },
  A: {
    name: "アーティザン",
    emoji: "🎨",
    tagline: "あなたが来る前には存在しなかった形の創造者",
    mission: "あなたの魂はアーティザンとして地球を選びました——あなたが来る前には存在しなかった形の創造者として。あなたのミッションは、美しさ、革新、そして新しい可能性を物質的現実にもたらすことです。世界はあなたの特別な魂にしか作れないものを必要としています。あなたが創るものに偶然はありません。",
    trap: "最も重要な作品を永遠に隠し続ける完璧主義。マトリックスはあなたに、まだ準備ができていない、十分に良くないとささやきます——それは嘘です。世界はあなたの不完全だが生きた作品を待っています。",
    activation: "今週、本当の作品をひとつ世に出してください。不完全でも世に生きているものは、心の中に完璧に閉じ込められたものより無限に強力です。創り、解放し、信じてください。",
    planet: "あなたのエネルギーはプレアデスの創造の炎を持っています——美しさ、感受性、そして急速な芸術的・精神的進化の星系。あなたは人間の服を着た文明の建設者です。"
  },
  W: {
    name: "ウォリアー",
    emoji: "⚔️",
    tagline: "大切なものの守護者",
    mission: "あなたの魂はウォリアーとして地球を選びました——守る価値のあるものの守護者として。あなたのミッションは、構造を作り、神聖なものを守り、規律ある勇気ある行動で重要なことを前進させることです。世界はあなたの勇気、あなたの背骨、あなたの目をそらさない姿勢を必要としています。",
    trap: "戦略的な愛ではなく、怒りと反応から戦うこと。マトリックスはあなたの力を奪い、誰の役にも立たない疲弊する戦いに変えます。あなたの強さは愛から流れるとき増幅されます。",
    activation: "今、最も戦う価値のあるもの——大義、人、真実——を特定してください。今日、それに向けてひとつの具体的な戦略的一歩を踏み出しましょう。ウォリアーは爆発ではなく規律で勝ちます。",
    planet: "あなたのエネルギーはシリウスの規律ある光を持っています——宇宙的な法、ウォリアー意識、神聖な秩序の保護の星系。あなたは地球がディフェンダーを必要としていたから生まれました。"
  },
  P: {
    name: "パフォーマー",
    emoji: "✨",
    tagline: "表現を通した目覚めの伝達者",
    mission: "あなたの魂はパフォーマーとして地球を選びました——表現の力を通した目覚めの伝達者として。あなたのミッションは、他者が感じていても言えない真実を伝え、あなたの声、存在感、光で入るすべての部屋の意識を変えることです。",
    trap: "真実ではなく承認のためにパフォーマンスすること——すべての人に好かれるために本当の光を暗くすること。マトリックスはあなたの才能を目覚めのためのものであるのにエンターテインメントに変えます。",
    activation: "今日、本当のことを言ってください——それがどう受け取られるかへの恐れから控えていたひとつの洞察や観察を。あなたの声がそのビークルです。使ってください。",
    planet: "あなたのエネルギーはプレアデスの表現の光を持っています——芸術的な目覚め、感情的な知性、宇宙的なコミュニケーションの星系。あなたは暗くなる余裕のない灯台です。"
  },
  Sc: {
    name: "スカラー",
    emoji: "📚",
    tagline: "時代を超えた知恵の守護者と橋渡し役",
    mission: "あなたの魂はスカラーとして地球を選びました——時代を超えた知恵の収集者と橋渡し役として。あなたのミッションは、現実の底にある深いパターンを理解し、見つけたものを他者があなたの肩の上に立てるよう分かち合うことです。あなたは自分一人のために知るのではありません。",
    trap: "知識を蓄え、共有するのに十分な知識が得られるまで永遠に待つこと——決して到達しない閾値。マトリックスはあなたの才能を公共の図書館になるべきものを個人のコレクションに変えます。",
    activation: "今日、ひとつの洞察を公開してください。不完全でも、あなたの統合はまだ暗闇の中で探している誰かへの道を照らします。すべての答えを持っていなくても始めることができます。",
    planet: "あなたのエネルギーはレムリアの古代の知恵を持っています——知恵の守護者、地球の記憶、神聖な知識の守り手の文明。あなたは骨の中に図書館を持っています。"
  },
  Pr: {
    name: "プリースト",
    emoji: "🕊️",
    tagline: "愛の教師とより高いビジョンの保持者",
    mission: "あなたの魂はプリーストとして地球を選びました——愛の教師、そしてあなたが出会うすべての魂に対して最も高い可能性のビジョンの保持者として。あなたのミッションは、他者がまだ自分の中に見えない可能性を見出し、教義ではなく純粋な伝達を通して目覚めを導くことです。",
    trap: "自分のミッションを犠牲にしてすべての人を支えること——伝えるものが何もなくなった空の器になること。空のカリスからは注ぐことができません。マトリックスはあなたの才能を自己犠牲に変えます。",
    activation: "今日、誰かのために場を保持してください。修正するためでも、助言するためでもなく——ただ彼らがまだ自分の中に見えない光を反射するために。その反射が奇跡です。",
    planet: "あなたのエネルギーはシリウスの癒しの周波数を持っています——神聖な愛の伝達、魂の癒し、宇宙的な司祭職の星系。あなたはより高い愛の大使として地球に来ました。"
  },
  K: {
    name: "キング",
    emoji: "👑",
    tagline: "進化的目的に向けた人々の統一者",
    mission: "あなたの魂はキングとして地球を選びました——進化的目的に向けた人々の統一者として。あなたのミッションは、支配ではなく愛に基づく権威を通して、人々を一人では到達できないものへと集め、整え、導くことです。あなたは新しい時代の産婆役です。",
    trap: "ビジョンと招待ではなく、支配と権威によってリードすること。マトリックスはキングのエネルギーを専制主義に堕落させます——愛を通してインスパイアするのではなく恐れで支配する。",
    activation: "今日、ビジョンを示してください。あなたが作っているものとそれが世界にとって何を意味するかを3人に伝えてください——感銘を与えるためではなく、本当に招待するために。キングはドローイングフォワードでリードします。",
    planet: "あなたのエネルギーはプレアデスの主権の光を持っています——宇宙的なリーダーシップ、銀河的なガバナンス、進化的なビジョンの星系。あなたは散らばった光を集めるために地球に来ました。"
  }
};

// ── 状態管理 ────────────────────────────────────────────────────────────
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
  const pct = Math.round((idx / questions.length) * 100);
  const bar  = document.getElementById('progress-bar');
  const text = document.getElementById('progress-text');
  const pctEl = document.getElementById('progress-pct');
  const track = document.querySelector('.progress-track');
  if (bar)   bar.style.width = pct + '%';
  if (text)  text.textContent = `質問 ${idx + 1} / ${questions.length}`;
  if (pctEl) pctEl.textContent = pct + '%';
  if (track) track.setAttribute('aria-valuenow', pct);
}

// ── クイズロジック ──────────────────────────────────────────────────────────
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
      : `あなたのソウルタイプは稀な明確さで現れました——そのミッションと方向性において揺るぎない。`;
  }

  showScreen('result-screen');
}

// ── イベントリスナー ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const beginBtn  = document.getElementById('begin-btn');
  const retakeBtn = document.getElementById('retake-btn');
  const printBtn  = document.getElementById('print-btn');

  if (beginBtn)  beginBtn.addEventListener('click', startQuiz);
  if (retakeBtn) retakeBtn.addEventListener('click', startQuiz);
  if (printBtn)  printBtn.addEventListener('click', () => window.print());
});
