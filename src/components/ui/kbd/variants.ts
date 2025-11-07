import type { KbdGroupConfig } from './types';
import { cva } from 'class-variance-authority';

const kbdGroupVariants = cva<KbdGroupConfig>('inline-flex', {
  variants: {
    align: {
      start: '[&_kbd]:items-start',
      center: '[&_kbd]:items-center',
      end: '[&_kbd]:items-end',
    },
    gap: {
      small: 'gap-0.5',
      default: 'gap-1',
      large: 'gap-2',
    },
  },
  defaultVariants: {
    align: 'center',
    gap: 'default',
  },
});

export default kbdGroupVariants;
