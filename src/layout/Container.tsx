import clsx from 'clsx';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & Readonly<{ children: React.ReactNode }>;

export default function Container({ children, ...props }: ContainerProps) {
  const { className, ...rest } = props;

  return (
    <div className={clsx(className, 'mx-auto max-w-5xl')} {...rest}>
      {children}
    </div>
  );
}
