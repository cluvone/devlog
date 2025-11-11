import type { ContainerConfig } from './types';
import { cva } from 'class-variance-authority';

const containerVariants = cva<ContainerConfig>('mx-auto px-6 py-9', {
  variants: {
    size: {
      small: 'max-w-3xl md:py-20',
      large: 'max-w-5xl md:px-0',
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

export default containerVariants;
