import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"

function Home() {
  return (
    <div className="container">
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home