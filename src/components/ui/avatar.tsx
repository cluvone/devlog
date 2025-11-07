import type { ComponentProps } from 'react';
import Image from 'next/image';
import { cn } from '@/lib';

export type AvatarProps = Omit<ComponentProps<typeof Image>, 'width' | 'height'> & {
  size?: number;
  shape?: 'circle' | 'square';
};

export default function Avatar({ className, src, alt, size = 32, shape = 'circle', ...props }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn(
        'bg-muted border-border aspect-square shrink-0 border object-cover',
        `size-${size / 4}`,
        shape === 'square' ? 'rounded-lg' : 'rounded-full',
        className,
      )}
      {...props}
    />
  );
}
