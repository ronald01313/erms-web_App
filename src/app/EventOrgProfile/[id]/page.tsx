'use client'
import EventOrgFormData from "@/app/components/eventOrgFormData/eventFormData";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toast } from "react-hot-toast";
import { useRouter } from "next/navigation";



export default function eventOrgUserProfilePage({ params }: any) {

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const router = useRouter()

  const Logout = async () => {
    try {
      await axios.get('/api/user/eventOrgLogOut')
      toast.success("Logout Successful")
      router.push('/EventOrg/login')
        
    } catch (error: any) {
        console.log(error.message);
        toast.error(error.message)
    }
}



 return (
    <>
     <div>
          <nav className="bg-blue p-4 flex place-content-between max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:hidden max-[991px]">
          <button onClick={Logout}
        className="bg-purple mt-4 hover:bg-white text-white font-bold py-2 px-4 rounded float-right ">
           Logout 
        </button>

          <h1 className="text-2xl mb-4 text-white">Welcome! Event User : {params.id}</h1>
          </nav>
          </div>
    <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://i.ibb.co/VSf8ZYF/EVENT-DETAILS.png')" }}>
      <div className="min-h-screen flex items-center justify-center">

         
          <EventOrgFormData />
        </div>
      </div>
   </>
 );
}
