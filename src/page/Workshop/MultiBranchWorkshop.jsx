import { Header } from "@/components/ComponentExport"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

function MultiBranchWorkshop() {
  return (
    <>
        <Header/>
      <div className="flex justify-center py-10">
        <div className="w-full max-w-3xl px-8 py-10 rounded-lg shadow-md">
          <h1 className="mb-10 text-2xl font-bold text-center">Company Registration</h1>
          <form>
            <div className="flex flex-col mb-6 space-y-4">
              <label className="font-medium" htmlFor="company-name">
                Company Name:
              </label>
              <Input id="company-name" placeholder="Your company name" />
            </div>
            <div className="flex flex-col mb-6 space-y-4">
              <label className="font-medium" htmlFor="owner-name">
                Owner Name:
              </label>
              <Input id="owner-name" placeholder="Full name" />
            </div>
            <fieldset className="mb-6">
              <legend className="mb-2 font-medium">Services Offered:</legend>
              <div className="flex flex-col space-y-2">
                <Checkbox id="bodyshop-structural" />
                <label className="ml-2" htmlFor="bodyshop-structural">
                  Bodyshop – (Structural Repairs)
                </label>
                <Checkbox id="bodyshop-non-structural" />
                <label className="ml-2" htmlFor="bodyshop-non-structural">
                  Bodyshop – (Non-Structural Repairs)
                </label>
                <Checkbox id="mechanical" />
                <label className="ml-2" htmlFor="mechanical">
                  Mechanical
                </label>
                <Checkbox id="electrical" />
                <label className="ml-2" htmlFor="electrical">
                  Electrical
                </label>
                <Checkbox id="tyre-services" />
                <label className="ml-2" htmlFor="tyre-services">
                  Tyre Services
                </label>
                <Checkbox id="battery" />
                <label className="ml-2" htmlFor="battery">
                  Battery
                </label>
                <Checkbox id="aluminum-repair" />
                <label className="ml-2" htmlFor="aluminum-repair">
                  Aluminum Repair
                </label>
                <Checkbox id="oil-change" />
                <label className="ml-2" htmlFor="oil-change">
                  Oil Change Center
                </label>
              </div>
            </fieldset>
            <div className="flex flex-col mb-6 space-y-4">
              <label className="font-medium" htmlFor="email">
                Email:
              </label>
              <Input id="email" placeholder="example@domain.com" type="email" />
            </div>
            <div className="flex flex-col mb-6 space-y-4">
              <label className="font-medium" htmlFor="address">
                Address:
              </label>
              <Input id="address" placeholder="123 Street, City, Country" />
            </div>
            <div className="flex flex-col mb-6 space-y-4">
              <label className="font-medium" htmlFor="owner-mobile">
                Owner Mobile Number:
              </label>
              <Input id="owner-mobile" placeholder="+1234567890" />
            </div>
            <div className="flex flex-col mb-6 space-y-4">
              <label className="font-medium" htmlFor="website">
                Website:
              </label>
              <Input id="website" placeholder="https://www.yourcompany.com" />
            </div>
            <div className="flex space-x-4">
              <Button>Register</Button>
              <Button variant="outline">Register & Add Branch?</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default MultiBranchWorkshop