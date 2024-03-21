import {lazy} from 'react';

const Login = lazy(()=> import('../page/Authentication/Login/Login'));
const Signup = lazy(() => import('../page/Authentication/Signup/Signup'));
const ResetPassword = lazy(()=> import('../page/Authentication/Reset/ResetPassword'));
const Dashboard = lazy(()=> import('../page/Dashboard/Dashboard'));
const HomePage = lazy(()=> import('../page/HomePage/HomePage'));


export { Login, Signup, ResetPassword, Dashboard, HomePage}
