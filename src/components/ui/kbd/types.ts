import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import type { Align, ClassNameProps, Size } from '@/types';
import kbdGroupVariants from './variants';

export type KbdItem = {
  key: string;
  type: 'command' | 'text';
};

export type KbdBaseProps = ComponentProps<'kbd'>;
export type KbdProps = Omit<KbdBaseProps, 'className'> &
  ClassNameProps &
  VariantProps<typeof kbdGroupVariants> & {
    items: KbdItem[];
    align?: 'start' | 'center' | 'end';
  };

export type KbdGroupConfig = {
  align: Record<Align, ClassValue>;
  gap: Record<Size, ClassValue>;
};
