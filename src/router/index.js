import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "../store/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  {
    path: "/login",
    name: "Login",
    component: () => import( "../views/Login.vue"),
    meta: {
      guest : true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: () => import( "../views/Register.vue"),
    meta: {
      guest : true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import( "../views/Profile.vue"),
    meta: {
      requiresAuth: true 
    }
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import( "../views/Posts.vue"),
    meta: {
      requiresAuth: true 
    }
  },
  {
    path: "/post/:id",
    name: "EditPost", 
    component: ()=> import("../views/EditPost.vue"),
    meta: {
      requiresAuth: true 
    }
  },
  ]
})


router.beforeEach((to,from,next) => {

  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!(store.state.logedIn)){
      // console.log("go login");
      next({
        path: '/login',
      })
    }
    else{
      // console.log("Already login");
      next()
    }
  }
  else if(to.matched.some(record => record.meta.guest)){
    if(!(store.state.logedIn)){
      // console.log("no require login");
      next();
    }
    else{
      // console.log("after login");
      next({
        path: '/profile',
      });
    }
  }  
  else{
    next();
  }
});

export default router
