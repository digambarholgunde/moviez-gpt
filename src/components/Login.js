import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  /*
  //now we want to implement something like if we are on Login page and we click to New User then it should go to SignUp page 
  //And if we are on SignUp page and we click to Already user then it should go to Login Page 

*/

  const [isSignInForm, setIsSignInForm] = useState(true); //here we are creating state variable isSignInForm whose default value will be signin page and setSignInForm is type of function which will keep updated value of setSignInForm useState(true) means we have given default value which is LoginPage as true

  const toggleSignInForm = () => {
    //so we are creating this function toggleSignInForm so that on Login page if we click on new user it should go to SignUp page
    setIsSignInForm(!isSignInForm); //means whenever we will click font it will do opposite of default value. (means if it is login then it will change to sign up and vice versa)
  };
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
        {/* instead of creating separate sign up page component we can have our logic in login page itself  */}
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-800"
        />}
          {!isSignInForm && <input
          type="number"
          placeholder="Phone Number"
          className="p-4 my-4 w-full bg-gray-800"
        />}
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
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
         {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
