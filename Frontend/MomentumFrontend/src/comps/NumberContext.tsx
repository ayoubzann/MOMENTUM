import { createContext, useState } from "react";

const MoodContext = createContext({
    mood: 10, 
    updateNumber: (newNumber: number) => {}
  });

export default MoodContext;


const MoodProvider = ({children}) => {
  const [mood, setMood] = useState(0);

  const updateNumber = (newNumber) => {
    setMood(newNumber);
  };

  return (
    <MoodContext.Provider value={{mood, updateNumber}}>
      {children}
    </MoodContext.Provider>
  )
}

export {MoodProvider, MoodContext};