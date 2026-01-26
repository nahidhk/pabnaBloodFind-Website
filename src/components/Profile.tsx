import React from "react";
import {
  GrLinkNext
} from "react-icons/gr";

function Profile() {
  const [userData, setUserData] = React.useState([]);
  const [userNumber,
    setUserNumber] = React.useState("");
const handelCheckUserInServer = () =>{
  const serverApiurl = `https://api.ndsql.top/pabnaBoldFind/filterData.php?find=${userNumber}`;
  fetch(serverApiurl)
    .then(res => res.json())
    .then(data => {
      if (data[0]?.id) {
        setUserData(data[0]);
      }else{
        setUserData({
          bNumber:userNumber
        })
      }
    })
    .catch(err => console.error(err));
}

  return (
    <div className="card">
      <div className="flex center medel">
        <div>
          <div className="flex center medel clomun">
            <h1>
              Profile Create and Download Card
            </h1>
            <p className="textCenter">
              To verify you profile picture and profile, you must have a GitHub profile and star the open source on that GitHub so that your profile is automatically verified.
            </p>
            <input onChange={(e) => setUserNumber(e.target.value)} type="" className="inputField" placeholder="Type Your Mobile Number" />
          <button onClick={handelCheckUserInServer} className="downloadBtn flex center medel">
            Proceed
            <GrLinkNext size={20} style={ { marginLeft: "8px" }} />
          </button>
        </div>
      </div>
    </div>
    <div className="flext center medel">
      <div className="model">





      </div>
    </div>
  </div>
);
}

export default Profile;