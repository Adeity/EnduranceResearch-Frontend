// components/layout.js

import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head';


export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title} | Dotazníky Výzkumu Odolnosti</title>
            </Head>
            <Navbar />
            <main className={"container"}>{children}</main>
            <Footer />
        </>
    )
}