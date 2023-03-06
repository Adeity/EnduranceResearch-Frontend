import CardList from "./CardList";

function QuestionnaresList(props) {
    return (
            <CardList items ={[
                {
                    id: 1,
                    name: 'PSQI',
                    description: '',
                    code:"psqi"
                },
                {
                    id: 1,
                    name: 'MEQ',
                    description: '',
                    code:"meq"
                },
                {id: 1,
                    name: 'MCTQ',
                    description: '',
                    code: "mctq"
                },
                {
                    id: 1,
                    name: 'Dotazník životní spokojenosti',
                    description: '',
                    code: "dzs"
                },
                {
                    id: 1,
                    name: 'Škála vnímaného stresu',
                    description: '',
                    code: "pss"
                },
            ]
            }/>
    )
}

export default QuestionnaresList