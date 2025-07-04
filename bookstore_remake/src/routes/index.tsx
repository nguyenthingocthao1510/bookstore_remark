import { Route, RouteProps } from "react-router-dom";
import { Login } from "src/pages/loginPage";
import { Root } from "./Root";

export interface RoutesProps {
    path: RouteProps['path'],
    name?: string,
    element?: RouteProps['element'],
    route?: any,
    exact?: any,
    icon?: string,
    header?: string,
    roles?: string[],
    children?: RouteProps[]
}

const publicRoute: RoutesProps[] = [
    {
        path: '/',
        exact: true,
        name: 'Root',
        element: <Root />,
        route: Route
    }
    ,
    {
        path: '/login',
        exact: true,
        name: 'Login',
        element: <Login />,
        route: Route
    }
]

export {
    publicRoute
}