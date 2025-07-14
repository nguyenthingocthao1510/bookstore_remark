import {
  accountRoute,
  cartRoute,
  homePageRoute,
  registerRoute,
} from "src/routes/routes.contants";
import { RegisterPage } from "./registerPage";
import { CartPage } from "./cart";
import { AccountPage } from "./account";
import { HomepagePage } from "./homepage/component";
import { RoutesProps } from "src/routes";
import { MainLayout } from "./homepage";

const bookstoreRoute: RoutesProps[] = [
  {
    path: homePageRoute,
    name: "Homepage",
    element: (
      <MainLayout>
        <HomepagePage />
      </MainLayout>
    ),
  },
  {
    path: cartRoute,
    name: "Cart",
    element: (
      <MainLayout>
        <CartPage />
      </MainLayout>
    ),
  },
  {
    path: accountRoute,
    name: "Account",
    element: (
      <MainLayout>
        <AccountPage />
      </MainLayout>
    ),
  },
];

export default bookstoreRoute;
