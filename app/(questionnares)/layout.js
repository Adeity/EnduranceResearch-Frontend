import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/questionnares/styles.css'

export default function RootLayout({children}) {
    return (
        <html>
        <head/>
        <body className={"container"}>
        <Navbar/>
        <main>
            {/*{children}*/}
            <h3>Aplikace je momentálně nedostupná</h3>
        </main>
        <Footer/>
        </body>
        </html>
    )
}