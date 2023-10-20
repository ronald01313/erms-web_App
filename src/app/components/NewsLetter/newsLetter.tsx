/* eslint-disable @next/next/no-img-element */
"use client"

export default function newsLetter() {
    return(
        <>
           
<div className="bg-blue w-full">
<div style={{ background: 'url("https://i.ibb.co/RhZX6m4/APPDL.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '100vh' }}></div>
<div className="flex flex-col md:flex-row justify-between items-center p-10 bg-indigo-800 text-white">
    <div className="m-auto center">
      <div className="text-center text-4xl">
        <p>Stay tuned with latest news and updates.</p>
        <h2 className="font-bold">Download the ERMS app now</h2>
      </div>
      <div className="pt-2 flex justify-center gap-x-3">
        <a
          href=""
          className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
        >
          <img
            src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg"
            alt="App Store"
            className="w-28 lg:w-60 xl:w-96"
            width="209"
            height="60"
          />
        </a>

        <a
          href=""
          className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
        >
          <img
            src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
            alt="App Store"
            className="w-28 lg:w-60 xl:w-96"
            width="209"
            height="60"
          />
        </a>
      </div>
    </div>

    <div className="w-full flex justify-center items-center min-h-screen">
  <div className="w-10/12 md:w-1/2 px-4 md:px-10">
    <form className="w-full" noValidate>
      <div className="flex flex-col items-center">
        <div className="w-full md:w-10/12">
          <input
            id="subscription_email"
            name="subscription_email"
            type="email"
            placeholder="Write your email here"
            className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 bg-white border-gray-300 focus:outline-none focus:border-heading md:h-12 lg:px-7 h-12 lg:h-14 text-center bg-white text-black"
            autoComplete="off"
            spellCheck="false"
            aria-invalid="false"
          />
        </div>
        <button
          data-variant="flat"
          className="w-full md:w-10/12 bg-purple transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-800 mt-2 flex-shrink-0"
        >
          <span className="lg:py-0.5">Subscribe</span>
        </button>
      </div>
    </form>
  </div>
  </div>
  </div>
  </div>

        </>
    )
}