import { AiOutlineCopy } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import env from "react-dotenv";
import "./UrlShortner.css";
function UrlShortner() {
  return (
    <div className='container-fluid text-center gx-0'>
        <div className="longUrlInputBox">
            <div className="inputbox">
                <input type="text" id="longUrl" placeholder="Paste long url here" className="longUrlInput" />
                <button className="btn btn-theme">Shorten</button>
            </div>
            <div className="shortLinkBox">
                <h5 className="d-flex justify-content-between align-items-center">Shorten Url Here <span className="copied">Copied <FcApproval/></span> </h5>
                <div className="linkCopyBox">
                    <div className="shortUrl">{env.BASE_URL+"/xxxxx"}</div>
                    <div className="copyBtn"><AiOutlineCopy/>Copy</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UrlShortner