import Home from '@/pages/home';
import MovieDetails from '@/pages/movie-details';
import { Route, Routes } from 'react-router-dom';

enum RoutesPaths {
  HOME = '',
  MOVIE_DETAILS = 'movie/:movieId'
}

function AppRoutes() {
  const switchRouteElement = (route: string) => {
    switch (route) {
      case RoutesPaths.HOME:
        return <Home />;
      case RoutesPaths.MOVIE_DETAILS:
        return <MovieDetails />;
      default:
        return <Home />;
    }
  };

  const privateRoutes = () => {
    return Object.values(RoutesPaths).map((route: string) => (
      <Route
        key={route}
        path={`${route}`}
        element={<>{switchRouteElement(route)}</>}
      />
    ));
  };

  return (
    <Routes>
      {privateRoutes()}
      <Route path="*" element={<></>} />
    </Routes>
  );
}

export default AppRoutes;
