import React, { useEffect } from "react";
import { BsDownload } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa6";
import { CgTimelapse } from "react-icons/cg";

// Screenshots
import ss1 from "../asset/ss/1.jpg";
import ss2 from "../asset/ss/2.jpg";
import ss3 from "../asset/ss/3.jpg";
import ss4 from "../asset/ss/4.jpg";
import ss5 from "../asset/ss/5.jpg";
import ss6 from "../asset/ss/6.jpg";
import ss7 from "../asset/ss/7.jpg";
import ss8 from "../asset/ss/8.jpg";
import ss9 from "../asset/ss/9.jpg";
import ss10 from "../asset/ss/10.jpg";
import ss11 from "../asset/ss/11.jpg";

export default function AppDownload() {
  useEffect(() => {
    document.title = "Download App - Pabna Blood Find";
  }, []);

  const screnshorts = [ss1, ss2, ss3, ss4, ss5, ss6, ss7, ss8, ss9, ss10, ss11];

  const downloadApp = () => {
    const link = document.createElement("a");
    link.href = "apk/application-7f89c410-c599-466e-a771-cd8298686b8e.apk";
    link.download = "PabnaBloodFind.apk";
    link.click();
  };

  return (
    <div className="card">
      <h1 className="flex center medel">
        <p>
          Download <span className="ffd">Pabna Blood Find </span> Android app
        </p>
      </h1>

      <p className="textCenter">
        Pabna Blood Find is now available as an Android app. Download it now to
        find blood donors in Pabna with ease.
      </p>

      <p className="textCenter">
        Click the button below to download the app and start using it today!
      </p>

      <br /><br /><br />

      <div className="flex center medel clomun">
        <img
          className="appIcon"
          src="https://raw.githubusercontent.com/nahidhk/PabnaBloodFind-AndroidApp/refs/heads/main/assets/images/logo.jpg"
          alt="App Icon"
        />
        <h2>Pabna Blood Find</h2>
      </div>

      <div className="flex center medel">
        <div className="model flex center medel">
          <div className="flex center medel point">
            <FaAndroid className="iconbtn" />
            &nbsp;v5.0.0
          </div>
          <div className="flex center medel point">
            <CgTimelapse className="iconbtn" />
            &nbsp;74.0 MB
          </div>
          <div className="flex center medel point">
            <BsDownload className="iconbtn" />
            &nbsp;1K+
          </div>
        </div>
      </div>

      <div className="flex center medel">
        <div className="flex center medel">
          <div onClick={downloadApp} className="downloadBtn">
            Download Apk
          </div>
        </div>
      </div>

      <div className="flex center medel">
        <div className="screenShort">
          {screnshorts.map((item, index) => (
            <img key={index} src={item} alt={`Screenshot ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
