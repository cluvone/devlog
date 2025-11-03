type ProjectDetailProps = {
  id: string;
};

export default function ProjectDetail({ id }: ProjectDetailProps) {
  return <div>{id}번 프로젝트 상세 설명 ...</div>;
}
