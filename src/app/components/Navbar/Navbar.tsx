/* eslint-disable @next/next/no-img-element */

"use client"

import Link from "next/link"

export default function Navbar() {

  
    return (
        <div>
            
<div className="sticky top-0 z-[1000] block bg-gray py-3 lg:block">
  <div className="px-5 md:px-10">
    <div className="mx-auto grid w-full max-w-7xl auto-cols-auto grid-cols-[auto_max-content] items-center justify-stretch gap-[0px] lg:grid-cols-[176px_auto]">
    <a href="./" target="_blank" className="relative flex items-center text-[#333333] max-[991px]:mr-auto max-[767px]:pl-0">
  <img src="https://i.ibb.co/YQqcgnn/logo.png" alt="ERMS" className="inline-block max-h-6 max-w-full" />
  <span className="ml-2 text-white text-sm color">ERMS</span>
</a>

      <nav className="relative float-right flex place-content-between max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:hidden max-[991px]:bg-black max-[991px]:py-1 max-[991px]:text-left">
      <div className="mx-auto flex items-start justify-end max-[991px]:flex-col lg:items-center">
  <div className="relative z-[900] mx-auto inline-block text-left max-[991px]:w-full"></div>
  <a href="./About" className="px-5 py-2 text-white transition hover:text-[#2CD3E1] max-[991px]:block md:px-10 lg:px-4">About</a>
  <a href="./Services" className="px-5 py-2 text-white transition hover:text-[#2CD3E1] max-[991px]:block md:px-10 lg:px-4">Services</a>
  <a href="./ourTeam" className="px-5 py-2 text-white transition hover:text-[#2CD3E1] max-[991px]:block md:px-10 lg:px-4">Our Team</a>
</div>

       {/* Button at the top right */}
       <div className="ml-auto flex items-center">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScFIaB4XV-hDnZYCcJu8i5csmbdtRvEtMyXKo_kztqmUzjOTQ/viewform"
                className="px-4 py-2 bg-purple text-blue-300 rounded-full">Review our System
              </Link>
            </div>
       
      </nav>
      <div
  className="relative float-right hidden cursor-pointer select-none p-3 text-2xl max-[991px]:z-[9999] max-[991px]:-mr-3 max-[991px]:block max-[991px]:text-white lg:p-[18px]">





        <div className="">
          <svg width="1.25rem" height="1rem" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z" fill="currentColor"></path>
            <path d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z" fill="currentColor"></path>
            <path d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

       

    </div>
  </div>
</div>
        </div>
    )

}