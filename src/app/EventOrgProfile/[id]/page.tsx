/* eslint-disable react/no-unescaped-entities */
'use client'

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React from "react";


export default function EventOrgUserProfilePage({ params }: any) {

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const router = useRouter();

  const Logout = async () => {
    try {
        const response = await axios.get('/api/user/eventOrgLogOut');
        if (response.data.success) {
          toast.success('Logout Successful');
          router.push('/EventOrg/login');
        } else {
          toast.error('Logout failed');
        }
      } catch (error: any) {
        console.error('Logout Error:', error.message);
        toast.error('Logout failed');
      }
    };

    const [formData, setFormData] = React.useState({
      organizerName: "",
      eventName: "",
      numberOfAttendees: "",
      location: "",
      eventDate: "",
      time: ""
    });

    

    const onEventFormData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission
    
        try {
            const response = await axios.post('/api/user/EventFormData', formData);
            console.log("Event Successfully created", response.data);
    
            if (response.data.success) {
                alert('Event Details successfully saved!');
                router.push('/EventSuccessSaved');
            } else {
                console.log("Failed to save event");
                alert("Failed to save event");
            } 
    
        } catch (error: any) {
            console.error('Event Data Not Saved', error.message);
            alert('Failed to save event data');
        }
    };
    
    
    



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

      <div className="bg-gray bg-opacity-3 p-12 flex items-center justify-center">
            
            <div className="mx-auto max-w-[550px] bg-white p-4">
           
                <div className="items-center justify-center">
                    <h1 className='text-white stroke-indigo-200 text-center text-4xl underline'>Event Details</h1>
                </div><br></br>
                <form className="items-center justify-center" onSubmit={onEventFormData}>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="fName" className="mb-3 block text-base font-medium text-[#efeff3]">
                                Organizer's Name
                            </label>
                            <input type="text" name="fName" id="fName" placeholder="Full Name"
                            onChange={(e) => setFormData({...formData, organizerName: e.target.value})}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="lName" className="mb-3 block text-base font-medium text-[#efeff3]">
                                Event Name
                            </label>
                            <input type="text" name="lName" id="lName" placeholder="Name of the event"
                             onChange={(e) => setFormData({...formData,   eventName: e.target.value})}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="guest" className="mb-3 block text-base font-medium text-[#efeff3]">
                        How many guest are you bringing?
                    </label>
                    <input type="number" name="guest" id="guest" 
                    placeholder="5" min="0"
                    onChange={(e) => setFormData({...formData,   numberOfAttendees: e.target.value})}
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>

                <div className="mb-5">
                    <label htmlFor="location" className="mb-3 block text-base font-medium text-[#efeff3]">
                        Event Location
                    </label>
                    <input type="text" name="location" id="location" 
                    placeholder="where the event held?" min="0"
                    onChange={(e) => setFormData({...formData,    location: e.target.value})}
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
    
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="date" className="mb-3 block text-base font-medium text-[#efeff3]">
                                Date
                            </label>
                            <input type="date" name="date" id="date"
                            onChange={(e) => setFormData({...formData,    eventDate: e.target.value})}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="time" className="mb-3 block text-base font-medium text-[#efeff3]">
                                Time
                            </label>
                            <input type="time" name="time" id="time"
                            onChange={(e) => setFormData({...formData,    time: e.target.value})}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                    <div>
                        <button type="submit"
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

        </div>
      </div>


      
   </>
 );
}
