import { Route } from "react-router-dom";
import { LoginPage } from "src/pages/loginPage";
import { Root } from "./Root";
import bookstoreRoute from "src/pages/routes";
import { RegisterPage } from "src/pages/registerPage";

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
  {
    path: "/register",
    exact: true,
    name: "Register",
    element: <RegisterPage />,
    route: Route,
  },
  ...bookstoreRoute,
];

export { publicRoute };
