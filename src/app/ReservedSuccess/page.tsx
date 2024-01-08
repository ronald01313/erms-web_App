/* eslint-disable @next/next/no-img-element */
'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const ReservedSuccessfullySave = () => {
  const router = useRouter();

  const handleViewEvent = () => {
    router.push('/ViewEventPage');
  };

  return (
    <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center">
            {/* Use IoMdCheckmarkCircle from react-icons */}
            <IoMdCheckmarkCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h2 className="text-xl font-bold py-4">Congratulations!</h2>
            <p className="text-sm text-gray-500 px-8">
             Reserved an Event Successfull
            </p>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={handleViewEvent}
              className="mb-2 md:mb-0 bg-blue border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
            >
              View Reserved Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservedSuccessfullySave;
