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
                <Feature icon={analytics} feature={"Analytics"} />
                <Feature icon={domain} feature={"Unlimited Use"} />
                <Feature icon={theme} feature={"Pre Built Themes"} />
                <Feature icon={geolocalization} feature={"Geo Redirection"} />
                <Feature icon={command} feature={"Prompt Redirection"} />
                <Feature icon={device} feature={"Device Redirection"} />
            </div>
        </div>
    </section>
  )
}

export default Features