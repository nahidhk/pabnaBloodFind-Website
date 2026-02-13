import React, { useEffect, useState } from "react";
import "./UserNotVerify.css";
import { FaGithub } from "react-icons/fa";

interface GitHubUser {
    login: string;
    id: number;
}

export default function UserNotVerify() {
    const [gitUsername, setGitUsername] = useState("");
    const [stargazers, setStargazers] = useState<GitHubUser[]>([]);
    const [verified, setVerified] = useState<boolean | null>(null);

    // GitHub থেকে স্টার লিস্ট লোড করা
    useEffect(() => {
        fetch("https://api.github.com/repos/nahidhk/PabnaBloodFind-AndroidApp/stargazers")
            .then(res => res.json())
            .then((result: GitHubUser[]) => {
                console.log("Raw data from server:", result);
                console.log("Number of items received:", result.length);
                setStargazers(result);
            })
            .catch(err => console.error(err));
    }, []);

    const handleCheckUsername = () => {
        if (!gitUsername) return alert("Please input your GitHub username");

        // স্টার লিস্টে ইউজার আছে কি না চেক
        const userFound = stargazers.some(
            (user) => user.login.toLowerCase() === gitUsername.toLowerCase()
        );

        if (userFound) {
            setVerified(true);
        } else {
            setVerified(false);
        }
    };

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
                <div
                    onClick={() => window.open("https://github.com/nahidhk/pabnaBloodFind-Website")}
                    className="flex gitStar medel"
                >
                    <FaGithub className="icon" /> &nbsp; Total Starred Donors {stargazers.length}+
                </div>

                <input
                    value={gitUsername}
                    onChange={(e) => setGitUsername(e.target.value)}
                    type="text"
                    className="inputField"
                    placeholder="Input your GitHub username"
                />

                <button onClick={handleCheckUsername} className="downloadBtn flex center medel">
                    Verify
                </button>

                {verified !== null && (
                    <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                        {verified ? (
                            <>
                            <div className="popupBG">
                                <div className="popup">
                                    
                                </div>
                            </div>
                            </>
                        ) : "❌ Not verified yet."}
                    </p>
                )}
            </div>
        </div>
    );
}
