
import React from 'react';
import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';
import { Royal } from './types';

interface QuizResultProps {
  result: Royal;
  onTakeAgain: () => void;
  onClose: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ result, onTakeAgain, onClose }) => {
  const handleTakeAgain = () => {
    console.log('Take again clicked');
    onTakeAgain();
  };

  const handleClose = () => {
    console.log('Close clicked');
    onClose();
  };

  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <Crown className="h-16 w-16 text-heritage-gold" />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-playfair text-xl text-heritage-maroon font-bold">
          👑 Your Royal Personality!
        </h3>
        <h4 className="font-playfair text-lg text-heritage-gold font-semibold">
          {result.name}
        </h4>
        <p className="text-sm text-heritage-maroon italic">
          "{result.title}"
        </p>
      </div>
      
      <div className="bg-heritage-cream/30 p-4 rounded-lg border border-heritage-gold/20">
        <p className="text-sm text-muted-foreground font-medium">
          {result.message}
        </p>
      </div>
      
      <div className="flex gap-2">
        <Button
          onClick={handleTakeAgain}
          variant="outline"
          className="flex-1 border-heritage-gold/30"
        >
          Take Again
        </Button>
        <Button
          onClick={handleClose}
          className="flex-1 bg-heritage-gold hover:bg-heritage-gold/90"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default QuizResult;
