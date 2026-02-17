import React from "react";
import StartUsers from "../components/StartUsers";

export default function Bottom() {
    return (
        <>
            <StartUsers />
            <div className="flex center medel">
                <blockquote>
                    <p>
                        Powered by <strong>NdSQL</strong> &reg; - Copyright &copy; All rights reserved
                    </p>
                </blockquote>
            </div>
        </>
    )
}