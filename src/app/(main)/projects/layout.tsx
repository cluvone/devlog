import { Container } from '@/components';

export default function ProjectsLayout({ children, modal }: LayoutProps<'/projects'>) {
  return (
    <Container>
      {children}
      {modal}
    </Container>
  );
}
