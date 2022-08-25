import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { LogIn } from '../pages/LogIn';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}
