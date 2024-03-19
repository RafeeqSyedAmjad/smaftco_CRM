import { DashboardCard, DashboardCardButton, Header } from "@/components/ComponentExport"
// import { Button } from "@/components/ui/button"

function Dashboard() {
    const buttonData = [
        { title: "Smartco", description: "8" },
        { title: "360", description: "8" },
        { title: "AKA", description: "1" },
        { title: "PMC", description: "3" },
    ]
    

    return (
        <>
            <Header />
            <div className="px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        <DashboardCard />
                        {buttonData.map((button, index) => (
                            <DashboardCardButton
                                key={index}
                                title={button.title}
                                description={button.description}
                            />
                        ))}
                    </div>
                    <div className="col-span-5 p-4 rounded-md">
                        <DashboardCard />
                    </div>
                    <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                    </div>
                    <div className="grid grid-cols-2 gap-10 p-4 md:grid-cols-3 lg:grid-cols-4">
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                    </div>
                    <div className="grid grid-cols-2 gap-10 p-4 md:grid-cols-3 lg:grid-cols-4">
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                    </div>
                </div>
            </div>
            {/* <div className="px-4 py-8">
              <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-4 gap-4">
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>All</div>
                          <div className="text-2xl font-bold">20</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>Smartco</div>
                          <div className="text-2xl font-bold">8</div>
                          <Button className="mt-2 text-white bg-blue-700">Show More</Button>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>360</div>
                          <div className="text-2xl font-bold">8</div>
                          <Button className="mt-2 text-white bg-blue-700">Show More</Button>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>AKA</div>
                          <div className="text-2xl font-bold">1</div>
                          <Button className="mt-2 text-white bg-blue-700">Show More</Button>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>PMC</div>
                          <div className="text-2xl font-bold">3</div>
                          <Button className="mt-2 text-white bg-blue-700">Show More</Button>
                      </div>
                      <div className="col-span-4 p-4 text-white bg-blue-700 rounded-md">
                          <div>Total Registered Customers</div>
                          <div className="text-3xl font-bold">141</div>
                      </div>
                      <div className="p-4 text-white bg-blue-800 rounded-md">
                          <div>All</div>
                          <div className="text-2xl font-bold">141</div>
                      </div>
                      <div className="p-4 text-white bg-blue-800 rounded-md">
                          <div>Agency</div>
                          <div className="text-2xl font-bold">37</div>
                      </div>
                      <div className="p-4 text-white bg-blue-800 rounded-md">
                          <div>Independent</div>
                          <div className="text-2xl font-bold">29</div>
                      </div>
                      <div className="p-4 text-white bg-blue-800 rounded-md">
                          <div>Small</div>
                          <div className="text-2xl font-bold">1</div>
                      </div>
                      <div className="p-4 text-white bg-blue-800 rounded-md">
                          <div>Basic</div>
                          <div className="text-2xl font-bold">0</div>
                      </div>
                      <div className="p-4 text-white bg-blue-800 rounded-md">
                          <div>Body Shop</div>
                          <div className="text-2xl font-bold">71</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>Smartco</div>
                          <div className="text-2xl font-bold">7</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>360</div>
                          <div className="text-2xl font-bold">40</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>AKA</div>
                          <div className="text-2xl font-bold">33</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>PMC</div>
                          <div className="text-2xl font-bold">17</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>Bodyshop - (SR)</div>
                          <div className="text-2xl font-bold">120</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>Bodyshop - (NSR)</div>
                          <div className="text-2xl font-bold">86</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>Mechanical</div>
                          <div className="text-2xl font-bold">81</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>Electrical</div>
                          <div className="text-2xl font-bold">81</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>Tyre Services</div>
                          <div className="text-2xl font-bold">13</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>Battery</div>
                          <div className="text-2xl font-bold">14</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>Aluminum Repair</div>
                          <div className="text-2xl font-bold">13</div>
                      </div>
                      <div className="p-4 text-white bg-blue-600 rounded-md">
                          <div>Oil Change Center</div>
                          <div className="text-2xl font-bold">12</div>
                      </div>
                  </div>
              </div>
          </div> */}
        </>
    )
}

export default Dashboard