import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Post() {

    let apiBaseUrl = `http://localhost:5000/blog/`



    let navigate = useNavigate()

    let { _id } = useParams()

    const [formData, setFormData] = useState({
        image:"",
        title: "",
        author: "",
        category: "",
        content: ""
    })


    let handleChange = (e) => {
        let inputName = e.target.name;//title
        let inputValue = e.target.value;

        let obj = { ...formData };
        obj[inputName] = inputValue;
        
        setFormData(obj);
        console.log(inputName);
    }


    
    let handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${apiBaseUrl}create`, formData)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes._status) {
                    alert(finalRes._message);
                    // e.target.reset()
                                        
                    navigate('/dashboard')
                    
                    setFormData({
                        image:"",
                        title: "",
                        author: "",
                        category: "",
                        content: ""
                    })
                }
            
          
          
        console.log(formData);
            }
        )
        
    };

    let saveBlog = (e) => {
        e.preventDefault()
        let obj = {
            title: e.target.title.value,
            author: e.target.author.value,
            category: e.target.category.value,
            content: e.target.content.value
        }

       
    }
    return (

        <>
        <ToastContainer />
            <div className="flex bg-white items-center px-4 sm:px-6 lg:px-8">
                <section className="mx-auto max-w-full bg-blue-950 rounded-lg shadow-md overflow-hidden m-10" >
                    <div className=" relative p-4 w-7xl max-w-2xl h-full md:h-auto">
                        {/* Modal content */}
                        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-blue-950 sm:p-5">
                            {/* Modal header */}
                            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Write a Blog
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="defaultModal"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <form onSubmit={handleSubmit} >
                                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="title"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Enter Title"
                                            required
                                        />
                                    </div>


                                    <div>
                                        <label
                                            htmlFor="image"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Featured Image
                                        </label>
                                        <label className="block mb-2.5 text-sm font-medium text-heading" htmlFor="file_input"></label>
                                        
                                        <input
                                            
                                            value={formData.image}
                                            onChange={handleChange}
                                            name="featuredimage"
                                            className="bg-white border border-default-medium text-heading font-bold text-sm rounded-base focus:ring-brand focus:border-brand block w-25 shadow-xs placeholder:text-body" aria-describedby="file_input_help" id="file_input" type="file" />


                                    </div>
                                    <div>
                                        <label
                                            htmlFor="author"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Author Name
                                        </label>
                                        <input
                                            type="text"
                                            id="author"
                                            name="author"
                                            value={formData.author}
                                            onChange={handleChange}
                                            className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Enter Author Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="category"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Category
                                        </label>
                                        <select
                                            name="category"
                                            id="category"
                                            value={formData.category}
                                            onChange={handleChange}

                                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            <option select="">Select category</option>
                                            <option value="Techology">Techology</option>
                                            <option value="Travel">Travel</option>
                                            <option value="Lifestyle">Lifestyle</option>
                                            <option value="Phones">Phones</option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="description"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Content
                                        </label>
                                        <textarea
                                            name="content"
                                            id="content"
                                            value={formData.content}
                                            onChange={handleChange}


                                            rows={4}
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Write content here"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <button                                    
                                    type="submit"  
                                    className="text-white inline-flex items-center bg-cyan-400 hover:bg-blue-600 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    {

                                    }

                                    Post
                                </button>
                            </form>
                        </div>
                    </div>

                </section >
            </div>

        </>



    )
}
