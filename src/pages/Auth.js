import Guest from "../components/auth/guest/Guest"
import Google from "../components/auth/google/Google"
import LogoColor from "../components/logos/LogoColor";
import "./Auth.css";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className="authPage container-fluid">
      <div className="row pt-5 px-5">
        <div className="col">
          <LogoColor/>
        </div>
      </div>
      <div className="row mt-2 mt-md-5 pt-5">
        <div className="authContainer flex-column flex-md-row">
          <Guest/>
          <span className="text-secondary">OR</span>
          <Google/>
        </div>
        <div className="signIn d-flex align-items-center justify-content-center my-3 gap-1">
          <p className="text-primary m-0">Already have an account?</p>
          <Link to="#">Sign in here</Link>
        </div>
      </div>
    </div>
  )
}

export default Auth