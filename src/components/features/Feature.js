import "./Feature.css";
function Feature({animationAos,icon,feature}) {
  return (
    <div data-aos={animationAos} className='feature'>
        <span className="icon"><img className="h-100 w-100" src={icon} alt="analytics" /></span>
        <span className="featureName">{feature}</span>
    </div>
  )
}

export default Feature