import React from "react";
import { GrLinkNext } from "react-icons/gr";

interface User {
  id?: number;
  name: string;
  phone?: string;
  email?: string;
}

function Profile() {
  const [userData, setUserData] = React.useState<User | null>(null);
  const [status, setStatus] = React.useState<"idle" | "found" | "notfound">("idle");
  const [userNumber, setUserNumber] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handelCheckUserInServer = () => {
    if (!userNumber) return;

    setLoading(true);
    setStatus("idle");
    setUserData(null);

    const serverApiurl = `https://api.ndsql.top/pabnaBoldFind/filterData.php?find=${userNumber}`;

    fetch(serverApiurl)
      .then(res => res.json())
      .then(data => {
        if (data?.[0]?.id) {
          setUserData(data[0]);     // ✅ single user
          setStatus("found");
        } else {
          setStatus("notfound");
        }
      })
      .catch(err => {
        console.error(err);
        setStatus("notfound");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="card">
      <div className="flex center medel">
        <div>
          <div className="flex center medel clomun">
            <h1>Profile Create and Download Card</h1>

            <p className="textCenter">
              To verify your profile picture and profile, you must have a GitHub
              profile and star the open source on GitHub so that your profile is
              automatically verified.
            </p>

            <input
              type="text"
              className="inputField"
              placeholder="Type Your Mobile Number"
              value={userNumber}
              onChange={(e) => setUserNumber(e.target.value)}
            />

            <button
              onClick={handelCheckUserInServer}
              className="downloadBtn flex center medel"
              disabled={loading}
            >
              {loading ? "Checking..." : "Proceed"}
              <GrLinkNext size={20} style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex center medel">
        {status === "notfound" && (
          <div className="model">
            ❌ Data nai
          </div>
        )}

        {status === "found" && userData && (
          <div className="model">
            <h3>✅ User Found</h3>
            <p><strong>Name:</strong> {userData.name}</p>
            {userData.phone && <p><strong>Phone:</strong> {userData.phone}</p>}
            {userData.email && <p><strong>Email:</strong> {userData.email}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
