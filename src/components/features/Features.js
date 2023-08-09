import "./Features.css";
import Feature from './Feature'
import analytics from "../../images/analytics.png"
import domain from "../../images/domain.png"
import theme from "../../images/theme.png"
import geolocalization from "../../images/geolocalization.png"
import command from "../../images/command.png"
import device from "../../images/device.png"
function Features() {
  return (
    <section className='container-fluid'>
        <div className="row mt-5">
            <h2 className="text-center gradient-text featuresTitle">Features</h2>
            <div className="col features">
                <Feature animationAos={"fade-down-right"} icon={analytics} feature={"Analytics"} />
                <Feature animationAos={"fade-down-left"} icon={domain} feature={"Unlimited Use"} />
                <Feature animationAos={"fade-down-right"} icon={theme} feature={"Pre Built Themes"} />
                <Feature animationAos={"fade-down-left"} icon={geolocalization} feature={"Geo Redirection"} />
                <Feature animationAos={"fade-down-right"} icon={command} feature={"Prompt Redirection"} />
                <Feature animationAos={"fade-down-left"} icon={device} feature={"Device Redirection"} />
            </div>
        </div>
    </section>
  )
}

export default Features