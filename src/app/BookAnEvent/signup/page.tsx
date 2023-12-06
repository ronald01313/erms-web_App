/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import error from "next/error";


export default function BookAnEventSignUpPage() {

    // Create a toaster object
  
    const router = useRouter();
     
    const [bookAnEventUser, setBookAnEventUser] = React.useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
        
    })
  
    const [buttonDisabled, setButtondissabled] = React.
    useState(false);

    const [Loading, setLoading] = React.useState(false); // Define the 'loading' state


    const onEventOrgSignup = async () => {
      try {
        setLoading(true);
        const response = await axios.post('/api/user/BookAnEventSignUp', bookAnEventUser);
        console.log("Sign up Success", response.data);
  
        if (response.data.success) {
          window.alert('Sign-up Successful!'); // Alert for successful sign-up
          router.push("/BookAnEvent/login");
        } else if (response.data.error === error) {
          window.alert('Email address is already registered. Please use a different email.'); // Alert for existing email
        } else {
          window.alert('Sign-up Failed'); // Alert for other sign-up failures
        }
      } catch (error: any) {
        console.error("Sign up Failed", error.message);
        window.alert(error.message); // Alert for API call error
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      if(bookAnEventUser.email.length > 0 && bookAnEventUser.password.length > 0 && bookAnEventUser.username.length > 0) {
        setButtondissabled(false);
      } else {
        setButtondissabled(true);
      }
    }, [bookAnEventUser]);

    const isPasswordMatch = bookAnEventUser.password === bookAnEventUser.confirmPassword;


    return (
        <div>
            
<div className="grid h-auto grid-cols-1 gap-[0px] md:h-screen md:grid-cols-2">
  <div className="flex flex-col items-center justify-center bg-white">
    <div className="px-8 md:px-12 lg:px-16">
      <div className="py-0 md:py-0 lg:py-0">
        <div className="max-w-[480px] text-center md:max-w-[480px] mb-24">
        <div>
        <a href="http://localhost:3000">
        <img alt="" src="https://i.ibb.co/9gCbPKK/logo.png" className="w-48  mx-auto mb-20" />
    </a>
</div>
<h2 className="mt-4 mb-8 text-3xl font-bold md:mb-12 md:text-5xl lg:mb-50">{Loading ? "Processing" : "Event Attendee"}</h2>
<div className="mx-auto mb-4 max-w-[400px] pb-4">
            <form name="wf-form-password" method="get">
              <div className="relative mb-4">
              <img alt="" src="" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block max-w-full" />
              <input type="text" className="m-0 mb-4 block h-9 w-full border border-black bg-[#f4f2f7] px-3 py-6 pl-14 align-middle text-sm text-[#333333] focus:border-[#3898ec]" 
                id = "username"
                value = {bookAnEventUser.username} 
                name="username" 
                placeholder="Username" 
                onChange={(e) => setBookAnEventUser({...bookAnEventUser, username: e.target.value})}
                required autoComplete="username" />
                <div></div>
                <div></div>
              </div>

              <div className="relative mb-4">
                <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block max-w-full" />
                <input type="email" className="m-0 mb-4 block h-9 w-full border border-black bg-[#f4f2f7] px-3 py-6 pl-14 align-middle text-sm text-[#333333] focus:border-[#3898ec]" 
                id = "email"
                value = {bookAnEventUser.email} 
                name="email" 
                placeholder="Email Address" 
                onChange={(e) => setBookAnEventUser({...bookAnEventUser, email: e.target.value})}
                required autoComplete="email" />
                
                <div></div>
                <div></div>
              </div>
              <div className="relative mb-4">
                <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block max-w-full" />
                <input type="password" className="m-0 mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 align-middle text-sm text-[#333333] focus:border-[#3898ec]" 
                name="password" 
                id= "password"
                placeholder="Password (min 8 characters)" 
                onChange={(e) => setBookAnEventUser({...bookAnEventUser, password: e.target.value})}
                required autoComplete="new-password" />
                <div></div>
                <div></div>
              </div>
              <div className="relative mb-4">
                <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block max-w-full" />
                <input type="password" className="m-0 mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 align-middle text-sm text-[#333333] focus:border-[#3898ec]" 
                name="confirmPassword" 
                id= "confirmPassword"
                placeholder="Confirm Password" 
                onChange={(e) => setBookAnEventUser({...bookAnEventUser, confirmPassword: e.target.value})}
                required />
                <div></div>
                <div></div>
                
                {bookAnEventUser.password !== '' &&
        bookAnEventUser.confirmPassword !== '' &&
        !isPasswordMatch && (
          <div className="text-red-500">Passwords do not match.</div>
        )}
    
              </div>
              
             

              
             
              <p className="text-sm text-[#636262]">Already have an account? <Link href="./login" className="text-sm font-bold text-black">Login now </Link>
          </p>

          
           
       
          <a
  href="#"
  className={`flex max-w-full grid-cols-2 bg-[#276ef1] flex-row items-center justify-center ${
    buttonDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
  } px-8 py-4 text-center font-semibold text-white transition ${
    buttonDisabled ? "" : "shadow-md"
  }`}
  onClick={onEventOrgSignup}
>
  <div className="mr-6 font-bold col">
    {buttonDisabled ? "Sign Up" : "Sign Up"}
    
  </div>
  <div className="h-4 w-4 flex-none">
    <svg
      fill="sky-blue-500"
      viewBox="0 0 20 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow Right</title>
      <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
    </svg>
  </div>
</a>
            </form>
          </div>
        
        </div>
      </div>
    </div>
  </div>


  <div className="flex flex-col items-center justify-center bg-[#f2f2f7]">
   
      <div>
        
            <img src="https://i.ibb.co/rbvX1fK/signup.png" alt="" className="inline-block max-w-full" />
          </div>
       
        </div>
      </div>
    </div>
    )
}



