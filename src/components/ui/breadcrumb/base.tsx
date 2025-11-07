import type { ComponentProps } from 'react';
import type { AsChildProps } from '@/types';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib';

export function Breadcrumb({ className, ...props }: ComponentProps<'nav'>) {
  return <nav data-slot="breadcrumb" aria-label="사이트 이동 경로" className={cn('min-w-0', className)} {...props} />;
}

export function BreadcrumbList({ className, ...props }: ComponentProps<'ol'>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'text-foreground-secondary flex min-w-0 items-center gap-0.5 text-sm select-none',
        '[&>*:not(:first-child)]:hidden [&>*:not(:first-child)]:md:inline-flex',
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbItem({ className, ...props }: ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn(
        'inline-flex min-w-0 shrink items-center whitespace-nowrap',
        '**:data-hoverable:hover:bg-accent **:data-hoverable:hover:text-foreground *:px-1.5 *:py-0.5 **:data-hoverable:rounded-md',
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbLink({ asChild, className, ...props }: ComponentProps<'a'> & AsChildProps) {
  const Component = asChild ? Slot : 'a';
  return <Component data-slot="breadcrumb-link" data-hoverable className={cn('flex min-w-0 items-center gap-1.5 transition-colors', className)} {...props} />;
}

export function BreadcrumbPage({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="breadcrumb-page" aria-current="page" className={cn('text-foreground flex min-w-0 items-center gap-1.5', className)} {...props} />;
}

export function BreadcrumbTitle({ className, ...props }: ComponentProps<'span'>) {
  return <span data-slot="breadcrumb-title" className={cn('truncate', className)} {...props} />;
}

export function BreadcrumbEllipsis({ className, ...props }: ComponentProps<'button'>) {
  return (
    <button data-slot="breadcrumb-ellipsis" data-hoverable aria-expanded className={cn('min-w-0 shrink-0 whitespace-nowrap', className)} {...props}>
      ...
    </button>
  );
}

export function BreadcrumbSeparator({ children, className, ...props }: ComponentProps<'li'>) {
  return (
    <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className={cn('text-border [&>svg]:size-3.5', className)} {...props}>
      {children ?? '/'}
    </li>
  );
}
