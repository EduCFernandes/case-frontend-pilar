import { BrowserRouter } from 'react-router-dom';
import Header from './ components/header/header';
import AppRoutes from './routes/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container py-6 mx-auto mt-[65px]">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
