import MassOrder from "../viewComponents/massOrder"
import Orders from "../viewComponents/Orders"
import Service from "../viewComponents/Services"
import Affiliate from "../viewComponents/Affiliate"
import Support from "../viewComponents/Support"
import Setting from "../viewComponents/Setting"
import View from "../viewComponents/View"
import ViewTiket from "../viewComponents/ViewTiket" 
import CashFlow from "../viewComponents/CashFlow"
import Addfunds from "../viewComponents/AddFunds"
export const SidebarData = [
    {
        path: "/new",
        file:<View/>
    },
    {
        path: "/mass",
        file:<MassOrder/>
    },
    {
        path: "/orders",
        file:<Orders/>

    },
    {
        path: "/addfunds",
        file:<Addfunds/>

    },
    {
        path: "/services",
        file:<Service/>

    },

    {
        path: "/cashflow",
        file:<CashFlow/>


    },
    {
        path: "/affiliate",
        file:<Affiliate/>

    },
    {
        path: "/childpanel",
        file:<MassOrder/>


    },
    {
        path: "/tickets",
        file:<Support/>

    },
    {
        path: "/api",
        file:<MassOrder/>

    },
    {
        path: "/settings",
        file:<Setting/>

    },
    {
        path: "/viewtiket",
        file:<ViewTiket/>

    },
    {
        path: "/viewtiket/:id",
        file:<ViewTiket/>

    }
]