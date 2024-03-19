/* eslint-disable react/prop-types */

import {
    Card,
    // CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"


function DashboardCardButton({title, description}) {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-2xl text-bold">{description}</CardDescription>
            </CardHeader>
            
            <CardFooter>
                          <Button>Show More</Button>
            </CardFooter>
        </Card>

    )
}

export default DashboardCardButton