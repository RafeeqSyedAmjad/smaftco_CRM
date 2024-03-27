import { Header } from "@/components/ComponentExport"
import { Button } from "@/components/ui/button"

function CompanyView() {
  return (
    <div>
        <Header/>
          <div className="flex items-center justify-center h-screen bg-gray-100">
              <div className="flex overflow-hidden bg-white rounded-lg shadow-xl">
                  <div className="p-5 text-white bg-gray-800">
                      <Button className="px-4 py-2 font-bold text-white bg-gray-600 rounded hover:bg-gray-700">Back</Button>
                  </div>
                  <div className="p-5">
                      <div className="flex items-center mb-6 space-x-4">
                          <div className="flex-shrink-0">
                              <div className="p-2 bg-red-500 rounded-full">
                                  {/* <BuildingIcon className="w-12 h-12 text-white" /> */}
                              </div>
                          </div>
                          <div className="flex-grow">
                              <h2 className="text-xl font-bold">1 KHANSAHAB</h2>
                          </div>
                      </div>
                      <div className="flex mb-6 space-x-4">
                          <Button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600">Delete</Button>
                          <Button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600">
                              Update Record
                          </Button>
                      </div>
                      <div className="text-sm">
                          <div className="mb-2">
                              <strong>Owner:</strong> khan
                          </div>
                          <div className="mb-2">
                              <strong>Mobile:</strong> 8787532715
                          </div>
                          <div className="mb-2">
                              <strong>Email:</strong> khan@gmail.com
                          </div>
                          <div className="mb-2">
                              <strong>Address:</strong> chowk
                          </div>
                          {/* <div className="mb-2">
                              <strong>Services:</strong> ['Body Shop', 'Mechanical', 'Electrical', 'Tyre Services', 'Battery', 'Aluminum
                              Repair', 'Oil Change Center']
                          </div> */}
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default CompanyView