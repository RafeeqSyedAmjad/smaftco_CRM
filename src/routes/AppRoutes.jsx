import { Suspense } from "react"
import {Category, Dashboard, HomePage, Login, MultiBranchWorkshop, ResetPassword, Signup, SingleWorkshop} from "./importPages"
import { Route, Routes } from "react-router"



export const AppRoutes = () => {
    return (
        <Routes>
            <Route path = "/" 
            element={
            <Suspense fallback = "Loading HomePage..">
                <HomePage/>
            </Suspense>}
            />

            <Route path='/login' element={
                <Suspense fallback="Loading Login..." >
                    <Login/>
                </Suspense>
            }/>
            <Route path='/signup' element={
                <Suspense fallback="Loading Signup...">
                    <Signup />
                </Suspense>
            } />

            <Route path='/resetpassword' element={
                <Suspense fallback = "Loading ResetPassword...">
                    <ResetPassword/>
                </Suspense>
            }/>

            <Route path='/dashboard' element={
                <Suspense fallback="Loading Dashboard...">
                    <Dashboard />
                </Suspense>
            } />
            <Route path='/category' element={
                <Suspense fallback="Loading Category...">
                    <Category />
                </Suspense>
            } />

            <Route path='/workshopregistration' element={
                <Suspense fallback="Loading Workshop...">
                    <SingleWorkshop />
                </Suspense>
            } />

            <Route path='/companyregistration' element={
                <Suspense fallback="Loading Workshop...">
                    <MultiBranchWorkshop />
                </Suspense>
            } />



        </Routes>
    )

}