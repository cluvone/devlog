import type { ComponentProps, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import type { AsChildProps, Size } from '@/types';
import buttonVariants from './variants';

export type ButtonBaseProps = ComponentProps<'button'> & AsChildProps;
export type ButtonProps = ButtonBaseProps & VariantProps<typeof buttonVariants> & { icon?: ReactNode };

export type ButtonConfig = {
  variant: Record<ButtonVariant, ClassValue>;
  size: Record<ButtonSize, ClassValue>;
};

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = Size | 'icon' | 'icon-small' | 'icon-large';
