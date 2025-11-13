import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import avatarVariants from './variants';
import { cn } from '@/lib';

export type AvatarProps = Omit<ComponentProps<typeof Image>, 'width' | 'height'> &
  VariantProps<typeof avatarVariants> & {
    size: number;
    bordered?: boolean;
  };

export default function Avatar({ shape, size, bordered = false, src, alt, className, style, ...props }: AvatarProps) {
  return (
    <span className={cn(avatarVariants({ shape, className }), { 'border-border-secondary border': bordered })} style={{ width: size, height: size, ...style }}>
      <Image src={src} alt={alt} width={size} height={size} className="'aspect-square object-cover' size-full" {...props} />
    </span>
  );
}
