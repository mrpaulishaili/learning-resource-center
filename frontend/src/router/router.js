import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../components';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
      {
        path: '/audios',
        element: <Audios />,
      },
      {
        path: '/articles',
        element: <Articles />,
      },
      {
        path: '/wishlists',
        element: <Wishlists />,
      },
      {
        path: '/add',
        element: <Add />,
      },
      {
        path: '/update/:id',
        element: <Update />,
      },
      {
        path: '/store',
        element: <Mechandise />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
