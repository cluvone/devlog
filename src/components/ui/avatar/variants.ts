import type { ClassValue } from 'clsx';
import { cva } from 'class-variance-authority';

type AvatarConfig = {
  shape: Record<'circle' | 'square', ClassValue>;
};

const avatarVariants = cva<AvatarConfig>('bg-muted relative flex shrink-0 overflow-hidden', {
  variants: {
    shape: {
      circle: 'rounded-full',
      square: 'rounded-lg',
    },
  },
  defaultVariants: {
    shape: 'circle',
  },
});

export default avatarVariants;
