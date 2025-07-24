
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

interface QuizStartProps {
  onStart: () => void;
}

const QuizStart: React.FC<QuizStartProps> = ({ onStart }) => {
  const handleStart = () => {
    console.log('Start quiz button clicked');
    onStart();
  };

  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <MessageSquare className="h-12 w-12 text-heritage-gold" />
      </div>
      <h3 className="font-playfair text-lg text-heritage-maroon">
        🙏 Namaste! Discover Your Inner Royal!
      </h3>
      <p className="text-sm text-muted-foreground">
        Take this personality quiz to find out which legendary Indian ruler matches your character! 
        Answer 5 questions and discover your royal identity.
      </p>
      <Button
        onClick={handleStart}
        className="w-full bg-heritage-gold hover:bg-heritage-gold/90"
      >
        Start Your Royal Journey
      </Button>
    </div>
  );
};

export default QuizStart;
