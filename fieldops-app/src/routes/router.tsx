import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout/Layout";
import LandingScreen from "../components/LandingScreen/LandingScreen";
import CustomerDashboard from "../components/CustomerDashboard/CustomerDashboard";
import type React from "react";
import TechnicianDashboard from "../pages/TechnicianDashboard/TechnicianDashboard";
import DispatcherDashboard from "../pages/DispatcherDashboard/DispatcherDashboard";


const canAccess = (Component: React.Component, Predicate: ()=> boolean, to: React.Component) => {

}

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
            },
            {
                Component: TechnicianDashboard,
                path: "/Technician"
            },
            {
                Component: DispatcherDashboard,
                path: "/Dispatcher"
            }
        ]
    }
])