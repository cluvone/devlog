import Link from 'next/link';
import Menu from './Menu';
import { SlMagnifier, SlMenu } from 'react-icons/sl';

const HEADER_TITLE = 'cluvone.me';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 w-full px-4 backdrop-blur-lg md:h-20 md:px-8">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between">
        <Link href="/" aria-label={HEADER_TITLE} className="min-w-0">
          <h1 className="truncate font-mono text-2xl font-medium">{HEADER_TITLE}</h1>
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
