'use client';
import { LoginForm } from '@/components/loginForm';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { signInWithGoogle } = useAuth();
  const router = useRouter();
  const handleLoginWithGoogle = async () => {
    try {
      await signInWithGoogle();
      router.push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mx-auto flex w-80 flex-col gap-12'>
      <Button variant='outline' onClick={handleLoginWithGoogle}>
        Google Login
      </Button>
      <LoginForm />
    </div>
  );
}
