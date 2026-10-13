import axios from 'axios';
import React, { useState } from 'react'

import { FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router';
//import { useParams } from 'react-router';



export default function Register() {


  let apiBaseUrl = `http://localhost:5000/user/`


  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phoneno: ""
  })

  let handleChange = (e) => {
    let inputName = e.target.name;//title
    let inputValue = e.target.value;

    let obj = { ...formData };
    obj[inputName] = inputValue;

    setFormData(obj);
    console.log(inputName);
  }



  let navigate = useNavigate()

  //let { _id } = useParams()

  let createUser = (e) => {
    e.preventDefault();
    let userObj = {
      fname: e.target.fname,
      lname: e.target.lname,
      email: e.target.email,
      password: e.target.password,
      phoneno: e.target.phoneno
    };



    axios.post(`${apiBaseUrl}create`, formData)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes._status) {
          e.target.reset()
          alert(finalRes._message) 
          navigate('/login')        
          
        }
        console.log(userObj);
      })
    
  


// e.target.reset()

//navigate('/dashboard'),

/*setFormData({
  fname: "",
  lname: "",
  email: "",
  password: "",
  phoneno: "", 

})*/

    }

return (
  <div className='w-full'>

    <section className="bg-gray-50 dark:bg-gray-900">

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-4 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <FaRegUser />
          <div className='text-cyan-400 text-xl font-bold px-5'>
            User Registration
          </div>


        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form onSubmit={createUser} className="space-y-4 md:space-y-6 max-h-screen" action="#">
              <div className='flex items-center justify-content-between gap-6'>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    required="" autoComplete='fname'
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                    required="" autoComplete='lname'
                  />
                </div>

              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email Address"
                  required="" autoComplete='email'
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="" autoComplete='current-password'
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone No.
                </label>
                <input
                  type="text"
                  name="phoneno"
                  id="phoneno"
                  value={formData.phoneno}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="" autoComplete='phoneno'
                />
              </div>
              <button
                type="submit"
                className="w-full  text-sm  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Register
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-white"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
)
}