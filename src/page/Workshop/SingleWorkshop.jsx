import { Header } from "@/components/ComponentExport"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"



function SingleWorkshop() {
  return (
    <>
        <Header/>
      <div className="flex justify-center py-10">
        <div className="w-full max-w-lg px-8 py-6 shadow-md">
          <h2 className="text-2xl font-semibold text-center">Workshop Registration</h2>
          <form className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium " htmlFor="workshop-name">
                Workshop Name
              </label>
              <Input id="workshop-name" placeholder="Enter workshop name" />
            </div>
            <div>
              <label className="block text-sm font-medium " htmlFor="category">
                Category
              </label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="service">Service</SelectItem>
                  <SelectItem value="diagnostic">Diagnostic - Mechanical Repairs</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <fieldset className="flex flex-col space-y-1"></fieldset>
            <legend className="font-medium">Services Offered:</legend>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="bodyshop-structural" />
                <label htmlFor="bodyshop-structural">Bodyshop - (Structural Repairs)</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="bodyshop-nonstructural" />
                <label htmlFor="bodyshop-nonstructural">Bodyshop - (Non-Structural Repairs)</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mechanical" />
                <label htmlFor="mechanical">Mechanical</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="electrical" />
                <label htmlFor="electrical">Electrical</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="tyreServices" />
                <label htmlFor="tyreServices">Tyre Services</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="battery" />
                <label htmlFor="battery">Battery</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="aluminiumRepair" />
                <label htmlFor="aluminiumRepair">Aluminium Repair</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="oilChangeCenter" />
                <label htmlFor="oilChangeCenter">Oil Change Center</label>
              </div>
            </div>
          
            <div>
              <label className="block text-sm font-medium " htmlFor="address">
                Address
              </label>
              <Input id="address" placeholder="Enter address" />
            </div>
            <div>
              <label className="block text-sm font-medium " htmlFor="google-maps-url">
                Google Maps URL
              </label>
              <Input id="google-maps-url" placeholder="Enter Google Maps URL" />
            </div>
            <fieldset className="flex flex-col space-y-1">
              <legend className="font-medium">Are they SASO classified?</legend>
              <div className="flex items-center space-x-2">
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="sasoYes" value="yes" />
                    <Label htmlFor="sasoYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="sasoNo" value="no" />
                    <Label htmlFor="sasoNo">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </fieldset>
            <fieldset className="flex flex-col space-y-1">
              <legend className="font-medium">Do they have part suppliers?</legend>
              <div className="flex items-center space-x-2">
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="partSuppliersYes" value="yes" />
                    <Label htmlFor="partSuppliersYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="partSuppliersNo" value="no" />
                    <Label htmlFor="partSuppliersNo">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </fieldset>
            <div>
              <label className="block text-sm font-medium " htmlFor="part-supplier-name">
                Part Supplier Name
              </label>
              <Input id="part-supplier-name" placeholder="Enter part supplier name" />
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="part-supplier-mobile-number">
                Part Supplier Mobile Number
              </label>
              <Input id="part-supplier-mobile-number" placeholder="Enter mobile number" />
            </div>
            <fieldset className="flex flex-col space-y-1">
              <legend className="font-medium">Are they part of 360 network?</legend>
              <div className="flex items-center space-x-2">
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="network360Yes" value="yes" />
                    <Label htmlFor="network360Yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="network360No" value="no" />
                    <Label htmlFor="network360No">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </fieldset>
            <fieldset className="flex flex-col space-y-1">
              <legend className="font-medium">Do they want to connect to 360?</legend>
              <div className="flex items-center space-x-2">
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="connect360Yes" value="yes" />
                    <Label htmlFor="connect360Yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="connect360No" value="no" />
                    <Label htmlFor="connect360No">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </fieldset>
            <fieldset className="flex flex-col space-y-1">
              <legend className="font-medium">Do they need an Upgrade Equipment?</legend>
              <div className="flex items-center space-x-2">
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="upgradeEquipmentYes" value="yes" />
                    <Label htmlFor="upgradeEquipmentYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="upgradeEquipmentNo" value="no" />
                    <Label htmlFor="upgradeEquipmentNo">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </fieldset>
            <fieldset className="flex flex-col space-y-1">
              <legend className="font-medium">Are they existing Customer?</legend>
              <div className="flex items-center space-x-2">
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="existingCustomerYes" value="yes" />
                    <Label htmlFor="existingCustomerYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="existingCustomerNo" value="no" />
                    <Label htmlFor="existingCustomerNo">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </fieldset>
            <fieldset className="flex flex-col space-y-1">
              <legend className="font-medium">Companies:</legend>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="companySmartAuto" />
                  <label htmlFor="companySmartAuto">SmartAuto</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="company360" />
                  <label htmlFor="company360">360</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="companyAxa" />
                  <label htmlFor="companyAxa">AXA</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="companyPAC" />
                  <label htmlFor="companyPAC">PAC</label>
                </div>
              </div>
            </fieldset>
            <div className="flex flex-col space-y-1">
              <label className="font-medium" htmlFor="workshopImage">
                Workshop Image:
              </label>
              <Input id="workshopImage" type="file" />
            </div>
            <div>
              <label className="block text-sm font-medium " htmlFor="website">
                Website
              </label>
              <Input id="website" placeholder="Enter website URL" />
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input id="email" placeholder="Enter email" type="email" />
            </div>
            <div className="flex items-center justify-between">
              <Button variant="outline">Register And Add Employee?</Button>
              <Button>Register</Button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default SingleWorkshop