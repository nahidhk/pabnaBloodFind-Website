import React, {
  useState
} from "react";
import {
  BsDownload
} from "react-icons/bs";
import {
  FaSearchengin,
  FaRegCircleUser,
  FaCode,
  FaAndroid
} from "react-icons/fa6";
import {
  CgTimelapse
} from "react-icons/cg";


export default function Home() {
  const [downBtn,
    setdownBtn] = useState(true);
  const [find,
    setFind] = useState(false);
  const [profile,
    setProfile] = useState(false);
  return (
    <>
      <div className="bgImg">
      </div>
      <div className="cllBtn">
        <div className="buttonBox">
          <button className={downBtn ? "active": ""} onClick={() => { { setFind(false); setProfile(false); setdownBtn(true) } }}>
            <BsDownload className="iconbtn" />
            <span className="mbText">
              &nbsp;
              Dowonload App
            </span>
          </button>
          <button className={find ? "active": ""} onClick={() => { setFind(true); setProfile(false); setdownBtn(false) }}>
            <FaSearchengin className="iconbtn" />
            <span className="mbText">
              &nbsp;
              Find Blood Donor
            </span>
          </button>
          <button className={profile ? "active": ""} onClick={() => { { setFind(false); setProfile(true); setdownBtn(false) } }}>
            <FaRegCircleUser className="iconbtn" />
            <span className="mbText">
              &nbsp;
              Your Card and Profile
            </span>
          </button>
          <button>
            <span className="mbText">
              <FaCode className="iconbtn" />
              &nbsp;
            </span>
            API
          </button>
        </div>
      </div>
      <div className="xLayout">
        <div className="container">
          {
          downBtn ? (
                    <div className="card">
            <h1 className="flex center medel ">
              <p>
                Download  <span className="ffd">Pabna Blood Find </span> Android app
              </p>
            </h1>
            <p className="textCenter">
              Pabna Blood Find is now available as an Android app. Download it now to find blood donors in Pabna with ease.
            </p>
            <p className="textCenter">
              Click the button below to download the app and start using it today!
            </p>
            <br /><br /><br />
      <div className="flex center medel clomun">
        <img className="appIcon" src="https://raw.githubusercontent.com/nahidhk/PabnaBloodFind-AndroidApp/refs/heads/main/assets/images/logo.jpg" alt="App Icon" />
      <h2>
        Pabna Blood Find
      </h2>
    </div>
    <div className="flex center medel">
      <div className="model flex center medel">
        <div className="flex center medel point">
          <FaAndroid className="iconbtn" />
          &nbsp;
          v5.0.0
        </div>
        <div className="flex center medel point">
          <CgTimelapse className="iconbtn" />
          &nbsp;
          100 MB
        </div>
        <div className="flex center medel point">
          <BsDownload className="iconbtn" />
          &nbsp;
          1K+
        </div>

      </div>
    </div>
    <div className="flex center medel">
      <div className=" flex center medel">
        <div className="downloadBtn">
          Download Apk
        </div>
      </div>
    </div>


    <div className="screenShort">
      <img src="https://i.redd.it/f7w4c9nkzgbg1.jpeg" />
    <img src="https://i.redd.it/f7w4c9nkzgbg1.jpeg" />
  <img src="https://i.redd.it/f7w4c9nkzgbg1.jpeg" />
  <img src="https://i.redd.it/f7w4c9nkzgbg1.jpeg" />
</div>





</div>
          ):
          ""
          }
        </div>
      </div>
    </>
  )
}