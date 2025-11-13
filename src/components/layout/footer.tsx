import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-background border-t-border border-t py-12">
      <div className="flex w-full flex-col items-center gap-y-1">
        <div className="text-lg font-semibold">개발 꿈나무 최정원 블로그</div>
        <div className="text-sm">© 2025. cluvone All rights reserved.</div>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="https://github.com/cluvone" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-50">
            <FaGithub size={24} />
          </Link>
          <Link href="mailto:cluvonee@gmail.com" className="transition-opacity hover:opacity-50">
            <SiGmail size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/cluvone" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-50">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
