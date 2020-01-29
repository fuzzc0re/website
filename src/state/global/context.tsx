//
// Copyright (c) 2019 Fuzznets. All rights reserved.
//

import React, { FC, createContext, useState, useEffect } from 'react';

import { useStorageState } from '../../hooks/useState/localStorage';

interface IGlobalContextValue {
  title: string;
  lang: string;
  theme: string;
  setTitle: (title: string) => void;
  setLang: (lang: string) => void;
  setTheme: (theme: string) => void;
}

const globalContextDefaultValue = {
  title: 'About Me',
  lang: 'eng',
  theme: 'defautl',
  setTitle: (title: string) => {},
  setLang: (lang: string) => {},
  setTheme: (theme: string) => {},
};

export const GlobalContext = createContext<IGlobalContextValue>(
  globalContextDefaultValue
);

export const GlobalProvider: FC = ({ children }) => {
  const [title, setTitle] = useState('About Me');
  const [lang, setLang] = useStorageState('lang', 'eng');
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    window.localStorage.setItem('title', title);
  }, [title]);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  function handleTitle(title: string) {
    setTitle(title);
  }

  function handleLang(lang: string) {
    setLang(lang);
  }

  function handleTheme(theme: string) {
    setTheme(theme);
  }

  return (
    <GlobalContext.Provider
      value={{
        title: title,
        lang: lang,
        theme: theme,
        setTitle: handleTitle,
        setLang: handleLang,
        setTheme: handleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Works only if combineReducers works
// const [state, dispatch] = useReducer(reducer, initialState);
// const globalProviderMemoizedValue = useMemo(() => {
//   // So that we do not have unnecessary rerenders
//   return { state, dispatch };
// }, [state, dispatch]);

// useEffect(() => {
//   window.localStorage.setItem('authed', JSON.stringify(state.authed));
// }, [state.authed]);

// useEffect(() => {
//   window.localStorage.setItem('name', state.name);
// }, [state.name]);

// useEffect(() => {
//   window.localStorage.setItem('artist', JSON.stringify(state.artist));
// }, [state.artist]);

// useEffect(() => {
//   window.localStorage.setItem('theme', state.theme);
// }, [state.theme]);
