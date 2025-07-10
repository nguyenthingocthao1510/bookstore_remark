import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { publicRoute, RoutesProps } from ".";
import DefaultLayout from "src/layouts/Default";
import useRedux from "src/hooks/useRedux";
import Error404 from "src/pages/error/Error404";
import React from "react";

const AllRoutes = () => {
  const { appSelector } = useRedux();

  const { layout } = appSelector((state) => ({
    layout: state.layout,
  }));

  const renderRoute = (routes: RoutesProps[]): React.ReactNode[] => {
    return routes.map((route, index) => {
      const { path, element, children } = route;

      if (!path) {
        console.warn(`Route at index ${index} is missing a 'path'`);
      }

      return (
        <Route
          path={path}
          element={<DefaultLayout layout={layout}>{element}</DefaultLayout>}
          key={index}
        >
          {children && renderRoute(children)}
        </Route>
      );
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {renderRoute(publicRoute)}
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default AllRoutes;
