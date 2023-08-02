import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import ManageCars from '../pages/cars/ManageCars';
import Welcome from '../pages/home/Welcome';
import LoginPage from '../pages/login/LoginPage';
import { useAuth } from '../contexts/AuthProvider';

export default function AppRoutes() {
    const { isAuthorized } = useAuth();

    const router = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "*",
            element: <Navigate to="/" replace></Navigate>
        }
    ]);

    const privateRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Welcome />,
                },
                {
                    path: "/ManageCar",
                    element: <ManageCars />,
                },
                {
                    path: "*",
                    element: <Navigate to="/" replace></Navigate>
                }
            ],
        }
    ]);

    return (
        <RouterProvider router={isAuthorized ? privateRoutes : router} />
    )
}