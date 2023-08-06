import UrlShortner from "../urlshortner/UrlShortner"
import "./Hero.css"
function Hero() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 m-auto">
                <h1 className="siteTitle gradient-text">
                    <span>Short.</span>
                    <span>Share.</span>
                    <span>Track.</span>
                </h1>
                <p className="text-center">
                    <h4 className="siteSubTitle gradient-text">Cutout is a link management platform </h4> to Shorten and track your links,It enables you to know which links are driving <br /> the best results and improve your marketing stratigies
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-10 m-auto">
                <UrlShortner/>
            </div>
        </div>
    </div>
  )
}

export default Hero