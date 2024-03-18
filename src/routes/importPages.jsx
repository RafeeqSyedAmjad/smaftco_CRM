import {lazy} from 'react';

const Login = lazy(()=> import('../page/Authentication/Login/Login'));
const Signup = lazy(() => import('../page/Authentication/Signup/Signup'));
const ResetPassword = lazy(()=> import('../page/Authentication/Reset/ResetPassword'))

export { Login, Signup, ResetPassword }
