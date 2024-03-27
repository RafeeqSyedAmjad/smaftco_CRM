import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ComponentExport"


function LeadsView() {
  return (
    <div>
        <Header/>
          <div className="flex justify-center py-12">
              <Card className="w-[350px] bg-[#8C9EFF] text-white">
                  <CardHeader>
                      <div className="flex items-center space-x-3">
                          <Avatar>
                              <AvatarImage alt="User Avatar" src="/placeholder.svg?height=40&width=40" />
                              <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                          <div>
                              <CardTitle className="text-lg">John Doe</CardTitle>
                              <CardDescription className="text-sm">doe</CardDescription>
                          </div>
                      </div>
                  </CardHeader>
                  <CardContent className="mt-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>Country</div>
                          <div>doe@example.com</div>
                          <div>1234567890</div>
                          <div>0987654321</div>
                      </div>
                  </CardContent>
                  <CardFooter className="flex justify-between mt-4">
                      <Button className="text-white border-white" variant="outline">
                          Back
                      </Button>
                      <div className="flex space-x-2">
                          <Button className="bg-white text-[#8C9EFF]" variant="secondary">
                              Update Record
                          </Button>
                          <Button className="bg-red-500" variant="destructive">
                              Delete
                          </Button>
                      </div>
                  </CardFooter>
              </Card>
          </div>
    </div>
  )
}

export default LeadsView