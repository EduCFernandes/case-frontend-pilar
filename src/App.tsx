import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';
import Header from './ components/header/header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container py-6 mx-auto">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
