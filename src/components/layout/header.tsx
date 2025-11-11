import { Breadcrumb, Button, SearchDialog } from '../ui';
import { EclipseIcon, MenuIcon, Share2Icon } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-background sticky top-0 left-0 z-10 h-12 w-full">
      <div className="flex h-full w-full items-center justify-between px-3">
        <h1 className="sr-only">최정원 블로그</h1>

        <div className="flex min-w-0 items-center gap-0.5">
          <Button variant="ghost" size="icon" title="메뉴" aria-label="메뉴" icon={<MenuIcon className="text-foreground-tertiary size-5" />} />
          <Breadcrumb />
        </div>

        <div className="flex items-center gap-2">
          <SearchDialog breakpoint={768} />
          <Button variant="ghost" size="icon" title="테마" aria-label="다크모드 토글" icon={<EclipseIcon className="text-foreground-quaternary size-5" />} />
          <Button variant="ghost" size="icon" title="공유" aria-label="현재 페이지 공유" icon={<Share2Icon className="text-foreground-quaternary size-5" />} />
        </div>
      </div>
    </header>
  );
}
