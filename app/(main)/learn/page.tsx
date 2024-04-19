import { redirect } from 'next/navigation';

import FeedWrapper from '@/components/FeedWrapper';
import { getUserProgress } from '@/db/queries';
import StickyWrapper from '@/components/StickyWrapper';
import React from 'react';
import Header from './header';
import UserProgress from '@/components/user-progress';

const LearnPage = async () => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress?.activeCourse) {
    redirect('/courses');
  }

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: 'Spanish', imageSrc: '/ua.svg' }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title='Ukrainian' />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
