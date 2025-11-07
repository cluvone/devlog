'use client';

import { useRouter } from 'next/navigation';
import { Button, Dialog } from '.';
import { cn } from '@/lib';

export type RouteModalProps = Partial<
  Record<'title' | 'description', React.ReactNode> &
    Record<'okText' | 'cancelText', string> &
    Record<'okButtonProps' | 'cancelButtonProps', React.ComponentProps<typeof Button>>
> & {
  noFooter?: boolean;
  classNames?: Record<'close' | 'content' | 'header' | 'footer' | 'title' | 'description', React.HtmlHTMLAttributes<HTMLElement>['className']>;
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
  const { Content, Header, Title, Description, Footer, Close } = Dialog;

  const handleClose = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => router.back());
    } else {
      router.back();
    }
  };

  return (
    <Dialog defaultOpen onOpenChange={open => !open && handleClose()}>
      <Content className={classNames?.content}>
        <Header className={cn(classNames?.header, { 'sr-only': !(title || description) })}>
          {<Title className={cn(classNames?.title, { 'sr-only': !title })}>{title}</Title>}
          <Description className={cn(classNames?.description, { 'sr-only': !description })}>{description}</Description>
        </Header>

        {children}

        {!noFooter && (
          <Footer className={classNames?.footer}>
            <Close asChild className={classNames?.close}>
              <Button variant="outline" {...cancelButtonProps}>
                {cancelText ?? '취소'}
              </Button>
            </Close>
            <Button type="submit" {...okButtonProps}>
              {okText ?? '확인'}
            </Button>
          </Footer>
        )}
      </Content>
    </Dialog>
  );
}
