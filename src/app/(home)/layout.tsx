import LayoutWrapper from '@/components/LayoutWrapper';
import { Toaster } from 'react-hot-toast';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LayoutWrapper><Toaster />{children}</LayoutWrapper>
    </div>
  );
};

export default AppLayout;
