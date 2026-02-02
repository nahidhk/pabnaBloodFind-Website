import React, {
    useEffect,
    useMemo,
    useState
} from "react";
import {
    FaPhoneSquareAlt,
    FaWhatsappSquare,
    FaMale,
    FaFemale,
} from "react-icons/fa";
import url from "../api/url.json";
import { MdVerified } from "react-icons/md";



interface Donor {
    id: number;
    name: string;
    gender: "male" | "female";
    phone: string;
    whatsapp_number: string;
    bloodgroup: string;
    address: string;
    image?: string;
    v: string;
}

export default function FindBlood() {
    const [dbdata,
        setDbdata] = useState<Donor[]>([]);
    const [loading,
        setLoading] = useState<boolean>(true);
    const [search,
        setSearch] = useState<string>("");

    useEffect(() => {
        document.title = "Find Blood Donor - Pabna Blood Find";

        fetch(url.apiUrl)
            .then((res) => res.json())
            .then((data: Donor[]) => {

                const shuffled = [...data].sort(() => 0.5 - Math.random());
                setDbdata(shuffled);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);


    const filteredData = useMemo(() => {
        if (!search) return dbdata;

        return dbdata.filter((item) =>
            item.bloodgroup.toLowerCase().includes(search.toLowerCase()) ||
            item.address.toLowerCase().includes(search.toLowerCase()) ||
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    },
        [search,
            dbdata]);

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
                        placeholder="Search by blood group, name or address"
                        className="inputField"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="flex center">


                    <div className="card">
                        <h2 className="textCenter">Blood Donor Results</h2>
                        <br />


                        {loading && <div className="flex center medel">
                            <div className="loader">

                            </div>
                        </div>
                        }


                        {!loading && filteredData.length === 0 && (
                            <p className="textCenter">
                                No donor found
                            </p>
                        )}



                        <div className="flex center medel clomun">

                            {!loading &&
                                filteredData.map((item) => (
                                    <div key={item.id} className="model boxCard">
                                        <div className="flex center medel">
                                            <img
                                                src={item.image || "https://simhub.github.io/avatar-face-expression/img/avatar/svg/neutral_male.svg"}
                                                className="userImg"
                                                alt="donor"

                                            />

                                            <div className="marginLeft">
                                                <h2 className="flex center medel">{item.name} {item.v === "1" ? (<MdVerified className="ff4680" />) : "(Unverified)"}</h2>
                                                <p className="mark flex center medel">
                                                    {item.gender === "male" ? (
                                                        <>
                                                            👨 Male
                                                        </>
                                                    ) : (
                                                        <>
                                                            👩 Female
                                                        </>
                                                    )}
                                                </p>
                                                <p>
                                                    📞 <b>{item.phone}</b>
                                                </p>

                                                <p>
                                                    🩸 Blood:
                                                    <span className="blood"> {item.bloodgroup}</span>
                                                </p>

                                                <p>
                                                    📍 {item.address}
                                                </p>

                                                <div className="socalIcon flex center medel">
                                                    <a href={`tel:${item.phone}`}>
                                                        <FaPhoneSquareAlt className="phoneIcon" />
                                                    </a>

                                                    <a
                                                        href={`https://wa.me/88${item.whatsapp_number}`}
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
            </div>
        </>
    );
}