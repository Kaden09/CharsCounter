import { createContext, useContext, useState } from "react";
import { ITextProvider, ITextContext } from "../../config/text.ts";

const TextContext = createContext<ITextContext>({
  text: "",
  onChange: () => {},
});

function TextProvider({ children }: ITextProvider) {
  const [text, setText] = useState("");

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <TextContext.Provider value={{ text, onChange }}>
      {children}
    </TextContext.Provider>
  );
}

export function useText() {
  return useContext(TextContext);
}

export default TextProvider;
