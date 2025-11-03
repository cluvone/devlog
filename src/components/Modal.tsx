'use client';

import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui';
import { cn } from '@/lib';

export type ModalProps = Partial<
  Record<'title' | 'description', React.ReactNode> &
    Record<'okText' | 'cancelText', string> &
    Record<'okButtonProps' | 'cancelButtonProps', React.ComponentProps<typeof Button>>
> & {
  trigger: React.JSX.Element;
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

export default function Modal({
  children,
  title,
  description,
  okText,
  cancelText,
  okButtonProps,
  cancelButtonProps,
  trigger,
  noFooter,
  classNames,
}: React.PropsWithChildren<ModalProps>) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

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
