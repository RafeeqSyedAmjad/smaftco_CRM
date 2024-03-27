import { Header } from '@/components/ComponentExport'

import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router";
function Employees() {

    const Navigate = useNavigate();


    const redirectTEmployeeView = () => {
        Navigate('/employeeview');
    }
  return (
    <div>
          <Header />
          <div className="flex flex-col space-y-4">
              <div className="flex items-center p-4 space-x-4 bg-white shadow">
                  <Avatar>
                      <AvatarImage alt="User Avatar" src="/placeholder.svg?height=40&width=40" />
                  </Avatar>
                  <span className="flex-grow font-medium">Mr MUJEEB ULLAH KHAN</span>
                  <Button className="text-white bg-blue-500">Mail</Button>
                  <Button className="text-white bg-blue-500" onClick={redirectTEmployeeView}>View</Button>
              </div>
              <div className="flex items-center p-4 space-x-4 bg-white shadow">
                  <Avatar>
                      <AvatarImage alt="User Avatar" src="/placeholder.svg?height=40&width=40" />
                  </Avatar>
                  <span className="flex-grow font-medium">Mr MUJEEB ULLAH KHAN</span>
                  <Button className="text-white bg-blue-500">Mail</Button>
                  <Button className="text-white bg-blue-500">View</Button>
              </div>
              <div className="flex items-center p-4 space-x-4 bg-white shadow">
                  <Avatar>
                      <AvatarImage alt="User Avatar" src="/placeholder.svg?height=40&width=40" />
                  </Avatar>
                  <span className="flex-grow font-medium">Mr MUJEEB ULLAH KHAN</span>
                  <Button className="text-white bg-blue-500">Mail</Button>
                  <Button className="text-white bg-blue-500">View</Button>
              </div>
              <div className="flex items-center p-4 space-x-4 bg-white shadow">
                  <Avatar>
                      <AvatarImage alt="User Avatar" src="/placeholder.svg?height=40&width=40" />
                  </Avatar>
                  <span className="flex-grow font-medium">Mr MUJEEB ULLAH KHAN</span>
                  <Button className="text-white bg-blue-500">Mail</Button>
                  <Button className="text-white bg-blue-500">View</Button>
              </div>
              <div className="flex items-center p-4 space-x-4 bg-white shadow">
                  <Avatar>
                      <AvatarImage alt="User Avatar" src="/placeholder.svg?height=40&width=40" />
                  </Avatar>
                  <span className="flex-grow font-medium">Mr MUJEEB ULLAH KHAN</span>
                  <Button className="text-white bg-blue-500">Mail</Button>
                  <Button className="text-white bg-blue-500">View</Button>
              </div>
              <div className="flex items-center p-4 space-x-4 bg-white shadow">
                  <Avatar>
                      <AvatarImage alt="User Avatar" src="/placeholder.svg?height=40&width=40" />
                  </Avatar>
                  <span className="flex-grow font-medium">Mr MUJEEB ULLAH KHAN</span>
                  <Button className="text-white bg-blue-500">Mail</Button>
                  <Button className="text-white bg-blue-500">View</Button>
              </div>
              <div className="flex items-center p-4 space-x-4 bg-white shadow">
                  <Avatar>
                      <AvatarImage alt="User Avatar" src="/placeholder.svg?height=40&width=40" />
                  </Avatar>
                  <span className="flex-grow font-medium">Mr MUJEEB ULLAH KHAN</span>
                  <Button className="text-white bg-blue-500">Mail</Button>
                  <Button className="text-white bg-blue-500">View</Button>
              </div>
              <div className="flex items-center p-4 space-x-4 bg-white shadow">
                  <Avatar>
                      <AvatarImage alt="User Avatar" src="/placeholder.svg?height=40&width=40" />
                  </Avatar>
                  <span className="flex-grow font-medium">Mr MUJEEB ULLAH KHAN</span>
                  <Button className="text-white bg-blue-500">Mail</Button>
                  <Button className="text-white bg-blue-500">View</Button>
              </div>
              <div className="flex items-center p-4 space-x-4 bg-white shadow">
                  <Avatar>
                      <AvatarImage alt="User Avatar" src="/placeholder.svg?height=40&width=40" />
                  </Avatar>
                  <span className="flex-grow font-medium">Mr MUJEEB ULLAH KHAN</span>
                  <Button className="text-white bg-blue-500">Mail</Button>
                  <Button className="text-white bg-blue-500">View</Button>
              </div>
          </div>
    </div>
  )
}

export default Employees