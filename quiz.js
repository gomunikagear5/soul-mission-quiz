// ── Quiz Data ────────────────────────────────────────────────
const questions = [
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
];

const soulTypes = {
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
};

// ── State ────────────────────────────────────────────────────
let current = 0;
let scores = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
const letters = ['A', 'B', 'C', 'D', 'E'];

// ── Helpers ──────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function setProgress(idx) {
  const pct = Math.round((idx / questions.length) * 100);
  const bar = document.getElementById('progress-bar');
  const text = document.getElementById('progress-text');
  const pctEl = document.getElementById('progress-pct');
  const track = document.querySelector('.progress-track');
  if (bar)  bar.style.width = pct + '%';
  if (text) text.textContent = `Question ${idx + 1} of ${questions.length}`;
  if (pctEl) pctEl.textContent = pct + '%';
  if (track) track.setAttribute('aria-valuenow', pct);
}

// ── Quiz Logic ───────────────────────────────────────────────
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

  // Fade out
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

// ── Results ──────────────────────────────────────────────────
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
      ? `You also carry strong ${secondary.emoji} ${secondary.name} energy — ${secondary.tagline.toLowerCase()}. This secondary soul type colors how you express your primary mission.`
      : `Your soul type came through with rare clarity — undivided in its mission and direction.`;
  }

  showScreen('result-screen');
}

// ── Event Listeners ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const beginBtn  = document.getElementById('begin-btn');
  const retakeBtn = document.getElementById('retake-btn');
  const printBtn  = document.getElementById('print-btn');

  if (beginBtn)  beginBtn.addEventListener('click', startQuiz);
  if (retakeBtn) retakeBtn.addEventListener('click', startQuiz);
  if (printBtn)  printBtn.addEventListener('click', () => window.print());
});
