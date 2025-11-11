import type { ContainerProps } from './types';
import containerVariants from './variants';
import { cn } from '@/lib';

export default function Container({ size, className, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size, className }))} {...props} />;
}
