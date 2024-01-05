import Image from 'next/image';
import heroPic from '../../public/Untitled.png';

export default function LandingPage() {
  return (
    <main className='flex h-full flex-col items-center justify-between p-24'>
      <div>Get moving!</div>
      <Image src={heroPic} width={500} height={500} alt='Picture of the author' />
    </main>
  );
}
