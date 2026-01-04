import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FaSearchengin } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Home() {
  const [downBtn, setdownBtn] = useState(true);
  const [find, setFind] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <>

      <div className="bgImg">

      </div>
      <div className="cllBtn">
        <div className="buttonBox">
          <button className={downBtn ? "active" : ""} onClick={() =>{ {setFind(false) ; setProfile(false) ; setdownBtn(true)} }}>
            <BsDownload className="iconbtn"/> &nbsp;
            Dowonload App
          </button>
          <button className={find ? "active" : ""} onClick={() => {setFind(true) ; setProfile(false) ; setdownBtn(false)}}>
            <FaSearchengin className="iconbtn" /> &nbsp;
            Blood Find
          </button>
          <button className={profile ? "active" : ""} onClick={() => { {setFind(false) ; setProfile(true) ; setdownBtn(false)} }}>
            <FaRegCircleUser className="iconbtn" /> &nbsp;
            Your Card and Profile
          </button>
        </div>
      </div>
      <div className="xLayout">
        <div className="container">
          <div className="card">
            <h2>
              Welcome to <span className="ffd">Pabna Blood Find </span> Offical Website.
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}