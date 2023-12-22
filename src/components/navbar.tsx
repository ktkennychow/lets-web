import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='fixed bottom-0 flex h-16 w-full flex-1 justify-evenly'>
      <Button variant='secondary' className='h-full w-1/4'>
        <Link href={`/dashboard/home`}>Home</Link>
      </Button>
      <Button variant='secondary' className='h-full w-1/4'>
        <Link href={`/dashboard/history`}>History</Link>
      </Button>
      <Button variant='secondary' className='h-full w-1/4'>
        <Link href={`/dashboard/explore`}>Explore</Link>
      </Button>
      <Button variant='secondary' className='h-full w-1/4'>
        <Link href={`/dashboard/settings`}>Setting</Link>
      </Button>
    </div>
  );
}
