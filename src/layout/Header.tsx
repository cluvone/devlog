import Link from 'next/link';
import Menu from './Menu';
import { SlMagnifier, SlMenu } from 'react-icons/sl';

const HEADER_TITLE = 'Cluvone';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 w-full bg-white px-4 md:h-20 md:px-8">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between">
        <Link href="/" aria-label={HEADER_TITLE} className="min-w-0">
          <h1 className="flex items-center justify-between gap-x-3 text-2xl">
            <div>🌷</div>
            <div className="truncate font-mono font-light">{HEADER_TITLE}</div>
          </h1>
        </Link>

        <nav className="flex items-center gap-x-8">
          <Menu />

          <div className="flex items-center gap-x-2">
            <div className="cursor-pointer p-2 transition-opacity hover:opacity-50">
              <SlMagnifier className="h-6 w-6" />
            </div>
            <div className="cursor-pointer p-2 transition-opacity hover:opacity-50 md:hidden">
              <SlMenu className="h-6 w-6" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
