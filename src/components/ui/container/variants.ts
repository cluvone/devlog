import type { ContainerConfig } from './types';
import { cva } from 'class-variance-authority';

const containerVariants = cva<ContainerConfig>('mx-auto px-6 py-8 lg:py-20', {
  variants: {
    size: {
      small: 'max-w-3xl',
      large: 'max-w-6xl lg:px-16',
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

export default containerVariants;
