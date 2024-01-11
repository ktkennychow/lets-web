import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='fixed bottom-0 flex h-16 w-full flex-1 justify-evenly bg-secondary'>
      <Link
        href={`/home`}
        className='flex h-full w-1/4 flex-col items-center justify-center'>
        Home
      </Link>
      <Link
        href={`/history`}
        className='flex h-full w-1/4 flex-col items-center justify-center'>
        History
      </Link>
      <Link
        href={`/explore`}
        className='flex h-full w-1/4 flex-col items-center justify-center'>
        Explore
      </Link>
      <Link
        href={`/settings`}
        className='flex h-full w-1/4 flex-col items-center justify-center'>
        Setting
      </Link>
    </div>
  );
}
