import Time from "../App/Time/Views/Time";
import Projects from "../App/Projects/View/Projects";
import Billing from "../App/Billing/View/Billing";

var indexRoutes = [
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    },
    {
        path: "/billing",
        name: "Billing",
        component: Billing
    },
    {
        path: "/",
        name: "Time",
        component: Time
    },
];

export default indexRoutes;