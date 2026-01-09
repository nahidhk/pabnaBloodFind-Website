import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FaSearchengin, FaRegCircleUser, FaCode, FaAndroid } from "react-icons/fa6";
import { CgTimelapse } from "react-icons/cg";
import AppDownload from "../components/AppDownload";
import FindBlood from "../components/FindBlood";


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
          <button className={downBtn ? "active" : ""} onClick={() => { { setFind(false); setProfile(false); setdownBtn(true) } }}>
            <BsDownload className="iconbtn" />
            <span className="mbText">
              &nbsp;
              Dowonload App
            </span>
          </button>
          <button className={find ? "active" : ""} onClick={() => { setFind(true); setProfile(false); setdownBtn(false) }}>
            <FaSearchengin className="iconbtn" />
            <span className="mbText">
              &nbsp;
              Find Blood Donor
            </span>
          </button>
          <button className={profile ? "active" : ""} onClick={() => { { setFind(false); setProfile(true); setdownBtn(false) } }}>
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
              <AppDownload />
            ) :
              ""
          }
          {
            find ? (
              <FindBlood />
            ) : ""
          }
        </div>
      </div>
    </>
  )
}