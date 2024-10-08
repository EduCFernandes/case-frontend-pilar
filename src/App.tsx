import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container py-6 mx-auto">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
