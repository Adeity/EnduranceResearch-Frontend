import '../../../styles/admin/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../../../styles/questionnares/styles.css'
import Navbar from "../../../components/admin/navbar";
import Footer from "../../../components/footer";

export default function RootLayout({children}) {
    return (
        <html>
        <head/>
        <body className={"container"}>
        <main className={"h-100"}>
            {children}
            {/*<h3>Aplikace je momentálně nedostupná</h3>*/}
        </main>
        <Footer/>
        </body>
        </html>
    )
}
