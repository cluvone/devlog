'use client';

import type { ComponentProps, CSSProperties } from 'react';
import type { AsChildProps } from '@/types';

import { useSidebar } from './provider';
import { AnimatePresence, motion } from 'motion/react';
import { Slot } from '@radix-ui/react-slot';
import { Button, Sheet, Skeleton, type ButtonProps } from '@/components';
import { MenuIcon } from 'lucide-react';
import { SIDEBAR_ANIMATION, SIDEBAR_WIDTH } from './constants';
import { cn } from '@/lib/utils';

export function Root({ className, children, ...props }: ComponentProps<'div'>) {
  const { isDesktop, state, openMobile, setOpenMobile } = useSidebar();

  return (
    <AnimatePresence initial={false}>
      {isDesktop ? (
        <motion.aside
          data-slot="sidebar"
          data-state={state}
          className="group peer text-sidebar-foreground [&_svg]:text-icon text-sm font-medium [&_svg]:size-4 [&_svg]:shrink-0"
          initial={{ x: -240 }}
          animate={{ x: [-240, 0] }}
          exit={{ x: [0, -240] }}
          transition={{ type: 'keyframes', ease: 'linear' }}
          key="sidebar-desktop"
        >
          {/* 고정된 사이드바(fixed sidebar-container)가 문서 흐름상에서 빠지는 것을 방지하기 위한 장치 */}
          {/* 같은 너비만큼의 빈 div를 먼저 렌더링해서 본문이 그만큼 오른쪽으로 밀리도록 만들어준다. */}
          <div
            data-slot="sidebar-gap"
            className={cn('relative w-(--sidebar-width) bg-transparent transition-[width]', 'group-data-[state=collapsed]:w-0', SIDEBAR_ANIMATION)}
          />
          <div
            data-slot="sidebar-container"
            className={cn(
              'border-r-border-secondary fixed inset-y-0 left-0 z-10 flex h-svh w-(--sidebar-width) border-r transition-transform',
              'group-data-[state=collapsed]:-translate-x-full',
              SIDEBAR_ANIMATION,
              className,
            )}
            {...props}
          >
            <div data-slot="sidebar-inner" data-sidebar="sidebar" className="bg-sidebar flex h-full w-full flex-col gap-y-4 px-1 py-2">
              {children}
            </div>
          </div>
        </motion.aside>
      ) : (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <Sheet.Content
            data-slot="sidebar"
            data-sidebar="sidebar"
            data-mobile="true"
            side="left"
            className="bg-sidebar [&_svg]:text-icon text-sidebar-foreground w-(--sidebar-width) px-1 py-2 text-sm font-medium [&_svg]:size-4 [&_svg]:shrink-0 [&>button]:hidden"
            style={{ '--sidebar-width': SIDEBAR_WIDTH } as CSSProperties}
          >
            <Sheet.Header className="sr-only">
              <Sheet.Title>Sidebar</Sheet.Title>
              <Sheet.Description>Mobile Sidebar</Sheet.Description>
            </Sheet.Header>

            <div className="flex h-full w-full flex-col gap-y-4">{children}</div>
          </Sheet.Content>
        </Sheet>
      )}
    </AnimatePresence>
  );
}

export function Trigger({ className, ...props }: Omit<ButtonProps, 'onClick'>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-slot="sidebar-trigger"
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      title="메뉴"
      aria-label="메뉴"
      icon={<MenuIcon className={cn('text-icon size-5', className)} />}
      onClick={toggleSidebar}
      {...props}
    >
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

export function Header({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="sidebar-header" data-sidebar="header" className={cn('flex flex-col gap-2 px-1', className)} {...props} />;
}

export function Footer({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="sidebar-footer" data-sidebar="footer" className={cn('flex flex-col gap-2 px-1', className)} {...props} />;
}

export function Content({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div data-slot="sidebar-content" data-sidebar="content" className={cn('flex min-h-0 flex-1 flex-col gap-4 overflow-auto px-1', className)} {...props} />
  );
}

export function Group({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="sidebar-group" data-sidebar="group" className={cn('relative flex w-full flex-col', className)} {...props} />;
}

export function GroupLabel({ className, asChild = false, ...props }: ComponentProps<'div'> & AsChildProps) {
  const Component = asChild ? Slot : 'div';

  return (
    <Component
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn('text-sidebar-foreground/70 flex h-7.5 min-w-0 shrink-0 items-center rounded-md px-2 text-xs', className)}
      {...props}
    />
  );
}

export function GroupContent({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="sidebar-group-content" data-sidebar="group-content" className={cn('w-full', className)} {...props} />;
}

export function Menu({ className, ...props }: ComponentProps<'ul'>) {
  return <ul data-slot="sidebar-menu" data-sidebar="menu" className={cn('flex w-full flex-col gap-0.5', className)} {...props} />;
}

export function MenuItem({ className, ...props }: ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('group/menu-item [&:has(>[data-sidebar=menu-collapse]:hover)>[data-sidebar=menu-button]]:bg-sidebar-accent relative', className)}
      {...props}
    />
  );
}

export function MenuButton({
  asChild = false,
  isActive = false,
  className,
  ...props
}: ComponentProps<'button'> & {
  asChild?: boolean;
  isActive?: boolean;
}) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-active={isActive}
      className={cn(
        'peer/menu-button ring-sidebar-ring flex h-7.5 w-full min-w-0 items-center gap-2 overflow-hidden rounded-md px-2 py-1 outline-hidden transition-colors',
        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground focus-visible:ring-2',
        'disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50',
        'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[active=true]:font-semibold',
        className,
      )}
      {...props}
    />
  );
}

export function MenuCollapse({ className, asChild = false, ...props }: React.ComponentProps<'button'> & AsChildProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      data-slot="sidebar-menu-collapse"
      data-sidebar="menu-collapse"
      className={cn(
        'ring-sidebar-ring absolute top-1.25 left-2 flex size-5 items-center justify-center rounded-md opacity-0 outline-hidden transition-[opacity,background-color]',
        'hover:bg-fill group-hover/menu-item:opacity-100 peer-hover/menu-button:opacity-100 focus-visible:ring-2 [&>svg]:transition-transform group-data-[state=open]/menu-item:[&>svg]:rotate-90',
        'after:absolute after:-inset-1.25', // 사용자 편의성을 위해 버튼의 실제 클릭 영역을 늘린다.
        className,
      )}
      {...props}
    />
  );
}

export function MenuBadge({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        'pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs tabular-nums select-none',
        className,
      )}
      {...props}
    />
  );
}

export function MenuSkeleton({
  className,
  showIcon = false,
  ...props
}: ComponentProps<'div'> & {
  showIcon?: boolean;
}) {
  return (
    <div data-slot="sidebar-menu-skeleton" data-sidebar="menu-skeleton" className={cn('flex h-7.5 items-center gap-2 rounded-md px-2', className)} {...props}>
      {showIcon && <Skeleton data-sidebar="menu-skeleton-icon" className="size-4 rounded-md" />}
      <Skeleton data-sidebar="menu-skeleton-text" className="h-4 max-w-5/6 flex-1" />
    </div>
  );
}

export function SubMenu({ className, ...props }: ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn('border-l-sidebar-border ml-4 flex min-w-0 translate-x-px flex-col gap-0.5 border-l px-2 py-0.5', className)}
      {...props}
    />
  );
}

export function SubMenuItem({ className, ...props }: ComponentProps<'li'>) {
  return <li data-slot="sidebar-menu-sub-item" data-sidebar="menu-sub-item" className={cn('group/menu-sub-item relative', className)} {...props} />;
}

export function SubMenuButton({
  asChild = false,
  isActive = false,
  className,
  ...props
}: ComponentProps<'a'> &
  AsChildProps & {
    isActive?: boolean;
  }) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-active={isActive}
      className={cn(
        'ring-sidebar-ring flex h-7.5 min-w-0 items-center gap-2 rounded-md px-2 outline-hidden',
        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground focus-visible:ring-2',
        'disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50',
        'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[active=true]:font-semibold',
        className,
      )}
      {...props}
    />
  );
}

export function Icon({ collapsible = false, className, children, ...props }: ComponentProps<'span'> & { collapsible?: boolean }) {
  const isString = typeof children === 'string';
  const Component = isString ? 'span' : Slot;

  return (
    <span
      data-slot="sidebar-menu-icon-wrapper"
      data-sidebar="menu-icon-wrapper"
      className={cn('flex size-5 items-center justify-center', { 'transition-opacity group-hover/menu-item:opacity-0': collapsible })}
      {...props}
    >
      <Component data-slot="sidebar-menu-icon" data-sidebar="menu-icon" className={cn('flex items-center justify-center', className)}>
        {children}
      </Component>
    </span>
  );
}

export function Title({ className, ...props }: ComponentProps<'span'>) {
  return <span data-slot="sidebar-menu-title" data-sidebar="menu-title" className={cn('truncate leading-none', className)} {...props} />;
}
