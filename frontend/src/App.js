import './style.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
