import type { CardConfig } from './types';
import { cva } from 'class-variance-authority';

const cardVariants = cva<CardConfig>('text-card-foreground flex flex-col gap-6 rounded-xl', {
  variants: {
    variant: {
      outline: 'bg-card border border-border-secondary',
      filled: 'bg-muted border border-border-secondary',
      ghost: 'bg-card',
    },
    size: {
      default: '*:data-[slot="card-content"]:p-6',
      small: '*:data-[slot="card-content"]:p-4',
      large: '*:data-[slot="card-content"]:p-8',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'default',
  },
});

export default cardVariants;
