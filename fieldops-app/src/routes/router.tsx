import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout/Layout";
import LandingScreen from "../components/LandingScreen/LandingScreen";
import CustomerDashboard from "../components/CustomerDashboard/CustomerDashboard";
import TechnicianDashboard from "../components/TechnicianDashboard/TechnicianDashboard";
import DispatcherDashboard from "../components/DispatcherDashboard/DispatcherDashboard";
import Dashboard from "../pages/Dashboard/Dashboard";
import type { ComponentType } from "react";
import guards from "./guards";
export type Predicate = () => Boolean;


const canAccess = (component: ComponentType, guards: Predicate[], to: ComponentType = Dashboard ) => {    
    if(!guards.every(guard => guard())){
        return to;
    }
    return component;
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
                Component: canAccess(Dashboard, [guards.isLoggedIn]),
                path: "/dashboard",
                children: [
                {
                    Component: CustomerDashboard,
                    path: "/dashboard/"
                },
                {
                    Component: TechnicianDashboard,
                    path: "technician"
                },
                {
                    Component: DispatcherDashboard,
                    path: "dispatcher"
                }
            ]
            }
        ]
    }
])