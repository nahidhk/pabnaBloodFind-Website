import React, { useEffect , useState } from "react";
import "./UserNotVerify.css";
import { FaGithub } from "react-icons/fa";

export default function UserNotVerify() {
    const [gitUsername, setGitUsername] = React.useState("");
    const [data, setData] = useState<GitHubUser[]>([]);
    interface GitHubUser {
        id: number;
    }
    useEffect(() => {
        fetch("https://api.github.com/repos/nahidhk/PabnaBloodFind-AndroidApp/stargazers")
            .then(res => res.json())
            .then((result: GitHubUser[]) => {
                console.log("Raw data from server:", result);
                console.log("Number of items received:", result.length);
                setData(result);
            })
            .catch(err => console.error(err));
    }, []);

    const handelCheckUsername = () => {
       if (gitUsername) {
        alert(gitUsername)
       }
    }
    return (
        <div className="verify-card card">
            <h2>Hello,</h2>
            <p className="user-name">Md Nahidul Islam</p>

            <h3>Profile Verification Steps:</h3>
            <ul>
                <li>You must have a <strong>GitHub account</strong>.</li>
                <li>Give a <strong>Star to an Open Source project</strong> on GitHub.</li>
                <li>Verify your account using your <strong>GitHub username</strong>.</li>
            </ul>

            <p className="result">
                Once done, your profile will show your picture along with a Verified tick mark.
            </p>
            <div className="flex center medel clomun">
                <div onClick={() => window.location.href = "https://github.com/nahidhk/pabnaBloodFind-Website"} className="flex gitStar medel">
                    <FaGithub className="icon" /> &nbsp; Total Started Donors {data.length}+
                </div>
                <input value={gitUsername} onChange={(e) => setGitUsername(e.target.value)} type="text" className="inputField" placeholder="Input your Github username" />
                <button onClick={handelCheckUsername} className="downloadBtn flex center medel">
                    Verifay
                </button>
            </div>
        </div>
    );
}
