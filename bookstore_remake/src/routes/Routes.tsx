import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { publicRoute } from '.';
import DefaultLayout from 'src/layouts/Default';
import useRedux from 'src/hooks/useRedux';
import Error404 from 'src/pages/error/Error404';


const AllRoutes = () => {
    const { appSelector, dispatch } = useRedux();
    // const { layout } = appSelector(state => ({
    // layout: state.Layout, 
    // }));

    // const { width } = useViewport();

    const { layout } = appSelector(state => ({
        layout: state.layout
    }))

    const getLayout = () => {
        // let layoutCls = TwoColumnLayout();
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route>
                    {publicRoute.map((route, index) => (
                        <Route
                            path={route.path}
                            element={
                                <DefaultLayout layout={layout}>
                                    {route.element}
                                </DefaultLayout>
                            }
                            key={index}
                        >
                        </Route>
                    ))}
                </Route>
                <Route path='*' element={<Error404 />} />
            </Route>
        )
    )

    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default AllRoutes;
