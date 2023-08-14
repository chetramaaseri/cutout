import AOS from "aos";
import "aos/dist/aos.css";
import FeatureDescription from "../components/features/FeatureDescription"
import Features from "../components/features/Features"
import Hero from "../components/hero/Hero"
import analytics from "../images/analytics-vector.svg"
import unlimitedUse from "../images/infinity-vector.svg"
import preBuiltTheme from "../images/theme-vector.svg"
import geo from "../images/geo-vector.svg"
import prompt from "../images/prompt-vector.svg"
import device from "../images/device-vector.svg"
import { useEffect } from "react";
function Home() {

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  const descriptionContent ={
    analytics: {
      title :"Free Analytics",
      desc : "Unlock the power of data with our Free Analytics tool. Gain insights into your short links' performance, track click-through rates, monitor user engagement, and measure the success of your campaigns. Our intuitive dashboard presents clear and concise analytics, empowering you to make informed decisions and optimize your link sharing strategies. Elevate your URL shortening experience today with our comprehensive analytics solution, entirely free of charge."
    },
    unlimitedUse:{
      title :"Unlimited Use Not Limit",
      desc : "Experience the freedom of Unlimited Use, without any restrictive limits. Our URL shortener empowers you to create and share shortened links without constraints, ensuring seamless navigation for your audience. Whether it's for personal projects, business endeavors, or social media campaigns, our platform is designed to support your needs with limitless possibilities. Embrace the convenience of hassle-free link shortening and sharing, and say goodbye to limitations. Join us to redefine the way you share links, without boundaries."
    },
    preBuiltTheme:{
      title :"Pre Built Amazing Themes",
      desc : "Discover our collection of pre-built, amazing themes designed to elevate your link shortening experience. With a diverse range of visually appealing themes, you can customize the look and feel of your shortened URLs to match your brand or personal style. From professional to playful, our themes cater to every preference. Enhance your links' visual impact and make a lasting impression on your audience. Explore our theme gallery and give your links a touch of individuality that stands out"
    },
    geo:{
      title :"Geo Location Based Redirection",
      desc : "Navigate the world with precision using our Geo Location Based Redirection feature. Tailor your links to provide location-specific content or promotions, ensuring that your audience is directed to the right destination. Whether it's a regional campaign, international audience targeting, or simply enhancing user experience, our platform enables you to create dynamic links that adapt to your users' locations. Make your links smarter and more relevant with geo-targeted redirection, and engage your audience on a global scale."
    },
    prompt:{
      title :"Collect Responses",
      desc : "Capture valuable insights and feedback effortlessly through our Collect Responses feature. Create surveys, polls, and questionnaires using our intuitive interface, and share them using shortened links. Gather opinions, preferences, and data from your audience, whether for market research, customer feedback, or decision-making. Our platform simplifies the process of collecting responses, helping you make informed choices and enhance engagement. Start harnessing the power of data today with our user-friendly response collection tools."
    },
    device:{
      title :"Device Bassed Redirection",
      desc : "Deliver tailored experiences with Device-Based Redirection. Redirect your audience to optimized content based on their device type, ensuring seamless compatibility and user satisfaction. Whether it's desktop, tablet, or mobile, our platform automatically detects devices and directs users to the most suitable version of your link. Enhance user engagement and create a cohesive browsing journey across all devices. Elevate your link sharing strategy with device-aware redirection and provide a consistent, user-centric experience to your audience"
    }
  }
  return (
    <>
      <div className="container">
          <Hero/>
          <Features/>
          <FeatureDescription alignment={"left"} content={descriptionContent.analytics} vector={analytics} />
          <FeatureDescription alignment={"right"} content={descriptionContent.unlimitedUse} vector={unlimitedUse} />
          <FeatureDescription alignment={"left"} content={descriptionContent.preBuiltTheme} vector={preBuiltTheme} />
          <FeatureDescription alignment={"right"} content={descriptionContent.geo} vector={geo} />
          <FeatureDescription alignment={"left"} content={descriptionContent.prompt} vector={prompt} />
          <FeatureDescription alignment={"right"} content={descriptionContent.device} vector={device} />
      </div>
    </>
  )
}

export default Home