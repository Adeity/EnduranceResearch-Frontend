import Link from "next/link";
import React from "react";


export default function Navbar() {
    return (
        <header className=" d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <h3 className={"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"}>
                Výzkum Odolnosti Admin
            </h3>
            <ul className="nav nav-pills">
                <li className={"nav-item"}><Link href="/admin/export-sleep" className={"nav-link"}>Export z wearables</Link></li>
                <li className={"nav-item"}><Link className="nav-link" href="/admin/participants/all">Seznam</Link></li>
                <li className={"nav-item"}><Link className="nav-link" href="/admin/participants/number-check">Kontrola V.Č.</Link></li>
                <li className={"nav-item"}><Link className="nav-link" href="/admin/user">Uživatel</Link></li>
            </ul>
        </header>
    )
}