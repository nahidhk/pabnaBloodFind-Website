import React, { useEffect, useState } from "react";
import { FaPhoneSquareAlt, FaWhatsappSquare } from "react-icons/fa";
import url from "../api/url.json";

export default function FindBlood() {

    const [dbdata, setDbdata] = useState<any[]>([]);

    useEffect(() => {
        document.title = "Find Blood Donor - Pabna Blood Find";
    });


    fetch(url.apiUrl)
        .then(res => res.json())
        .then(data => setDbdata(data))
        .catch(err => console.error(err));



    return (
        <>
            <div className="card">
                <h1 className="textCenter">Find Blood Donor</h1>

                <p className="textCenter">
                    Use the search feature to find blood donors in your area quickly and easily.
                </p>

                <div className="flex center medel margin">
                    <input
                        type="text"
                        placeholder="Enter your location or blood type"
                        className="inputField"
                    />
                    <button className="searchButton">Search</button>
                </div>
                <div className="flex center">
                    <div className="card">
                        <h2 className="textCenter">Blood Donor Results</h2>
                        <br />

                        {dbdata.length === 0 && <p className="textCenter">No donor found</p>}

                        {dbdata.map((item) => (
                            <div key={item?.id} className="model">
                                <div className="flex medel">
                                    <img
                                        src={item?.image || "https://github.com/nahidhk.png"}
                                        className="usersImg"
                                    />

                                    <div className="marginLeft">
                                        <h1>{item?.name}</h1>

                                        <p>
                                            <span className="mark">{item?.gender}</span>
                                        </p>

                                        <p>📞 <b>{item?.phone}</b></p>

                                        <p>
                                            🩸 Blood:
                                            <span className="blood"> {item?.blood}</span>
                                        </p>

                                        <p>📍 {item?.location}</p>

                                        <div className="socalIcon">
                                            <a href={`tel:${item?.phone}`}>
                                                <FaPhoneSquareAlt className="phoneIcon" />
                                            </a>

                                            <a
                                                href={`https://wa.me/${item?.whatsapp}`}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaWhatsappSquare className="whatsAppIcon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
