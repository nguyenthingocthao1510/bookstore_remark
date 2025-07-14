import {
  accountRoute,
  bookDetailRoute,
  cartRoute,
  changePasswordRoute,
  homePageRoute,
  logoutRoute,
  myCoinRoute,
  processSuccessRoute,
  profileRoute,
} from "src/routes/routes.contants";
import { RegisterPage } from "./registerPage";
import { CartPage } from "./cart";
import { AccountLayout } from "./account";
import { HomepagePage } from "./homepage/component";
import { RoutesProps } from "src/routes";
import { MainLayout } from "./homepage";
import { ProfilePage } from "./account/profile";
import { AccountPage } from "./account/accountPage";
import { Navigate } from "react-router-dom";
import { ChangePasswordPage } from "./account/changePassword";
import { MyCoinPage } from "./account/myCoin";
import { LogoutPage } from "./account/logout";
import { BookDetailPage } from "./bookDetail";
import { ProcessSuccessPage } from "./processSuccess";

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
        <AccountLayout>
          <AccountPage />
        </AccountLayout>
      </MainLayout>
    ),
    children: [
      {
        path: profileRoute,
        name: "Profile",
        element: (
          <AccountLayout>
            <ProfilePage />
          </AccountLayout>
        ),
      },
      {
        path: changePasswordRoute,
        name: "Change password",
        element: (
          <AccountLayout>
            <ChangePasswordPage />
          </AccountLayout>
        ),
      },
      {
        path: myCoinRoute,
        name: "My coin",
        element: (
          <AccountLayout>
            <MyCoinPage />
          </AccountLayout>
        ),
      },
      {
        path: logoutRoute,
        name: "Logout",
        element: (
          <AccountLayout>
            <LogoutPage />
          </AccountLayout>
        ),
      },
    ],
  },
  {
    path: bookDetailRoute,
    name: "Book detail",
    element: (
      <MainLayout>
        <BookDetailPage />
      </MainLayout>
    ),
  },
  {
    path: processSuccessRoute,
    name: "Process Success",
    element: (
      <MainLayout>
        <ProcessSuccessPage />
      </MainLayout>
    ),
  },
];

export default bookstoreRoute;
