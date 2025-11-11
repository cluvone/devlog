import type { ReactNode } from 'react';

// Options
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type Direction = 'horizontal' | 'vertical';
export type Align = 'start' | 'center' | 'end';
export type Size = 'small' | 'default' | 'large';
export type Position = 'top' | 'right' | 'bottom' | 'left';

// Props
export type ClassNameProps = {
  className?: string;
};

export type ClassNamesProps<T extends string = string> = {
  classNames?: Partial<Record<T, string>>;
};

export type ChildrenProps = {
  children: ReactNode;
};

export type AsChildProps = {
  asChild?: boolean;
};
