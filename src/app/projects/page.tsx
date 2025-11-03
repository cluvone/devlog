import Link from 'next/link';
import Image from 'next/image';
import zadeLogo from 'public/images/logo/zadesoft.png';
import stoicLogo from 'public/images/logo/stoic.png';
import certMark from 'public/images/projects/cert-mark.png';
import { FaCode } from 'react-icons/fa6';

export default function ProjectsPage() {
  return (
    <div>
      <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <li>
          <Link href="/projects/1" className="flex flex-col gap-y-4 rounded-4xl border border-gray-200 p-8 transition-opacity hover:opacity-50">
            <div>
              <div className="mb-2 w-fit p-1">
                <Image src={zadeLogo} alt="Zadesoft" height={24} />
              </div>
              <h2 className="text-xl font-semibold">사내 게임 운영툴</h2>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-[#287af3]">(주)제이드소프트</span>
                <Image src="/images/projects/cert-mark.png" alt="인증 배지 아이콘" width={16} height={16} />
              </div>
            </div>

            <div>
              <p>- 프론트엔드 및 백엔드 풀스택 개발</p>
              <p>- 서버 운영 및 라이브 이슈 대응</p>
              <p>- 데이터베이스 설계 및 성능 최적화</p>
            </div>

            <ul className="flex flex-wrap items-center gap-1 text-xs">
              <li className="bg-primary/10 text-primary rounded-md px-2 py-1">C#</li>
              <li className="bg-primary/10 text-primary rounded-md px-2 py-1">ASP.NET Core</li>
              <li className="bg-primary/10 text-primary rounded-md px-2 py-1">TypeScript</li>
              <li className="bg-primary/10 text-primary rounded-md px-2 py-1">React</li>
              <li className="bg-primary/10 text-primary rounded-md px-2 py-1">MySQL</li>
              <li className="bg-primary/10 text-primary rounded-md px-2 py-1">AWS</li>
            </ul>

            <div className="text-foreground/50 text-xs">프로젝트 세부 사항을 확인해 보세요. →</div>
          </Link>
        </li>

        <li className="flex cursor-pointer flex-col gap-y-4 rounded-4xl border border-gray-200 p-8 transition-opacity hover:opacity-50">
          <div>
            <div className="mb-2 w-fit p-1">
              <Image src={zadeLogo} alt="Zadesoft" height={24} />
            </div>
            <h2 className="text-xl font-semibold">NICE 본인인증 API 서버</h2>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-[#287af3]">(주)제이드소프트</span>
              <Image src={certMark} alt="인증 배지 아이콘" width={16} height={16} />
            </div>
          </div>

          <div>
            <p>- NICE API 연동 및 표준창 서비스 호출</p>
            <p>- 인증 위조 방지 및 결과 데이터 전송</p>
            <p>- 사내 메신저에 Webhook을 연동하여 서버 상태 실시간 모니터링</p>
          </div>

          <ul className="flex flex-wrap items-center gap-1 text-xs">
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">Node.js</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">TypeScript</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">Redis</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">PM2</li>
          </ul>

          <div className="text-foreground/50 text-xs">프로젝트 세부 사항을 확인해 보세요. →</div>
        </li>

        <li className="flex cursor-pointer flex-col gap-y-4 rounded-4xl border border-gray-200 p-8 transition-opacity hover:opacity-50">
          <div>
            <div className="mb-2 w-fit p-1">
              <Image src={stoicLogo} alt="STOIC Entertainment" height={24} />
            </div>
            <h2 className="text-xl font-semibold">사내 게임 운영툴</h2>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-[#287af3]">(주)스토익엔터테인먼트</span>
              <Image src={certMark} alt="인증 배지 아이콘" width={16} height={16} />
            </div>
          </div>

          <div>
            <p>- 프론트엔드 및 백엔드 풀스택 개발</p>
            <p>- 통합 유저 문의 처리 시스템 구축</p>
            <p>- 사내 데이터를 집계·가공하여 대시보드 형태로 시각화</p>
          </div>

          <ul className="flex flex-wrap items-center gap-1 text-xs">
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">TypeScript</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">React</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">C#</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">ASP.NET Core</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">MySQL</li>
          </ul>

          <div className="text-foreground/50 text-xs">프로젝트 세부 사항을 확인해 보세요. →</div>
        </li>

        <li className="flex cursor-pointer flex-col gap-y-4 rounded-4xl border border-gray-200 p-8 transition-opacity hover:opacity-50">
          <div>
            <div className="mb-2 w-fit p-1">
              <Image src={stoicLogo} alt="STOIC Entertainment" height={24} />
            </div>
            <h2 className="text-xl font-semibold">자동화 웹 크롤러</h2>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-[#287af3]">(주)스토익엔터테인먼트</span>
              <Image src={certMark} alt="인증 배지 아이콘" width={16} height={16} />
            </div>
          </div>

          <div>
            <p>- 프론트엔드 및 백엔드 풀스택 개발</p>
            <p>- 게임 플랫폼 내 데이터 수집 자동화</p>
            <p>- Discord 채팅 데이터 추출 자동화</p>
          </div>

          <ul className="flex flex-wrap items-center gap-1 text-xs">
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">C#</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">ASP.NET Core</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">TypeScript</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">React</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">MySQL</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">Selenium</li>
          </ul>

          <div className="text-foreground/50 text-xs">프로젝트 세부 사항을 확인해 보세요. →</div>
        </li>

        <li className="flex cursor-pointer flex-col gap-y-4 rounded-4xl border border-gray-200 p-8 transition-opacity hover:opacity-50">
          <div>
            <div className="mb-2 w-fit p-1">
              <Image src={stoicLogo} alt="STOIC Entertainment" height={24} />
            </div>
            <h2 className="text-xl font-semibold">유저 문의 페이지</h2>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-[#287af3]">(주)스토익엔터테인먼트</span>
              <Image src={certMark} alt="인증 배지 아이콘" width={16} height={16} />
            </div>
          </div>

          <div>
            <p>- 카테고리별 문의 접수 페이지 개발</p>
            <p>- 첨부파일 S3 업로드 기능 구현</p>
          </div>

          <ul className="flex flex-wrap items-center gap-1 text-xs">
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">JavaScript</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">BootStrap</li>
          </ul>

          <div className="text-foreground/50 text-xs">프로젝트 세부 사항을 확인해 보세요. →</div>
        </li>

        <li className="flex cursor-pointer flex-col gap-y-4 rounded-4xl border border-gray-200 p-8 transition-opacity hover:opacity-50">
          <div>
            <div className="mb-2 w-fit p-1">
              <Image src={stoicLogo} alt="STOIC Entertainment" height={24} />
            </div>
            <h2 className="text-xl font-semibold">PC WOL 관리 사이트</h2>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-[#287af3]">(주)스토익엔터테인먼트</span>
              <Image src={certMark} alt="인증 배지 아이콘" width={16} height={16} />
            </div>
          </div>

          <div>
            <p>- 프론트엔드 및 백엔드 풀스택 개발</p>
            <p>- 사내 팀별 PC 목록 관리 기능 구현</p>
            <p>- WOL(Wake On Lan) 기능 구현</p>
          </div>

          <ul className="flex flex-wrap items-center gap-1 text-xs">
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">Go</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">Echo</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">TypeScript</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">React</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">MySQL</li>
          </ul>

          <div className="text-foreground/50 text-xs">프로젝트 세부 사항을 확인해 보세요. →</div>
        </li>

        <li className="flex cursor-pointer flex-col gap-y-4 rounded-4xl border border-gray-200 p-8 transition-opacity hover:opacity-50">
          <div>
            <div className="mb-2 w-fit p-1">
              <FaCode size={24} />
            </div>
            <h2 className="text-xl font-semibold">개인 기술 블로그 (Cluvone)</h2>
            <div className="text-foreground/50 flex items-center gap-1 text-sm">개인 프로젝트</div>
          </div>

          <div>
            <p>- 프론트엔드 및 백엔드 풀스택 개발</p>
            <p>- CRUD 및 사용자 인증 기능 구현</p>
            <p>- 관리자 대시보드 기능 구현</p>
          </div>

          <ul className="flex flex-wrap items-center gap-1 text-xs">
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">Node.js</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">Nest.js</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">TypeScript</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">Next.js</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">PostgreSQL</li>
            <li className="bg-primary/10 text-primary rounded-md px-2 py-1">AWS</li>
          </ul>

          <div className="text-foreground/50 text-xs">프로젝트 세부 사항을 확인해 보세요. →</div>
        </li>
      </ul>
    </div>
  );
}
