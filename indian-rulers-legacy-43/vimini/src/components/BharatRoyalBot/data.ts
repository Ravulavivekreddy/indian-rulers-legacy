import { Question, Royal } from './types';

export const questions: Question[] = [
  {
    id: 1,
    question: "How do you handle a major challenge or threat?",
    options: [
      { text: "Face it head-on with courage and determination", traits: ["brave", "bold"] },
      { text: "Plan strategically and gather allies", traits: ["strategic", "wise"] },
      { text: "Seek peaceful solutions first", traits: ["peaceful", "diplomatic"] },
      { text: "Never give up, no matter the odds", traits: ["resilient", "determined"] }
    ]
  },
  {
    id: 2,
    question: "What quality do you admire most in a leader?",
    options: [
      { text: "Protecting and caring for their people", traits: ["people-focused", "protective"] },
      { text: "Strategic brilliance and military prowess", traits: ["strategic", "mighty"] },
      { text: "Wisdom and the ability to bring peace", traits: ["wise", "peaceful"] },
      { text: "Artistic vision and cultural advancement", traits: ["artistic", "visionary"] }
    ]
  },
  {
    id: 3,
    question: "How do you prefer to solve conflicts?",
    options: [
      { text: "Through direct action and personal involvement", traits: ["bold", "brave"] },
      { text: "By inspiring others to join your cause", traits: ["inspiring", "patriotic"] },
      { text: "Through negotiation and understanding", traits: ["diplomatic", "wise"] },
      { text: "By standing firm on your principles", traits: ["proud", "determined"] }
    ]
  },
  {
    id: 4,
    question: "What motivates you the most?",
    options: [
      { text: "Protecting your loved ones and homeland", traits: ["patriotic", "protective"] },
      { text: "Achieving greatness and leaving a legacy", traits: ["mighty", "visionary"] },
      { text: "Bringing positive change to society", traits: ["progressive", "inspiring"] },
      { text: "Maintaining honor and dignity", traits: ["proud", "noble"] }
    ]
  },
  {
    id: 5,
    question: "How do you want to be remembered?",
    options: [
      { text: "As a fearless warrior who never backed down", traits: ["brave", "bold"] },
      { text: "As a wise ruler who brought peace and prosperity", traits: ["wise", "peaceful"] },
      { text: "As someone who broke barriers and inspired others", traits: ["progressive", "inspiring"] },
      { text: "As a strategic genius who built an empire", traits: ["strategic", "mighty"] }
    ]
  },
  {
    id: 6,
    question: "What is your approach to making difficult decisions?",
    options: [
      { text: "Trust your instincts and act quickly", traits: ["bold", "brave"] },
      { text: "Consult wise advisors and consider all options", traits: ["wise", "diplomatic"] },
      { text: "Think about what's best for the people", traits: ["people-focused", "protective"] },
      { text: "Follow your moral compass regardless of consequences", traits: ["noble", "determined"] }
    ]
  },
  {
    id: 7,
    question: "How do you inspire loyalty in others?",
    options: [
      { text: "By leading from the front in every battle", traits: ["brave", "inspiring"] },
      { text: "Through fair treatment and justice", traits: ["wise", "noble"] },
      { text: "By sharing your vision of a better future", traits: ["visionary", "progressive"] },
      { text: "Through unwavering dedication to your cause", traits: ["determined", "patriotic"] }
    ]
  },
  {
    id: 8,
    question: "What role does tradition play in your life?",
    options: [
      { text: "I respect it but am willing to change when needed", traits: ["progressive", "wise"] },
      { text: "I uphold it fiercely as the foundation of society", traits: ["proud", "noble"] },
      { text: "I use it to unite people under common values", traits: ["diplomatic", "inspiring"] },
      { text: "I adapt it to serve the people's needs", traits: ["people-focused", "strategic"] }
    ]
  },
  {
    id: 9,
    question: "How do you handle betrayal or disloyalty?",
    options: [
      { text: "With swift and decisive action", traits: ["bold", "determined"] },
      { text: "Try to understand their motivations first", traits: ["wise", "diplomatic"] },
      { text: "Use it as a lesson to protect others", traits: ["protective", "strategic"] },
      { text: "Stand even stronger in your convictions", traits: ["resilient", "proud"] }
    ]
  },
  {
    id: 10,
    question: "What drives your ambition?",
    options: [
      { text: "The desire to protect the innocent", traits: ["protective", "noble"] },
      { text: "The vision of a glorious empire", traits: ["mighty", "visionary"] },
      { text: "The need to right historical wrongs", traits: ["patriotic", "determined"] },
      { text: "The pursuit of knowledge and culture", traits: ["artistic", "wise"] }
    ]
  },
  {
    id: 11,
    question: "How do you deal with overwhelming odds?",
    options: [
      { text: "Fight harder and never surrender", traits: ["brave", "resilient"] },
      { text: "Find creative solutions and allies", traits: ["strategic", "diplomatic"] },
      { text: "Inspire others to stand with you", traits: ["inspiring", "bold"] },
      { text: "Stay true to your principles no matter what", traits: ["proud", "determined"] }
    ]
  },
  {
    id: 12,
    question: "What is your greatest strength as a leader?",
    options: [
      { text: "Unshakeable courage in the face of danger", traits: ["brave", "bold"] },
      { text: "The ability to see the bigger picture", traits: ["visionary", "strategic"] },
      { text: "Deep compassion for your people", traits: ["people-focused", "protective"] },
      { text: "Unwavering moral principles", traits: ["noble", "wise"] }
    ]
  },
  {
    id: 13,
    question: "How do you build alliances?",
    options: [
      { text: "Through mutual respect and shared values", traits: ["diplomatic", "noble"] },
      { text: "By proving your strength and reliability", traits: ["mighty", "strategic"] },
      { text: "Through cultural exchange and understanding", traits: ["artistic", "peaceful"] },
      { text: "By standing up for the oppressed together", traits: ["protective", "inspiring"] }
    ]
  },
  {
    id: 14,
    question: "What legacy do you want to leave behind?",
    options: [
      { text: "A land where justice and freedom prevail", traits: ["noble", "progressive"] },
      { text: "Stories of courage that inspire future generations", traits: ["brave", "inspiring"] },
      { text: "A prosperous and culturally rich empire", traits: ["visionary", "artistic"] },
      { text: "A united people who remember their heritage", traits: ["patriotic", "wise"] }
    ]
  },
  {
    id: 15,
    question: "How do you respond to criticism?",
    options: [
      { text: "Consider it carefully and learn from it", traits: ["wise", "progressive"] },
      { text: "Stand firm if you believe you're right", traits: ["determined", "proud"] },
      { text: "Use it to better serve your people", traits: ["people-focused", "diplomatic"] },
      { text: "Let your actions speak louder than words", traits: ["bold", "resilient"] }
    ]
  },
  {
    id: 16,
    question: "What is your approach to warfare?",
    options: [
      { text: "Only as a last resort for protection", traits: ["peaceful", "protective"] },
      { text: "A necessary tool for achieving justice", traits: ["strategic", "noble"] },
      { text: "Fight with honor and respect for enemies", traits: ["brave", "proud"] },
      { text: "Use any means necessary to protect your people", traits: ["determined", "patriotic"] }
    ]
  },
  {
    id: 17,
    question: "How do you maintain hope during dark times?",
    options: [
      { text: "Remember the cause you're fighting for", traits: ["patriotic", "inspiring"] },
      { text: "Focus on the strength of your people", traits: ["people-focused", "resilient"] },
      { text: "Trust in your ability to find a solution", traits: ["strategic", "determined"] },
      { text: "Draw strength from your cultural heritage", traits: ["proud", "wise"] }
    ]
  },
  {
    id: 18,
    question: "What role does honor play in your decisions?",
    options: [
      { text: "It guides every choice I make", traits: ["noble", "proud"] },
      { text: "Important, but people's welfare comes first", traits: ["people-focused", "wise"] },
      { text: "It must be balanced with practical needs", traits: ["strategic", "diplomatic"] },
      { text: "It's what separates leaders from tyrants", traits: ["brave", "inspiring"] }
    ]
  },
  {
    id: 19,
    question: "How do you celebrate victories?",
    options: [
      { text: "Honor those who fought alongside you", traits: ["noble", "inspiring"] },
      { text: "Share the glory with your people", traits: ["people-focused", "generous"] },
      { text: "Use it as motivation for greater achievements", traits: ["ambitious", "visionary"] },
      { text: "Remember it came through sacrifice and dedication", traits: ["wise", "humble"] }
    ]
  },
  {
    id: 20,
    question: "What is your relationship with power?",
    options: [
      { text: "A responsibility to serve and protect", traits: ["protective", "noble"] },
      { text: "A tool to bring about positive change", traits: ["progressive", "visionary"] },
      { text: "Something that must be earned through merit", traits: ["proud", "determined"] },
      { text: "A means to preserve culture and values", traits: ["wise", "artistic"] }
    ]
  },
  {
    id: 21,
    question: "How do you handle success?",
    options: [
      { text: "Stay humble and remember your roots", traits: ["wise", "people-focused"] },
      { text: "Use it as a platform for greater goals", traits: ["ambitious", "visionary"] },
      { text: "Share it with those who supported you", traits: ["generous", "inspiring"] },
      { text: "See it as validation of your principles", traits: ["proud", "determined"] }
    ]
  },
  {
    id: 22,
    question: "What motivates you to keep fighting?",
    options: [
      { text: "The faces of those counting on you", traits: ["people-focused", "protective"] },
      { text: "The vision of what could be achieved", traits: ["visionary", "inspiring"] },
      { text: "The duty to your ancestors and heritage", traits: ["patriotic", "noble"] },
      { text: "The refusal to accept injustice", traits: ["determined", "brave"] }
    ]
  },
  {
    id: 23,
    question: "How do you choose your closest advisors?",
    options: [
      { text: "Based on their wisdom and experience", traits: ["wise", "strategic"] },
      { text: "Those who share your vision and values", traits: ["inspiring", "noble"] },
      { text: "People who understand the common folk", traits: ["people-focused", "diplomatic"] },
      { text: "Proven warriors and loyal friends", traits: ["brave", "patriotic"] }
    ]
  },
  {
    id: 24,
    question: "What is your approach to education and learning?",
    options: [
      { text: "Essential for progress and enlightenment", traits: ["progressive", "wise"] },
      { text: "Important for preserving cultural heritage", traits: ["artistic", "proud"] },
      { text: "Should be accessible to all people", traits: ["people-focused", "inspiring"] },
      { text: "Practical skills for defending the realm", traits: ["strategic", "protective"] }
    ]
  },
  {
    id: 25,
    question: "How do you view change and innovation?",
    options: [
      { text: "Embrace it if it serves the people", traits: ["progressive", "people-focused"] },
      { text: "Carefully consider its impact on tradition", traits: ["wise", "proud"] },
      { text: "Use it as a tool for strategic advantage", traits: ["strategic", "visionary"] },
      { text: "Welcome it if it upholds justice", traits: ["noble", "inspiring"] }
    ]
  },
  {
    id: 26,
    question: "What is your greatest fear as a leader?",
    options: [
      { text: "Failing to protect those who trust you", traits: ["protective", "people-focused"] },
      { text: "Losing sight of your principles", traits: ["noble", "wise"] },
      { text: "Being remembered as a tyrant", traits: ["inspiring", "diplomatic"] },
      { text: "Seeing your legacy destroyed", traits: ["proud", "visionary"] }
    ]
  },
  {
    id: 27,
    question: "How do you balance personal desires with duty?",
    options: [
      { text: "Duty always comes first", traits: ["noble", "determined"] },
      { text: "Find harmony between both when possible", traits: ["wise", "diplomatic"] },
      { text: "Personal happiness helps serve others better", traits: ["people-focused", "progressive"] },
      { text: "Great achievements require personal sacrifice", traits: ["ambitious", "patriotic"] }
    ]
  },
  {
    id: 28,
    question: "What is your approach to dealing with enemies?",
    options: [
      { text: "Defeat them decisively but honorably", traits: ["brave", "noble"] },
      { text: "Try to understand and convert them", traits: ["wise", "diplomatic"] },
      { text: "Protect your people from their threat", traits: ["protective", "strategic"] },
      { text: "Show them the strength of your convictions", traits: ["determined", "inspiring"] }
    ]
  },
  {
    id: 29,
    question: "How do you maintain unity among diverse groups?",
    options: [
      { text: "Through shared values and common goals", traits: ["inspiring", "diplomatic"] },
      { text: "By respecting different traditions equally", traits: ["wise", "progressive"] },
      { text: "Focus on what benefits everyone", traits: ["people-focused", "strategic"] },
      { text: "Lead by example and personal integrity", traits: ["noble", "proud"] }
    ]
  },
  {
    id: 30,
    question: "What drives your sense of justice?",
    options: [
      { text: "Protecting the innocent and vulnerable", traits: ["protective", "noble"] },
      { text: "Ensuring everyone has equal opportunity", traits: ["progressive", "inspiring"] },
      { text: "Upholding the sacred laws and traditions", traits: ["proud", "wise"] },
      { text: "Fighting against oppression wherever it exists", traits: ["brave", "determined"] }
    ]
  }
];

export const royals: Royal[] = [
  {
    name: "Chhatrapati Shivaji Maharaj",
    title: "The People's King",
    description: "A brave strategist and champion of the people",
    traits: ["brave", "strategic", "people-focused", "protective"],
    message: "You are like Chhatrapati Shivaji Maharaj – a brave soul with the heart of a true leader who fights for justice and protects the innocent!"
  },
  {
    name: "Rani Lakshmibai",
    title: "The Warrior Queen",
    description: "Fearless, patriotic, and bold",
    traits: ["brave", "bold", "patriotic", "determined"],
    message: "You are like Rani Lakshmibai – a fierce spirit with a heart full of courage and an unbreakable will to protect what you love!"
  },
  {
    name: "Ashoka the Great",
    title: "The Emperor of Peace",
    description: "Powerful, wise, and peace-seeking",
    traits: ["wise", "peaceful", "mighty", "diplomatic"],
    message: "You are like Ashoka the Great – a powerful soul who seeks wisdom and brings peace wherever you go!"
  },
  {
    name: "Maharana Pratap",
    title: "The Pride of Mewar",
    description: "Determined, resilient, and proud",
    traits: ["determined", "resilient", "proud", "noble"],
    message: "You are like Maharana Pratap – a proud warrior with an indomitable spirit who never bows to injustice!"
  },
  {
    name: "Samudragupta",
    title: "The Golden Emperor",
    description: "Artistic, visionary, and mighty",
    traits: ["artistic", "visionary", "mighty", "strategic"],
    message: "You are like Samudragupta – a visionary ruler with the soul of an artist and the might of a great emperor!"
  },
  {
    name: "Queen Rudrama Devi",
    title: "The Progressive Queen",
    description: "Strong, progressive, and inspiring",
    traits: ["progressive", "inspiring", "bold", "wise"],
    message: "You are like Queen Rudrama Devi – a progressive spirit who breaks barriers and inspires others to reach for greatness!"
  }
];
