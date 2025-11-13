'use client';

import { type ComponentProps, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from '@/hooks';
import { SIDEBAR_KEYBOARD_SHORTCUT, SIDEBAR_WIDTH } from './constants';
import { cn } from '@/lib';

type SidebarContext = {
  state: 'expanded' | 'collapsed';
  open: boolean;
  openMobile: boolean;
  isDesktop: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  toggleSidebar: () => void;
};

type SidebarProviderProps = ComponentProps<'div'> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const SidebarContext = createContext<SidebarContext | null>(null);

/**
 * Sidebar 상태를 하위 컴포넌트 어디서나 공유할 수 있도록 하기 위한 Context
 * @example <SidebarProvider> // 애플리케이션을 SidebarProvider로 감싸야 한다.
 *            <main>
 *              <Sidebar />
 *            </main>
 *          </SidebarProvider>
 */
export function SidebarProvider({
  defaultOpen = true,
  open: openProps,
  onOpenChange: setOpenProps,
  className,
  style,
  children,
  ...props
}: SidebarProviderProps) {
  const isDesktop = useMediaQuery(['min-width', 1024]);
  const [openMobile, setOpenMobile] = useState(false);

  // 사이드바의 내부 상태
  // 외부에서 제어하기 위해 props로 받은 open 및 setOpen을 사용한다.
  const [_open, _setOpen] = useState<boolean>(defaultOpen);
  const isOpen = openProps ?? _open;

  const setOpenDesktop = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(isOpen) : value;

      if (setOpenProps) {
        setOpenProps(openState);
      } else {
        _setOpen(openState);
      }
    },
    [isOpen, setOpenProps],
  );

  // 사이드바 토글 핸들러
  const toggleSidebar = useCallback(() => {
    if (isDesktop) {
      setOpenDesktop(open => !open);
    } else {
      setOpenMobile(open => !open);
    }
  }, [isDesktop, setOpenDesktop, setOpenMobile]);

  // 사이드바 토글 단축키 이벤트 등록
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSidebar]);

  const state = isOpen ? 'expanded' : 'collapsed'; // data-state="expanded" || data-state"collapsed"
  const contextValue = useMemo<SidebarContext>(
    () => ({ state, open: isOpen, setOpen: setOpenDesktop, isDesktop, openMobile, setOpenMobile, toggleSidebar }),
    [state, isOpen, setOpenDesktop, isDesktop, openMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        data-slot="sidebar-wrapper"
        style={{ ...{ '--sidebar-width': SIDEBAR_WIDTH }, ...style }}
        className={cn('group/sidebar-wrapper flex max-h-screen min-h-svh w-full', className)}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar는 SidebarProvider 내부에서 사용해야 합니다.');
  }

  return context;
}
