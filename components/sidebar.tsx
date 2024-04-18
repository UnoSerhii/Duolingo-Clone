import { cn } from '@/lib/utils';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import Link from 'next/link';
import SidebarItem from './sidebar-item';
import { ClerkLoading, ClerkLoaded, UserButton } from '@clerk/nextjs';
import { Loader } from 'lucide-react';

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
        className
      )}
    >
      <Link href='/learn'>
        <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
          <Image src={logo} alt='logo' width={40} height={40} />
          <h1 className='text-xl font-extrabold text-green-500 tracking-wide'>
            Lingo
          </h1>
        </div>
      </Link>
      <div className='flex flex-col gap-y-2 flex-1'>
        <SidebarItem label='Learn' href='/learn' iconSrc='/learning.png' />
        <SidebarItem
          label='Leaderboard'
          href='/leaderboard'
          iconSrc='/leaderboard.png'
        />
        <SidebarItem label='Quests' href='/quests' iconSrc='/quests.png' />
        <SidebarItem label='Shop' href='/shop' iconSrc='/shop.png' />
      </div>
      <div className='p-4'>
        <ClerkLoading>
          <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl='/' />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
