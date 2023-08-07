import { AiOutlineCopy } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import env from "react-dotenv";
import "./UrlShortner.css";
function UrlShortner() {

    const copyUrl = ()=>{
        const url = document.querySelector('.shortUrl').innerHTML;
        const input = document.createElement('input');
        input.value = url;
        input.select();
        input.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(input.value);
        document.querySelector('.copied').classList.remove('d-none');

    }
  return (
    <div className='container-fluid text-center gx-0'>
        <div className="longUrlInputBox">
            <div className="inputbox">
                <input type="text" id="longUrl" placeholder="Paste long url here" className="longUrlInput" />
                <button className="btn btn-theme">Shorten</button>
            </div>
            <div className="shortLinkBox">
                <h5 className="d-flex justify-content-between align-items-center">Shorten Url Here <span className="copied d-none">Copied <FcApproval/></span> </h5>
                <div className="linkCopyBox">
                    <div className="shortUrl">{env.BASE_URL+"/xxxxx"}</div>
                    <div onClick={copyUrl} className="copyBtn"><AiOutlineCopy/>Copy</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UrlShortner