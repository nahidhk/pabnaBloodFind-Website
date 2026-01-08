import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FaSearchengin, FaRegCircleUser, FaCode, FaAndroid } from "react-icons/fa6";
import { CgTimelapse } from "react-icons/cg";



export default function AppDownload() {
    return(
        <>
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
        </>
    )
}