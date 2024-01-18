import { createContext, useState } from "react";

const MoodContext = createContext({
    number: 0, 
    updateNumber: (newNumber: number) => {}
  });

export default MoodContext;


const MoodProvider = ({children}) => {
  const [number, setNumber] = useState(0);

  const updateNumber = (newNumber) => {
    setNumber(newNumber);
  };

  return (
    <MoodContext.Provider value={{number, updateNumber}}>
      {children}
    </MoodContext.Provider>
  )
}

export {MoodProvider, MoodContext};