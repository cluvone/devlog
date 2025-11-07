import clsx from 'clsx';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & Readonly<{ children: React.ReactNode }>;

export default function Container({ className, ...props }: ContainerProps) {
  return <div className={clsx('mx-auto max-w-5xl', className)} {...props} />;
}
