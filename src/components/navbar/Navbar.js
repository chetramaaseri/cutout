import { useEffect, useState } from "react";
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
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-theme px-4" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-theme-2 px-4" href="#">Signup</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar