import { useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useColorScheme(): {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
} {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    prefersDark => {
      setIsDark(prefersDark);
    }
  );

  const [isDark, setIsDark] = useState<boolean>(systemPrefersDark);

  const value = useMemo(() => isDark === undefined ? !!systemPrefersDark : isDark,
    [isDark, systemPrefersDark])

  useEffect(() => {
    if (value) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
}