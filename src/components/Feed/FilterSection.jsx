import { Checkbox } from "@/components/ui/checkbox"
// import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
// import { Label } from "@/components/ui/label"
// import { Button } from "@/components/ui/button"


function FilterSection() {
    return (
        <>

            <div className="md:w-1/4 p-4 overflow-y-scroll">
                    <h2 className="text-lg font-bold mb-4">Filters</h2>
                    <button className="text-md font-bold mb-4 hover:text-red-400">CLEAR ALL</button>
                <div>
                    <h3 className="mb-2 font-semibold">Categories</h3>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="watches" />
                            <label className="text-sm" htmlFor="watches">
                                Agency
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="bands" />
                            <label className="text-sm" htmlFor="bands">
                                Indepenedent
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="vr-headsets" />
                            <label className="text-sm" htmlFor="vr-headsets">
                                Small
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="smart-shoes" />
                            <label className="text-sm" htmlFor="smart-shoes">
                                Basic
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <h3 className="mb-2 font-semibold">Company</h3>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="watches" />
                            <label className="text-sm" htmlFor="watches">
                                Smaftco
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="bands" />
                            <label className="text-sm" htmlFor="bands">
                                360
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="vr-headsets" />
                            <label className="text-sm" htmlFor="vr-headsets">
                                AKA
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="smart-shoes" />
                            <label className="text-sm" htmlFor="smart-shoes">
                                PMC
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <h3 className="mb-2 font-semibold">By Services</h3>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="watches" />
                            <label className="text-sm" htmlFor="watches">
                                Bodyshop – (Structural Repairs)
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="bands" />
                            <label className="text-sm" htmlFor="bands">
                                Bodyshop – (Non-Structural Repairs)
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="vr-headsets" />
                            <label className="text-sm" htmlFor="vr-headsets">
                                Mechanical
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="smart-shoes" />
                            <label className="text-sm" htmlFor="smart-shoes">
                                Electrical
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="smart-shoes" />
                            <label className="text-sm" htmlFor="smart-shoes">
                                Tyre Services
                            </label>
                        </div><div className="flex items-center space-x-2">
                            <Checkbox id="smart-shoes" />
                            <label className="text-sm" htmlFor="smart-shoes">
                                Battery
                            </label>
                        </div><div className="flex items-center space-x-2">
                            <Checkbox id="smart-shoes" />
                            <label className="text-sm" htmlFor="smart-shoes">
                                Aluminum Repair
                            </label>
                        </div><div className="flex items-center space-x-2">
                            <Checkbox id="smart-shoes" />
                            <label className="text-sm" htmlFor="smart-shoes">
                                Oil Change Center
                            </label>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default FilterSection