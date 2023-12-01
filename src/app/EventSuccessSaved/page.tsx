'use client'
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation';
import React from 'react';

const EventSuccessfullySave = () => {
  const router = useRouter();

  const handleViewEvent = () => {
    router.push('/ViewEventPage');
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-gray-50 px-16 py-14">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-200 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                <img
                  src="https://i.ibb.co/BTwyS1V/2023446.png"
                  className="h-10 w-10 text-white"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </div>
            </div>
          </div>
          <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
            Congratulation!
          </h3>
          <p className="w-[230px] text-center font-normal text-gray-600">
            You have successfully created an Event
          </p>
          <button
            onClick={handleViewEvent}
            className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-blue px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300"
          >
            View Event
          </button>
        </div>
      </div>
    </>
  );
};

export default EventSuccessfullySave;
