import type { CardProps } from './types';
import * as CardPrimitive from './base';
import cardVariants from './variants';
import { cn } from '@/lib';

export default function Card({ children, className, variant, size, title, description, action, footer }: CardProps) {
  return (
    <CardPrimitive.Card className={cn(cardVariants({ variant, size, className }))}>
      {(title || description || action) && (
        <CardPrimitive.CardHeader>
          {title && <CardPrimitive.CardTitle>{title}</CardPrimitive.CardTitle>}
          {description && <CardPrimitive.CardDescription>{description}</CardPrimitive.CardDescription>}
          {action && <CardPrimitive.CardAction>{action}</CardPrimitive.CardAction>}
        </CardPrimitive.CardHeader>
      )}

      <CardPrimitive.CardContent>{children}</CardPrimitive.CardContent>

      {footer && <CardPrimitive.CardFooter>{footer}</CardPrimitive.CardFooter>}
    </CardPrimitive.Card>
  );
}
