import { useEffect, useState } from "react";

function usePersistedTheme(key: string, inititialState: any) {
  const [theme, setTheme] = useState(inititialState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [theme, key]);

  return [theme, setTheme];
};

export default usePersistedTheme;