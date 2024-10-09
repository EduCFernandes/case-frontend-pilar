import { BrowserRouter } from 'react-router-dom';
import Header from './ components/header/header';
import AppRoutes from './routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <div className="mt-[65px] overflow-x-hidden">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
