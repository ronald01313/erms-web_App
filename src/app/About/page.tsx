/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function AboutPage() {
return (
    <>
        <div>
        <Navbar />
    </div>
    <div className="bg-gray-100 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
      About Us
    </h2>
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 lg:pr-8">
        <p className="text-gray-600 leading-relaxed mb-4">
          Join us today and revolutionize your event management and reservation system! Say goodbye to overwhelming paperwork, double-bookings, and frustrating miscommunication. Our cutting-edge platform streamlines the entire process, making it easier than ever to plan, organize, and execute your events seamlessly.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Don't waste another minute struggling with outdated systems or juggling multiple spreadsheets. Our intuitive software puts all the tools you need at your fingertips. From effortlessly creating event schedules to managing bookings and registrations, our platform handles it all with precision and accuracy.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Experience the power of real-time updates and communication, ensuring that everyone involved remains on the same page. Say goodbye to last-minute changes and confusion. Our system notifies all stakeholders instantly, guaranteeing a smooth and flawless experience for both event organizers and attendees.
        </p>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="https://i.ibb.co/zSVNdQw/11.png"
          alt="About Us Image"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    <div className="mt-12">
      <p className="text-gray-600 leading-relaxed mb-4">
        Maximize efficiency and minimize hassle with our customizable solution. Tailor the system to meet your specific event management needs, whether it's a small-scale gathering or a large conference. With our versatile platform, you can create and manage multiple events simultaneously, ensuring that no opportunity is missed.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Empower your attendees with our seamless reservation system. With just a few clicks, they can secure their spots, select their preferences, and receive instant confirmations. Eliminate the risk of overbooking and provide a user-friendly experience that will leave your guests impressed.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Join the ranks of successful event organizers who have already embraced our system and witnessed its transformative impact. Don't get left behind in the age of technological advancements - embrace the future and soar above your competition.
      </p>
    </div>
    <div className="mt-12 text-center">
      <p className="text-gray-600 leading-relaxed mb-4">
        Contact us today to schedule a demo and see firsthand how our event management and reservation system can revolutionize your organization. Don't let time, resources, and opportunities slip through your fingers. Take control with our innovative solution and take your events to new heights.
      </p>
      <a
        href="#contact"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full inline-block transition duration-300"
      >
        Contact Us
      </a>
    </div>
  </div>
</div>

    <div>
        <Footer />
    </div>
    </>
)

}