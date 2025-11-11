import type { ComponentProps, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { ClassNamesProps, Size } from '@/types';
import type { ClassValue } from 'clsx';
import cardVariants from './variants';

export type CardBaseProps = ComponentProps<'div'>;
export type CardProps = CardBaseProps & VariantProps<typeof cardVariants> & Partial<Record<CardSemanticDOM, ReactNode> & ClassNamesProps<CardSemanticDOM>>;

export type CardConfig = {
  variant: Record<CardVariant, ClassValue>;
  size: Record<Size, ClassValue>;
};

type CardVariant = 'outline' | 'filled' | 'ghost';
type CardSemanticDOM = 'title' | 'description' | 'action' | 'footer';
