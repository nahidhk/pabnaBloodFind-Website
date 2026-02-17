import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FaSearchengin, FaRegCircleUser, FaCode, FaAndroid } from "react-icons/fa6";
import { CgTimelapse } from "react-icons/cg";
import AppDownload from "../components/AppDownload";
import Bottom from "./Bottom";


export default function Home() {
  const [downBtn, setdownBtn] = useState(true);
  return (
    <>
      <div className="bgImg">
      </div>
      <div className="cllBtn">
        <div className="buttonBox">
          <button className={downBtn ? "active" : ""} onClick={() =>  setdownBtn(true) }>
            <BsDownload className="iconbtn" />
            <span className="mbText">
              &nbsp;
              Dowonload App
            </span>
          </button>
          <button onClick={() => { window.location.href = "https://github.com/nahidhk/pabnaBloodFind-Website?tab=readme-ov-file#api-request" }}>
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


        </div>
        <Bottom />
      </div>
    </>
  )
}