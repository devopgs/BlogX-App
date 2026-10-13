
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

export default function Dashboard() {

  let navigate = useNavigate()




  let apiBaseUrl = `http://localhost:5000/blog/`

  let [data, setData] = useState([]);

  const [selectedRecord, setSelectedRecord] = useState([]);



  const [blog, setBlog] = useState({
    title: "",
    author: "",
    category: "",
    content: ""
  })




  let deleteBlog = (_id) => {

    axios.delete(`http://localhost:5000/blog/delete/${_id}`)
      .then((res) => {
        console.log(res.data);
        toast.error("Blog Deleted ")
        viewBlog();

      })

  }
  let updateBlog = (_id) => {

    axios.put(`http://localhost:5000/blog/update/${_id}`, blog)
      .then((res) => {
        return res.data
      })
      .then((finalRes) => {

        let fdata = finalRes.data;
        setBlog({
          title: "",
          author: "",
          category: "",
          content: ""
        })



        console.log(finalRes.data);
        toast.success("Blog Updated")
        setBlog({
          title: "",
          author: "",
          category: "",
          content: ""
        })


        viewBlog();


      })

  }











  let viewBlog = () => {
    axios.get(`${apiBaseUrl}view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setData(finalRes.data);




      })
  };





  useEffect(() => {
    viewBlog()
  }, [])

  console.log(selectedRecord);


  return (
    <div>
      <ToastContainer />

      <section className="mx-auto max-w-7xl bg-white rounded-lg shadow-md overflow-hidden m-10 space-between" >
        <div className="flex justify-items-center">
          <div className="flex shadow-xs rounded-base -space-x-0.5 mt-0">
            <label htmlFor="search-dropdown" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Your Email</label>
            <button id="dropdown-button" data-dropdown-toggle="dropdown" type="button" className="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-gray-100 font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none">
              <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" /></svg>
              All categories
              <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
            </button>
            <div id="dropdown" className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
              <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-button">
                <li>
                  <a href="#" className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Shopping</a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Images</a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">News</a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Finance</a>
                </li>
              </ul>
            </div>
            <input type="search" id="search-dropdown" className="px-3 py-2.5 bg-neutral-secondary-medium border border-gray-100 text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" placeholder="Category Name" required />
            <button type="button" className="inline-flex items-center  text-black bg-brand hover:bg-gray border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none">
              <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
              Search
            </button>
          </div>
          <div className="flex justify-items-end gap-2">
            <a
              href="/Post"
              className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg font-medium transition-colors inline-block w-fit"
            >
              Write A Blog
            </a>
          </div>


        </div>

      </section>


      <section className="mx-auto max-w-7xl bg-white rounded-lg shadow-md overflow-hidden m-5" >



        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-gray-300 border-b rounded-base border-default">
            <tr>
              <th scope="col" className="px-2 py-4 font-medium">
                Blog Image
              </th>


              <th scope="col" className="px-2 py-4 font-medium">
                Blog Title
              </th>
              <th scope="col" className="px-2 py-4 font-medium">
                Category
              </th>
              <th scope="col" className="px-2 py-4 font-medium">
                Author Name
              </th>
              <th scope="col" className="px-2 py-4 font-medium">
                Content
              </th>
              <th scope="col" className="justify-content-center px-2 py-4 font-medium">
                Action
              </th>

            </tr>
          </thead>

          <tbody>
            {data.length >= 1 ? (
              data.map((obj, index) => {
                return (
                  <tr key={index} className="bg-neutral-primary border-b border-default">
                    <td className="py-1">
                      <img className='size-15' src="" alt="">{obj.image}</img>
                    </td>

                    <td className="px-2 py-4">{obj.title}</td>
                    <td className="px-2 py-4">{obj.category}</td>
                    <td className="px-2 py-4">{obj.author}</td>
                    <td className="px-2 py-2">{obj.content}</td>
                    <td className="px-1 py-2">

                      <button onClick={() => updateBlog(obj._id)} className="bg-green-800 px-2 py-1 m-1 text-white font-medium">


                        Edit</button>
                      <button
                        onClick={() => deleteBlog(obj._id)}

                        className="bg-red-800 px-2 py-1 m-1 text-white font-medium">

                        Delete</button>
                    </td>
                  </tr>


                )
              })
            ) : (
              <tr className="bg-white border-b">
                <td className="px-2 py-4" colSpan={7}>
                  no data found
                </td>
              </tr>
            )
            }



          </tbody>
        </table>

      </section>

    </div >
  )
}













