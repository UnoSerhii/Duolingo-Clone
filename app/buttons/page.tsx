import { Button } from '@/components/ui/button';
import React from 'react';

const ButtonsPage = () => {
  return (
    <div className='p-4 space-y-4 flex flex-col max-w-[200px]'>
      <Button>Default</Button>
      <Button variant='primary'>Primary</Button>
      <Button variant='primaryOutline'>Primary outline</Button>
      <Button variant='secondary'>secondary</Button>
      <Button variant='secondaryOutline'>secondary outline</Button>
      <Button variant='danger'>danger</Button>
      <Button variant='dangerOutline'>danger outline</Button>
      <Button variant='super'>super</Button>
      <Button variant='superOutline'>super outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='sidebar'>sidebar</Button>
      <Button variant='sidebarOutline'>sidebar outline</Button>
    </div>
  );
};

export default ButtonsPage;
