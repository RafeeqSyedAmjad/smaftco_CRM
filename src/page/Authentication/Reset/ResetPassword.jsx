import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function ResetPassword() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded pt-6 pb-8 mb-4 px-6 py-8 sm:px-8">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
                      <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        placeholder="Email"
                        type="email" 
                        />
                </div>
                <div className="flex items-center justify-between">
                    <Button className="w-full" >Reset Password</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ResetPassword