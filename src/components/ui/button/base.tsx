import type { ButtonBaseProps } from './types';
import { Slot } from '@radix-ui/react-slot';

export default function Button({ asChild = false, ...props }: ButtonBaseProps) {
  const Component = asChild ? Slot : 'button';
  return <Component data-slot="button" {...props} />;
}
