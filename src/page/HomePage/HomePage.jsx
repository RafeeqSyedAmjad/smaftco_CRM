import { Header } from "@/components/ComponentExport"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

function HomePage() {
  return (
    <>
        <Header/>

          <div className="px-4 py-6">
              <div className="container flex items-center justify-between mx-auto mb-6">
                  <h1 className="text-2xl font-bold">Registered Customers</h1>
                  <Button className="text-white bg-blue-500">+ Add New</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <Card className="w-full">
                      <CardHeader>
                          <CardTitle>Areej Al Safwah</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>SAC Motors</p>
                          <p>Created By :</p>
                          <p>Created On : 2023-07-05</p>
                      </CardContent>
                      <CardFooter className="flex justify-end space-x-2">
                          <Button variant="secondary">View</Button>
                          <Button variant="destructive">Delete</Button>
                      </CardFooter>
                  </Card>
                  <Card className="w-full">
                      <CardHeader>
                          <CardTitle>Masafat</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>SAC Motors</p>
                          <p>Created By :</p>
                          <p>Created On : 2023-07-05</p>
                      </CardContent>
                      <CardFooter className="flex justify-end space-x-2">
                          <Button variant="secondary">View</Button>
                          <Button variant="destructive">Delete</Button>
                      </CardFooter>
                  </Card>
                  <Card className="w-full">
                      <CardHeader>
                          <CardTitle>Al Dahneen</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>SAC Motors</p>
                          <p>Created By :</p>
                          <p>Created On : 2023-07-05</p>
                      </CardContent>
                      <CardFooter className="flex justify-end space-x-2">
                          <Button variant="secondary">View</Button>
                          <Button variant="destructive">Delete</Button>
                      </CardFooter>
                  </Card>
                  <Card className="w-full">
                      <CardHeader>
                          <CardTitle>Al Yakht</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>SAC Motors</p>
                          <p>Created By :</p>
                          <p>Created On : 2023-07-05</p>
                      </CardContent>
                      <CardFooter className="flex justify-end space-x-2">
                          <Button variant="secondary">View</Button>
                          <Button variant="destructive">Delete</Button>
                      </CardFooter>
                  </Card>
              </div>
          </div>
    </>
  )
}

export default HomePage