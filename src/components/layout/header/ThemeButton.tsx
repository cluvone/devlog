'use client';

import { useTheme } from 'next-themes';
import { EclipseIcon } from 'lucide-react';
import { Button } from '@/components';

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = (): void => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return <Button variant="ghost" size="icon" title="테마" aria-label="테마 변경" icon={<EclipseIcon className="text-icon size-5" />} onClick={toggleTheme} />;
}
