import { createContext, useContext, useState } from "react";
import { ITextProvider, ITextContext } from "../../config/text.ts";

const TextContext = createContext<ITextContext>({
  text: "",
  letters: {},
  spacesChecked: false,
  onChange: () => {},
  onCheckbox: () => {},
  fillLetters: () => {},
});

function TextProvider({ children }: ITextProvider) {
  const [text, setText] = useState("");
  const [spacesChecked, setSpacesChecked] = useState(false);
  const [letters, setLetters] = useState<{ [key: string]: number }>({});

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  function onCheckbox() {
    setSpacesChecked(!spacesChecked);
  }

  function fillLetters(text: string): void {
    let set = new Set<string>(text);
    const letters: { [key: string]: number } = {};

    if (spacesChecked) {
      text = text.split(" ").join("");
      set = new Set<string>(text);
    }

    set.forEach((el: string) => {
      letters[el] = text.split("").filter((e: string) => e === el).length;
    });

    const sortedArr = Object.entries(letters).sort(([, a], [, b]) => b - a);

    setLetters(Object.fromEntries(sortedArr));
  }

  return (
    <TextContext.Provider
      value={{
        text,
        letters,
        onChange,
        spacesChecked,
        onCheckbox,
        fillLetters,
      }}
    >
      {children}
    </TextContext.Provider>
  );
}

export function useText() {
  return useContext(TextContext);
}

export default TextProvider;
