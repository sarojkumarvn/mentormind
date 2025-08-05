import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = () => {
  return (
    <div className="h-screen flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;