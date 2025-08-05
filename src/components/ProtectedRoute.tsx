import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;