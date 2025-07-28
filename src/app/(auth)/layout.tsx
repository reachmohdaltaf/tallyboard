import LayoutWrapper from '@/components/LayoutWrapper';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default AppLayout;
