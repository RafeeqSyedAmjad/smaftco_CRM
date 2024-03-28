import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"


function CampaignMain() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold text-gray-700">Email Marketing Campaign</h1>
            <Button className="text-sm" variant="outline">
              Back
            </Button>
          </div>
          <form className="space-y-4">
            <div>
              <Label className="block text-sm font-medium text-gray-700" htmlFor="email-to">
                To:
              </Label>
              <Input className="block w-full mt-1" id="email-to" placeholder="Recipient's email" type="email" />
            </div>
            <div>
              <Button className="w-full" variant="secondary">
                Select from CRM
              </Button>
            </div>
            <div>
              <Label className="block text-sm font-medium text-gray-700" htmlFor="email-subject">
                Subject:
              </Label>
              <Input className="block w-full mt-1" id="email-subject" placeholder="Email subject" />
            </div>
            <div>
              <Label className="block text-sm font-medium text-gray-700" htmlFor="email-body">
                Body:
              </Label>
              <Textarea className="block w-full mt-1" id="email-body" placeholder="Write your message here." rows="4" />
            </div>
            <div>
              <Label className="block text-sm font-medium text-gray-700" htmlFor="email-attachment">
                Attachment:
              </Label>
              <Input className="block w-full mt-1" id="email-attachment" type="file" />
            </div>
            <div className="flex items-center">
              <Checkbox id="survey-link" />
              <Label className="block ml-2 text-sm font-medium text-gray-700" htmlFor="survey-link">
                Do you want to send a survey link?
              </Label>
            </div>
            <div>
              <Button className="w-full">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CampaignMain