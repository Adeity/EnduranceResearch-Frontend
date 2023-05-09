import Link from "next/link";


export default function Navbar() {
    return (
        <header className=" d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <h3 className={"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"}>
                <Link href={"/"} className={"nav-link"}>Dotazníky Výzkumu Odolnosti</Link>
            </h3>
        </header>
    )
}