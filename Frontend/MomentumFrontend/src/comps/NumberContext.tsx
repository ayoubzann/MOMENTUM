import { createContext, ReactNode, useState } from "react";

type MoodContextType = {
  mood: number;
  updateNumber: (newNumber: number) => void;
};

const MoodContext = createContext<MoodContextType>({
  mood: 0,
  updateNumber: (newNumber: number) => {},
});

type MoodProviderProps = {
  children: ReactNode;
};

const MoodProvider = ({ children }: MoodProviderProps) => {
  const [mood, setMood] = useState(0);

  const updateNumber = (newNumber: number) => {
    setMood(newNumber);
  };

  return (
    <MoodContext.Provider value={{ mood, updateNumber }}>
      {children}
    </MoodContext.Provider>
  );
};

export { MoodProvider, MoodContext };
