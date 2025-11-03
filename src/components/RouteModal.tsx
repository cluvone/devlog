'use client';

import { useRouter } from 'next/navigation';
import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui';
import { cn } from '@/lib';

export type RouteModalProps = Partial<
  Record<'title' | 'description', React.ReactNode> &
    Record<'okText' | 'cancelText', string> &
    Record<'okButtonProps' | 'cancelButtonProps', React.ComponentProps<typeof Button>>
> & {
  noFooter?: boolean;
  classNames?: {
    close?: React.ComponentProps<typeof DialogClose>['className'];
    content?: React.ComponentProps<typeof DialogContent>['className'];
    header?: React.ComponentProps<typeof DialogHeader>['className'];
    footer?: React.ComponentProps<typeof DialogFooter>['className'];
    title?: React.ComponentProps<typeof DialogTitle>['className'];
    description?: React.ComponentProps<typeof DialogDescription>['className'];
  };
};

export default function RouteModal({
  children,
  title,
  description,
  okText,
  cancelText,
  okButtonProps,
  cancelButtonProps,
  noFooter,
  classNames,
}: React.PropsWithChildren<RouteModalProps>) {
  const router = useRouter();

  const handleClose = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => router.back());
    } else {
      router.back();
    }
  };

  return (
    <Dialog defaultOpen onOpenChange={open => !open && handleClose()}>
      <DialogContent className={classNames?.content}>
        <DialogHeader className={cn(classNames?.header, { 'sr-only': !(title || description) })}>
          {<DialogTitle className={cn(classNames?.title, { 'sr-only': !title })}>{title}</DialogTitle>}
          <DialogDescription className={cn(classNames?.description, { 'sr-only': !description })}>{description}</DialogDescription>
        </DialogHeader>

        {children}

        {!noFooter && (
          <DialogFooter className={classNames?.footer}>
            <DialogClose asChild className={classNames?.close}>
              <Button variant="outline" {...cancelButtonProps}>
                {cancelText ?? '취소'}
              </Button>
            </DialogClose>
            <Button type="submit" {...okButtonProps}>
              {okText ?? '확인'}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
