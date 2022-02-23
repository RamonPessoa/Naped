import React, { useContext } from 'react';

export const newsContext = React.createContext({});

export function useNews() {
  const context = useContext(newsContext);
  return context;
}
