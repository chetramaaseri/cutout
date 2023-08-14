import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { AiOutlineCopy } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import env from "react-dotenv";
import "./UrlShortner.css";
function UrlShortner() {

    const [shortUrl,setShortUrl] = useState(env.BASE_URL+"xxxxx");

    const copyUrl = ()=>{
        const url = document.querySelector('.shortUrl').innerHTML;
        const input = document.createElement('input');
        input.value = url;
        input.select();
        input.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(input.value);
        document.querySelector('.copied').classList.remove('d-none');

    }
    const getShortUrl = async()=>{
        const longUrl = document.getElementById('longUrl').value;
        if(longUrl === ""){
            return alert("enter url to shorten");
        }
        const url = `${env.API_URL}/generate`;
        const response = await fetch(url,{
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                longUrl
            })
        });
        const route = await response.json();
        // document.querySelector('.shortUrl').innerHTML = env.BASE_URL+route.route;
        setShortUrl(env.BASE_URL+route.route);
        document.querySelector('.shortLinkBox').classList= "shortLinkBox aos-init";
        
    }
    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.shortLinkBox').classList= "shortLinkBox aos-init aos-animate";
        }, 500);
    }, [shortUrl]);
  return (
    <div  className='container-fluid text-center gx-0'>
        <div className="longUrlInputBox">
            <div className="inputbox">
                <input type="text" id="longUrl" placeholder="Paste long url here" className="longUrlInput" />
                <button onClick={getShortUrl} className="btn btn-theme">Shorten</button>
            </div>
            <div data-aos="flip-up" className="shortLinkBox">
                <h5 className="d-flex justify-content-between align-items-center">Shorten Url Here <span className="copied d-none">Copied <FcApproval/></span> </h5>
                <div className="linkCopyBox">
                    <div className="shortUrl">{shortUrl}</div>
                    <div onClick={copyUrl} className="copyBtn"><AiOutlineCopy/>Copy</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UrlShortner