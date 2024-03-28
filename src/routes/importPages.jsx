import {lazy} from 'react';

const Login = lazy(()=> import('../page/Authentication/Login/Login'));
const Signup = lazy(() => import('../page/Authentication/Signup/Signup'));
const ResetPassword = lazy(()=> import('../page/Authentication/Reset/ResetPassword'));
const Dashboard = lazy(()=> import('../page/Dashboard/Dashboard'));
const HomePage = lazy(()=> import('../page/HomePage/HomePage'));
const Category = lazy(()=> import('../page/Category/Category'))
const SingleWorkshop = lazy(()=> import('../page/Workshop/SingleWorkshop'))
const MultiBranchWorkshop = lazy(()=> import('../page/Workshop/MultiBranchWorkshop'))
const Companies = lazy(()=>import('../page/Companies/Companies') )
const CompanyView = lazy(()=> import('../page/Companies/CompanyView'))
const Campaign = lazy(()=>import('../page/Campaign/Campaign') )

export { Login, Signup, ResetPassword, Dashboard, HomePage, Category, SingleWorkshop, MultiBranchWorkshop, Companies, CompanyView, Campaign }
