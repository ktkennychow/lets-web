import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { IoAdd } from 'react-icons/io5';

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return (
    <div className='w-full'>
      <h1 className='w-full bg-zinc-500 p-3 text-white'>Template</h1>
      <div className='mx-auto my-2 grid w-[392px] grid-cols-2 gap-2'>
        <Link href='/plan/push'>
          <Card className='h-48 w-48'>
            <CardHeader>
              <CardTitle>Push</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </Link>
        <Card className='h-48 w-48'>
          <CardHeader>
            <CardTitle>Pull</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className='h-48 w-48'>
          <CardHeader>
            <CardTitle>Leg</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className='h-48 w-48'>
          <CardHeader>
            <CardTitle>Super</CardTitle>
            <CardDescription>Efficient & Effective</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Full body Superset</p>
          </CardContent>
        </Card>
      </div>

      <h1 className='w-full bg-zinc-500 p-3 text-white'>Custom Plans</h1>

      <div className='mx-auto my-2 grid w-[392px] grid-cols-2 gap-2'>
        <Button className='h-48 w-48' variant='outline'>
          <IoAdd className='h-1/2 w-1/2' />
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
