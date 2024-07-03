import { Suspense } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/"
        element={
          // <Suspense fallback={<Loading />}>
          <HomePage />
          //  </Suspense>
        }
      />

      {/* <Route
        path="about"
        element={
          <Suspense fallback={<Loading />}>
            <AboutPage />
          </Suspense>
        }
      /> */}
      {/* <Route path="*" element={<ErrorPage />}></Route> */}
    </Switch>
  );
};

export default Routes;
