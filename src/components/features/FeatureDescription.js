import "./FeatureDescription.css"
function FeatureDescription({alignment,content,vector}) {
    const left = (alignment == "left") ? "col-md-6" : "col-md-6 order-md-1";
    const right = (alignment == "left") ? "col-md-6" : "col-md-6 order-md-0";
  return (
    <section className="container-fluid featureDescription">
        <div className="row mt-5">
            <div data-aos="fade-up-right" className={left}>
                <h3 className="featureTitle gradient-text">{content.title}</h3>
                <p>{content.desc}</p>
            </div>
            <div data-aos="fade-up-bottom" className={right}>
                <div className="vector">
                    <img src={vector} alt="" className="h-100 w-100" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureDescription