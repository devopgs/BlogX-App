import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-blue-950  dark:bg-blue-950">
                <div className="max-w-7xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between text-cyan-400">
                        <a
                            href="https://flowbite.com/"
                            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                        >
                            
                            <span className="text-heading self-center text-xl font-bold whitespace-nowrap">
                                Blog X
                            </span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body text-cyan-400 sm:mb-0">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    Licensing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-2 sm:mx-auto lg:my-2 border border-cyan-500" />
                    <span className="block text-sm text-white sm:text-center">
                        © 2026{" "}Blog X
                        
                        <a href="https://flowbite.com/" className="hover:underline">

                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>


        </div>
    )
}
