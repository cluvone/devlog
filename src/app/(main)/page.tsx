import Link from 'next/link';
import avatar from 'public/images/pixel_winter.png';
import { Avatar, Card, Container } from '@/components';

// 더미 데이터
const core = [
  {
    title: '💻 모던 프론트엔드 개발',
    description:
      'TypeScript·React로 직관적이고 편안한 UI를 구축합니다. TanStack Query 등 주요 라이브러리를 적극 활용하며 실무 요구사항에 맞는 구조를 설계합니다.',
  },
  {
    title: '🔗 백엔드 및 API 서버 운영',
    description: 'ASP.NET Core를 기반으로 REST API를 설계 및 구현하고, Node.js로 NICE 인증 서버를 직접 구축하여 PM2 환경에서 운영한 경험이 있습니다.',
  },
  {
    title: '🗄️ 데이터베이스 구축 및 관리',
    description: 'MySQL을 이용해 서비스 구조에 맞는 스키마를 설계하고 관리했습니다. Redis를 세션 스토리지로 사용하며 인증 구조를 구성해본 경험이 있습니다.',
  },
  {
    title: '🤝 협업과 커뮤니케이션',
    description:
      '기획, 디자인, 총무 등 다양한 직무와 협업해 요구사항을 명확히 정의하고, Jira · Notion · Slack 등을 활용해 일정과 진행 상황을 체계적으로 관리했습니다.',
  },
] as const;

export default function HomePage() {
  return (
    <Container size="large">
      <div className="mb-12">
        <span className="text-primary text-xs">@cluvone</span>
        <h2 className="text-4xl font-bold">Welcome to cluvone-log 👋</h2>
      </div>

      <div className="flex flex-col gap-y-16">
        <section className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="flex flex-col gap-4">
            <div className="border-primary flex size-[248px] items-center justify-center rounded-full border">
              <Avatar src={avatar} alt="아바타 이미지" size={240} className="border-background border-2" />
            </div>

            <div>
              <h3 className="text-2xl font-bold">최정원 (Choi Jung Won)</h3>
              <p className="text-foreground-quaternary">풀스택 개발 꿈나무 🌿</p>
            </div>
          </div>

          <div className="py-2">
            <p className="mb-8 leading-relaxed">
              안녕하세요,{' '}
              <span className="border-b-primary text-primary border-b font-bold">TypeScript & React / C# ASP.NET Core 기반 2년 차 웹 개발자 최정원</span>
              입니다.
              <br />
              비효율적인 프로세스를 개선하는 일을 좋아하며, 시스템의 확장성과 실용적인 DX를 중요하게 생각합니다.
              <br />
              서비스 설계부터 개발, 유지보수, 운영까지 담당하며 다양한 실무 경험을 쌓았습니다.
              <br />
              최근에는 배포 자동화와 클라우드 인프라에도 관심을 넓혀가고 있습니다.
            </p>

            <div className="flex flex-col gap-y-4">
              <Card variant="filled" className="border-none">
                <div className="flex items-center gap-1">
                  <span>📍</span>
                  <Link href="/projects" className="text-foreground-quaternary text-sm underline transition-opacity hover:opacity-50">
                    프로젝트 보러 가기 →
                  </Link>
                </div>
              </Card>

              <Card variant="filled" className="border-none">
                <div className="flex items-center gap-1">
                  <span>📍</span>
                  <Link href="/blog" className="text-foreground-quaternary text-sm underline transition-opacity hover:opacity-50">
                    블로그 게시글 읽기 →
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-6 text-2xl font-bold">✨ 저는 이러한 사람이에요.</h3>

          <ul className="flex flex-col flex-wrap items-center gap-4 p-0 md:flex-row md:items-start md:gap-8">
            {core.map(({ title, description }, index) => (
              <li key={index} className="flex w-full flex-1 flex-col gap-4">
                <div className="bg-card h-60 w-full rounded-xl"></div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-semibold md:text-xl">{title}</h4>
                  <p className="text-foreground/60 text-sm leading-normal font-normal">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
}
