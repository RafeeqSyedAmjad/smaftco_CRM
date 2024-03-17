import {lazy} from 'react';

const Login = lazy(()=> import('../page/Authentication/Login/Login'));
const Signup = lazy(() => import('../page/Authentication/Signup/Signup'));

export {Login,Signup}
