const meq = {
    meq: {
        q1: {
            questionType: "hourRangeInput",
            minHour: 5,
            numberOfHours: 7,
            label: "Vezmete-li v úvahu pouze to, při jakém denním rytmu se cítíte nejlépe, v kolik hodin byste " +
                "vstávali, pokud byste si mohli zcela svobodně naplánovat svůj den?",
            inputId: "meqQ1InputId",
            answer: "",
            question: {
                id: 401
            },
        },
        q2: {
            questionType: "hourRangeInput",
            minHour: 20,
            numberOfHours: 7,
            label: "Vezmete-li v úvahu pouze to, při jakém denním rytmu se cítíte nejlépe, v kolik hodin byste " +
                "šli spát, pokud byste si mohli zcela svobodně naplánovat svůj večer?",
            inputId: "meqQ2InputId",
            answer: "",
            question: {
                id: 402
            },
        },
        q3: {
            questionType: "multipleChoice",
            label: "Pokud ráno musíte vstávat v určitou dobu, do jaké míry jste závislý/á na zvonění budíku?",
            inputId: "meqQ3InputId",
            answers: [
                {
                    id: "meqQ3MCH1",
                    label: "Zcela nezávislý/á",
                    value: 4,
                    checked: false
                },
                {
                    id: "meqQ3MCH2",
                    label: "Spíše nezávislý/á",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ3MCH3",
                    label: "Spíše závislý/á",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ3MCH4",
                    label: "Zcela závislý/á",
                    value: 1,
                    checked: false
                },
            ],
            question: {
                id: 403
            },
        },
        q4: {
            questionType: "multipleChoice",
            label: "Jak snadno se vám ráno vstává v přiměřených podmínkách prostředí? (v případě, že Vás " +
                "nic nečekaně neprobudí?)",
            inputId: "meqQ4InputId",
            answers: [
                {
                    id: "meqQ4MCH1",
                    label: "Velmi nesnadno",
                    value: 1,
                    checked: false
                },
                {
                    id: "meqQ4MCH2",
                    label: "Spíše nesnadno",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ4MCH3",
                    label: "Spíše snadno",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ4MCH4",
                    label: "Velmi snadno",
                    value: 4,
                    checked: false
                },
            ],
            question: {
                id: 404
            },
        },
        q5: {
            questionType: "multipleChoice",
            label: "Jak čilý/á se cítíte během první půl hodiny po ranním probuzení?",
            inputId: "meqQ5InputId",
            answers: [
                {
                    id: "meqQ5MCH1",
                    label: "Vůbec ne čilý/á",
                    value: 1,
                    checked: false
                },
                {
                    id: "meqQ5MCH2",
                    label: "Spíše ne čilý/á",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ5MCH3",
                    label: "Dosti čilý/á",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ5MCH4",
                    label: "Velmi čilý/á",
                    value: 4,
                    checked: false
                },
            ],
            question: {
                id: 405
            },
        },
        q6: {
            questionType: "multipleChoice",
            label: "Jakou máte chuť k jídlu během první půl hodiny po ranním probuzení?",
            inputId: "meqQ6InputId",
            answers: [
                {
                    id: "meqQ6MCH1",
                    label: "Velmi malou",
                    value: 1,
                    checked: false
                },
                {
                    id: "meqQ6MCH2",
                    label: "Spíše malou",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ6MCH3",
                    label: "Spíše dobrou",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ6MCH4",
                    label: "Velmi dobrou",
                    value: 4,
                    checked: false
                },
            ],
            question: {
                id: 406
            },
        },
        q7: {
            questionType: "multipleChoice",
            label: "Jak moc se cítíte unavený/á během první půl hodiny po ranním probuzení?",
            inputId: "meqQ7InputId",
            answers: [
                {
                    id: "meqQ7MCH1",
                    label: "Velmi unavený",
                    value: 1,
                    checked: false
                },
                {
                    id: "meqQ7MCH2",
                    label: "Spíše unavený/á",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ7MCH3",
                    label: "Spíše svěží",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ7MCH4",
                    label: "Velmi svěží",
                    value: 4,
                    checked: false
                },
            ],
            question: {
                id: 407
            },
        },
        q8: {
            questionType: "multipleChoice",
            label: "Nemáte-li další den žádné povinnosti, kdy půjdete spát ve srovnání s dobou, kdy obvykle " +
                "chodíte do postele?",
            inputId: "meqQ8InputId",
            answers: [
                {
                    id: "meqQ8MCH1",
                    label: "Trochu nebo vůbec ne později",
                    value: 4,
                    checked: false
                },
                {
                    id: "meqQ8MCH2",
                    label: "O méně nez 1 hodinu později",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ8MCH3",
                    label: "O 1 - 2 hodiny později",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ8MCH4",
                    label: "O více než 2 hodiny později",
                    value: 1,
                    checked: false
                },
            ],
            question: {
                id: 408
            },
        },
        q9: {
            questionType: "multipleChoice",
            label: "Rozhodl/a jste se začít pravidelně cvičit. Váš přítel navrhuje, že spolu budete cvičit 2x " +
                "týdně jednu hodinu. Nejvíce mu vyhovuje čas mezi 7. až 8. hodinou ráno. S ohledem na " +
                "denní rytmus, při kterém se cítíte nejlépe, jaký výkon byste podle vás podal/a?",
            inputId: "meqQ9InputId",
            answers: [
                {
                    id: "meqQ9MCH1",
                    label: "Byl/a bych v dobré formě",
                    value: 4,
                    checked: false
                },
                {
                    id: "meqQ9MCH2",
                    label: "Byl/a bych v přijatelné formě",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ9MCH3",
                    label: "Bylo by to obtížné",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ9MCH4",
                    label: "Bylo by to velmi obtížné",
                    value: 1,
                    checked: false
                },
            ],
            question: {
                id: 409
            },
        },
        q10: {
            questionType: "hourRangeInput",
            minHour: 20,
            numberOfHours: 7,
            label: "V kolik hodin večer cítíte únavu a cítíte tedy potřebu jít spát?",
            inputId: "meqQ10InputId",
            answer: "",
            question: {
                id: 410
            },
        },
        q11: {
            questionType: "multipleChoice",
            label: "Přejete si podat co nejlepší výkon v testu, o kterém víte, že je mentálně vyčerpávající a trvá " +
                "dvě hodiny. Pokud byste mohl/a zcela svobodně plánovat svůj den, s ohledem na rytmus, " +
                "při kterém se cítíte nejlépe, který ze čtyř časů testu byste si vybral/a?",
            inputId: "meqQ11InputId",
            answers: [
                {
                    id: "meqQ11MCH1",
                    label: "8 - 10 hod",
                    value: 6,
                    checked: false
                },
                {
                    id: "meqQ11MCH2",
                    label: "11 - 13 hod",
                    value: 4,
                    checked: false
                },
                {
                    id: "meqQ11MCH3",
                    label: "15 - 17 hod",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ11MCH4",
                    label: "19 - 21 hod",
                    value: 0,
                    checked: false
                },
            ],
            question: {
                id: 411
            },
        },
        q12: {
            questionType: "multipleChoice",
            label: "Pokud jdete spát ve 23 hodin, jak moc se cítíte unavený/á?",
            inputId: "meqQ12InputId",
            answers: [
                {
                    id: "meqQ12MCH1",
                    label: "Vůbec bych nebyl/á unavený/á",
                    value: 0,
                    checked: false
                },
                {
                    id: "meqQ12MCH2",
                    label: "Trochu unavený/á",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ12MCH3",
                    label: "Celkem unavený/á",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ12MCH4",
                    label: "Velmi unavený/á",
                    value: 5,
                    checked: false
                },
            ],
            question: {
                id: 412
            },
        },
        q13: {
            questionType: "multipleChoice",
            label: "Z nějakého důvodu jste šel/šla spát o několik hodin později než obvykle, ale další den ráno " +
                "nemusíte vstávat v určitou dobu. Kterou z následujících situací nejpravděpodobněji " +
                "zažijete?",
            inputId: "meqQ13InputId",
            answers: [
                {
                    id: "meqQ13MCH1",
                    label: "Probudím se v obvyklou dobu a už neusnu.",
                    value: 4,
                    checked: false
                },
                {
                    id: "meqQ13MCH2",
                    label: "Probudím se v obvyklou dobu a pak budu ještě podřimovat",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ13MCH3",
                    label: "Probudím se v obvyklou dobu, ale pak znovu usnu",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ13MCH4",
                    label: "Probudím se později než obvykle",
                    value: 1,
                    checked: false
                },
            ],
            question: {
                id: 413
            },
        },
        q14: {
            questionType: "multipleChoice",
            label: "Jednu noc musíte být vzhůru mezi 4. až 6. hodinou ráno, abyste provedl/a noční hlídku. Další den nemáte žádné povinnosti. Která z následujících možností by vám nejvíce vyhovovala?",
            inputId: "meqQ14InputId",
            answers: [
                {
                    id: "meqQ14MCH1",
                    label: "Nešel/a bych vůbec do postele, dokud by hlídka neskončila",
                    value: 1,
                    checked: false
                },
                {
                    id: "meqQ14MCH2",
                    label: "Zdřimnul/a bych si před hlídkou a po ní šel/šla spát",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ14MCH3",
                    label: "Před hlídkou bych se dobře vyspal/a a po ní bych si zdříml/a",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ14MCH4",
                    label: "Spal/a bych pouze před hlídkou",
                    value: 4,
                    checked: false
                },
            ],
            question: {
                id: 414
            },
        },
        q15: {
            questionType: "multipleChoice",
            label: "Budete muset dvě hodiny tvrdě fyzicky pracovat. Máte úplnou volnost v plánování svého dne. S ohledem na denní rytmus, při kterém se cítíte nejlépe, které z následujících časových rozmezí byste si vybral/a?",
            inputId: "meqQ15InputId",
            answers: [
                {
                    id: "meqQ15MCH1",
                    label: "8 - 10 hod",
                    value: 4,
                    checked: false
                },
                {
                    id: "meqQ15MCH2",
                    label: "11 - 13 hod",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ15MCH3",
                    label: "15 - 17 hod",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ15MCH4",
                    label: "19 - 21 hod",
                    value: 1,
                    checked: false
                },
            ],
            question: {
                id: 415
            },
        },
        q16: {
            questionType: "multipleChoice",
            label: "Rozhodl/a jste se začít s těžkým tělesným cvičením. Váš přítel navrhuje, že spolu budete cvičit 2x týdně jednu hodinu. Nejvíce mu vyhovuje čas mezi 22. a 23. hodinou večer. S ohledem na denní rytmus, při kterém se cítíte nejlépe, jaký výkon byste podle vás podal/a?",
            inputId: "meqQ16InputId",
            answers: [
                {
                    id: "meqQ16MCH1",
                    label: "Byl/a bych v dobré formě",
                    value: 1,
                    checked: false
                },
                {
                    id: "meqQ16MCH2",
                    label: "Byl/a bych v přijatelné formě",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ16MCH3",
                    label: "Bylo by to obtížné",
                    value: 3,
                    checked: false
                },
                {
                    id: "meqQ16MCH4",
                    label: "Bylo by to velmi obtížné",
                    value: 4,
                    checked: false
                },
            ],
            question: {
                id: 416
            },
        },
        q17: {
            questionType: "hhmm",
            label: "Předpokládejte, že si můžete vybrat pracovní dobu. Dále předpokládejte, že pracujete pět hodin denně (včetně přestávek), Vaše práce je zajímavá a placená podle výsledků. V kolik hodin by začínala vaše pětihodinová směna?",
            inputId: "meqQ17InputId",
            answer: "",
            question: {
                id: 417
            },
        },
        q18: {
            questionType: "hhmm",
            label: "V kolik hodin během dne se cítíte nejlépe, na vrcholu svých sil?",
            inputId: "meqQ18InputId",
            answer: "",
            question: {
                id: 418
            },
        },
        q19: {
            questionType: "multipleChoice",
            label: "Zřejmě jste už slyšel/a o „ranních“ a „večerních“ typech lidí („ranní ptáčata“ a „noční sovy“). Za který z těchto typů se považujete?",
            inputId: "meqQ19InputId",
            answers: [
                {
                    id: "meqQ19MCH1",
                    label: "Určitě „ranní“ typ",
                    value: 6,
                    checked: false
                },
                {
                    id: "meqQ19MCH2",
                    label: "Spíše „ranní“ než „večerní“ typ",
                    value: 4,
                    checked: false
                },
                {
                    id: "meqQ19MCH3",
                    label: "Spíše „večerní“ než „ranní“ typ",
                    value: 2,
                    checked: false
                },
                {
                    id: "meqQ19MCH4",
                    label: "Určitě „večerní“ typ",
                    value: 0,
                    checked: false
                },
            ],
            question: {
                id: 419
            },
        },
    }
}

console.log("insert into question (id, code, label)")
console.log("values")
let counter = 1;
Object.keys(meq.meq).forEach(key => {
    const value = meq.meq[key]
    console.log(`(${value.question.id}, \'meqQ${counter}\', \'${value.label}\'),`)
    counter++
})