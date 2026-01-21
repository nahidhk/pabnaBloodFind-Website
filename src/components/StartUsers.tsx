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
        document.title = "GitHub Star Users - Pabna Blood Find";

        fetch(apiUrl)
            .then(res => res.json())
            .then((result: GitHubUser[]) => {
                setData(result);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
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
    );
}
