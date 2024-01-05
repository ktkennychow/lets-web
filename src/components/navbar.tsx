import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='fixed bottom-0 flex h-16 w-full flex-1 justify-evenly bg-secondary'>
      <Link
        href={`/dashboard/home`}
        className='flex h-full w-1/4 flex-col items-center justify-center'>
        Home
      </Link>
      <Link
        href={`/dashboard/history`}
        className='flex h-full w-1/4 flex-col items-center justify-center'>
        History
      </Link>
      <Link
        href={`/dashboard/explore`}
        className='flex h-full w-1/4 flex-col items-center justify-center'>
        Explore
      </Link>
      <Link
        href={`/dashboard/settings`}
        className='flex h-full w-1/4 flex-col items-center justify-center'>
        Setting
      </Link>
    </div>
  );
}
