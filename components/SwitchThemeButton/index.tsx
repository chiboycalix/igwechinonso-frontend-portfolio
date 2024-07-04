'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="cursor-pointer">
      {
        resolvedTheme === "light" ? <MoonIcon onClick={() => {
          setTheme('dark')
          localStorage.removeItem("theme")
        }} className='w-5'/> : <SunIcon onClick={() => setTheme('light')} className='w-5 text-gray-500'/>
      }
    </div>
  );
};

export default ThemeSwitcher;
