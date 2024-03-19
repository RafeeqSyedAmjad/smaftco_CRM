import {
    Card,
    // CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function DashboardCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base">All</CardTitle>
                <CardDescription className="text-2xl text-bold">20</CardDescription>
            </CardHeader>
            {/* <CardContent>
                              <p>20</p>
                          </CardContent> */}
            {/* <CardFooter>
                              <p>Card Footer</p>
                          </CardFooter> */}
        </Card>

    )
}

export default DashboardCard