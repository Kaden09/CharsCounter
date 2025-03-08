export interface ITextContext {
  text: string;
  spacesChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onCheckbox: () => void;
}

export interface ITextProvider {
  children: React.ReactNode;
}
