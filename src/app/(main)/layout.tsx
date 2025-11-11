import { Footer, Header, Main, Sidebar, SidebarProvider } from '@/components';

export default function MainLayout({ children }: LayoutProps<'/'>) {
  return (
    <div className="flex">
      <SidebarProvider>
        <Sidebar />

        <div className="flex w-full flex-col">
          <Header />
          <Main>{children}</Main>
          <Footer />
        </div>
      </SidebarProvider>
    </div>
  );
}
