import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Header } from "../../../components/ComponentExport.js";

function Login() {
  return (
    <>
      <Header/>
      <div className="flex h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
        <div className="w-full max-w-md shadow-md space-y-6  rounded-lg  p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="username">Username</label>
              <Input className="w-full" placeholder="Username" type="text" />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">Password</label>
              <Input className="w-full" id="password" placeholder="Password" type="password" />
            </div>

            <div className="flex items-center justify-between">
              <Button className="">Log in</Button>
              <Link className="text-sm text-blue-600 hover:underline" to="">Forgot Password?</Link>
            </div>
          </form>
        </div>

      </div>
    </>
   
  )
}

export default Login