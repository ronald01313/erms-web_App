
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CallToAction from './components/callToAction/callToAction'
import Features from './components/Features/Features'
import NewsLetter from './components/NewsLetter/newsLetter'



export default function Home() {
  return (
      <div>
        <Navbar />
        <div>
         <CallToAction />
         <Features />
         <NewsLetter />
        </div>
    
       
       
       
     
        <Footer />
      </div>

  )
}
