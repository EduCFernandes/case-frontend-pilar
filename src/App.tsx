import { BrowserRouter } from 'react-router-dom';
import Header from './ components/header/header';
import AppRoutes from './routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Loader from './ components/loader/loader';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Loader />
        <div className="mt-[65px]">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
