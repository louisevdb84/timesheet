import Time from "../App/Time/Views/Time";
import Projects from "../App/Projects/View/Projects";
import Billing from "../App/Billing/View/Billing";

var indexRoutes = [
    {
        path: "/projects",
        name: "Projects",
        short: "Projects",
        mini: "P",
        icon: "business_money-coins",
        component: Projects
    },
    {
        path: "/billing",
        name: "Billing",
        short: "Billing",
        mini: "B",
        icon: "business_money-coins",
        component: Billing
    },
    {
        path: "/",
        name: "Time",
        short: "Time",
        mini: "T",
        icon: "business_money-coins",
        component: Time
    },
];

export default indexRoutes;