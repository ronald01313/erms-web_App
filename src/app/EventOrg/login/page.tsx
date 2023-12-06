/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function EventOrgLoginPage() {

  const router = useRouter();
     
    const [eventUser, setEventUser] = React.useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.
    useState(false);

    const [Loading, setLoading] = React.useState(false);



    const onEventOrgLogin = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/user/EventOrgLogin", eventUser);
        console.log("Login success", response.data);
    
        if (response.data.success) {
          alert("Successfully Login");
          router.push('/EventOrgProfile');
        } else {
          console.log("Login failed - User not registered.");
          alert("You have not yet registered. Please Sign up.");
        }
      } catch (error: any) {
        console.log("Login failed", error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    

    useEffect(() => {
      if(eventUser.email.length > 0 && eventUser.password.length > 0)
      {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }, [eventUser]);

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
<h2 className="mt-4 mb-8 text-3xl font-bold md:mb-12 md:text-5xl lg:mb-50">{Loading ? "Processing" : "Event Organizer"}</h2>
          <div className="mx-auto mb-4 max-w-[400px] pb-4">
            <form name="wf-form-password" method="get">
              <div className="relative">
                <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block max-w-full" />
                <input type="email" className="m-0 mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 align-middle text-sm text-[#333333] focus:border-[#3898ec]" 
                id = "email"
                value = {eventUser.email} 
                name="name" 
                placeholder="Email Address" 
                onChange={(e) => setEventUser({...eventUser, email: e.target.value})}
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
                onChange={(e) => setEventUser({...eventUser, password: e.target.value})}
                required autoComplete=" " />
                <div></div>
                <div></div>
              </div>
              <p className="text-sm text-[#636262]">Don't have an account? <Link href="./signup" className="text-sm font-bold text-black">Sign up now </Link>
          </p>

              
              <a href="#" className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                <div
                onClick={onEventOrgLogin}
                className="mr-6 font-bold">Log in</div>
                <div className="h-4 w-4 flex-none">
                  <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
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
            <img src="https://i.ibb.co/NCCkxvh/login.png" alt="" className="inline-block max-w-full" />
          </div>
        
        </div>
      </div>
    </div>
  
    )
}