import ThemeButton from './ThemeButton';
import { Breadcrumb, Button, SearchDialog, SidebarTrigger } from '@/components';
import { Share2Icon } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-background sticky top-0 left-0 z-10 w-full">
      <div className="flex h-12 w-full items-center justify-between px-3">
        <h1 className="sr-only">최정원 블로그</h1>

        <div className="flex min-w-0 items-center gap-0.5">
          <SidebarTrigger />
          <Breadcrumb />
        </div>

        <div className="flex items-center gap-2">
          <SearchDialog breakpoint={768} />
          <ThemeButton />
          <Button variant="ghost" size="icon" title="공유" aria-label="현재 페이지 공유" icon={<Share2Icon className="text-icon size-5" />} />
        </div>
      </div>
    </header>
  );
}
