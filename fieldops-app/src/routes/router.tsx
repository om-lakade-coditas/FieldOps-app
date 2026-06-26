import { createBrowserRouter, useNavigate } from "react-router";
import Layout from "../components/UI-Components/Layout/Layout";
import LandingScreen from "../components/UI-Components/LandingScreen/LandingScreen";
import CustomerDashboard from "../components/Dashboard-Components/CustomerDashboard/CustomerDashboard";
import TechnicianDashboard from "../components/Dashboard-Components/TechnicianDashboard/TechnicianDashboard";
import DispatcherDashboard from "../components/Dashboard-Components/DispatcherDashboard/DispatcherDashboard";
import Dashboard from "../pages/Dashboard/Dashboard";
import type { ComponentType } from "react";
import guards from "./guards";
export type Predicate = () => Boolean;



const canAccess = (component: ComponentType, guards: Predicate[], to: ComponentType = LandingScreen ) => {    
    if(!guards.every(guard => guard())){
        return to
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