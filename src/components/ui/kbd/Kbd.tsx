import type { KbdProps } from './types';
import * as KbdPrimitive from './base';
import kbdGroupVariants from './variants';
import { cn } from '@/lib';

export default function Kbd({ className, items, align, gap, ...props }: KbdProps) {
  return (
    <KbdPrimitive.KbdGroup className={cn(kbdGroupVariants({ align, gap }))}>
      {items.map(({ type, key }) => {
        const isCommand = type === 'command';
        const Component = isCommand ? KbdPrimitive.Kbd : 'span';

        return (
          <Component key={key} className={className} {...(isCommand && props)}>
            {key}
          </Component>
        );
      })}
    </KbdPrimitive.KbdGroup>
  );
}
