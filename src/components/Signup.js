import React from 'react'
import Header from './Header'

const Signup = () => {
  return (
    <div>
    <Header />
    <div className="absolute">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
      />
    </div>
    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">Sign Up</h1>
     
      <input
        type="text"
        placeholder="Name"
        className="p-4 my-4 w-full bg-gray-800"
      />
     <input
        type="text"
        placeholder="Email Address"
        className="p-4 my-4 w-full bg-gray-800"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-800"
      />
      <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
      <p className="py-4">Already user? Sign In </p>
    </form>
  </div>
  )
}

export default Signup
