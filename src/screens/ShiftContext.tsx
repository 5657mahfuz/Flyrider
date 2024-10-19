import React, { createContext, useContext, useState } from "react";

interface ShiftContextType {
  isWorking: boolean;
  setIsWorking: (value: boolean) => void;
}

const ShiftContext = createContext<ShiftContextType | undefined>(undefined);

export const ShiftProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isWorking, setIsWorking] = useState(false);

  return (
    <ShiftContext.Provider value={{ isWorking, setIsWorking }}>
      {children}
    </ShiftContext.Provider>
  );
};

export const useShift = () => {
  const context = useContext(ShiftContext);
  if (!context) {
    throw new Error("useShift must be used within a ShiftProvider");
  }
  return context;
};
