import type { KbdBaseProps } from './types';
import { cn } from '@/lib';

export function Kbd({ className, ...props }: KbdBaseProps) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'bg-muted text-muted-foreground border-border pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center rounded-md border px-1 font-sans text-xs font-medium select-none',
        "[&_svg:not([class*='size-'])]:size-3",
        'in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10',
        className,
      )}
      {...props}
    />
  );
}

export function KbdGroup(props: KbdBaseProps) {
  return <kbd data-slot="kbd-group" {...props} />;
}
