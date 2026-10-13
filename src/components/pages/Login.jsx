import React, { useEffect, useRef, useState } from 'react'
import Header from '../common/Header'
import { BookOpen } from 'lucide-react'
import { useNavigate } from 'react-router'
import axios from 'axios'

export default function Login() {

  let apiBaseUrl = `http://localhost:5000/user/`

  const navigate = useNavigate();


const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phoneno: ""
  })  
    let loginUser = (e) => {
      e.preventDefault();
      let userObj = {        
        email: e.target.email,
        password: e.target.password        
      };  
      axios.post(`${apiBaseUrl}login`, formData)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes._status) {
            e.target.reset()
            alert(finalRes._message) 
            navigate('/dashboard')        
            
          }
          console.log(userObj);
        })
  const handleSuccessClick = () => {
    navigate('/dashboard');
  };
    }
  
  return (
    <div>     
        <section className="bg-gray-50 dark:bg-gray-900">
        <section>
          
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-4 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <BookOpen>

              </BookOpen>
              <div className='text-cyan-400 text-xl font-bold px-5'>
                Blog X
              </div>
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-cyan-500 md:text-2xl dark:text-shadow-cyan-500">
                  Login to Account
                </h1>
                <form  onSubmit={loginUser} className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Username or Email"
                      required=""
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
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="/fpass"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-white"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full  text-sm  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Sign in
                    <a
                      href="/dashboard"
                      className="font-medium text-primary-600 hover:underline dark:text-white"
                    ></a>
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="/register"
                      className="font-medium text-primary-600 hover:underline dark:text-white"
                    >
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div >
  
  )



}


