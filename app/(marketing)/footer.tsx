import { Button } from '@/components/ui/button';
import Image from 'next/image';
import croatia from '@/public/hr.svg'
import italy from '@/public/it.svg'
import england from '@/public/eng.svg'
import france from '@/public/cp.svg'
import ukraine from '@/public/ua.svg'

const Footer = () => {
  return (
    <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
      <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src={croatia} alt='croatia' height={32} width={40} className='mr-4 rounded-md' />
          Croatian
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src={italy} alt='italy' height={32} width={40} className='mr-4 rounded-md' />
          Italian
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src={england} alt='japan' height={32} width={40} className='mr-4 rounded-md' />
          England
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src={france} alt='france' height={32} width={40} className='mr-4 rounded-md' />
          French
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image src={ukraine} alt='ukraine' height={32} width={40} className='mr-4 rounded-md' />
          Ukrainian
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
