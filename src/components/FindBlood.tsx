import React, { useEffect } from "react";
import { FaPhoneSquareAlt , FaWhatsappSquare } from "react-icons/fa";
import { StackAPI } from "../scripts/StackAPI";


export default function FindBlood() {
    useEffect(() => {
        document.title = "Find Blood Donor - Pabna Blood Find";

    })
    console.log(StackAPI());
    return (
        <>
            <div className="card">
                <h1 className="flex center medel ">
                    <p>
                        Find Blood Donor
                    </p>
                </h1>
                <p className="textCenter">
                    Use the search feature to find blood donors in your area quickly and easily.
                </p>
                <div className="flex center medel margin">
                    <input type="text" placeholder="Enter your location or blood type" className="inputField" />
                    <button className="searchButton">
                        Search
                    </button>
                </div>



                <div className="flex center medel">
                    <div className="card">
                        <h2 className="flex center medel ">
                            Blood Donor Results
                        </h2>
                        <br />
                        <div className="model">
                            <div className="flex medel">
                                <div>
                                    <img src="https://github.com/nahidhk.png" className="usersImg" />
                                </div>
                                <div className="marginLeft">
                                    <div className=" flex center medel">
                                        <h1>
                                            Nahid Hossain
                                        </h1>
                                    </div>

                                    <div>
                                        <p>
                                            <span className="mark">
                                                Femail
                                            </span>
                                        </p>
                                        <p className="flex medel">
                                            📞 <b>+880123456789</b>
                                        </p>
                                        <p className="flex medel">
                                            🩸 Blood: <span className="blood">A+</span>
                                        </p>
                                        <p className="flex medel">
                                            📍 Pabna, Bangladesh
                                        </p>
                                        <div className="socalIcon">
                                            <FaPhoneSquareAlt className="phoneIcon"/>
                                            <FaWhatsappSquare className="whatsAppIcon"/>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </>
    )
}