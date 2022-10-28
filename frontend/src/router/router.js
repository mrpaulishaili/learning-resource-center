import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Layout } from '../components';
import DLayout from '../components/DLayout';
import {
  Add,
  Articles,
  Audios,
  Books,
  Dashboard,
  ErrorPage,
  Home,
  Login,
  Mechandise,
  Register,
  Update,
  Videos,
  Wishlists,
} from '../pages';
import Profile from '../pages/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Books />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/audios" element={<Audios />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/wishlists" element={<Wishlists />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/store" element={<Mechandise />} />
      </Route>
      <Route path="/dashboard/" element={<DLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Route>
  )
);

export default router;
