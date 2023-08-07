import "./Feature.css";
function Feature({icon,feature}) {
  return (
    <div className='feature'>
        <span className="icon"><img className="h-100 w-100" src={icon} alt="analytics" /></span>
        <span className="featureName">{feature}</span>
    </div>
  )
}

export default Feature