import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/MovieHome';
import MovieDetail from './routes/MovieDetail';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
