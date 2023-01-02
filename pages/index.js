// pages/_app.js

import Layout from '../components/layout'
import CardList from "../components/CardList";

export default function App({ Component, pageProps }) {
    return (
        <Layout title={"index"}>
            <div> my content</div>
            <CardList items ={[
                {
                    id: 1,
                    name: 'PSQI',
                    description: '',
                    image:"https://upload.wikimedia.org/wikipedia/commons/5/58/AcetoFive.JPG",
                    code:"psqi"
                },
                {
                    id: 1,
                    name: 'MEQ',
                    description: '',
                    image:"https://upload.wikimedia.org/wikipedia/commons/5/58/AcetoFive.JPG",
                    code:"meq"
                },
                {id: 1,
                    name: 'MCTQ',
                    description: '',
                    image:"https://upload.wikimedia.org/wikipedia/commons/5/58/AcetoFive.JPG",
                    code: "mctq"
                },
                {
                    id: 1,
                    name: 'Dotazník životní spokojenosti',
                    description: '',
                    image:"https://upload.wikimedia.org/wikipedia/commons/5/58/AcetoFive.JPG",
                    code: "dzs"
                },
                {
                    id: 1,
                    name: 'Škála vnímaného stresu',
                    description: '',
                    image:"https://upload.wikimedia.org/wikipedia/commons/5/58/AcetoFive.JPG",
                    code: "pss"
                },
            ]
            }/>
        </Layout>
    )
}