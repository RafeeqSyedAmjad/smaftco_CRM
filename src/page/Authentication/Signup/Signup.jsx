import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="username">User Name</Label>
              <Input id="username" placeholder="User's Name" />
              <p className="mt-1 text-xs text-gray-600">
                Required. 150 characters or fewer. Letters, digits and @/./+/-/\_ only.
              </p>
            </div>
            <div>
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="First Name" />
            </div>
            <div>
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Last Name" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="Email Address" type="email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Password" type="password" />
              <ul className="mt-1 space-y-1 text-xs text-gray-600">
                <li>Your password can&apos;t be too similar to your other personal information.</li>
                <li>Your password must contain at least 8 characters.</li>
                <li>Your password can&apos;t be a commonly used password.</li>
                <li>Your password can&apos;t be entirely numeric.</li>
              </ul>
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" placeholder="Confirm Password" type="password" />
              <p className="mt-1 text-xs text-gray-600">Enter the same password as before, for verification.</p>
            </div>
            <div>
              <Label htmlFor="company">Belongs To:</Label>
              <Select>
                <SelectTrigger id="company">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="bottom">
                  <SelectItem value="smaftco">Smaftco</SelectItem>
                  <SelectItem value="360">360</SelectItem>
                  <SelectItem value="AKA">AKA</SelectItem>
                  <SelectItem value="PMC">PMC</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              <Button>Register</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Signup;