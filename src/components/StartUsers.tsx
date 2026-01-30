import React, { useEffect, useState } from "react";

interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
}

export default function StarUsers() {
    const apiUrl =
        "https://api.github.com/repos/nahidhk/PabnaBloodFind-AndroidApp/stargazers";

    const [data, setData] = useState<GitHubUser[]>([]);

    useEffect(() => {

        fetch(apiUrl)
            .then(res => res.json())
            .then((result: GitHubUser[]) => {
                setData(result);
            })
            .catch(err => console.error(err));
    }, []);





    return (
        <div className="flex center">
            <div className="userStartBox">
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                    {data.map(item => (
                        <img
                            key={item.id}
                            src={item.avatar_url}
                            alt={item.login}
                            title={item.login}
                            width={50}
                            style={{ borderRadius: "50%" }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
