import { Suspense } from "react"
import { Login, ResetPassword, Signup } from "./importPages"
import { Route, Routes } from "react-router"



export const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path = "/" 
            element={
            <Suspense>

            </Suspense>}
            /> */}

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
        </Routes>
    )

}