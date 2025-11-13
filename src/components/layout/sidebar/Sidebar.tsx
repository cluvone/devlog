import * as SidebarPrimitive from './base';
import Link from 'next/link';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { AtSignIcon, BookMarkedIcon, ChevronRightIcon, FolderOpenIcon, HouseIcon, PanelsTopLeftIcon } from 'lucide-react';

// 더미 데이터
const menuItems = [
  { title: 'Home', icon: <HouseIcon /> },
  { title: 'About', icon: <AtSignIcon /> },
  { title: 'Projects', icon: <PanelsTopLeftIcon /> },
  { title: 'Blog', icon: <BookMarkedIcon /> },
] as const;

const blogItems = [
  {
    group: '프로그래밍',
    categories: [
      {
        name: 'Front-End',
        icon: '🌟',
        subCategories: [
          { name: 'TypeScript', icon: null },
          { name: 'React.js', icon: null },
          { name: 'Next.js', icon: null },
        ],
      },
      {
        name: 'Back-End',
        icon: '💻',
        subCategories: [
          { name: 'Node.js', icon: null },
          { name: 'C#', icon: null },
          { name: 'Java', icon: null },
        ],
      },
    ],
  },
  {
    group: '데이터베이스',
    categories: [
      {
        name: 'SQL',
        icon: '🐋',
        subCategories: [
          { name: 'MySQL', icon: null },
          { name: 'PostreSQL', icon: null },
          { name: 'Oracle', icon: null },
        ],
      },
      {
        name: 'NoSQL',
        icon: '🍃',
        subCategories: [{ name: 'MongoDB', icon: null }],
      },
    ],
  },
  {
    group: 'CS',
    categories: [
      {
        name: '네트워크',
        icon: '🛜',
        subCategories: null,
      },
      {
        name: '알고리즘',
        icon: '📊',
        subCategories: null,
      },
      {
        name: '자료구조',
        icon: '🗂️',
        subCategories: null,
      },
    ],
  },
] as const;

export default function Sidebar() {
  const defaultIcon = <FolderOpenIcon />;

  return (
    <SidebarPrimitive.Root>
      <SidebarPrimitive.Header>
        <SidebarPrimitive.Menu>
          {menuItems.map(item => (
            // 최상위 메뉴 목록
            <SidebarPrimitive.MenuItem key={item.title}>
              <SidebarPrimitive.MenuButton asChild>
                <Link href={`/${item.title.toLowerCase()}`}>
                  <SidebarPrimitive.Icon>{item.icon}</SidebarPrimitive.Icon>
                  <SidebarPrimitive.Title>{item.title}</SidebarPrimitive.Title>
                </Link>
              </SidebarPrimitive.MenuButton>
            </SidebarPrimitive.MenuItem>
          ))}
        </SidebarPrimitive.Menu>
      </SidebarPrimitive.Header>

      <SidebarPrimitive.Content>
        {blogItems.map(item => (
          // 블로그 메인 카테고리 목록
          <SidebarPrimitive.Group key={item.group}>
            <SidebarPrimitive.GroupLabel>
              <SidebarPrimitive.Title className="leading-none">{item.group}</SidebarPrimitive.Title>
            </SidebarPrimitive.GroupLabel>

            <SidebarPrimitive.GroupContent>
              <SidebarPrimitive.Menu>
                {item.categories.map(category =>
                  // 서브 카테고리 목록이 있는 경우 Collapsible로 SubMenu를 렌더링한다.
                  category.subCategories ? (
                    <Collapsible asChild key={category.name} className="group/collapsible">
                      <SidebarPrimitive.MenuItem>
                        <SidebarPrimitive.MenuButton asChild>
                          <Link href={category.name}>
                            <SidebarPrimitive.Icon collapsible>{category.icon ?? defaultIcon}</SidebarPrimitive.Icon>
                            <SidebarPrimitive.Title>{category.name}</SidebarPrimitive.Title>
                          </Link>
                        </SidebarPrimitive.MenuButton>

                        <CollapsibleTrigger asChild>
                          <SidebarPrimitive.MenuCollapse>
                            <ChevronRightIcon />
                          </SidebarPrimitive.MenuCollapse>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarPrimitive.SubMenu>
                            {category.subCategories.map(subCategory => (
                              // 블로그 서브 카테고리 목록
                              <SidebarPrimitive.SubMenuItem key={subCategory.name}>
                                <SidebarPrimitive.SubMenuButton asChild>
                                  <Link href={subCategory.name}>
                                    <SidebarPrimitive.Icon>{subCategory.icon ?? defaultIcon}</SidebarPrimitive.Icon>
                                    <SidebarPrimitive.Title>{subCategory.name}</SidebarPrimitive.Title>
                                  </Link>
                                </SidebarPrimitive.SubMenuButton>
                              </SidebarPrimitive.SubMenuItem>
                            ))}
                          </SidebarPrimitive.SubMenu>
                        </CollapsibleContent>
                      </SidebarPrimitive.MenuItem>
                    </Collapsible>
                  ) : (
                    <SidebarPrimitive.MenuItem key={category.name}>
                      <SidebarPrimitive.MenuButton asChild>
                        <Link href={category.name}>
                          <SidebarPrimitive.Icon>{category.icon}</SidebarPrimitive.Icon>
                          <SidebarPrimitive.Title>{category.name}</SidebarPrimitive.Title>
                        </Link>
                      </SidebarPrimitive.MenuButton>
                    </SidebarPrimitive.MenuItem>
                  ),
                )}
              </SidebarPrimitive.Menu>
            </SidebarPrimitive.GroupContent>
          </SidebarPrimitive.Group>
        ))}
      </SidebarPrimitive.Content>

      <SidebarPrimitive.Footer>
        <div className="text-foreground-quinary px-2 py-1 text-center text-xs">By Cluvone</div>
      </SidebarPrimitive.Footer>
    </SidebarPrimitive.Root>
  );
}
