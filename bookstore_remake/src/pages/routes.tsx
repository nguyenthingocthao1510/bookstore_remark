import { homePageRoute } from "src/routes/routes.contants";
import { Homepage } from "./homepage";

const bookstoreRoute = {
    path: homePageRoute,
    name: 'homepageRoute',
    children: [
        {
            path: homePageRoute,
            element: <Homepage />
        }
    ]
}

export default bookstoreRoute;