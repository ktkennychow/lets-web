'use client';

import { SignupForm } from '@/components/signupForm';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

export default function LoginPage() {
  const { signInWithGoogle } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const handleLoginWithGoogle = async () => {
    try {
      await signInWithGoogle();
      router.push('/dashboard/home');
    } catch (error) {
      toast({
        title: 'Something is wrong',
        description: 'Please contact us.',
      });
    }
  };
  return (
    <div className='mx-auto flex w-80 flex-col gap-12'>
      <Button variant='outline' onClick={handleLoginWithGoogle}>
        Google Signup
      </Button>
      <SignupForm />
    </div>
  );
}
