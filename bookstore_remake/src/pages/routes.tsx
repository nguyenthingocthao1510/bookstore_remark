import { homePageRoute, registerRoute } from "src/routes/routes.contants";
import { Homepage } from "./homepage";
import { RegisterPage } from "./registerPage";

const bookstoreRoute = [
  {
    path: `/${homePageRoute}`,
    name: "Homepage",
    element: <Homepage />,
  },
  {
    path: registerRoute,
    name: "Register",
    element: <RegisterPage />,
  },
];

export default bookstoreRoute;
