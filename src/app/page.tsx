import Link from 'next/link';
import { Container } from '@/layout';

export default function Home() {
  return (
    <Container>
      <div>
        <section>
          <span className="text-primary text-sm">@cluvone</span>
          <h2 className="my-1 text-4xl font-bold">최정원</h2>
          <p>풀스택 개발 꿈나무 🌿</p>
        </section>

        <section className="mt-10 mb-16">
          <p>
            안녕하세요, TypeScript & React / C# ASP.NET Core 기반 2년 차 웹 개발자입니다.
            <br />
            비효율적인 프로세스를 개선하는 일을 좋아하며, 시스템의 확장성과 실용적인 DX를 중요하게 생각합니다.
            <br />
            서비스 설계부터 개발, 유지보수, 운영까지 담당하며 다양한 실무 경험을 쌓았습니다.
            <br />
            최근에는 배포 자동화와 클라우드 인프라에도 관심을 넓혀가고 있습니다.
          </p>
        </section>
      </div>

      <div className="flex flex-col gap-y-20">
        <section>
          <h3 className="text-primary mb-5 text-2xl font-semibold">👩‍💻 Work Experience</h3>

          <ul className="divide-y divide-gray-200 border-y border-y-gray-200">
            <li className="flex flex-col gap-y-4 py-8 md:flex-row">
              <div className="flex flex-1 flex-col gap-y-0.5">
                <Link
                  href="https://topplayerpoker.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold underline transition-opacity hover:opacity-50"
                >
                  <h4>(주)제이드소프트</h4>
                </Link>
                <p>모바일게임 제작 및 배급</p>
                <p className="text-sm text-slate-400">2024.04 - 2025.08 (1년 5개월)</p>
              </div>

              <div className="flex flex-1 flex-col gap-y-0.5">
                <p className="font-semibold">FE/BE Web Fullstack</p>
                <ul className="list-inside list-disc">
                  <li>사내 운영툴 풀스택 개발 및 운영</li>
                  <li>NICE 본인인증 API 서버 개발 및 운영</li>
                </ul>

                <div className="mt-2 flex flex-wrap items-center gap-1 text-sm">
                  <span className="bg-primary/10 text-primary rounded-md px-2 py-0.5">#React</span>
                  <span className="bg-primary/10 text-primary rounded-md px-2 py-0.5">#Node.js</span>
                  <span className="bg-primary/10 text-primary rounded-md px-2 py-0.5">#ASP.NET Core</span>
                  <span className="bg-primary/10 text-primary rounded-md px-2 py-0.5">#MySQL</span>
                </div>
              </div>
            </li>

            <li className="flex flex-col gap-y-4 py-8 md:flex-row">
              <div className="flex flex-1 flex-col gap-y-0.5">
                <Link
                  href="https://www.stoicent.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold underline transition-opacity hover:opacity-50"
                >
                  <h4>(주)스토익엔터테인먼트</h4>
                </Link>
                <p>STEAM/Mobile/VR/AR 크로스플랫폼 콘텐츠 개발</p>
                <p className="text-sm text-slate-400">2023.05 - 2024.03 (11개월)</p>
              </div>

              <div className="flex flex-1 flex-col gap-y-0.5">
                <p className="font-semibold">FE/BE Web Fullstack</p>
                <ul className="list-inside list-disc">
                  <li>사내 운영툴 풀스택 개발 및 유지보수</li>
                  <li>웹 크롤러 풀스택 개발 및 유지보수</li>
                </ul>

                <div className="mt-2 flex flex-wrap items-center gap-1 text-sm">
                  <span className="bg-primary/10 text-primary rounded-md px-2 py-0.5">#React</span>
                  <span className="bg-primary/10 text-primary rounded-md px-2 py-0.5">#ASP.NET Core</span>
                  <span className="bg-primary/10 text-primary rounded-md px-2 py-0.5">#MySQL</span>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-primary mb-5 text-2xl font-semibold">📚 Education</h3>

          <ul className="divide-y divide-gray-200 border-y border-y-gray-200">
            <li className="flex flex-col gap-y-4 py-8 md:flex-row">
              <div className="flex flex-1 flex-col gap-y-0.5">
                <h4 className="text-lg font-bold">강남그린컴퓨터아카데미</h4>
                <p className="text-sm text-slate-400">2022.07 - 2023.01 (6개월)</p>
              </div>

              <div className="flex flex-1 flex-col gap-y-0.5">
                <p className="font-semibold">프로젝트기반 프론트엔드(React,Vue) 웹&앱 SW개발자 양성과정</p>
                <ul className="list-inside list-disc">
                  <li>Figma를 활용한 프로토타입 제작 및 UI/UX 설계 과정 이해</li>
                  <li>UI/UX를 고려한 반응형 React 웹 애플리케이션 개발 및 컴포넌트 설계</li>
                  <li>PWA 제작을 통해 오프라인 환경에서도 동작 가능한 웹 앱 개발 경험</li>
                </ul>
              </div>
            </li>

            <li className="flex flex-col gap-y-4 py-8 md:flex-row">
              <div className="flex flex-1 flex-col gap-y-0.5">
                <h4 className="text-lg font-bold">강남그린컴퓨터아카데미</h4>
                <p className="text-sm text-slate-400">2022.06 - 2022.07 (1개월)</p>
              </div>

              <div className="flex flex-1 flex-col gap-y-0.5">
                <p className="font-semibold">자바(JAVA) 프로그래밍 향상과정</p>
                <ul className="list-inside list-disc">
                  <li>Java 프로그램 실행 과정 및 기초 문법 학습</li>
                  <li>간단한 콘솔 프로그램을 작성하며 기초 프로그래밍 경험</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-primary mb-5 text-2xl font-semibold">📝 Certificate</h3>

          <ul className="divide-y divide-gray-200 border-y border-y-gray-200">
            <li className="flex flex-col gap-y-4 py-8 md:flex-row">
              <div className="flex-1">
                <h4 className="text-lg font-bold">SQL 개발자</h4>
                <p className="text-sm text-slate-400">2025.06</p>
              </div>

              <div className="flex flex-1 flex-col gap-y-1">
                <p>한국데이터산업진흥원</p>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-primary mb-5 text-2xl font-semibold">💪 Skills</h3>
          <ul className="flex flex-wrap items-center gap-2">
            <li className="border-primary text-primary rounded-2xl border px-4 py-1">TypeScript</li>
            <li className="border-primary text-primary rounded-2xl border px-4 py-1">React</li>
            <li className="border-primary text-primary rounded-2xl border px-4 py-1">Node.js</li>
            <li className="border-primary text-primary rounded-2xl border px-4 py-1">C#</li>
            <li className="border-primary text-primary rounded-2xl border px-4 py-1">ASP.NET Core</li>
            <li className="border-primary text-primary rounded-2xl border px-4 py-1">MySQL</li>
          </ul>
        </section>
      </div>
    </Container>
  );
}
