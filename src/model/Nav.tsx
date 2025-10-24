import React from "react";
import AppName from "../components/AppName";

import { HiMenuAlt3 } from "react-icons/hi";


export default function Nav() {
    return (
        <>
            <nav className="nav flex around medel">
                <div>
                    <span className="logo">
                        <AppName />
                    </span>
                </div>
                <div>
                    <HiMenuAlt3 />
                </div>
            </nav>
        </>
    )
}