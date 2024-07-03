import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Router = ({ children, ...props }) => {
  const GlobalService = lazy(() => import('../context/GlobalService'));
  return (
    <BrowserRouter {...props}>
      <Suspense fallback={console.log('loading...')}>
        <GlobalService>{children}</GlobalService>
      </Suspense>
    </BrowserRouter>
  );
};
export default Router;
