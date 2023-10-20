/* eslint-disable @next/next/no-img-element */
'use client'
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function ServicesPage() {
    return (
        <>
        <div>
            <Navbar />
        </div>
        
<div className="px-5 md:px-10">
  <div className="mx-auto w-full max-w-7xl">
    <div className="py-12 md:py-16 lg:py-20">
      <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
        <div className="max-[991px]:[grid-area:2/1/3/2]">
          <img src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f09cbc69acb788975ec37_Column.png" alt="Feature image showing a group call" className="mx-auto inline-block h-full w-full max-w-[640px] object-cover" />
        </div>
        <div className="max-w-lg max-[991px]:max-w-[720px] max-[991px]:[grid-area:1/1/2/2]">
          <h2 className="font-bold mb-4 text-3xl md:text-5xl">Harness Your Time. Take Charge.</h2>
          <div className="max-w-[480px] mb-6 md:mb-10 lg:mb-12">
            <p className="text-[#636262]">Say goodbye to payment headaches with SecurePay! Our easy-to-use payment platform makes it simple for businesses and individuals to send and receive payments quickly and securely.</p>
          </div>
          <a href="#" className="inline-block cursor-pointer bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631] rounded-full">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</div>

        <div>
            <Footer />
        </div>
        </>
    )
}