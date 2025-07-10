import { Route } from "react-router-dom";
import { LoginPage } from "src/pages/loginPage";
import { Root } from "./Root";
import bookstoreRoute from "src/pages/routes";

export interface RoutesProps {
  path?: string;
  name?: string;
  element?: React.ReactNode;
  route?: any;
  exact?: boolean;
  icon?: string;
  header?: string;
  roles?: string[];
  children?: RoutesProps[];
}

const publicRoute: RoutesProps[] = [
  {
    path: "/",
    exact: true,
    name: "Root",
    element: <Root />,
    route: Route,
  },
  {
    path: "/login",
    exact: true,
    name: "Login",
    element: <LoginPage />,
    route: Route,
  },
  ...bookstoreRoute,
];

export { publicRoute };
