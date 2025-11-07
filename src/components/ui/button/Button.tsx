import type { ButtonProps } from './types';
import * as ButtonPrimitive from './base';
import buttonVariants from './variants';
import { cn } from '@/lib';

export default function Button({ children, className, variant, size, icon, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive.default className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {icon}
      {children}
    </ButtonPrimitive.default>
  );
}
