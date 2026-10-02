
import React, { useState } from 'react'

export default function Home() {


    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <section class="mx-auto max-w-7xl bg-white rounded-lg shadow-md overflow-hidden m-10" >
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/070/678/158/small/concept-of-web-development-with-connecting-icons-and-hand-touching-screen-on-dark-background-photo.jpeg"
                                alt="Featured post"
                                class="w-100% h-64 md:h-full object-cover"
                            />
                        </div>
                        <div class="md:w-1/2 p-5 md:p-12 flex flex-col justify-center">
                            <span class="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2">
                                Featured Post

                            </span>


                            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Getting Started with <br />Modern Web Development
                            </h2>
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Learn the fundamentals of building beautiful, responsive websites with modern tools and best practices.
                            </p>

                            <div class="flex items-center justify-between">
                                <a href="/dashboard" class="inline-flex items-center text-white bg-blue-700 rounded border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                    Explore Blogs

                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='mb-10 mx-auto max-w-7xl'>
                    <h2 class="text-2xl font-bold text-gray-900 mb-8">Explore our Blogs</h2>
                    
                        
                    

                    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
                                alt="Post thumbnail"
                                class="w-full h-48 object-cover"
                            />
                            <div class="p-6">
                                <span class="text-blue-600 text-sm font-semibold">
                                    Technology
                                </span>
                                <h3 class="text-xl font-bold text-gray-900 mt-2 mb-3">
                                    How AI is Changing the World
                                </h3>
                                <p class="text-gray-600 mb-4 leading-relaxed">
                                    Artificial Intelligence is transforming industries, education and our daily lives.
                                </p>
                                <div class="flex items-center justify-between">
                                    <a href="/dashboard" class="inline-flex items-center text-white bg-blue-700 rounded border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                        Read more
                                        <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                                    </a>
                                </div>
                            </div>
                        </article>


                        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
                                alt="Post thumbnail"
                                class="w-full h-48 object-cover"
                            />
                            <div class="p-6">
                                <span class="text-green-600 text-sm font-semibold">
                                    Travel
                                </span>
                                <h3 class="text-xl font-bold text-gray-900 mt-2 mb-3">
                                    10 Places You Should Visit
                                </h3>
                                <p class="text-gray-600 mb-4 leading-relaxed">
                                    Discover some of the most beautiful destinations around the world.
                                </p>
                                <div class="flex items-center justify-between">
                                    <a href="/dashboard" class="inline-flex items-center text-white bg-blue-700 rounded border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                        Read more
                                        <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                                    </a>
                                </div>
                            </div>
                        </article>


                        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800"
                                alt="Post thumbnail"
                                class="w-full h-48 object-cover"
                            />
                            <div class="p-6">
                                <span class="text-purple-600 text-sm font-semibold">
                                    Lifestyle
                                </span>
                                <h3 class="text-xl font-bold text-gray-900 mt-2 mb-3">
                                    Simple Tips for a Healthy Lifestyle
                                </h3>
                                <p class="text-gray-600 mb-4 leading-relaxed">
                                    Small daily habits can help you build a healthier and happier lifestyle.
                                </p>
                                <div class="flex items-center justify-between">
                                    <a href="/dashboard" class="inline-flex items-center text-white bg-blue-700 rounded border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                        Read more
                                        <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                                    </a>
                                </div>
                            </div>
                        </article>


                    </div>
                </section>



            </div>
        </div>
    );
}


