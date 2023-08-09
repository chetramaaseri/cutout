import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoColor from "../logos/LogoColor";
import { AiOutlineBars } from "react-icons/ai";
function Navbar() {
    const [navStyle,setNavStyle] = useState("navbar navbar-expand-lg sticky-top");
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY < 50){
                setNavStyle("navbar navbar-expand-lg sticky-top");
            }else{
                setNavStyle("navbar navbar-expand-lg sticky-top bg-light shadow");
            }
        })
    },[])
  return (
    <nav className={navStyle}>
        <div className="container">
            <div className="navbar-brand">
                <LogoColor/>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon  d-flex align-items-center"><AiOutlineBars/></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav gap-3">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-theme px-4" to={"/auth"}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-theme-2 px-4" to={"/auth"}>Signup</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar