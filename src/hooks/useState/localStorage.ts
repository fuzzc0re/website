//
// Copyright (c) 2019 Fuzznets. All rights reserved.
//

import { useState } from 'react';

export const useStorageState = <T>(
  key: string,
  defaultValue: T
): [T, (valueToSet: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  });

  const setValue = (value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(storedValue));
  // }, [storedValue]);

  return [storedValue, setValue];
};
