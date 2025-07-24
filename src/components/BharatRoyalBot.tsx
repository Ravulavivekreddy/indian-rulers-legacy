
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, ChevronUp, ChevronDown } from 'lucide-react';

import QuizStart from './BharatRoyalBot/QuizStart';
import QuizQuestion from './BharatRoyalBot/QuizQuestion';
import QuizResult from './BharatRoyalBot/QuizResult';
import { calculateResult, getRandomizedQuestions } from './BharatRoyalBot/utils';
import { Royal, Question } from './BharatRoyalBot/types';

const BharatRoyalBot: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [result, setResult] = useState<Royal | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionOrder, setQuestionOrder] = useState<Question[]>([]);

  const handleAnswerSelect = (answerIndex: string) => {
    console.log('Answer selected:', answerIndex);
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    console.log('Next question clicked, selected answer:', selectedAnswer);
    if (selectedAnswer === '') {
      console.log('No answer selected, returning');
      return;
    }

    const newAnswers = [...answers, selectedAnswer];
    console.log('Updated answers:', newAnswers);
    setAnswers(newAnswers);
    setSelectedAnswer('');

    if (currentQuestion < questionOrder.length - 1) {
      console.log('Moving to next question:', currentQuestion + 1);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log('Quiz completed, calculating result');
      const calculatedResult = calculateResult(newAnswers, questionOrder);
      setResult(calculatedResult);
      setShowResult(true);
      setQuizStarted(false);
    }
  };

  const resetQuiz = () => {
    console.log('Resetting quiz');
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer('');
    setResult(null);
    setShowResult(false);
    setQuizStarted(false);
    setQuestionOrder([]);
  };

  const startQuiz = () => {
    console.log('Starting quiz');
    resetQuiz();
    const randomizedQuestions = getRandomizedQuestions();
    console.log('Randomized questions order:', randomizedQuestions.map(q => q.id));
    setQuestionOrder(randomizedQuestions);
    setQuizStarted(true);
  };

  const handleToggleExpanded = () => {
    console.log('Toggling bot expanded state');
    setIsExpanded(!isExpanded);
  };

  const handleCloseBot = () => {
    console.log('Closing bot');
    setIsExpanded(false);
    resetQuiz();
  };

  console.log('BharatRoyalBot render - isExpanded:', isExpanded, 'currentQuestion:', currentQuestion, 'showResult:', showResult, 'quizStarted:', quizStarted);

  return (
    <div className="fixed bottom-0 right-4 z-50 w-96">
      {/* Collapsed Tab */}
      {!isExpanded && (
        <div 
          onClick={handleToggleExpanded}
          className="bg-heritage-gold hover:bg-heritage-gold/90 text-white px-6 py-3 rounded-t-lg cursor-pointer shadow-lg border-heritage-gold/30 border transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5" />
              <span className="font-playfair font-semibold">Discover Your Royal Personality</span>
            </div>
            <ChevronUp className="h-4 w-4" />
          </div>
        </div>
      )}

      {/* Expanded Bot Interface */}
      {isExpanded && (
        <Card className="bg-gradient-to-br from-heritage-cream to-background border-heritage-gold/30 shadow-xl rounded-t-lg">
          <CardHeader className="bg-heritage-gold/10 border-b border-heritage-gold/20 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Crown className="h-6 w-6 text-heritage-gold" />
                <CardTitle className="font-playfair text-heritage-maroon">
                  Royal Personality Quiz
                </CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleToggleExpanded}
                className="h-6 w-6"
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            {showResult && result ? (
              <QuizResult
                result={result}
                onTakeAgain={startQuiz}
                onClose={handleCloseBot}
              />
            ) : quizStarted && questionOrder.length > 0 ? (
              <QuizQuestion
                question={questionOrder[currentQuestion]}
                currentQuestionIndex={currentQuestion}
                totalQuestions={questionOrder.length}
                selectedAnswer={selectedAnswer}
                onAnswerSelect={handleAnswerSelect}
                onNext={handleNextQuestion}
                isLastQuestion={currentQuestion === questionOrder.length - 1}
              />
            ) : (
              <QuizStart onStart={startQuiz} />
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BharatRoyalBot;
