// components/layout.js

import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head';


export default function Layout({ children, title }) {
    const text = `${title} | Dotazníky Výzkumu Odolnosti`
    return (
        <>
            <Head>
                <title>{text}</title>
            </Head>
            <Navbar />
            <main className={"container"}>{children}</main>
            <Footer />
        </>
    )
}