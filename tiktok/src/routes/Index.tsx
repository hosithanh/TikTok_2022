import Fllowing from '../pages/Fllowing/Index';
import Home from '../pages/Home/Index';
import Login from '../pages/Login/Index';
import NotFound from '../pages/NotFound/Index';
import Uploads from '../pages/Uploads/Index';
import { ROUTES } from '../utils/constants/routers';

export const publicRoutes = [
    { path: ROUTES.HOME, component: Home },
    { path: ROUTES.FLLOWING, component: Fllowing },
    { path: ROUTES.UPLOADS, component: Uploads, layout: null },
    { path: ROUTES.LOGIN, component: Login, layout: null },
    { path: ROUTES.NOTFOUND, component: NotFound, layout: null },
];

export const privateRoutes = [];
