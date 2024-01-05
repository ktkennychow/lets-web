'use client';
import { LoginForm } from '@/components/loginForm';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { signInWithGoogle } = useAuth();
  const handleLoginWithGoogle = async () => {
    try {
      await signInWithGoogle();
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
