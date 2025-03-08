export interface ITextContext {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface ITextProvider {
  children: React.ReactNode;
}
