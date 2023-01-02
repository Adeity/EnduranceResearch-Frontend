import Layout from '../components/layout'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/styles.css'
import {Head} from "next/document";

export default function MyApp({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}