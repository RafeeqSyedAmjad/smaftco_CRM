import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "../mode-toggle";



import { useState } from 'react'
import { Dialog, Disclosure, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { ModeToggle } from "../mode-toggle";
import { Link, useNavigate } from "react-router-dom";



export default function Header() {
    const Navigate = useNavigate();

    const redirectToHomePage = () => {
        Navigate('/');
    }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="">
            <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
                <div className="flex items-center space-x-4 lg:flex-1">
                    <Disclosure as="div" className="flex items-center">
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
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>SMAFTCO</DropdownMenuItem>
                                <DropdownMenuItem>360REPAIR</DropdownMenuItem>
                                <DropdownMenuItem>_AKA_</DropdownMenuItem>
                                <DropdownMenuItem>_PMC_</DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </Disclosure>
                    <ModeToggle />
                    <a onClick={redirectToHomePage} className="text-lg font-bold" href="#">
                        S3AP CRM
                    </a>
                </div>
                
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link className="">
                        Dashboard
                    </Link>
                    <Link>
                        Chatbox
                    </Link>
                    <Link>
                        Campaign
                    </Link>
                    <Link>
                        Companies
                    </Link>
                    <Link>
                        Employees
                    </Link>


                </Popover.Group>
            

            </nav>
            {/* Dialog component remains unchanged */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="w-auto h-8"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flow-root mt-6">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6 space-y-2">
                                <a
                                    href="#"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Dashboard
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Chatbox
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Campaign
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Companies
                                </a>

                                <a
                                    href="#"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Employees
                                </a>


                                
                            </div>
                           
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
