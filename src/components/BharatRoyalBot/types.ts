
export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    traits: string[];
  }[];
}

export interface Royal {
  name: string;
  title: string;
  description: string;
  traits: string[];
  message: string;
}
