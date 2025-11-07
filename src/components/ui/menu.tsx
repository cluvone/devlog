'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants';

export default function Menu() {
  const pathname = usePathname();
  const rootPath = '/' + (pathname.split('/').filter(Boolean).at(0) ?? '');

  return (
    <ul className="hidden items-center gap-x-2 md:flex">
      {NAV_ITEMS.map(item => (
        <li key={item.href} className={clsx('transition-opacity hover:opacity-100', rootPath === item.href ? 'font-medium opacity-100' : 'opacity-50')}>
          <Link
            href={item.href}
            className={clsx(
              'after:bg-foreground relative block p-4 after:absolute after:bottom-0.5 after:left-4 after:h-0.5 after:w-[calc(100%-(--spacing(8)))] after:scale-x-0 after:rounded-full after:transition-transform hover:after:scale-x-100',
              { 'after:scale-x-100': rootPath === item.href },
            )}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
