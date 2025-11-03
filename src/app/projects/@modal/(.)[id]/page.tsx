import { RouteModal } from '@/components';
import { ProjectDetail } from '../../_components';

export default async function Page({ params }: PageProps<'/projects/[id]'>) {
  const { id } = await params;

  return (
    <RouteModal noFooter title={`프로젝트 [${id}]`} classNames={{ content: 'sm:w-4/5 sm:max-w-4xl', title: 'text-4xl font-bold' }}>
      <ProjectDetail id={id} />
    </RouteModal>
  );
}
