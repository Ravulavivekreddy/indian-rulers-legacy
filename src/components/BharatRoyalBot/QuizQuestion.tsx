
import React from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Question } from './types';

interface QuizQuestionProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswer: string;
  onAnswerSelect: (answer: string) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  isLastQuestion
}) => {
  const handleAnswerChange = (value: string) => {
    console.log('Answer selected in QuizQuestion:', value);
    onAnswerSelect(value);
  };

  const handleNext = () => {
    console.log('Next button clicked in QuizQuestion');
    onNext();
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-sm text-heritage-gold font-medium">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
        <div className="w-full bg-heritage-cream/50 rounded-full h-2 mt-2">
          <div 
            className="bg-heritage-gold h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>
      
      <h3 className="font-playfair text-heritage-maroon font-semibold">
        {question.question}
      </h3>
      
      <RadioGroup value={selectedAnswer} onValueChange={handleAnswerChange}>
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={index.toString()} id={`option-${index}`} />
            <Label 
              htmlFor={`option-${index}`}
              className="text-sm cursor-pointer flex-1"
            >
              {option.text}
            </Label>
          </div>
        ))}
      </RadioGroup>
      
      <Button
        onClick={handleNext}
        disabled={selectedAnswer === ''}
        className="w-full bg-heritage-gold hover:bg-heritage-gold/90 disabled:opacity-50"
      >
        {isLastQuestion ? 'Reveal My Royal Identity' : 'Next Question'}
      </Button>
    </div>
  );
};

export default QuizQuestion;
