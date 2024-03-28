import PropTypes from 'prop-types';
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function FeedCards({ data }) {
    return (
        <>
            {data.map((item) => (
                <Card key={item.id} className="w-full">
                    <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-md">
                        {item.content.map((contentItem, index) => (
                            <p key={index}>{contentItem}</p>
                        ))}
                    </CardContent>
                    <CardFooter className="flex justify-end space-x-2">
                        <Button variant="secondary">View</Button>
                        <Button variant="destructive">Delete</Button>
                    </CardFooter>
                </Card>
            ))}
        </>
    )
}

FeedCards.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    ).isRequired
};

export default FeedCards
