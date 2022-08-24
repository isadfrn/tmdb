import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from '../routes/auth.routes';
import { Navbar } from '../components/Navbar';

export function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <AuthRoutes />
    </BrowserRouter>
  );
}
