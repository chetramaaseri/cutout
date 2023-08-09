import Guest from "../components/auth/guest/Guest"
import Google from "../components/auth/google/Google"
import LogoColor from "../components/logos/LogoColor";
import "./Auth.css";

function Auth() {
  return (
    <div className="authPage container-fluid">
      <div className="row pt-5 px-5">
        <div className="col">
          <LogoColor/>
        </div>
      </div>
      <div className="centerContainer">
        <div className="authContainer">
          <Guest/>
          <span className="text-secondary">OR</span>
          <Google/>
        </div>
        <div className="signIn d-flex align-items-center justify-content-center mt-3 gap-1">
          <p className="text-primary m-0">Already have an account?</p>
          <a href="#">Sign in here</a>
        </div>
      </div>
    </div>
  )
}

export default Auth