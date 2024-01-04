import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='absolute top-0 hidden w-full flex-row items-center justify-between bg-zinc-800 p-4 md:flex'>
        <div className='text-3xl font-extrabold italic tracking-[-0.1em]'>LETS</div>
        <div className='flex flex-row gap-6'>
          <Link href={`/login`}>
            <Button className='rounded-full bg-white text-black'>Login</Button>
          </Link>
          <Link href={`/signup`}>
            <Button className='rounded-full bg-white text-black'>
              Create an account
            </Button>
          </Link>
        </div>
      </div>
      <div>Hero tagline</div>
      <div className='flex flex-col gap-10 md:hidden'>
        <Button className='min-w-[200px] rounded-full bg-white text-black'>Login</Button>
        <Button className='min-w-[200px] rounded-full bg-white text-black'>
          Create an account
        </Button>
      </div>
    </main>
  );
}
