import type { ComponentProps } from 'react';
import Dialog from './dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

function CommandComponent({ className, ...props }: ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn('bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden', className)}
      {...props}
    />
  );
}

function CommandDialogComponent({
  className,
  children,
  title = '명령 팔레트',
  description = '실행할 명령을 입력하세요...',
  showCloseButton = true,
  ...props
}: ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
}) {
  return (
    <Dialog {...props}>
      <Dialog.Header className="sr-only">
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>
      </Dialog.Header>
      <Dialog.Content className={cn('overflow-hidden rounded-2xl p-0', className)} showCloseButton={showCloseButton}>
        <CommandComponent>{children}</CommandComponent>
      </Dialog.Content>
    </Dialog>
  );
}

function CommandInputComponent({ className, ...props }: ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="flex h-14 items-center gap-2 px-4">
      <SearchIcon className="text-foreground-quaternary size-4 shrink-0" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          'h-14 w-full rounded-md text-sm outline-hidden',
          'placeholder:text-foreground-quaternary disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CommandListComponent({ className, ...props }: ComponentProps<typeof CommandPrimitive.List>) {
  return <CommandPrimitive.List data-slot="command-list" className={cn('max-h-[60vh] scroll-py-1 overflow-x-hidden overflow-y-auto', className)} {...props} />;
}

function CommandEmptyComponent({ ...props }: ComponentProps<typeof CommandPrimitive.Empty>) {
  return <CommandPrimitive.Empty data-slot="command-empty" className="py-16 text-center text-sm" {...props} />;
}

function CommandGroupComponent({ className, ...props }: ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'overflow-hidden p-2',
        '*:[[cmdk-group-heading]]:text-foreground-quaternary *:[[cmdk-group-heading]]:px-3 *:[[cmdk-group-heading]]:py-2 *:[[cmdk-group-heading]]:text-xs *:[[cmdk-group-heading]]:font-medium',
        className,
      )}
      {...props}
    />
  );
}

function CommandSeparatorComponent({ className, ...props }: ComponentProps<typeof CommandPrimitive.Separator>) {
  return <CommandPrimitive.Separator data-slot="command-separator" className={cn('bg-border-secondary h-px', className)} {...props} />;
}

function CommandItemComponent({ className, ...props }: ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        'text-foreground-tertiary relative flex cursor-pointer items-center gap-2 rounded-md p-3 text-sm outline-hidden select-none',
        'data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        className,
      )}
      {...props}
    />
  );
}

function CommandShortcutComponent({ className, ...props }: ComponentProps<'span'>) {
  return <span data-slot="command-shortcut" className={cn('text-foreground-tertiary ml-auto text-xs tracking-widest', className)} {...props} />;
}

const Command = Object.assign(CommandComponent, {
  Dialog: CommandDialogComponent,
  Input: CommandInputComponent,
  List: CommandListComponent,
  Empty: CommandEmptyComponent,
  Group: CommandGroupComponent,
  Item: CommandItemComponent,
  Shortcut: CommandShortcutComponent,
  Separator: CommandSeparatorComponent,
});

export default Command;
