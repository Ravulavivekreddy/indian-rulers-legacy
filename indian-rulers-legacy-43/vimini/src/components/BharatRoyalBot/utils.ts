
import { questions, royals } from './data';
import { Royal, Question } from './types';

// Store the last used question IDs to prevent duplicates in consecutive quizzes
let lastUsedQuestionIds: number[] = [];

// Function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Function to get 5 random questions, avoiding the ones from the last quiz
export const getRandomizedQuestions = (): Question[] => {
  console.log('Last used question IDs:', lastUsedQuestionIds);
  
  // Filter out questions that were used in the last quiz
  const availableQuestions = questions.filter(q => !lastUsedQuestionIds.includes(q.id));
  
  // If we don't have enough questions (unlikely with 30 total), use all questions
  const questionsToChooseFrom = availableQuestions.length >= 5 ? availableQuestions : questions;
  
  // Shuffle and take the first 5
  const shuffledQuestions = shuffleArray(questionsToChooseFrom);
  const selectedQuestions = shuffledQuestions.slice(0, 5);
  
  // Store the IDs of the selected questions for next time
  lastUsedQuestionIds = selectedQuestions.map(q => q.id);
  
  console.log('Selected question IDs for this quiz:', lastUsedQuestionIds);
  
  return selectedQuestions;
};

export const calculateResult = (userAnswers: string[], questionOrder: Question[]): Royal => {
  console.log('Calculating result for answers:', userAnswers);
  const traitCounts: { [key: string]: number } = {};

  userAnswers.forEach((answerIndex, questionIndex) => {
    const selectedOption = questionOrder[questionIndex].options[parseInt(answerIndex)];
    selectedOption.traits.forEach(trait => {
      traitCounts[trait] = (traitCounts[trait] || 0) + 1;
    });
  });

  console.log('Trait counts:', traitCounts);

  let bestMatch = royals[0];
  let highestScore = 0;

  royals.forEach(royal => {
    const score = royal.traits.reduce((sum, trait) => sum + (traitCounts[trait] || 0), 0);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = royal;
    }
  });

  console.log('Best match:', bestMatch.name, 'with score:', highestScore);
  return bestMatch;
};
