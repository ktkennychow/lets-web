'use client';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { logOut, user } = useAuth();
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await logOut();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex w-full flex-row items-center justify-between gap-10 p-4 md:gap-0'>
      <Link href={user ? '/home' : '/'}>
        <div className='text-3xl font-extrabold italic tracking-[-0.1em]'>LETS</div>
      </Link>
      {user ? (
        <div>
          {user.username}
          <Button variant='outline' onClick={handleSignOut}>
            Log out
          </Button>
        </div>
      ) : (
        <div>
          <div className='flex flex-row gap-6'>
            <Link href='/login'>
              <Button variant='outline'>Login</Button>
            </Link>
            <Link href='/signup'>
              <Button>Signup</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
