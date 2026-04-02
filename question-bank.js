// ── Soul Mission Quiz — Question Bank (EN) ──────────────────────────────────
// 45+ questions across 7 soul types + forced-choice + reverse-scored
// Used by quiz.js to randomly pull 15 per session

// Standard question format:
// { id, text, answers: [{ text, type, score }], reversed?: true }
// Forced-choice format:
// { id, type: 'forced_choice', text, optionA: { text, type, score }, optionB: { text, type, score } }

const questionBank = [

  // ─────────────────────────────────────────────
  // SERVER (S) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_s_01',
    text: 'When a friend is struggling, your first instinct is to...',
    answers: [
      { text: 'Drop everything and simply be present with them', type: 'S', score: 3 },
      { text: 'Research the best solutions and send them resources', type: 'Sc', score: 2 },
      { text: 'Rally others to help as a team', type: 'K', score: 2 },
      { text: 'Share a story that might shift their perspective', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_s_02',
    text: 'What you care about most is...',
    answers: [
      { text: 'That the people you love feel truly cared for', type: 'S', score: 3 },
      { text: 'That the world is fairer and better protected', type: 'W', score: 2 },
      { text: 'That beauty and meaning exist in everyday life', type: 'A', score: 2 },
      { text: 'That people wake up to what is actually real', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_s_03',
    text: 'In a crisis, people instinctively come to you for...',
    answers: [
      { text: 'Emotional warmth and a steady, caring presence', type: 'S', score: 3 },
      { text: 'Creative ideas nobody has thought of yet', type: 'A', score: 2 },
      { text: 'Clear decisive leadership', type: 'K', score: 2 },
      { text: 'The hard truth that needs to be said', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_s_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'The most reliable, caring person they know', type: 'S', score: 3 },
      { text: 'A creative force who sees beauty everywhere', type: 'A', score: 2 },
      { text: 'Someone who fights for what is right', type: 'W', score: 2 },
      { text: 'A deep thinker with unusual insights', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_s_05',
    text: 'When you imagine your fully awakened life, it looks like...',
    answers: [
      { text: 'A warm, thriving community held together by your love', type: 'S', score: 3 },
      { text: 'A body of work the world could not have created without you', type: 'A', score: 3 },
      { text: 'A protected world where the right things prevail', type: 'W', score: 3 },
      { text: 'Millions of people transformed by what you shared', type: 'P', score: 3 },
    ]
  },
  {
    id: 'q_s_06',
    text: 'The thing that drains you most is...',
    answers: [
      { text: 'Feeling like a burden or being unable to help', type: 'S', score: 3 },
      { text: 'Rigid, soulless systems that crush creativity', type: 'A', score: 2 },
      { text: 'Injustice that nobody seems willing to fight', type: 'W', score: 2 },
      { text: 'Shallow conversations that never go deep', type: 'Sc', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // ARTISAN (A) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_a_01',
    text: 'When you walk into a room, you notice...',
    answers: [
      { text: 'What could be more beautiful or functional', type: 'A', score: 3 },
      { text: 'Who needs help or feels left out', type: 'S', score: 2 },
      { text: 'The power dynamics and what needs to change', type: 'W', score: 2 },
      { text: 'The emotional undercurrent beneath the surface', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_a_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Creating something original that did not exist before you', type: 'A', score: 3 },
      { text: 'Truly understanding the hidden patterns in reality', type: 'Sc', score: 2 },
      { text: 'Leading people toward something greater than themselves', type: 'K', score: 2 },
      { text: 'Speaking truths that wake people up', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_a_03',
    text: 'When you are in flow, you are usually...',
    answers: [
      { text: 'Making something — building, designing, writing, crafting', type: 'A', score: 3 },
      { text: 'Deep in research or connecting ideas from different fields', type: 'Sc', score: 2 },
      { text: 'On stage, speaking, or performing to a room', type: 'P', score: 2 },
      { text: 'Strategizing and executing on a mission', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_a_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'Unusually creative and original — a maker of worlds', type: 'A', score: 3 },
      { text: 'Someone who genuinely cares about others above all', type: 'S', score: 2 },
      { text: 'A natural leader who draws people forward', type: 'K', score: 2 },
      { text: 'Someone who sees things most people miss entirely', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_a_05',
    text: 'Your greatest fear is...',
    answers: [
      { text: 'Living an ordinary life without creating anything meaningful', type: 'A', score: 3 },
      { text: 'Being unloved or truly invisible to others', type: 'S', score: 2 },
      { text: 'Being powerless to protect what matters most', type: 'W', score: 2 },
      { text: 'Being unseen or never heard', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_a_06',
    text: 'When you feel most alive, you are...',
    answers: [
      { text: 'In creative flow — making something entirely new', type: 'A', score: 3 },
      { text: 'On stage or speaking to move a crowd', type: 'P', score: 2 },
      { text: 'In motion, pushing a mission powerfully forward', type: 'W', score: 2 },
      { text: 'Holding space for someone\'s deep transformation', type: 'Pr', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // WARRIOR (W) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_w_01',
    text: 'When you see injustice happening, you...',
    answers: [
      { text: 'Cannot look away — you feel compelled to act', type: 'W', score: 3 },
      { text: 'Research the issue deeply before responding', type: 'Sc', score: 2 },
      { text: 'Rally others around the cause', type: 'K', score: 2 },
      { text: 'Feel it deeply and share it publicly to awaken people', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_w_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Standing up for what is sacred and not backing down', type: 'W', score: 3 },
      { text: 'Caring deeply for the people right in front of you', type: 'S', score: 2 },
      { text: 'Creating something the world has never seen', type: 'A', score: 2 },
      { text: 'Transmitting wisdom that changes how people see reality', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_w_03',
    text: 'In a group, you naturally...',
    answers: [
      { text: 'Push the mission forward with structure and discipline', type: 'W', score: 3 },
      { text: 'Notice who needs support and provide it quietly', type: 'S', score: 2 },
      { text: 'Propose a radically different approach', type: 'A', score: 2 },
      { text: 'Synthesize everyone\'s input into a clear understanding', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_w_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'Courageous, direct, and someone who does not back down', type: 'W', score: 3 },
      { text: 'Warm, reliable, and always there for them', type: 'S', score: 2 },
      { text: 'Magnetic — someone who lights up a room', type: 'P', score: 2 },
      { text: 'A natural leader who unites and inspires', type: 'K', score: 2 },
    ]
  },
  {
    id: 'q_w_05',
    text: 'Your deepest satisfaction comes from...',
    answers: [
      { text: 'Achieving a goal you fought hard and strategically for', type: 'W', score: 3 },
      { text: 'Knowing someone\'s life is better because of your care', type: 'S', score: 2 },
      { text: 'Finishing something you built from nothing', type: 'A', score: 2 },
      { text: 'Connecting deeply with another person\'s soul', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_w_06',
    text: 'When facing an obstacle, you...',
    answers: [
      { text: 'Create a strategy and attack it with focused discipline', type: 'W', score: 3 },
      { text: 'Look for a creative workaround others would not think of', type: 'A', score: 2 },
      { text: 'Research it until you fully understand every angle', type: 'Sc', score: 2 },
      { text: 'Gather allies and tackle it together', type: 'K', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // PERFORMER (P) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_p_01',
    text: 'When you have something important to say, you...',
    answers: [
      { text: 'Find a way to say it to as many people as possible', type: 'P', score: 3 },
      { text: 'Write it down and craft it perfectly first', type: 'A', score: 2 },
      { text: 'Share it one-on-one with people who need it most', type: 'Pr', score: 2 },
      { text: 'Research whether it is actually true before sharing', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_p_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Being seen, heard, and genuinely connecting with an audience', type: 'P', score: 3 },
      { text: 'Protecting the sacred things worth fighting for', type: 'W', score: 2 },
      { text: 'Building systems that will outlast your lifetime', type: 'K', score: 2 },
      { text: 'Deeply serving the people right in front of you', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_p_03',
    text: 'When you enter a room, you feel compelled to...',
    answers: [
      { text: 'Shift the energy — lighten it, enliven it, electrify it', type: 'P', score: 3 },
      { text: 'Identify who needs support and quietly offer it', type: 'S', score: 2 },
      { text: 'Observe the dynamics before deciding how to engage', type: 'Sc', score: 2 },
      { text: 'Assert structure and clarity when it is needed', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_p_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'Magnetic, expressive, impossible to ignore when you speak', type: 'P', score: 3 },
      { text: 'A deep thinker who sees through surface appearances', type: 'Sc', score: 2 },
      { text: 'Someone who holds space in a uniquely healing way', type: 'Pr', score: 2 },
      { text: 'The person who quietly holds everything together', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_p_05',
    text: 'Your greatest fear is...',
    answers: [
      { text: 'Being permanently unseen, unheard, or invisible', type: 'P', score: 3 },
      { text: 'Never creating anything that outlasts you', type: 'A', score: 2 },
      { text: 'Being powerless when it matters most', type: 'W', score: 2 },
      { text: 'Failing the people who depend on your care', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_p_06',
    text: 'When you feel most alive, you are...',
    answers: [
      { text: 'On stage, speaking, or performing to a moved audience', type: 'P', score: 3 },
      { text: 'Deep in the process of creating something entirely new', type: 'A', score: 2 },
      { text: 'In motion, pushing a bold mission forward', type: 'W', score: 2 },
      { text: 'In a deeply intimate conversation that changes someone', type: 'Pr', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // SCHOLAR (Sc) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_sc_01',
    text: 'Your relationship with knowledge is...',
    answers: [
      { text: 'Synthesizing — you collect everything and find the hidden pattern', type: 'Sc', score: 3 },
      { text: 'Practical — you learn what helps people directly', type: 'S', score: 2 },
      { text: 'Aesthetic — you learn what inspires new creation', type: 'A', score: 2 },
      { text: 'Strategic — you learn what creates decisive advantage', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_sc_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Understanding the deep truth beneath the surface of reality', type: 'Sc', score: 3 },
      { text: 'Creating work that is original and enduring', type: 'A', score: 2 },
      { text: 'Transmitting a vision that transforms how people see', type: 'Pr', score: 2 },
      { text: 'Leading people toward something they could not reach alone', type: 'K', score: 2 },
    ]
  },
  {
    id: 'q_sc_03',
    text: 'In a group, you naturally...',
    answers: [
      { text: 'Offer the unexpected analysis that reframes everything', type: 'Sc', score: 3 },
      { text: 'Notice who needs support and quietly provide it', type: 'S', score: 2 },
      { text: 'Step up to lead when there is no clear direction', type: 'K', score: 2 },
      { text: 'Energize the room with your presence and expression', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_sc_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'Unusually wise — someone who sees what everyone else misses', type: 'Sc', score: 3 },
      { text: 'A creative force who makes things no one else could', type: 'A', score: 2 },
      { text: 'Courageous and uncompromising when it matters', type: 'W', score: 2 },
      { text: 'A natural unifier who brings people together', type: 'K', score: 2 },
    ]
  },
  {
    id: 'q_sc_05',
    text: 'The thing that drains you most is...',
    answers: [
      { text: 'Shallow conversation that never goes beneath the surface', type: 'Sc', score: 3 },
      { text: 'Rigid, uncreative, soul-crushing processes', type: 'A', score: 2 },
      { text: 'Injustice going unchallenged while people do nothing', type: 'W', score: 2 },
      { text: 'Feeling unhelpful or like a burden to others', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_sc_06',
    text: 'When you imagine your fully awakened life, it looks like...',
    answers: [
      { text: 'A unified theory — a body of wisdom that bridges everything', type: 'Sc', score: 3 },
      { text: 'A thriving community you hold together with love', type: 'S', score: 2 },
      { text: 'A movement where people discovered their real power', type: 'K', score: 2 },
      { text: 'Millions of people awakened by what you expressed', type: 'P', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // PRIEST (Pr) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_pr_01',
    text: 'When someone is lost or struggling, you naturally...',
    answers: [
      { text: 'Hold space and gently guide until clarity emerges naturally', type: 'Pr', score: 3 },
      { text: 'Take charge and create structure to get things moving', type: 'K', score: 2 },
      { text: 'Offer warmth and practical hands-on care', type: 'S', score: 2 },
      { text: 'Share insight or a reframe to shift their perspective', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_pr_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Seeing the potential in others that they cannot yet see themselves', type: 'Pr', score: 3 },
      { text: 'Building things that genuinely improve people\'s lives', type: 'S', score: 2 },
      { text: 'Creating systems and structures that protect what matters', type: 'W', score: 2 },
      { text: 'Understanding the hidden patterns that explain everything', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_pr_03',
    text: 'In a group, you naturally...',
    answers: [
      { text: 'Hold the highest vision for every person in the room', type: 'Pr', score: 3 },
      { text: 'Create something unexpected and original', type: 'A', score: 2 },
      { text: 'Take clear decisive action when no one else will', type: 'W', score: 2 },
      { text: 'Electrify the energy and get people moving', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_pr_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'Someone who makes you feel truly seen and believed in', type: 'Pr', score: 3 },
      { text: 'Endlessly curious and unexpectedly insightful', type: 'Sc', score: 2 },
      { text: 'Brave and willing to do what others will not', type: 'W', score: 2 },
      { text: 'Magnetic and expressive — you light up any room', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_pr_05',
    text: 'Your deepest satisfaction comes from...',
    answers: [
      { text: 'Connecting soul-to-soul with another person in a way that transforms them', type: 'Pr', score: 3 },
      { text: 'Achieving a goal you fought hard and strategically for', type: 'W', score: 2 },
      { text: 'Creating a finished work that did not exist before you', type: 'A', score: 2 },
      { text: 'Knowing someone\'s life improved because of your care', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_pr_06',
    text: 'When you imagine your fully awakened life, it looks like...',
    answers: [
      { text: 'Souls awakened and guided toward their highest potential', type: 'Pr', score: 3 },
      { text: 'A library of wisdom that future generations still draw from', type: 'Sc', score: 2 },
      { text: 'A creative body of work that outlasts your lifetime', type: 'A', score: 2 },
      { text: 'A movement you unified and led into a new era', type: 'K', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // KING (K) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_k_01',
    text: 'When a group is stuck or leaderless, you...',
    answers: [
      { text: 'Step up, create clarity, and get things moving', type: 'K', score: 3 },
      { text: 'Support whoever naturally steps up to lead', type: 'S', score: 2 },
      { text: 'Propose a creative new approach nobody considered', type: 'A', score: 2 },
      { text: 'Hold space until the right direction emerges naturally', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_k_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Gathering people toward a vision larger than any individual', type: 'K', score: 3 },
      { text: 'Creating things of original beauty and meaning', type: 'A', score: 2 },
      { text: 'Caring for the people closest to you with full devotion', type: 'S', score: 2 },
      { text: 'Defending and protecting what is sacred and true', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_k_03',
    text: 'In a group, you naturally...',
    answers: [
      { text: 'Align everyone toward a shared purpose and hold them to it', type: 'K', score: 3 },
      { text: 'Energize the room through your expression and presence', type: 'P', score: 2 },
      { text: 'Offer the unexpected insight that reframes the situation', type: 'Sc', score: 2 },
      { text: 'Protect whoever needs protecting and confront what is wrong', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_k_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'A natural leader — someone who can unite very different people', type: 'K', score: 3 },
      { text: 'Unusually perceptive — you see patterns others do not', type: 'Sc', score: 2 },
      { text: 'A healer — someone who makes people feel truly understood', type: 'Pr', score: 2 },
      { text: 'The most reliable and caring person in the room', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_k_05',
    text: 'Your deepest satisfaction comes from...',
    answers: [
      { text: 'Watching a group of people you gathered achieve what they could not alone', type: 'K', score: 3 },
      { text: 'Completing a creative work you built from nothing', type: 'A', score: 2 },
      { text: 'Knowing someone\'s life is genuinely better because of you', type: 'S', score: 2 },
      { text: 'Sharing an insight that visibly changes how someone thinks', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_k_06',
    text: 'When you imagine your fully awakened life, it looks like...',
    answers: [
      { text: 'A unified movement — people gathered into their collective power', type: 'K', score: 3 },
      { text: 'A warm, close-knit community held together by love', type: 'S', score: 2 },
      { text: 'Millions of people awakened through your voice', type: 'P', score: 2 },
      { text: 'A body of wisdom that bridges disciplines and generations', type: 'Sc', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // REVERSE-SCORED questions (reversed: true)
  // The "obvious" answer for a type scores AGAINST it
  // ─────────────────────────────────────────────
  {
    id: 'q_rev_01',
    reversed: true,
    text: 'I often wish people would just leave me alone so I can focus.',
    answers: [
      // High Scholars often think they'd endorse this — but true Performers do NOT
      { text: 'Yes — I do my best thinking in solitude', type: 'Sc', score: 3 },
      { text: 'Sometimes, but I recharge quickly around the right people', type: 'P', score: 1 },
      { text: 'Rarely — I get more energy from working alongside others', type: 'S', score: 2 },
      { text: 'Almost never — other people fuel my best work', type: 'K', score: 2 },
    ]
  },
  {
    id: 'q_rev_02',
    reversed: true,
    text: 'I am most motivated when I have a clear authority figure to report to.',
    answers: [
      // Warriors and Kings tend to reject authority — this catches anyone trying to "play" W or K
      { text: 'Yes — clear hierarchy helps me perform best', type: 'S', score: 2 },
      { text: 'Only if I deeply respect their vision', type: 'Pr', score: 2 },
      { text: 'Rarely — I prefer to set my own direction', type: 'W', score: 3 },
      { text: 'Never — I am the person others look to for direction', type: 'K', score: 3 },
    ]
  },
  {
    id: 'q_rev_03',
    reversed: true,
    text: 'I feel most useful when I am following someone else\'s plan precisely.',
    answers: [
      // Tests for genuine Server vs. someone gaming toward Server
      { text: 'Yes — I find peace in supporting a bigger vision', type: 'S', score: 3 },
      { text: 'Sometimes, if the plan is intelligent and the cause is right', type: 'W', score: 2 },
      { text: 'Rarely — I usually want to improve or redesign the plan', type: 'A', score: 2 },
      { text: 'Never — I need to understand why before I commit to anything', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_rev_04',
    reversed: true,
    text: 'I enjoy being the center of attention in large groups.',
    answers: [
      // Tests genuine Performers vs. introverted types gaming toward P
      { text: 'Yes — I feel fully alive when a room is paying attention to me', type: 'P', score: 3 },
      { text: 'Only if I have something real to say — not just for its own sake', type: 'Pr', score: 2 },
      { text: 'I prefer smaller, deeper conversations', type: 'Sc', score: 2 },
      { text: 'I prefer being the force behind others who shine', type: 'K', score: 2 },
    ]
  },
  {
    id: 'q_rev_05',
    reversed: true,
    text: 'I find it easy to set firm boundaries and tell people "no."',
    answers: [
      // Servers often find this hardest — catches gaming
      { text: 'Yes — my energy is non-negotiable and I protect it fiercely', type: 'W', score: 3 },
      { text: 'Usually, though I feel it when I let people down', type: 'K', score: 2 },
      { text: 'Sometimes, but I often feel guilty saying no to people I care about', type: 'S', score: 3 },
      { text: 'I say no to obligations that pull me away from my creative work', type: 'A', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // FORCED-CHOICE pairs (type: 'forced_choice')
  // ─────────────────────────────────────────────
  {
    id: 'q_fc_01',
    type: 'forced_choice',
    text: 'Which matters more to you?',
    optionA: { text: 'Being genuinely helpful to a person right in front of you', type: 'S', score: 2 },
    optionB: { text: 'Creating something original that could help millions', type: 'A', score: 2 },
  },
  {
    id: 'q_fc_02',
    type: 'forced_choice',
    text: 'If you had to choose, you would rather be known as...',
    optionA: { text: 'Someone who fought fearlessly for what was right', type: 'W', score: 2 },
    optionB: { text: 'Someone who awakened people to a deeper truth', type: 'Pr', score: 2 },
  },
  {
    id: 'q_fc_03',
    type: 'forced_choice',
    text: 'Which feels more like your true nature?',
    optionA: { text: 'The one who understands everything deeply before acting', type: 'Sc', score: 2 },
    optionB: { text: 'The one who inspires people through powerful expression', type: 'P', score: 2 },
  },
  {
    id: 'q_fc_04',
    type: 'forced_choice',
    text: 'When it comes to legacy, you care more about...',
    optionA: { text: 'Building something that still serves people long after you are gone', type: 'K', score: 2 },
    optionB: { text: 'The individual lives you transformed through deep care', type: 'S', score: 2 },
  },
  {
    id: 'q_fc_05',
    type: 'forced_choice',
    text: 'If you had to choose your primary gift, it would be...',
    optionA: { text: 'The ability to create things that move and transform people', type: 'A', score: 2 },
    optionB: { text: 'The ability to lead and align others toward a shared mission', type: 'K', score: 2 },
  },

];

// Export for use in quiz.js
if (typeof module !== 'undefined') {
  module.exports = { questionBank };
}
