/* eslint-disable react/no-string-refs */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'



export default function Footer() {
    return (
        <div>
            
<footer className="block bg-gray">
  <div className="px-5 md:px-10">
    <div className="mx-auto w-full max-w-7xl">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
          <div className="w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:mr-0">
            <h2 className="mb-4 font-extrabold text-white text-3xl md:text-5xl">
              <span className="text-[#8ef847]">Organize and Simplify</span> Your Events
            </h2>
          </div>
          <div className="max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:ml-0 max-[767px]:mt-8">
            <div className="mb-4 flex max-w-[272px] items-start justify-start">
              <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fe_MapPin.svg" alt="" className="inline-block max-w-full mr-3" />
              <p className="text-white">BootCamp @ Pandi's House 2023 Kasiglahan Cribb</p>
            </div>
            <div className="mb-4 flex max-w-[272px] items-start justify-start">
              <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28ff_sms.svg" alt="" className="inline-block max-w-full mr-3" />
              <p className="text-white">BSIT - 4C - GROUP 8</p>
            </div>
          </div>
        </div>
        <div className="mb-20 mt-20 w-full border-[0.5px] border-solid border-[#101010]"></div>
        <div className="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
          <div className="font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[479px]:mb-4 max-[991px]:py-1 text-center sm:text-center">
            <a href="./About" className="inline-block font-normal text-[#636262] transition hover:text-white sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pl-0 pr-6">About</a>
            <a href="./Services" className="inline-block font-normal text-[#636262] transition hover:text-white sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pl-0 pr-6">Services</a>
            <a href="./ourTeam" className="inline-block font-normal text-[#636262] transition hover:text-white sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pl-0 pr-6">Contact Us</a>
           
          </div>
          <div className="max-[991px]:flex-none">
            <p className="text-[#f3eded]">© Copyright 2023. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
        </div>
    )
}