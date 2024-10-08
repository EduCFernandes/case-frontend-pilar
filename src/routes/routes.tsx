import { Navigate, Route, Routes } from 'react-router-dom';

enum RoutesPaths {
  HOME = '',
  MOVIE_DETAILS = 'movies/:movieId'
}

function AppRoutes() {
  const switchRouteElement = (route: string) => {
    switch (route) {
      case RoutesPaths.HOME:
        return <></>;
      case RoutesPaths.MOVIE_DETAILS:
        return <></>;
      default:
        return <></>;
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
      <Route path="/" element={<Navigate to="/" />} />
      {privateRoutes()}
      <Route path="*" element={<></>} />
    </Routes>
  );
}

export default AppRoutes;
