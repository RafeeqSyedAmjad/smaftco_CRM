import { Suspense } from "react"
import {Category, Companies, Dashboard, HomePage, Login, MultiBranchWorkshop, ResetPassword, Signup, SingleWorkshop} from "./importPages"
import { Route, Routes } from "react-router"
import { CompanyView, Leads, LeadsView } from "@/page/PageExport"
import Employees from "@/page/Employees/Employees"
import EmployeeView from "@/page/Employees/EmployeeView"



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

            <Route path='/companies' element={
                <Suspense fallback="Loading Companies...">
                    <Companies />
                </Suspense>
            } />

            <Route path='/companyview' element={
                <Suspense fallback="Loading Companies...">
                    <CompanyView />
                </Suspense>
            } />

            <Route path='/leads' element={
                <Suspense fallback="Loading Companies...">
                    <Leads />
                </Suspense>
            } />

            <Route path='/leadsview' element={
                <Suspense fallback="Loading Companies...">
                    <LeadsView />
                </Suspense>
            } />

            <Route path='/employees' element={
                <Suspense fallback="Loading Companies...">
                    <Employees />
                </Suspense>
            } />

            <Route path='/employeeview' element={
                <Suspense fallback="Loading Companies...">
                    <EmployeeView />
                </Suspense>
            } />



        </Routes>
    )

}