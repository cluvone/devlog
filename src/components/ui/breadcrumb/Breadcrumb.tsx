'use client';

import type { BreadcrumbItem, BreadcrumbProps } from './types';
import * as BreadcrumbPrimitive from './base';
import Link from 'next/link';
import profile from 'public/images/profile.jpg';
import Avatar from '../avatar/avatar';
import DropdownMenu from '../dropdown-menu';
import { Fragment } from 'react';
import { useSelectedLayoutSegments } from 'next/navigation';
import { CornerDownRightIcon } from 'lucide-react';

const SEGMENTS_TO_DISPLAY = 2; // 렌더링할 세그먼트 개수 (루트 경로 제외)

export default function Breadcrumb(props: BreadcrumbProps) {
  const segments = useSelectedLayoutSegments();

  const items = (() => {
    const dropdown: BreadcrumbItem[] = [];
    const breadcrumb: BreadcrumbItem[] = [];

    segments.forEach((segment, index, array) => {
      const title = decodeURIComponent(segment);
      const href = '/' + array.slice(0, index + 1).join('/'); // index별 누적 경로를 join해서 실제 계층 경로를 구한다.
      const item = { title, href };

      if (index >= array.length - SEGMENTS_TO_DISPLAY) {
        breadcrumb.push(item); // 뒤에서부터 SEGMENTS_TO_DISPLAY만큼만 Breadcrumb에 직접적으로 렌더링된다.
      } else {
        dropdown.push(item); // 나머지는 드롭다운으로 들어간다.
      }
    });

    return { dropdown, breadcrumb };
  })();

  return (
    <BreadcrumbPrimitive.Breadcrumb {...props}>
      <BreadcrumbPrimitive.BreadcrumbList>
        <BreadcrumbPrimitive.BreadcrumbItem>
          <BreadcrumbPrimitive.BreadcrumbLink asChild>
            <Link href="/">
              <Avatar src={profile} alt="프로필 이미지" size={20} />
              <BreadcrumbPrimitive.BreadcrumbTitle>cluvone-log</BreadcrumbPrimitive.BreadcrumbTitle>
              {segments.length === 0 && <span className="text-foreground-quaternary ml-1.5 hidden md:block">최정원입니다.</span>}
            </Link>
          </BreadcrumbPrimitive.BreadcrumbLink>
        </BreadcrumbPrimitive.BreadcrumbItem>

        {/* DropdownMenu */}
        {segments.length > SEGMENTS_TO_DISPLAY && (
          <>
            <BreadcrumbPrimitive.BreadcrumbSeparator />

            <BreadcrumbPrimitive.BreadcrumbItem className="shrink-0">
              <DropdownMenu>
                <DropdownMenu.Trigger asChild className="shrink-0" aria-label="숨겨진 메뉴 토글">
                  <BreadcrumbPrimitive.BreadcrumbEllipsis />
                </DropdownMenu.Trigger>

                <DropdownMenu.Content align="start">
                  {items.dropdown.map(({ title, href }, index) => (
                    <DropdownMenu.Item key={href} asChild>
                      <Link href={href}>
                        <div className="flex items-center gap-2" style={{ paddingLeft: index * 8 }}>
                          {index > 0 && <CornerDownRightIcon className="text-foreground-quinary" />}
                          <span>{title}</span>
                        </div>
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu>
            </BreadcrumbPrimitive.BreadcrumbItem>
          </>
        )}

        {/* Breadcrumb */}
        {items.breadcrumb.map(({ title, href }, index, array) => (
          <Fragment key={href}>
            <BreadcrumbPrimitive.BreadcrumbSeparator />

            <BreadcrumbPrimitive.BreadcrumbItem>
              {index === array.length - 1 ? (
                <BreadcrumbPrimitive.BreadcrumbPage>
                  <BreadcrumbPrimitive.BreadcrumbTitle className="max-w-96">{title}</BreadcrumbPrimitive.BreadcrumbTitle>
                </BreadcrumbPrimitive.BreadcrumbPage>
              ) : (
                <BreadcrumbPrimitive.BreadcrumbLink asChild>
                  <Link href={href}>
                    <BreadcrumbPrimitive.BreadcrumbTitle className="max-w-40">{title}</BreadcrumbPrimitive.BreadcrumbTitle>
                  </Link>
                </BreadcrumbPrimitive.BreadcrumbLink>
              )}
            </BreadcrumbPrimitive.BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbPrimitive.BreadcrumbList>
    </BreadcrumbPrimitive.Breadcrumb>
  );
}
