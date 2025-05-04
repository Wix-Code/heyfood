"use client"

import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AppContextType {
  openSearch: boolean;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
  openSearchMobile: boolean;
  setOpenSearchMobile: Dispatch<SetStateAction<boolean>>;
}

export const contextApi = createContext<AppContextType | null>(null);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openSearchMobile, setOpenSearchMobile] = useState(false);

  return (
    <contextApi.Provider value={{ openSearch, setOpenSearch, openSearchMobile, setOpenSearchMobile }}>
      {children}
    </contextApi.Provider>
  );
};

export default ContextProvider;