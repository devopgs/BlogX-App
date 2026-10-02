import { BookOpen, Link } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'



export default function Header() {



    return (
        <div>
            <header className="bg-blue-950 position-fixed-top w-full  dark:blue-950">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <BookOpen className="text-cyan-400" >
                            </BookOpen>
                            <div className='text-cyan-400 text-xl font-bold'>
                                Blog X
                            </div>
                        </div>
                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                                    <li>
                                        <a
                                            href="/"
                                            className="text-cyan-400 transition hover:text-white dark:text-cyan-400 dark:hover:text-white font-bold"

                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                        href="/dashboard"
                                            className="text-cyan-400 transition hover:text-white dark:text-cyan-400 dark:hover:text-white font-bold"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                        href="/login"

                                            className="text-cyan-400 transition hover:text-white dark:text-cyan-400 dark:hover:text-white font-bold"
                                        >
                                            Login

                                        </a>
                                    </li>
                                    


                                </ul>

                            </nav>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
