'use client';

import type { SearchTriggerProps, SearchDialogProps } from './types';
import { type KbdItem, Kbd } from '../kbd';
import Command from '../command';
import { memo, useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks';
import { Button } from '../button';
import { HistoryIcon, SearchIcon } from 'lucide-react';

// 더미 데이터
const recentSearch = [
  {
    title: '최근 검색어',
    children: Array.from({ length: 6 }).map((_, index) => ({ title: `검색어 ${index + 1}`, icon: <HistoryIcon /> })),
  },
];

export default function SearchDialog({ breakpoint }: SearchDialogProps) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = useCallback(() => setOpen(true), []);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <>
      <SearchTrigger breakpoint={breakpoint} onClick={handleOpen} />

      <Command.Dialog title="블로그 게시글 검색하기" description="검색할 내용을 입력하세요..." open={open} onOpenChange={setOpen}>
        <Command.Input placeholder="제목 혹은 내용으로 검색해 보세요" />

        <Command.List>
          {recentSearch.map(item => (
            <Command.Group key={item.title} heading={item.title}>
              {item.children.map(child => (
                <Command.Item key={child.title}>
                  {child.icon}
                  <span>{child.title}</span>
                </Command.Item>
              ))}
            </Command.Group>
          ))}

          <Command.Empty>검색 결과가 없습니다.</Command.Empty>
        </Command.List>
      </Command.Dialog>
    </>
  );
}

const SearchTrigger = memo<SearchTriggerProps>(function SearchTrigger({ breakpoint, onClick }) {
  const isDesktop = useMediaQuery(['min-width', breakpoint]);

  const kbdItems: KbdItem[] = [
    { key: 'Ctrl', type: 'command' },
    { key: '+', type: 'text' },
    { key: 'K', type: 'command' },
  ];

  return isDesktop ? (
    <Button
      size="small"
      variant="outline"
      title="검색"
      aria-label="검색창 열기"
      className="bg-input text-foreground-tertiary h-7 w-56 rounded-lg"
      icon={<SearchIcon />}
      onClick={onClick}
    >
      <div className="flex w-full items-center justify-between select-none">
        <span className="text-sm">Search blog...</span>
        <Kbd items={kbdItems} align="end" gap="small" />
      </div>
    </Button>
  ) : (
    <Button
      size="icon"
      variant="ghost"
      title="검색"
      aria-label="검색창 열기"
      icon={<SearchIcon className="text-foreground-quaternary size-5" />}
      onClick={onClick}
    />
  );
});
