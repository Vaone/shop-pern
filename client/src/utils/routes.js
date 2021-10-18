import Admin from '../pages/Admin';
import Basket from '../pages/Basket';
import Shop from '../pages/Shop';
import Profile from '../pages/Profile';
import Auth from '../pages/Auth';
import Error from '../pages/Error';
import { ADMIN_ROUTE, DEVICE_PAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, BASKET_ROUTE, SHOP_ROUTE, PROFILE_ROUTE, ERROR_ROUTE } from "./consts";
import DevicePage from '../pages/DevicePage';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    component: Admin
  },
  {
    path: DEVICE_PAGE_ROUTE + '/:id',
    component: DevicePage
  },
  {
    path: BASKET_ROUTE,
    component: Basket
  },
  {
    path: SHOP_ROUTE,
    component: Shop
  },
  {
    path: PROFILE_ROUTE,
    component: Profile
  },
  {
    path: ERROR_ROUTE,
    component: Error
  },
];

export const publicRoutes = [
  {
    path: DEVICE_PAGE_ROUTE + '/:id',
    component: DevicePage
  },
  {
    path: BASKET_ROUTE,
    component: Basket
  },
  {
    path: SHOP_ROUTE,
    component: Shop
  },
  {
    path: LOGIN_ROUTE,
    component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    component: Auth
  },
  {
    path: ERROR_ROUTE,
    component: Error
  },
];