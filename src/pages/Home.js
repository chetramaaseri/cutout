import Features from "../components/features/Features"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"

function Home() {
  return (
    <div className="container">
        <Navbar/>
        <Hero/>
        <Features/>
    </div>
  )
}

export default Home