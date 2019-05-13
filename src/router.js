import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AddProduct from "./views/AddProduct";
import ProductList from "./views/ProductList";
import DisplayProduct from "./views/DisplayProduct";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/products",
      name: "product-list",
      component: ProductList
    },
    {
      path: "/products/:slug",
      name: "display-product",
      component: DisplayProduct
    },
    {
      path: "/add-product",
      name: "add-product",
      component: AddProduct
    }
  ]
});
