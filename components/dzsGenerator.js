const getQuestion = (questionKind, questionNumber, numberQuestion, label) => {return `
 ${questionKind}Q${questionNumber}: {
                questionType: "multipleChoice",
                label: "${label}",
                inputId: "dzs${questionKind}Q${questionNumber}",
                answers: [
                    {
                        id: "dzs${questionKind}Q${questionNumber}mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzs${questionKind}Q${questionNumber}mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzs${questionKind}Q${questionNumber}mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzs${questionKind}Q${questionNumber}mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzs${questionKind}Q${questionNumber}mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzs${questionKind}Q${questionNumber}mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzs${questionKind}Q${questionNumber}mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: ${200 + numberQuestion}
                },
            },
` }

const dzsLabels = [
    'Se svým tělesným zdravotním stavem jsem...',
    'Se svou duševní kondicí jsem...',
    'Se svou tělesnou kondicí jsem...',
    'Se svou duševní výkonností jsem...',
    'Se svou obranyschopností proti nemoci jsem...',
    'Když myslím na to, jak často mám bolesti, jsem...',
    'Když myslím na to, jak často jsem až dosud byl(a) nemocný(á), jsem...',

    'Se svým postavením na pracovišti jsem...',
    'Když myslím na to, jak jistá je moje budoucnost v zaměstnání, jsem...',
    'S úspěchy, které mám v zaměstnání, jsem...',
    'S možnostmi postupu, které mám v zaměstnání, jsem...',
    'S atmosférou na pracovišti jsem...',
    'Co se týká mých pracovních povinností a zátěže, jsem...',
    'S pestrostí, kterou mi nabízí mé zaměstnání, jsem...',

    'Se svým příjmem/platem jsem...',
    'S tím, co vlastním, jsem...',
    'Se svým životním standardem jsem...',
    'S hmotným zajištěním své existence jsem...',
    'Se svými budoucími možnostmi výdělku jsem...',
    'S možnostmi, které mohu vzhledem ke své finanční situaci nabídnout své rodině jsem...',
    'Se svým budoucím očekávaným (finančním) zajištěním ve stáří jsem...',

    'S délkou své každoroční dovolené jsem...',
    'S množstvím svého volného času po práci a o víkendech jsem...',
    'S kvalitou odpočinku, který mi přináší dovolená, jsem...',
    'S kvalitou odpočinku, který mi přináší volný čas po práci a víkendy, jsem...',
    'S množstvím času, které mám k dispozici pro své koníčky, jsem...',
    'S časem, který mohu věnovat blízkým osobám jsem...',
    'S pestrostí svého volného času jsem...',

    'S požadavky, které na mne klade mé manželství/partnerství, jsem...',
    'S našimi společnými aktivitami jsem...',
    'S upřímností a otevřeností svého partnera/partnerky jsem...',
    'S pochopením, která má pro mne můj partner/partnerka, jsem..',
    'S něžností a náklonností, kterou mi můj partner/partnerka projevuje jsem...',
    'S bezpečím, které mi poskytne můj partner/partnerka, jsem...',
    'S ochotou pomoci, kterou mi projevuje můj partner/partnerka, jsem...',

    'když myslím na to, jak s dětmi vzájemně vycházíme, jsem...',
    'Když myslím na úspěchy svých dětí ve škole a zaměstnání, jsem...',
    'Když myslím na to, kolik radosti mám ze svých dětí, jsem...',
    'Když myslím na námahu a výdaje, které mě mé děti stály, jsem...',
    'S vlivem, který mám na své děti, jsem...',
    'S uznáním, kterého se mi od mých dětí dostává jsem...',
    'S našimi společnými aktivitami jsem...',

    'Se svými schopnostmi a dovednostmi jsem...',
    'Se způsobem, jak jsem až doposud žil, jsem...',
    'Se svým vnějším vzhledem jsem...',
    'Se svým sebevědomím a sebejistotou jsem...',
    'Se svým charakterem (povahou) jsem...',
    'Se svou vitalitou (tzn. s radostí ze života a životní energií) jsem...',
    'Když myslím na to, jak vycházím s ostatními lidmi, jsem...',

    'Se svou tělesnou přitažlivostí jsem...',
    'Se svou sexuální výkonností jsem...',
    'S častostí svých sexuálních kontaktů jsem...',
    'S tím, jak často se mi můj partner/má partnerka tělesně věnuje (dotýká se mne, hladí mne), jsem...',
    'Se svými sexuálními reakcemi jsem...',
    'Když myslím na to, jak otevřeně mohu mluvit o sexuální oblasti, jsem...',
    'Když myslím na to, jak se k sobě s partnerem hodíme, jsem...',

    'Když myslím na okruh svých přátel a známých, jsem...',
    'S kontakty se svými příbuznými jsem...',
    'S kontaktem se svými sousedy jsem...',
    'S pomocí a podporou, kterou mi poskytují přátelé a známí, jsem...',
    'Se svým veřejnými a spolkovými aktivitami jsem...',
    'Se svou společenskou angažovaností jsem...',
    'Když myslím na to, jak často se dostanu mezi lidi, jsem...',

    'S velikostí svého bytu jsem...',
    'Se stavem svého bytu jsem...',
    'S výdaji za svůj byt (nájem, příp. splátky) jsem...',
    'S polohou svého bytu jsem...',
    'S dosažitelností dopravních prostředků jsem...',
    'Když myslím na míru zátěže hlukem ve vlastním bytě...',
    'Se standardem svého bytu jsem...'
]

const druhyOtazek = ['health', 'work', 'finances', 'freeTime', 'partnership', 'children', 'personality', 'sexuality', 'friends', 'habitation']
function getDzsQuestions() {
    let counter = 0;
    druhyOtazek.forEach(e => {
        for (let i = 0; i < 7; i++) {
            console.log(getQuestion(e, i, counter, dzsLabels[counter]))
            counter++
        }
    })
}

function getInsertDzs() {
    let a = 'insert into question(id, code, label)\nvalues\n'

    let counter = 0;
    druhyOtazek.forEach(e => {
        for (let i = 0; i < 7; i++) {
            a += `(${200+counter}, \'dzs${e}${i}\', \'${dzsLabels[counter]}\'),\n`
            counter++
        }
    })
    console.log(a)
}

function getJavaAttributes() {
    let a = ''
    druhyOtazek.forEach(e => {
        for (let i = 0; i < 7; i++) {
            a += `private Integer ${e}Q${i};\n`
        }
    })
    console.log(a)
}

function getSumOfEeachPartInJava() {
    let a = ''
    druhyOtazek.forEach(e => {
        for (let i = 0; i < 7; i++) {
            const druhSUpperCasem = `${e.charAt(0).toUpperCase()}${e.slice(1)}`
            a += `v.get${druhSUpperCasem}Q${i}() +`
        }
        a = a.slice(0, -1)
        a += '\n'
    })
    console.log(a)
}
// getJavaAttributes()
getSumOfEeachPartInJava()
// getDzsQuestions()
// getInsertDzs()
