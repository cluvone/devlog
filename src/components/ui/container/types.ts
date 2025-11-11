import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import type { ChildrenProps, Size } from '@/types';
import containerVariants from './variants';

export type ContainerProps = Omit<ComponentProps<'div'>, 'children'> & ChildrenProps & VariantProps<typeof containerVariants>;

export type ContainerConfig = {
  size: Record<ContainerSize, ClassValue>;
};

type ContainerSize = Exclude<Size, 'default'>;
