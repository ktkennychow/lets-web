import Navbar from '@/components/navbar';
import { AuthContextProvider } from '@/context/AuthContext';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      <Navbar />
    </section>
  );
}
