import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout/Layout";
import LandingScreen from "../components/LandingScreen/LandingScreen";
import CustomerDashboard from "../pages/CustomerDashboard/CustomerDashboard";

export const router = createBrowserRouter([
    {
        Component:Layout,
        path: "/",
        children: [
            {
                Component: LandingScreen,
                path: "/",
                index: true
            },
            {
                Component: CustomerDashboard,
                path: "/Home"
            }
        ]
    }
])