import Link from "next/link";


export default function Navbar() {
    return (
        // <>
        // <header>
        //         <nav className={"navbar navbar-expand-lg navbar-dark- bg-dark"}>
        //             <a className="navbar-brand" href="#">VyzkumOdolnosti</a>
        //
        //             <ul>
        //             </ul>
        //         </nav>
        // </header>
        <header className=" d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            {/*<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">*/}
            {/*    Výzkum Odolnosti Dotazníky*/}
            {/*</a>*/}
            <h3 className={"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"}>Dotazníky
                Výzkumu Odolnosti</h3>

            <ul className="nav nav-pills">
                <li className={"nav-item"}><Link href="/" className={"nav-link"}>Domů</Link></li>
                {/*<li className={"nav-item"}><Link href="/userform" className={"nav-link"}>User form</Link></li>*/}
            </ul>
        </header>
        // </>
    )
}