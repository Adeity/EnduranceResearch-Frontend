import Layout from "./layout";
import CardList from "./CardList";

function QuestionnaresList(props) {
    return (
        <Layout title={"index"}>
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

export default QuestionnaresList