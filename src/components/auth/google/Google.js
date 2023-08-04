import "./Google.css"
import { AiOutlineLink } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { BsDatabaseCheck } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

function Google() {
  return (
    <div className="googleSignup d-flex flex-column align-items-start">
        <h4 className="text-start">Signup <span className="badge bg-light text-secondary ms-2">Free</span></h4>
        <p className="mb-4">Skip the hassle of signing up</p>
        <div className="featuresList d-flex align-items-center justify-content-between w-100">
            <div className="feature d-flex align-items-center justify-content-start flex-column text-center">
                <AiOutlineLink/>
                <span>Custom<br />Route</span>
            </div>
            <div className="feature d-flex align-items-center justify-content-start flex-column text-center">
                <SiGoogleanalytics/>
                <span>Analytics<br />History</span>
            </div>
            <div className="feature d-flex align-items-center justify-content-start flex-column text-center">
                <BsDatabaseCheck/>
                <span>Prompt<br />Redirection</span>
            </div>
        </div>
        <button className="btn btn-theme-2 w-100 mt-2 continueAsGoogleBtn"><FcGoogle/>Signup With Google</button>
    </div>
  )
}

export default Google