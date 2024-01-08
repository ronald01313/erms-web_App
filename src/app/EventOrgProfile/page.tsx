/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EventOrgProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const getUserDetails = async () => {
    try {
      const res = await axios.get('/api/user/me');
      setData(res.data.data._id);

      // Display a success notification on the client side
      toast.success("Event Organizer Profile Successfully Created!");
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster /> {/* Add the Toaster component for client-side notifications */}
      <h1 className="text-4xl font-bold text-center mt-8">Thank you for Signing up!</h1>

      <hr />
      <hr />
      <hr />
     
     
      <h2 className="mt-4 inline-block relative">
        {data === 'nothing' ? (
          <span className="text-black bg-purple py-2 px-4 rounded-lg"></span>
        ) : (
          <Link href={`/EventOrgProfile/${data}`}>
            <span className="bg-blue text-blue-50 py-2 px-4 mt-4 rounded-lg hover:bg-purple">
              {data}
            </span>
          </Link>
        )}
      </h2>

      <hr />
    
      <button onClick={getUserDetails} className="bg-blue mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click to Open your Dashboard
      </button>
    </div>
  );
}

