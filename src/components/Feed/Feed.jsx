import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";
import FeedCards from "./FeedCards";
import PaginationSection from "./PaginationSection";
import FilterSection from "./FilterSection";

function Feed() {
    const Navigate = useNavigate()
    const redirectToCategory = () => {
        Navigate('/category');
    }

    // Define your card data here
    const cardData = [
        {
            id: 1,
            title: "Areej Al Safwah",
            content: [
                "SAC Motors",
                "Created By :",
                "Created On : 2023-07-05"
            ]
        },
        {
            id: 2,
            title: "Masafat",
            content: [
                "SAC Motors",
                "Created By :",
                "Created On : 2023-07-05"
            ]
        },
        {
            id: 3,
            title: "Al Dahneen",
            content: [
                "SAC Motors",
                "Created By :",
                "Created On : 2023-07-05"
            ]
        },
        {
            id: 4,
            title: "Al Yakht",
            content: [
                "SAC Motors",
                "Created By :",
                "Created On : 2023-07-05"
            ]
        }
    ];

    
    return (
        <>
            <div className="px-4 py-6">
                <div className="container flex items-center justify-between mx-auto mb-6">
                    <h1 className="text-2xl font-bold">Registered Customers</h1>
                    <Button onClick={redirectToCategory} className="text-white bg-blue-500">+ Add New</Button>
                </div>
            </div>

            <FilterSection/>
            <FeedCards data={cardData} />
            <PaginationSection/>
        </>
    )
}

export default Feed