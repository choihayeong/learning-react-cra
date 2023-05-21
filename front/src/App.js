import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import UnitConverter from './routes/UnitConverter/UnitConverter';
import ButtonsMemo from './routes/ButtonMemo/ButtonsMemo';
import SampleApiCall from './routes/SampleApiCall/SampleApiCall';
import Deps from './routes/Deps/Deps';
import CleanUp from './routes/CleanUp/CleanUp';
import ToDo from './routes/ToDo/ToDo';
import CoinTracker from './routes/CoinTracker/CoinTracker';
import MovieList from './routes/Movie/MovieList';
import Login from './routes/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/unit-converter',
    element: <UnitConverter />
  },
  {
    path: '/buttons-memo',
    element: <ButtonsMemo />
  },
  {
    path: '/sample-api-call',
    element: <SampleApiCall />
  },
  {
    path: '/deps',
    element: <Deps />
  },
  {
    path: '/cleanup',
    element: <CleanUp />
  },
  {
    path: '/todo',
    element: <ToDo />
  },
  {
    path: '/coin-trakcer',
    element: <CoinTracker />
  },
  {
    path: '/movie-list',
    element: <MovieList />
  },
  {
    path: '/login',
    element: <Login />
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
