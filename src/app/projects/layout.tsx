import { Container } from '@/layout';

export default function ProjectsLayout({ children, modal }: LayoutProps<'/projects'>) {
  return (
    <Container>
      {children}
      {modal}
    </Container>
  );
}
