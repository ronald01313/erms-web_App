/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import ImageCarousel from "../carousel/carousel"
import Link from 'next/link';
import { BrowserRouter as Router } from 'react-router-dom';





export default function CallToAction() {

  const handleButtonClick = () =>  {

  }

  return (
        <div>
            <div className="bg-[#068FFF] text-white" style={{ backgroundColor: 'rgb(33, 133, 213)' }}>
              <div className="px-5 md:px-10">
                <div className="mx-auto w-full max-w-7xl">
                  <div className="py-16 md:py-24 lg:py-32">
                    <div className="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
                      <div className="max-w-lg max-[991px]:max-w-[720px]">
                        <h2 className="mb-4 text-3xl font-bold md:text-5xl">Event Reservation and Management System</h2>
                        <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                          <p className="text-[#c0d6ff]">Join us today and revolutionize your event management and reservation system! Say goodbye to overwhelming paperwork, double-bookings, and frustrating miscommunication. Our cutting-edge platform streamlines the entire process, making it easier than ever to plan, organize, and execute your events seamlessly.</p>
                        </div>
                        <Router>
                        <div>
      <Link href ="./BookAnEvent/login" className="inline-block cursor-pointer rounded-[60px] bg-purple px-6 py-4 text-center font-bold text-[#2CD3E1] no-underline transition hover:bg-[#303841] hover:outline-0">Book an Event</Link>
      <Link href ="./EventOrg/login" className="inline-block cursor-pointer rounded-[60px] bg-purple px-6 py-4 text-center font-bold text-[#2CD3E1] no-underline transition hover:bg-[#303841] hover:outline-0 ml-4">Event Organizer</Link>
    </div>
    </Router>

                      </div>
                    
                      <div>
                        <ImageCarousel />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
