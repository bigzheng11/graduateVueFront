import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index/In";
import SellingPage from "../views/SellingPage.vue";
import UserCenter from "../views/UserCenter.vue";
import Video from "../views/Index/Video.vue";
import Recommend from "../views/Index/Recommend.vue";
import GoodsDetail from "../views/GoodsDetail.vue";
import BuyPage from "../views/BuyPage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ShoppingSuccess from "../views/ShoppingSuccess.vue";
import Address from "../views/Address/Address.vue";
import SelectPage from "../views/SelectPage.vue";
import AddressList from "../views/Address/AddressList.vue";
import addAddress from "../views/Address/addAddress.vue";
import EditAddress from "../views/EditAddress.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
        // 使用路由重定向,首页默认显示视频
        redirect: "/video",
        children: [
            {
                path: "/video",
                name: "Video",
                component: Video,
            },
            {
                path: "/recommend",
                name: "Recommend",
                component: Recommend,
            },
        ],
    },

    {
        path: "/AddressList",
        name: "AddressList",
        component: AddressList,
    },
    {
        path: "/addAddress",
        name: "addAddress",
        component: addAddress,
    },
    {   
        path: "/EditAddress",
        name: "EditAddress",
        component: EditAddress,
    },

    {
        path: "/selectpage",
        name: "SelectPage",
        component: SelectPage,
    },
    {
        path: "/goodsdetail",
        name: "GoodsDetail",
        component: GoodsDetail,
    },
    {
        path: "/address",
        name: "Address",
        component: Address,
    },

    {
        path: "/shoppingsuccess",
        name: "ShoppingSuccess",
        component: ShoppingSuccess,
    },

    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },

    {
        path: "/sellingpage",
        name: "SellingPage",
        component: SellingPage,
    },
    {
        path: "/usercenter",
        name: "UserCenter",
        component: UserCenter,
    },
    {
        path: "/buypage",
        name: "BuyPage",
        component: BuyPage,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
