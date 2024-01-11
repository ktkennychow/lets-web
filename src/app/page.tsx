'use client';
import Image from 'next/image';
import heroPic from '../../public/Untitled.png';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push('/home');
  }

  return (
    <main className='flex h-full flex-col items-center justify-between p-24'>
      <div>Get moving!</div>
      <Image src={heroPic} width={500} height={500} alt='Picture of the author' />
    </main>
  );
}
