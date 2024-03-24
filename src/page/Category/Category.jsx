import { Header } from "@/components/ComponentExport";
import { Button } from "@/components/ui/button"
import {useNavigate} from "react-router-dom";


function Category() {
    const Navigate = useNavigate();

    const redirectToSingleWorkshop = () => {
        Navigate('/workshopregistration');
    }

    const redirectToMultiBranchWorkshop = () => {
        Navigate('/companyregistration');
    }

  return (
        <>
            <Header/>
          <div className="flex justify-center py-12">
              <div className="p-6 rounded-lg shadow-md">
                  <h2 className="mb-4 text-lg font-semibold">Is this Single workshop or Multi Branch?</h2>
                  <div className="flex justify-between space-x-4">
                      <Button onClick={redirectToSingleWorkshop} className="w-full">Single</Button>
                      <Button onClick={redirectToMultiBranchWorkshop} className="w-full">Multibranch</Button>
                  </div>
              </div>
          </div>
        </>
      
  )
}

export default Category