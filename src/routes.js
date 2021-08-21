import AirBnb from "./AirBnb";
import Detail from "./AirBnb/detail";

export default [
    {
        path: "/",
        label: "App",
        exact: true,
        component: AirBnb
    },
    {
        path: "/detail",
        label: "Detail",
        exact: true,
        component: Detail
    }
]