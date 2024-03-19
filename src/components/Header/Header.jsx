
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "../mode-toggle" 
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <header className="px-4 py-2">
                <div className="container mx-auto mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <a className="text-lg font-bold" href="#">
                            S3AP CRM
                        </a>
                        <Link className="">
                            SMAFTCO
                        </Link>
                        <Link>
                            360REPAIR
                        </Link>
                        <Link>
                            AKA
                        </Link>
                        <Link>
                            PMC
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ModeToggle/>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>Avatar</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Login</DropdownMenuItem>
                                <DropdownMenuItem>Register</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header