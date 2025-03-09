export interface ITextContext {
  text: string;
  letters: { [key: string]: number };
  spacesChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onCheckbox: () => void;
  fillLetters: (text: string) => void;
}

export interface ITextProvider {
  children: React.ReactNode;
}
