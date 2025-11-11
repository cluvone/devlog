import { Footer, Header, Main } from '@/components';

export default function MainLayout({ children }: LayoutProps<'/'>) {
  return (
    <div className="flex">
      <aside className="bg-muted border-r-border-secondary sticky top-0 left-0 h-screen w-60 shrink-0 overflow-x-hidden overflow-y-auto border-r">
        Sidebar
      </aside>

      <div className="flex w-full flex-col">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  );
}
