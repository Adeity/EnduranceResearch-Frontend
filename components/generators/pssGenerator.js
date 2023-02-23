// pozn: po vygenerovani je treba zmenit values u.
// Položky 1, 2, 3, 6, 9, 10 se skórují “normálně” (Odpověď 0 = 0 bodů, 1 =1 bod…)
// Položky 4,5,7,8 se skórují “obráceně (odpověď 0 = 4 body, odpověď 1 = 3 body, 2 = 2 body, 3 = 1 bod, 4 = 0 bodů)
const getQuestion = (numberQuestion, label) => {return `
 q${numberQuestion + 1}: {
                questionType: "multipleChoice",
                label: "${label}",
                inputId: "pssQ${numberQuestion}Input",
                answers: [
                    {
                        id: "pss${numberQuestion}mch0",
                        label: "Nikdy",
                        value: 0,
                        checked: false
                    },
                    {
                        id: "pss${numberQuestion}mch1",
                        label: "Téměř nikdy",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "pss${numberQuestion}mch2",
                        label: "Občas",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "pss${numberQuestion}mch3",
                        label: "Poměrně často",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "pss${numberQuestion}mch4",
                        label: "Velmi často",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: ${300 + numberQuestion}
                },
            },
` }

const labels = [
    'Jak často jste v posledním měsíci byl/a rozrušen/a něčím neočekávaným?',
    'Jak často jste v posdlením měsíci měl/a pocit, že nemáte kontrolu nad důležitými věcmi ve svém životě?',
    'Jak často jste se v posledním měsíci cítil/a nervózní a ve stresu?',
    'Jak často jste v posledním měsíci věřil/a, že dokážete sebejistě zvládat své osobní problémy?',
    'Jak často Vam v posledním měsíci přišlo, že jdou věci podle plánu?',
    'Jak často jste v posledním měsíci zjistil/a, že nezvládáte všechny věci, které musíte udělat?',
    'Jak často jste v posledním měsíci cítil/a, že dokážete kontrolovat nepříjemné situace ve svém životě?',
    'Jak často jste v posledním měsíci cítil/a, že máte věci pod kontrolou?',
    'Jak často jste byl/a v posledním měsíci rozzlobený/á kvůli věcem, které jste nemohl/a ovlivnit?',
    'Jak často jste v posledním měsíci cítil/a, že se potíže hromadí tak moc, že je nedokážete zvládnout?'
]

function getQDefs() {
    let counter = 0
    labels.forEach(e => {
        console.log(getQuestion(counter, labels[counter]))
        counter++
    })
}

function getInsertPss() {
    let a = 'insert into question(id, code, label)\nvalues\n'

    let counter = 0;
    labels.forEach(e => {
        a += `(${300+counter}, \'pssQ${counter}\', \'${e}\'),\n`
        counter++
    })
    console.log(a)
}

getQDefs()
// getInsertPss()
