/**
 * U multiple choice slouzi 'answer' jako 'answer', cili ciselna hodnota
 */

const inTheLastString = "Jak často: "
export const psqi = {
    psqi:
        {
            q1: {
                questionType: "hhmm",
                label: "V kolik hodin jste obvykle během posledního měsíce večer ulehl(a) do postele? (hh:mm)",
                inputId: "psqigmtHhmm",
                answer: "",
                question: {
                    id: 101
                },
                code: "psqiq1"
            },
            q2: {
                questionType: "minutes",
                label: "Jak dlouho (v minutách) vám obvykle každý večer během posledního měsíce trvalo než jste usnul(a)?",
                inputId: "psqiasleepTimeMinutes",
                answer: "",
                question: {
                    id: 102
                },
                code: "psqiq2"
            },
            q3: {
                questionType: "hhmm",
                label: "V kolik hodin jste obvykle během posledního měsíce ráno vstával(a) z postele? (hh:mm)",
                inputId: "psqihhMmGmtoo",
                answer: "",
                question: {
                    id: 103
                },
                code: "psqiq3"
            },
            q4: {
                questionType: "hours",
                label: "Kolik hodin za noc jste minulý měsíc obvykle opravdu spal(a)? (To se může lišit od počtu strávených v posteli.)",
                inputId: "psqiActualHoursOfOfSleep",
                answer: "",
                question: {
                    id: 104
                },
                code: "psqiq4"
            },
            q5a: {
                questionType: "multipleChoice",
                label: inTheLastString + "Nemohl jste usnout do 30 min",
                inputId: "idsevenpsqione",
                answers: [
                    {
                        id: "never7psqi1",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi1",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi1",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi1",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 105
                },
                code: "psqiq5a"
            },
            q5b: {
                questionType: "multipleChoice",

                label: inTheLastString + "Vzbudil(a) jste se uprostřed noci nebo brzy ráno.",

                inputId: "7psqi2",
                answers: [
                    {
                        id: "never7psqi2",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi2",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi2",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi2",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 106
                },
                code: "psqiq5b"
            },
            q5c: {
                questionType: "multipleChoice",
                label: inTheLastString + "Musel(a) jste vstávat a jít na záchod.",

                inputId: "7psqi3",
                answers: [
                    {
                        id: "never7psqi3",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi3",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi3",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi3",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 107
                },
                code: "psqiq5c"
            },
            q5d: {
                questionType: "multipleChoice",
                label: inTheLastString + "Nemohl(a) jste dobře dýchat.",
                inputId: "7psqi4",
                answers: [
                    {
                        id: "never7psqi4",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi4",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi4",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi4",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 108
                },
                code: "psqiq5d"
            },
            q5e: {
                questionType: "multipleChoice",
                label: inTheLastString + "Hlasitě jste kašlal(a) nebo chrápal(a).",

                inputId: "7psqi5",
                answers: [
                    {
                        id: "never7psqi5",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi5",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi5",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi5",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 109
                },
                code: "psqiq5e"
            },
            q5f: {
                questionType: "multipleChoice",
                label: inTheLastString + "Bylo Vám příliš chladno.",
                inputId: "7psqi6",
                answers: [
                    {
                        id: "never7psqi6",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi6",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi6",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi6",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 110
                },
                code: "psqiq5f"
            },
            q5g: {
                questionType: "multipleChoice",

                label: inTheLastString + "Bylo Vám příliš horko.",

                inputId: "7psqi7",
                answers: [
                    {
                        id: "never7psqi7",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi7",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi7",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi7",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 111
                },
                code: "psqiq5g"
            },
            q5h: {
                questionType: "multipleChoice",

                label: inTheLastString + "Měl(a) jste špatné sny",

                inputId: "7psqi8",
                answers: [
                    {
                        id: "never7psqi8",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi8",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi8",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi8",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 112
                },
                code: "psqiq5h"
            },
            q5i: {
                questionType: "multipleChoice",

                label: inTheLastString + "Měl(a) jste bolesti.",

                inputId: "7psqi9",
                answers: [
                    {
                        id: "never7psqi9",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi9",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi9",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi9",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 113
                },
                code: "psqiq5i"
            },
            q5j: {
                questionType: "multipleChoiceWithText",
                label: "Prosím, popište jiné důvody, kvůli kterým jste se musel(a) vzbudit. a jak často v týdnu.",
                firstDescription: "Důvody popište slovy. Jestliže žádné další důvody neexistují, zadejte \"nejsou\".",
                secondDescription: "Vyberte jednu z možností znázorňující, jak často jste se potýkal s problémy, které jste popsal v předchozim políčku.",
                inputId: "7psqi10",
                answers: [
                    {
                        id: "never7psqi10",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi10",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi10",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi10",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                textValue: "",
                question: {
                    id: 114
                },
                code: "psqiq5j"
            },
            q6: {
                questionType: "multipleChoice",

                label: "Jak byste celkově ohodnotil(a) kvalitu svého spánku během posledního měsíce?",

                inputId: "psqi8",
                answers: [
                    {
                        id: "verygoodpsqi8",
                        label: "Velmi dobrá",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "quitegoodpsqi8",
                        label: "Docela dobrá",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "quitebadpsqi8",
                        label: "Docela špatná",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "verybadpsqi8",
                        label: "Velmi špatná",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 115
                },
                code: "psqiq6"
            },
            q7: {
                questionType: "multipleChoiceWithText",

                label: "Kolikrát jste během posledního měsíce užil(a) léky nebo jiné přípravky, které vám pomáhají usnout a spát (na lékařský předpis nebo bez předpisu + jaké to byly?",
                firstDescription: "Napište, jaké léky nebo jiné přípravky užíváte. Jestliže žádné neužíváte, zadejte \"nejsou\".",
                secondDescription: "Vyberte jednu z možností znázorňující, jak často užíváte léky či jiné přípravky, které jste popsal v předchozim políčku.",

                inputId: "psqi9",
                answers: [
                    {
                        id: "neverpsqi9",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },

                    {
                        id: "lessThanOneWeekpsqi9",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeekpsqi9",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeekpsqi9",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                textValue: "",
                question: {
                    id: 116
                },
                code: "psqiq7"
            },
            q8: {
                questionType: "multipleChoice",
                label: "Jak často jste se během minulého měsíce cítil(a) ospalý/á při řízení auta, při jídle nebo při jiné společenské činnosti?",

                inputId: "psqi10",
                answers: [
                    {
                        id: "neverpsqi10",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },

                    {
                        id: "lessThanOneWeekpsqi10",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeekpsqi10",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeekpsqi10",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 117
                },
                code: "psqiq8"
            },
            q9: {
                questionType: "multipleChoice",

                label: "Jak těžké bylo pro vás během posledního měsíce udržet si dostatek elánu pro dokončení činností?",

                inputId: "psqi11",
                answers: [
                    {
                        id: "neverpsqi11",
                        label: "Vůbec to nebylo těžké",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeekpsqi11",
                        label: "Jen nepatrně těžké",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeekpsqi11",
                        label: "Poněkud těžké",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeekpsqi11",
                        label: "Velmi těžké",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 118
                },
                code: "psqiq9"
            },
            q10: {
                questionType: "multipleChoice",

                label: "Spí ve vašem bytě nebo ve vaší posteli ještě někdo jiný?",

                inputId: "psqi12",
                answers: [
                    {
                        id: "noonepsqi12",
                        label: "Nikdo nespí v posteli ani v mém bytě",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "someonedifferentroompsqi12",
                        label: "Někdo spí v mém bytě ale v jiné místnosti",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "someonesameroompsqi12",
                        label: "Někdo spí ve stejné místnosti ale ne ve stejné posteli",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "someoensamebedpsqi12",
                        label: "Někdo se mnou spí ve stejné posteli",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 119
                },
                code: "psqiq10"
            },
            freeDaysGnt: {
                questionType: "hhmm",
                label: "O volných dnech chodím spát v (hh:mm)",
                inputId: "psqiFdGnt",
                answer: "",
                question: {
                    id: 120
                },
                code: "psqiFreeDaysGnt"
            },
            freeDaysGmt: {
                questionType: "hhmm",
                label: "O volných dnech vstávám v (hh:mm)",
                inputId: "psqiFdGmt",
                answer: "",
                question: {
                    id: 121
                },
                code: "psqiFreeDaysGmt"
            },
            workDaysGnt: {
                questionType: "hhmm",
                label: "O pracovních dnech chodím spát v (hh:mm)",
                inputId: "psqiWdGnt",
                answer: "",
                question: {
                    id: 122
                },
                code: "psqiWorkDaysGnt"
            },
            workDaysGmt: {
                questionType: "hhmm",
                label: "O pracovních dnech vstávám v (hh:mm)",
                inputId: "psqiWdGmt",
                answer: "",
                question: {
                    id: 123
                },
                code: "psqiWorkDaysGmt"
            },
        }
}

const wdPre = "Pracovní dny: "
const fdPre = "Volné dny: "
export const mctq = {
    mctq: {
        btw: {
            questionType: "hhmm",
            label: wdPre + "V kolik hodin chodíte do postele?",
            inputId: "mctqBTwInputId",
            answer: "",
            question: {
                id: 601
            },
        },
        sprepw: {
            questionType: "hhmm",
            label: wdPre + "V kolik hodin jste připravený usnout? (vemte v úvahu, jak dlouho vám trvá usnout)",
            inputId: "mctqSPrepwInputId",
            answer: "",
            question: {
                id: 602
            },
        },
        slatw: {
            questionType: "minutes",
            label: wdPre + "Kolik minut Vám po ulehnutí trvá, než usnete?",
            inputId: "mctqSLatw",
            answer: "",
            question: {
                id: 603
            },
        },
        sew: {
            questionType: "hhmm",
            label: wdPre + "V kolik hodin se probouzíte?",
            inputId: "mctqSPrepwInputId",
            answer: "",
            question: {
                id: 604
            },
        },
        alarmw:{
            questionType: "multipleChoice",
            label: wdPre + "Vstáváte s budíkem, či nikoli?",
            inputId: "mctqAlarmwInputId",
            answers: [
                {
                    id: "mctqAlarmwCh1",
                    label: "Vstávám s budíkem",
                    value: true,
                    checked: false
                },
                {
                    id: "mctqAlarmwCh2",
                    label: "Vstávám bez budíku",
                    value: false,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 605
            },
        },
        siw: {
            questionType: "minutes",
            label: wdPre + "Kolik minut po probuzení vstávate z postele?",
            inputId: "mctqSIw",
            answer: "",
            question: {
                id: 606
            },
        },
        wd: {
            questionType: "multipleChoice",
            label: wdPre + "Kolik dnů v týdnu pracujete?",
            inputId: "mctqWDInputId",
            answers: [
                {
                    id: "mctqWd0",
                    label: "0",
                    value: 0,
                    checked: false
                },
                {
                    id: "mctqWd1",
                    label: "1",
                    value: 1,
                    checked: false
                },
                {
                    id: "mctqWd2",
                    label: "2",
                    value: 2,
                    checked: false
                },
                {
                    id: "mctqWd3",
                    label: "3",
                    value: 3,
                    checked: false
                },
                {
                    id: "mctqWd4",
                    label: "4",
                    value: 4,
                    checked: false
                },
                {
                    id: "mctqWd5",
                    label: "5",
                    value: 5,
                    checked: false
                },
                {
                    id: "mctqWd6",
                    label: "6",
                    value: 6,
                    checked: false
                },
                {
                    id: "mctqWd7",
                    label: "7",
                    value: 7,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 606
            },
        },
        lew: {
            questionType: "hhmm",
            label: wdPre + "Kolik průměrně trávíte během dne času na denním světle (bez střechy nad hlavou)?",
            inputId: "mctqLEwInputId",
            answer: "",
            question: {
                id: 607
            },
        },

        btf: {
            questionType: "hhmm",
            label: fdPre + "V kolik hodin chodíte do postele?",
            inputId: "mctqBTfInputId",
            answer: "",
            question: {
                id: 608
            },
        },

        sprepf: {
            questionType: "hhmm",
            label: fdPre + "V kolik hodin jste připravený usnout? (vemte v úvahu, jak dlouho vám trvá usnout)",
            inputId: "mctqSPrepfInputId",
            answer: "",
            question: {
                id: 609
            },
        },

        slatf: {
            questionType: "minutes",
            label: fdPre + "Kolik potřebujete minut na to, abyste usnul?",
            inputId: "mctqSLatf",
            answer: "",
            question: {
                id: 610
            },
        },

        sef: {
            questionType: "hhmm",
            label: fdPre + "V kolik hodin se probouzíte?",
            inputId: "mctqSPrepfInputId",
            answer: "",
            question: {
                id: 611
            },
        },

        alarmf:{
            questionType: "multipleChoice",
            label: fdPre + "Vstáváte s budíkem, či nikoli?",
            inputId: "mctqAlarmfInputId",
            answers: [
                {
                    id: "mctqAlarmfCh1",
                    label: "Vstávám s budíkem",
                    value: true,
                    checked: false
                },
                {
                    id: "mctqAlarmfCh2",
                    label: "Vstávám bez budíku",
                    value: false,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 612
            },
        },

        sif: {
            questionType: "minutes",
            label: fdPre + "Kolik minut po probuzení vstávate z postele?",
            inputId: "mctqSIf",
            answer: "",
            question: {
                id: 613
            },
        },

        lef: {
            questionType: "hhmm",
            label: fdPre + "Kolik průměrně trávíte během dne času na denním světle (bez střechy nad hlavou)?",
            inputId: "mctqLEfInputId",
            answer: "",
            question: {
                id: 614
            },
        },
    }

}

const showcase = {
    showcase: {
        q1: {
            questionType: "hourRangeInput",
            minHour: 5,
            numberOfHours: 7,
            label: "Vezmete-li v úvahu pouze to, při jakém denním rytmu se cítíte nejlépe, v kolik hodin byste " +
                "vstávali, pokud byste si mohli zcela svobodně naplánovat svůj den?",
            inputId: "showcaseQ1",
            answer: "",
            question: {
                id: 401
            },
        },
        q2: {
            questionType: "multipleChoice",
            label: "Pokud ráno musíte vstávat v určitou dobu, do jaké míry jste závislý/á na zvonění budíku?",
            inputId: "showcaseQ2",
            answers: [
                {
                    id: "showcaseQ2MCH1",
                    label: "Zcela nezávislý/á",
                    value: 4,
                    checked: false
                },
                {
                    id: "showcaseQ2MCH2",
                    label: "Spíše nezávislý/á",
                    value: 3,
                    checked: false
                },
                {
                    id: "showcaseQ2MCH3",
                    label: "Spíše závislý/á",
                    value: 2,
                    checked: false
                }
            ],
            answerLabel: "",
            answer: "",
        },
        q3: {
            questionType: "hhmm",
            label: "V kolik hodin jste připravený usnout? (vemte v úvahu, jak dlouho vám trvá usnout)",
            inputId: "showcaseQ3",
            answer: "",
            question: {
                id: 602
            },
        },
        q4: {
            questionType: "minutes",
            label: wdPre + "Kolik minut Vám po ulehnutí trvá, než usnete?",
            inputId: "showcaseQ4",
            answer: "",
            question: {
                id: 603
            },
        },
        q5: {
            questionType: "wholeNumber",
            label: "Zadejte prosím svůj věk.",
            description: "Zadejte celé číslo znázorňující Váš věk.",
            placeholder: "Např. 25",
            inputId: "showcaseQ5",
            answer: "",
            question: {
                id: 501
            },
        },
        q6: {
            questionType: "twoChoiceWithText",
            label: "Jste převážně student, nebo převážně pracující?",
            inputId: "showcaseQ6",
            answers: [
                {
                    id: "demoProfessionStudent",
                    label: "Student",
                    value: true,
                    checked: false
                },
                {
                    id: "demoProfessionWorking",
                    label: "Pracující",
                    value: false,
                    checked: false
                },
            ],
            optionOneUppercase: false,
            optionOneLabel: "Napišťe ročník, obor a školu.",
            optionOneLabelHint: "Zadejte ročník, obor a školu.",
            optionOnePlaceholder: "Např. 2., medicína, Univerzita Karlova",
            optionOneRegex: ".+",
            optionOneInvalidFeedback: "Zadejte neprázdný vstup",
            optionTwoLabel: "Napišťe profesi.",
            optionTwoLabelHint: "Zadejte svou profesi.",
            optionTwoPlaceholder: "Např. lékař.",
            optionTwoInvalidFeedback: "Zadejte neprázdný vstup.",
            optionTwoRegex: ".+",
            optionOneInput: "",
            optionTwoInput: "",
            textValue: "",
            isOptionOne: null,
            question: {
                id: 503
            },
        },
    }
}
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
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
            answerLabel: "",
            answer: "",
            question: {
                id: 419
            },
        },
    }
}



const pss = {
    pss: {
        q1: {
            questionType: "multipleChoice",
            label: "Jak často jste v posledním měsíci byl/a rozrušen/a něčím neočekávaným?",
            inputId: "pssQ0Input",
            answers: [
                {
                    id: "pss0mch0",
                    label: "Nikdy",
                    value: 0,
                    checked: false
                },
                {
                    id: "pss0mch1",
                    label: "Téměř nikdy",
                    value: 1,
                    checked: false
                },
                {
                    id: "pss0mch2",
                    label: "Občas",
                    value: 2,
                    checked: false
                },
                {
                    id: "pss0mch3",
                    label: "Poměrně často",
                    value: 3,
                    checked: false
                },
                {
                    id: "pss0mch4",
                    label: "Velmi často",
                    value: 4,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 300
            },
        },
        q2: {
            questionType: "multipleChoice",
            label: "Jak často jste v posdlením měsíci měl/a pocit, že nemáte kontrolu nad důležitými věcmi ve svém životě?",
            inputId: "pssQ1Input",
            answers: [
                {
                    id: "pss1mch0",
                    label: "Nikdy",
                    value: 0,
                    checked: false
                },
                {
                    id: "pss1mch1",
                    label: "Téměř nikdy",
                    value: 1,
                    checked: false
                },
                {
                    id: "pss1mch2",
                    label: "Občas",
                    value: 2,
                    checked: false
                },
                {
                    id: "pss1mch3",
                    label: "Poměrně často",
                    value: 3,
                    checked: false
                },
                {
                    id: "pss1mch4",
                    label: "Velmi často",
                    value: 4,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 301
            },
        },
        q3: {
            questionType: "multipleChoice",
            label: "Jak často jste se v posledním měsíci cítil/a nervózní a ve stresu?",
            inputId: "pssQ2Input",
            answers: [
                {
                    id: "pss2mch0",
                    label: "Nikdy",
                    value: 0,
                    checked: false
                },
                {
                    id: "pss2mch1",
                    label: "Téměř nikdy",
                    value: 1,
                    checked: false
                },
                {
                    id: "pss2mch2",
                    label: "Občas",
                    value: 2,
                    checked: false
                },
                {
                    id: "pss2mch3",
                    label: "Poměrně často",
                    value: 3,
                    checked: false
                },
                {
                    id: "pss2mch4",
                    label: "Velmi často",
                    value: 4,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 302
            },
        },
        q4: {
            questionType: "multipleChoice",
            label: "Jak často jste v posledním měsíci věřil/a, že dokážete sebejistě zvládat své osobní problémy?",
            inputId: "pssQ3Input",
            answers: [
                {
                    id: "pss3mch0",
                    label: "Nikdy",
                    value: 4,
                    checked: false
                },
                {
                    id: "pss3mch1",
                    label: "Téměř nikdy",
                    value: 3,
                    checked: false
                },
                {
                    id: "pss3mch2",
                    label: "Občas",
                    value: 2,
                    checked: false
                },
                {
                    id: "pss3mch3",
                    label: "Poměrně často",
                    value: 1,
                    checked: false
                },
                {
                    id: "pss3mch4",
                    label: "Velmi často",
                    value: 0,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 303
            },
        },
        q5: {
            questionType: "multipleChoice",
            label: "Jak často Vam v posledním měsíci přišlo, že jdou věci podle plánu?",
            inputId: "pssQ4Input",
            answers: [
                {
                    id: "pss4mch0",
                    label: "Nikdy",
                    value: 4,
                    checked: false
                },
                {
                    id: "pss4mch1",
                    label: "Téměř nikdy",
                    value: 3,
                    checked: false
                },
                {
                    id: "pss4mch2",
                    label: "Občas",
                    value: 2,
                    checked: false
                },
                {
                    id: "pss4mch3",
                    label: "Poměrně často",
                    value: 1,
                    checked: false
                },
                {
                    id: "pss4mch4",
                    label: "Velmi často",
                    value: 0,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 304
            },
        },
        q6: {
            questionType: "multipleChoice",
            label: "Jak často jste v posledním měsíci zjistil/a, že nezvládáte všechny věci, které musíte udělat?",
            inputId: "pssQ5Input",
            answers: [
                {
                    id: "pss5mch0",
                    label: "Nikdy",
                    value: 0,
                    checked: false
                },
                {
                    id: "pss5mch1",
                    label: "Téměř nikdy",
                    value: 1,
                    checked: false
                },
                {
                    id: "pss5mch2",
                    label: "Občas",
                    value: 2,
                    checked: false
                },
                {
                    id: "pss5mch3",
                    label: "Poměrně často",
                    value: 3,
                    checked: false
                },
                {
                    id: "pss5mch4",
                    label: "Velmi často",
                    value: 4,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 305
            },
        },
        q7: {
            questionType: "multipleChoice",
            label: "Jak často jste v posledním měsíci cítil/a, že dokážete kontrolovat nepříjemné situace ve svém životě?",
            inputId: "pssQ6Input",
            answers: [
                {
                    id: "pss6mch0",
                    label: "Nikdy",
                    value: 4,
                    checked: false
                },
                {
                    id: "pss6mch1",
                    label: "Téměř nikdy",
                    value: 3,
                    checked: false
                },
                {
                    id: "pss6mch2",
                    label: "Občas",
                    value: 2,
                    checked: false
                },
                {
                    id: "pss6mch3",
                    label: "Poměrně často",
                    value: 1,
                    checked: false
                },
                {
                    id: "pss6mch4",
                    label: "Velmi často",
                    value: 0,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 306
            },
        },
        q8: {
            questionType: "multipleChoice",
            label: "Jak často jste v posledním měsíci cítil/a, že máte věci pod kontrolou?",
            inputId: "pssQ7Input",
            answers: [
                {
                    id: "pss7mch0",
                    label: "Nikdy",
                    value: 4,
                    checked: false
                },
                {
                    id: "pss7mch1",
                    label: "Téměř nikdy",
                    value: 3,
                    checked: false
                },
                {
                    id: "pss7mch2",
                    label: "Občas",
                    value: 2,
                    checked: false
                },
                {
                    id: "pss7mch3",
                    label: "Poměrně často",
                    value: 1,
                    checked: false
                },
                {
                    id: "pss7mch4",
                    label: "Velmi často",
                    value: 0,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 307
            },
        },
        q9: {
            questionType: "multipleChoice",
            label: "Jak často jste byl/a v posledním měsíci rozzlobený/á kvůli věcem, které jste nemohl/a ovlivnit?",
            inputId: "pssQ8Input",
            answers: [
                {
                    id: "pss8mch0",
                    label: "Nikdy",
                    value: 0,
                    checked: false
                },
                {
                    id: "pss8mch1",
                    label: "Téměř nikdy",
                    value: 1,
                    checked: false
                },
                {
                    id: "pss8mch2",
                    label: "Občas",
                    value: 2,
                    checked: false
                },
                {
                    id: "pss8mch3",
                    label: "Poměrně často",
                    value: 3,
                    checked: false
                },
                {
                    id: "pss8mch4",
                    label: "Velmi často",
                    value: 4,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 308
            },
        },
        q10: {
            questionType: "multipleChoice",
            label: "Jak často jste v posledním měsíci cítil/a, že se potíže hromadí tak moc, že je nedokážete zvládnout?",
            inputId: "pssQ9Input",
            answers: [
                {
                    id: "pss9mch0",
                    label: "Nikdy",
                    value: 0,
                    checked: false
                },
                {
                    id: "pss9mch1",
                    label: "Téměř nikdy",
                    value: 1,
                    checked: false
                },
                {
                    id: "pss9mch2",
                    label: "Občas",
                    value: 2,
                    checked: false
                },
                {
                    id: "pss9mch3",
                    label: "Poměrně často",
                    value: 3,
                    checked: false
                },
                {
                    id: "pss9mch4",
                    label: "Velmi často",
                    value: 4,
                    checked: false
                },
            ],
            answerLabel: "",
            answer: "",
            question: {
                id: 309
            },
        },
    }
}


const dzs = {
    dzs:
        {
            healthQ0: {
                questionType: "multipleChoice",
                label: "Se svým tělesným zdravotním stavem jsem...",
                inputId: "dzshealthQ0",
                answers: [
                    {
                        id: "dzshealthQ0mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshealthQ0mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshealthQ0mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshealthQ0mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshealthQ0mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshealthQ0mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshealthQ0mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 200
                },
            },
            healthQ1: {
                questionType: "multipleChoice",
                label: "Se svou duševní kondicí jsem...",
                inputId: "dzshealthQ1",
                answers: [
                    {
                        id: "dzshealthQ1mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshealthQ1mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshealthQ1mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshealthQ1mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshealthQ1mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshealthQ1mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshealthQ1mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 201
                },
            },
            healthQ2: {
                questionType: "multipleChoice",
                label: "Se svou tělesnou kondicí jsem...",
                inputId: "dzshealthQ2",
                answers: [
                    {
                        id: "dzshealthQ2mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshealthQ2mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshealthQ2mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshealthQ2mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshealthQ2mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshealthQ2mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshealthQ2mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 202
                },
            },
            healthQ3: {
                questionType: "multipleChoice",
                label: "Se svou duševní výkonností jsem...",
                inputId: "dzshealthQ3",
                answers: [
                    {
                        id: "dzshealthQ3mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshealthQ3mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshealthQ3mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshealthQ3mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshealthQ3mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshealthQ3mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshealthQ3mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 203
                },
            },
            healthQ4: {
                questionType: "multipleChoice",
                label: "Se svou obranyschopností proti nemoci jsem...",
                inputId: "dzshealthQ4",
                answers: [
                    {
                        id: "dzshealthQ4mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshealthQ4mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshealthQ4mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshealthQ4mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshealthQ4mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshealthQ4mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshealthQ4mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 204
                },
            },
            healthQ5: {
                questionType: "multipleChoice",
                label: "Když myslím na to, jak často mám bolesti, jsem...",
                inputId: "dzshealthQ5",
                answers: [
                    {
                        id: "dzshealthQ5mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshealthQ5mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshealthQ5mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshealthQ5mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshealthQ5mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshealthQ5mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshealthQ5mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 205
                },
            },
            healthQ6: {
                questionType: "multipleChoice",
                label: "Když myslím na to, jak často jsem až dosud byl(a) nemocný(á), jsem...",
                inputId: "dzshealthQ6",
                answers: [
                    {
                        id: "dzshealthQ6mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshealthQ6mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshealthQ6mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshealthQ6mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshealthQ6mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshealthQ6mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshealthQ6mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 206
                },
            },
            workQ0: {
                questionType: "multipleChoice",
                label: "Se svým postavením na pracovišti jsem...",
                inputId: "dzsworkQ0",
                answers: [
                    {
                        id: "dzsworkQ0mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsworkQ0mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsworkQ0mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsworkQ0mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsworkQ0mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsworkQ0mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsworkQ0mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 207
                },
            },
            workQ1: {
                questionType: "multipleChoice",
                label: "Když myslím na to, jak jistá je moje budoucnost v zaměstnání, jsem...",
                inputId: "dzsworkQ1",
                answers: [
                    {
                        id: "dzsworkQ1mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsworkQ1mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsworkQ1mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsworkQ1mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsworkQ1mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsworkQ1mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsworkQ1mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 208
                },
            },
            workQ2: {
                questionType: "multipleChoice",
                label: "S úspěchy, které mám v zaměstnání, jsem...",
                inputId: "dzsworkQ2",
                answers: [
                    {
                        id: "dzsworkQ2mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsworkQ2mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsworkQ2mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsworkQ2mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsworkQ2mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsworkQ2mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsworkQ2mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 209
                },
            },
            workQ3: {
                questionType: "multipleChoice",
                label: "S možnostmi postupu, které mám v zaměstnání, jsem...",
                inputId: "dzsworkQ3",
                answers: [
                    {
                        id: "dzsworkQ3mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsworkQ3mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsworkQ3mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsworkQ3mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsworkQ3mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsworkQ3mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsworkQ3mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 210
                },
            },
            workQ4: {
                questionType: "multipleChoice",
                label: "S atmosférou na pracovišti jsem...",
                inputId: "dzsworkQ4",
                answers: [
                    {
                        id: "dzsworkQ4mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsworkQ4mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsworkQ4mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsworkQ4mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsworkQ4mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsworkQ4mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsworkQ4mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 211
                },
            },
            workQ5: {
                questionType: "multipleChoice",
                label: "Co se týká mých pracovních povinností a zátěže, jsem...",
                inputId: "dzsworkQ5",
                answers: [
                    {
                        id: "dzsworkQ5mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsworkQ5mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsworkQ5mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsworkQ5mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsworkQ5mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsworkQ5mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsworkQ5mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 212
                },
            },
            workQ6: {
                questionType: "multipleChoice",
                label: "S pestrostí, kterou mi nabízí mé zaměstnání, jsem...",
                inputId: "dzsworkQ6",
                answers: [
                    {
                        id: "dzsworkQ6mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsworkQ6mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsworkQ6mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsworkQ6mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsworkQ6mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsworkQ6mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsworkQ6mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 213
                },
            },
            financesQ0: {
                questionType: "multipleChoice",
                label: "Se svým příjmem/platem jsem...",
                inputId: "dzsfinancesQ0",
                answers: [
                    {
                        id: "dzsfinancesQ0mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ0mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ0mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ0mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ0mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ0mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ0mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 214
                },
            },
            financesQ1: {
                questionType: "multipleChoice",
                label: "S tím, co vlastním, jsem...",
                inputId: "dzsfinancesQ1",
                answers: [
                    {
                        id: "dzsfinancesQ1mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ1mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ1mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ1mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ1mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ1mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ1mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 215
                },
            },
            financesQ2: {
                questionType: "multipleChoice",
                label: "Se svým životním standardem jsem...",
                inputId: "dzsfinancesQ2",
                answers: [
                    {
                        id: "dzsfinancesQ2mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ2mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ2mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ2mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ2mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ2mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ2mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 216
                },
            },
            financesQ3: {
                questionType: "multipleChoice",
                label: "S hmotným zajištěním své existence jsem...",
                inputId: "dzsfinancesQ3",
                answers: [
                    {
                        id: "dzsfinancesQ3mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ3mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ3mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ3mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ3mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ3mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ3mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 217
                },
            },
            financesQ4: {
                questionType: "multipleChoice",
                label: "Se svými budoucími možnostmi výdělku jsem...",
                inputId: "dzsfinancesQ4",
                answers: [
                    {
                        id: "dzsfinancesQ4mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ4mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ4mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ4mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ4mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ4mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ4mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 218
                },
            },
            financesQ5: {
                questionType: "multipleChoice",
                label: "S možnostmi, které mohu vzhledem ke své finanční situaci nabídnout své rodině jsem...",
                inputId: "dzsfinancesQ5",
                answers: [
                    {
                        id: "dzsfinancesQ5mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ5mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ5mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ5mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ5mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ5mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ5mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 219
                },
            },
            financesQ6: {
                questionType: "multipleChoice",
                label: "Se svým budoucím očekávaným (finančním) zajištěním ve stáří jsem...",
                inputId: "dzsfinancesQ6",
                answers: [
                    {
                        id: "dzsfinancesQ6mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ6mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ6mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ6mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ6mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ6mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfinancesQ6mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 220
                },
            },
            freeTimeQ0: {
                questionType: "multipleChoice",
                label: "S délkou své každoroční dovolené jsem...",
                inputId: "dzsfreeTimeQ0",
                answers: [
                    {
                        id: "dzsfreeTimeQ0mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ0mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ0mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ0mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ0mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ0mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ0mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 221
                },
            },
            freeTimeQ1: {
                questionType: "multipleChoice",
                label: "S množstvím svého volného času po práci a o víkendech jsem...",
                inputId: "dzsfreeTimeQ1",
                answers: [
                    {
                        id: "dzsfreeTimeQ1mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ1mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ1mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ1mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ1mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ1mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ1mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 222
                },
            },
            freeTimeQ2: {
                questionType: "multipleChoice",
                label: "S kvalitou odpočinku, který mi přináší dovolená, jsem...",
                inputId: "dzsfreeTimeQ2",
                answers: [
                    {
                        id: "dzsfreeTimeQ2mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ2mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ2mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ2mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ2mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ2mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ2mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 223
                },
            },
            freeTimeQ3: {
                questionType: "multipleChoice",
                label: "S kvalitou odpočinku, který mi přináší volný čas po práci a víkendy, jsem...",
                inputId: "dzsfreeTimeQ3",
                answers: [
                    {
                        id: "dzsfreeTimeQ3mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ3mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ3mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ3mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ3mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ3mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ3mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 224
                },
            },
            freeTimeQ4: {
                questionType: "multipleChoice",
                label: "S množstvím času, které mám k dispozici pro své koníčky, jsem...",
                inputId: "dzsfreeTimeQ4",
                answers: [
                    {
                        id: "dzsfreeTimeQ4mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ4mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ4mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ4mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ4mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ4mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ4mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 225
                },
            },
            freeTimeQ5: {
                questionType: "multipleChoice",
                label: "S časem, který mohu věnovat blízkým osobám jsem...",
                inputId: "dzsfreeTimeQ5",
                answers: [
                    {
                        id: "dzsfreeTimeQ5mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ5mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ5mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ5mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ5mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ5mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ5mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 226
                },
            },
            freeTimeQ6: {
                questionType: "multipleChoice",
                label: "S pestrostí svého volného času jsem...",
                inputId: "dzsfreeTimeQ6",
                answers: [
                    {
                        id: "dzsfreeTimeQ6mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ6mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ6mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ6mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ6mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ6mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfreeTimeQ6mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 227
                },
            },
            hasPartner: {
                questionType: "dzsYesNoSkip",
                label: "Máte v současné době stálého partnera/partnerku?",
                inputId: "dzsDoYouHaveAPartner",
                additionalDescription: "Pokud zadáte \"Ne\", bude přeskočeno následujících 7 otázek.",
                answerLabel: "",
                answer: "",
                answers: [
                    {
                        id: "dzshasPartnerYes",
                        label: "Ano",
                        value: true,
                        checked: false
                    },
                    {
                        id: "dzsHasPartnerNo",
                        label: "Ne",
                        value: false,
                        checked: false
                    }
                ],
                question: {
                    id: 290
                },
            },
            partnershipQ0: {
                questionType: "multipleChoice",
                label: "S požadavky, které na mne klade mé manželství/partnerství, jsem...",
                inputId: "dzspartnershipQ0",
                answers: [
                    {
                        id: "dzspartnershipQ0mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ0mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ0mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ0mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ0mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ0mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ0mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 228
                },
            },
            partnershipQ1: {
                questionType: "multipleChoice",
                label: "S našimi společnými aktivitami jsem...",
                inputId: "dzspartnershipQ1",
                answers: [
                    {
                        id: "dzspartnershipQ1mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ1mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ1mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ1mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ1mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ1mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ1mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 229
                },
            },
            partnershipQ2: {
                questionType: "multipleChoice",
                label: "S upřímností a otevřeností svého partnera/partnerky jsem...",
                inputId: "dzspartnershipQ2",
                answers: [
                    {
                        id: "dzspartnershipQ2mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ2mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ2mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ2mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ2mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ2mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ2mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 230
                },
            },
            partnershipQ3: {
                questionType: "multipleChoice",
                label: "S pochopením, která má pro mne můj partner/partnerka, jsem..",
                inputId: "dzspartnershipQ3",
                answers: [
                    {
                        id: "dzspartnershipQ3mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ3mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ3mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ3mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ3mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ3mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ3mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 231
                },
            },
            partnershipQ4: {
                questionType: "multipleChoice",
                label: "S něžností a náklonností, kterou mi můj partner/partnerka projevuje jsem...",
                inputId: "dzspartnershipQ4",
                answers: [
                    {
                        id: "dzspartnershipQ4mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ4mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ4mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ4mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ4mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ4mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ4mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 232
                },
            },
            partnershipQ5: {
                questionType: "multipleChoice",
                label: "S bezpečím, které mi poskytne můj partner/partnerka, jsem...",
                inputId: "dzspartnershipQ5",
                answers: [
                    {
                        id: "dzspartnershipQ5mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ5mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ5mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ5mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ5mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ5mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ5mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 233
                },
            },
            partnershipQ6: {
                questionType: "multipleChoice",
                label: "S ochotou pomoci, kterou mi projevuje můj partner/partnerka, jsem...",
                inputId: "dzspartnershipQ6",
                answers: [
                    {
                        id: "dzspartnershipQ6mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ6mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ6mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ6mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ6mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ6mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspartnershipQ6mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 234
                },
            },
            hasKids: {
                questionType: "dzsYesNoSkip",
                label: "Máte vlastní děti?",
                inputId: "dzsDoYouHaveKids",
                answerLabel: "",
                answer: "",
                additionalDescription: "Pokud zadáte \"Ne\", bude přeskočeno následujících 7 otázek.",
                answers: [
                    {
                        id: "dzshasKidsYes",
                        label: "Ano",
                        value: true,
                        checked: false
                    },
                    {
                        id: "dzsHasKidsNo",
                        label: "Ne",
                        value: false,
                        checked: false
                    }
                ],
                question: {
                    id: 291
                },
            },
            childrenQ0: {
                questionType: "multipleChoice",
                label: "když myslím na to, jak s dětmi vzájemně vycházíme, jsem...",
                inputId: "dzschildrenQ0",
                answers: [
                    {
                        id: "dzschildrenQ0mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ0mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ0mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ0mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ0mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ0mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ0mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 235
                },
            },
            childrenQ1: {
                questionType: "multipleChoice",
                label: "Když myslím na úspěchy svých dětí ve škole a zaměstnání, jsem...",
                inputId: "dzschildrenQ1",
                answers: [
                    {
                        id: "dzschildrenQ1mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ1mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ1mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ1mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ1mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ1mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ1mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 236
                },
            },
            childrenQ2: {
                questionType: "multipleChoice",
                label: "Když myslím na to, kolik radosti mám ze svých dětí, jsem...",
                inputId: "dzschildrenQ2",
                answers: [
                    {
                        id: "dzschildrenQ2mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ2mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ2mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ2mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ2mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ2mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ2mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 237
                },
            },
            childrenQ3: {
                questionType: "multipleChoice",
                label: "Když myslím na námahu a výdaje, které mě mé děti stály, jsem...",
                inputId: "dzschildrenQ3",
                answers: [
                    {
                        id: "dzschildrenQ3mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ3mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ3mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ3mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ3mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ3mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ3mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 238
                },
            },
            childrenQ4: {
                questionType: "multipleChoice",
                label: "S vlivem, který mám na své děti, jsem...",
                inputId: "dzschildrenQ4",
                answers: [
                    {
                        id: "dzschildrenQ4mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ4mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ4mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ4mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ4mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ4mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ4mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 239
                },
            },
            childrenQ5: {
                questionType: "multipleChoice",
                label: "S uznáním, kterého se mi od mých dětí dostává jsem...",
                inputId: "dzschildrenQ5",
                answers: [
                    {
                        id: "dzschildrenQ5mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ5mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ5mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ5mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ5mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ5mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ5mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 240
                },
            },
            childrenQ6: {
                questionType: "multipleChoice",
                label: "S našimi společnými aktivitami jsem...",
                inputId: "dzschildrenQ6",
                answers: [
                    {
                        id: "dzschildrenQ6mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ6mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ6mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ6mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ6mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ6mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzschildrenQ6mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 241
                },
            },
            personalityQ0: {
                questionType: "multipleChoice",
                label: "Se svými schopnostmi a dovednostmi jsem...",
                inputId: "dzspersonalityQ0",
                answers: [
                    {
                        id: "dzspersonalityQ0mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ0mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ0mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ0mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ0mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ0mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ0mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 242
                },
            },
            personalityQ1: {
                questionType: "multipleChoice",
                label: "Se způsobem, jak jsem až doposud žil, jsem...",
                inputId: "dzspersonalityQ1",
                answers: [
                    {
                        id: "dzspersonalityQ1mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ1mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ1mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ1mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ1mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ1mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ1mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 243
                },
            },
            personalityQ2: {
                questionType: "multipleChoice",
                label: "Se svým vnějším vzhledem jsem...",
                inputId: "dzspersonalityQ2",
                answers: [
                    {
                        id: "dzspersonalityQ2mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ2mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ2mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ2mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ2mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ2mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ2mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 244
                },
            },
            personalityQ3: {
                questionType: "multipleChoice",
                label: "Se svým sebevědomím a sebejistotou jsem...",
                inputId: "dzspersonalityQ3",
                answers: [
                    {
                        id: "dzspersonalityQ3mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ3mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ3mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ3mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ3mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ3mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ3mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 245
                },
            },
            personalityQ4: {
                questionType: "multipleChoice",
                label: "Se svým charakterem (povahou) jsem...",
                inputId: "dzspersonalityQ4",
                answers: [
                    {
                        id: "dzspersonalityQ4mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ4mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ4mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ4mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ4mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ4mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ4mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 246
                },
            },
            personalityQ5: {
                questionType: "multipleChoice",
                label: "Se svou vitalitou (tzn. s radostí ze života a životní energií) jsem...",
                inputId: "dzspersonalityQ5",
                answers: [
                    {
                        id: "dzspersonalityQ5mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ5mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ5mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ5mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ5mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ5mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ5mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 247
                },
            },
            personalityQ6: {
                questionType: "multipleChoice",
                label: "Když myslím na to, jak vycházím s ostatními lidmi, jsem...",
                inputId: "dzspersonalityQ6",
                answers: [
                    {
                        id: "dzspersonalityQ6mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ6mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ6mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ6mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ6mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ6mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzspersonalityQ6mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 248
                },
            },
            sexualityQ0: {
                questionType: "multipleChoice",
                label: "Se svou tělesnou přitažlivostí jsem...",
                inputId: "dzssexualityQ0",
                answers: [
                    {
                        id: "dzssexualityQ0mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ0mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ0mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ0mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ0mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ0mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ0mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 249
                },
            },
            sexualityQ1: {
                questionType: "multipleChoice",
                label: "Se svou sexuální výkonností jsem...",
                inputId: "dzssexualityQ1",
                answers: [
                    {
                        id: "dzssexualityQ1mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ1mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ1mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ1mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ1mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ1mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ1mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 250
                },
            },
            sexualityQ2: {
                questionType: "multipleChoice",
                label: "S častostí svých sexuálních kontaktů jsem...",
                inputId: "dzssexualityQ2",
                answers: [
                    {
                        id: "dzssexualityQ2mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ2mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ2mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ2mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ2mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ2mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ2mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 251
                },
            },
            sexualityQ3: {
                questionType: "multipleChoice",
                label: "S tím, jak často se mi můj partner/má partnerka tělesně věnuje (dotýká se mne, hladí mne), jsem...",
                inputId: "dzssexualityQ3",
                answers: [
                    {
                        id: "dzssexualityQ3mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ3mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ3mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ3mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ3mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ3mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ3mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 252
                },
            },
            sexualityQ4: {
                questionType: "multipleChoice",
                label: "Se svými sexuálními reakcemi jsem...",
                inputId: "dzssexualityQ4",
                answers: [
                    {
                        id: "dzssexualityQ4mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ4mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ4mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ4mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ4mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ4mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ4mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 253
                },
            },
            sexualityQ5: {
                questionType: "multipleChoice",
                label: "Když myslím na to, jak otevřeně mohu mluvit o sexuální oblasti, jsem...",
                inputId: "dzssexualityQ5",
                answers: [
                    {
                        id: "dzssexualityQ5mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ5mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ5mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ5mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ5mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ5mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ5mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 254
                },
            },
            sexualityQ6: {
                questionType: "multipleChoice",
                label: "Když myslím na to, jak se k sobě s partnerem hodíme, jsem...",
                inputId: "dzssexualityQ6",
                answers: [
                    {
                        id: "dzssexualityQ6mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ6mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ6mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ6mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ6mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ6mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzssexualityQ6mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 255
                },
            },
            friendsQ0: {
                questionType: "multipleChoice",
                label: "Když myslím na okruh svých přátel a známých, jsem...",
                inputId: "dzsfriendsQ0",
                answers: [
                    {
                        id: "dzsfriendsQ0mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ0mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ0mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ0mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ0mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ0mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ0mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 256
                },
            },
            friendsQ1: {
                questionType: "multipleChoice",
                label: "S kontakty se svými příbuznými jsem...",
                inputId: "dzsfriendsQ1",
                answers: [
                    {
                        id: "dzsfriendsQ1mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ1mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ1mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ1mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ1mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ1mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ1mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 257
                },
            },
            friendsQ2: {
                questionType: "multipleChoice",
                label: "S kontaktem se svými sousedy jsem...",
                inputId: "dzsfriendsQ2",
                answers: [
                    {
                        id: "dzsfriendsQ2mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ2mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ2mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ2mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ2mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ2mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ2mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 258
                },
            },
            friendsQ3: {
                questionType: "multipleChoice",
                label: "S pomocí a podporou, kterou mi poskytují přátelé a známí, jsem...",
                inputId: "dzsfriendsQ3",
                answers: [
                    {
                        id: "dzsfriendsQ3mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ3mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ3mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ3mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ3mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ3mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ3mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 259
                },
            },
            friendsQ4: {
                questionType: "multipleChoice",
                label: "Se svým veřejnými a spolkovými aktivitami jsem...",
                inputId: "dzsfriendsQ4",
                answers: [
                    {
                        id: "dzsfriendsQ4mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ4mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ4mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ4mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ4mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ4mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ4mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 260
                },
            },
            friendsQ5: {
                questionType: "multipleChoice",
                label: "Se svou společenskou angažovaností jsem...",
                inputId: "dzsfriendsQ5",
                answers: [
                    {
                        id: "dzsfriendsQ5mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ5mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ5mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ5mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ5mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ5mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ5mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 261
                },
            },
            friendsQ6: {
                questionType: "multipleChoice",
                label: "Když myslím na to, jak často se dostanu mezi lidi, jsem...",
                inputId: "dzsfriendsQ6",
                answers: [
                    {
                        id: "dzsfriendsQ6mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ6mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ6mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ6mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ6mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ6mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzsfriendsQ6mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 262
                },
            },
            habitationQ0: {
                questionType: "multipleChoice",
                label: "S velikostí svého bytu jsem...",
                inputId: "dzshabitationQ0",
                answers: [
                    {
                        id: "dzshabitationQ0mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ0mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ0mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ0mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ0mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ0mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ0mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 263
                },
            },
            habitationQ1: {
                questionType: "multipleChoice",
                label: "Se stavem svého bytu jsem...",
                inputId: "dzshabitationQ1",
                answers: [
                    {
                        id: "dzshabitationQ1mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ1mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ1mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ1mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ1mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ1mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ1mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 264
                },
            },
            habitationQ2: {
                questionType: "multipleChoice",
                label: "S výdaji za svůj byt (nájem, příp. splátky) jsem...",
                inputId: "dzshabitationQ2",
                answers: [
                    {
                        id: "dzshabitationQ2mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ2mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ2mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ2mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ2mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ2mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ2mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 265
                },
            },
            habitationQ3: {
                questionType: "multipleChoice",
                label: "S polohou svého bytu jsem...",
                inputId: "dzshabitationQ3",
                answers: [
                    {
                        id: "dzshabitationQ3mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ3mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ3mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ3mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ3mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ3mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ3mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 266
                },
            },
            habitationQ4: {
                questionType: "multipleChoice",
                label: "S dosažitelností dopravních prostředků jsem...",
                inputId: "dzshabitationQ4",
                answers: [
                    {
                        id: "dzshabitationQ4mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ4mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ4mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ4mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ4mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ4mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ4mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 267
                },
            },
            habitationQ5: {
                questionType: "multipleChoice",
                label: "Když myslím na míru zátěže hlukem ve vlastním bytě...",
                inputId: "dzshabitationQ5",
                answers: [
                    {
                        id: "dzshabitationQ5mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ5mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ5mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ5mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ5mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ5mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ5mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 268
                },
            },
            habitationQ6: {
                questionType: "multipleChoice",
                label: "Se standardem svého bytu jsem...",
                inputId: "dzshabitationQ6",
                answers: [
                    {
                        id: "dzshabitationQ6mch1",
                        label: "velmi nespokojen(a)",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ6mch2",
                        label: "nespokojen(a)",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ6mch3",
                        label: "spíše nespokojen(a)",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ6mch4",
                        label: "ani spokojen(a) ani nespokojen(a)",
                        value: 4,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ6mch5",
                        label: "spíše spokojen(a)",
                        value: 5,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ6mch6",
                        label: "spokojen(a)",
                        value: 6,
                        checked: false
                    },
                    {
                        id: "dzshabitationQ6mch7",
                        label: "velmi spokojen(a)",
                        value: 7,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                question: {
                    id: 269
                },
            },
        }

}
const demo = {
    demo: {
        age: {
            questionType: "wholeNumber",
            label: "Zadejte prosím svůj věk.",
            description: "Zadejte celé číslo znázorňující Váš věk.",
            placeholder: "Např. 25",
            inputId: "demoAge",
            answer: "",
            question: {
                id: 501
            },
        },
        gender: {
            questionType: "multipleChoice",
            label: "Jaké je vaše pohlaví?",
            inputId: "demoGender",
            answerLabel: "",
            answer: "",
            question: {
                id: 502
            },
            answers: [
                {
                    id: "demoGenderMan",
                    label: "Muž",
                    value: 0,
                    checked: false
                },
                {
                    id: "demoGenderWoman",
                    label: "Žena",
                    value: 0,
                    checked: false
                },
                {
                    id: "demoGenderOther",
                    label: "Jiné",
                    value: 0,
                    checked: false
                },
            ]
        },
        profession: {
            questionType: "twoChoiceWithText",
            label: "Jste převážně student, nebo převážně pracující?",
            inputId: "identifyingText",
            answers: [
                {
                    id: "demoProfessionStudent",
                    label: "Student",
                    value: true,
                    checked: false
                },
                {
                    id: "demoProfessionWorking",
                    label: "Pracující",
                    value: false,
                    checked: false
                },
            ],
            optionOneUppercase: false,
            optionOneLabel: "Napišťe ročník, obor a školu.",
            optionOneLabelHint: "Zadejte ročník, obor a školu.",
            optionOnePlaceholder: "Např. 2., medicína, Univerzita Karlova",
            optionOneRegex: ".+",
            optionOneInvalidFeedback: "Zadejte neprázdný vstup",
            optionTwoLabel: "Napišťe profesi.",
            optionTwoLabelHint: "Zadejte svou profesi.",
            optionTwoPlaceholder: "Např. lékař.",
            optionTwoInvalidFeedback: "Zadejte neprázdný vstup.",
            optionTwoRegex: ".+",
            optionOneInput: "",
            optionTwoInput: "",
            textValue: "",
            isOptionOne: null,
            question: {
                id: 503
            },
        },
        school: {
            questionType: "multipleChoice",
            label: "Jaké je vaše nejvyšší dosažené vzdělání?",
            inputId: "demoSchool",
            answerLabel: "",
            answer: "",
            answers: [
                {
                    id: "demoSchoolElementary",
                    label: "Základní",
                    value: 0,
                    checked: false
                },
                {
                    id: "demoSchoolHigh",
                    label: "Střední",
                    value: 0,
                    checked: false
                },
                {
                    id: "demoSchoolUni",
                    label: "Vysokoškolské",
                    value: 0,
                    checked: false
                },
            ],
            question: {
                id: 504
            },
        },
        height: {
            questionType: "wholeNumber",
            label: "Zadejte prosím svou výšku v centimentrech.",
            description: "Zadejte celé číslo znázorňující Vaši výšku v centimentrech.",
            placeholder: "Např. 175",
            inputId: "demoHeight",
            answer: "",
            question: {
                id: 505
            },
        },
        weight: {
            questionType: "wholeNumber",
            label: "Zadejte prosím svou váhu v kilogramech.",
            description: "Zadejte celé číslo znázorňující Vaši váhu v kilogramech.",
            placeholder: "Např. 75",
            inputId: "demoWeight",
            answer: "",
            question: {
                id: 506
            },
        },
        maritalStatus: {
            questionType: "multipleChoice",
            label: "Jaký je Váš rodinný stav?",
            inputId: "demoMaritalStatus",
            answerLabel: "",
            answer: "",
            answers: [
                {
                    id: "demoMaritalZenaty",
                    label: "Ženatý/vdaná",
                    value: 0,
                    checked: false
                },
                {
                    id: "demoMaritalSvobodny",
                    label: "Svobodný/á",
                    value: 0,
                    checked: false
                },
                {
                    id: "demoMaritalVdova",
                    label: "Vdovec/vdova",
                    value: 0,
                    checked: false
                },
                {
                    id: "demoMaritalRozvedeny",
                    label: "Rozvedený/á",
                    value: 0,
                    checked: false
                },
            ],
            question: {
                id: 507
            },
        }
    }
}

const id = {
    id: {
        id: {
            questionType: "twoChoiceWithText",
            label: "Jste účastníkem Výzkumu Odolnosti a obdrželi jste výzkumné číslo?",
            inputId: "identifyingText",
            answers: [
                {
                    id: "identifyingHasResearchNumberYes",
                    label: "Ano",
                    value: true,
                    checked: false
                },
                {
                    id: "identifyingHasResearchNumberNo",
                    label: "Ne",
                    value: false,
                    checked: false
                },
            ],
            optionOneUppercase: true,
            optionOneLabel: "Zadejte své výzkumné číslo",
            optionOneLabelHint: "Je ve formátu šešti alfanumerických znaků oddělených podtržítkem. Např. A2C_3PY.",
            optionOnePlaceholder: "Zadejte své výzkumné číslo.",
            optionOneRegex: "[A-Z0-9]{3}_[A-Z0-9]{3}",
            optionOneInvalidFeedback: "Zadaný vstup není ve správném formátu výzkumného čísla.",
            optionTwoLabel: "Identifikujte se alternativním způsobem.",
            optionTwoLabelHint: "Zadejte např. své jméno, nebo email. Pokud si přejete zůstat anonymní, zadejte vymyšlenou přezdívku.",
            optionTwoPlaceholder: "Zadejte alternativní identifiktátor.",
            optionTwoInvalidFeedback: "Zadejte neprázdný vstup.",
            optionTwoRegex: ".+",
            optionOneInput: "",
            optionTwoInput: "",
            textValue: "",
            isOptionOne: null,
        },
    }
}

export function mapQuestionnareCodeToName(code) {
    switch (code) {
        case 'psqi':
            return "PSQI"
        case 'mctq':
            return "MCTQ"
        case 'meq':
            return "MEQ"
        case 'pss':
            return "Škála vnímaného stresu"
        case 'dzs':
            return "Dotazník životní spokojenosti"
        case 'demo':
            return "Demografický dotazník"
        case 'id':
            return "Identifikační část"
        case 'showcase':
            return "Showcase typů vstupů"
        default:
            break;
    }
}

export function getJointQuestions(params) {
    const {error, isArray, valid} = parametersAreValid(params);
    if (valid !== true) {
        return {
            valid: false,
            jointQuestions: null,
            totalNumberOfQuestions: 0,
            error: error
        }
    }

    const {totalNumberOfQuestions, jointQuestions} = getJointQuestionsLul(params, isArray)

    return {
        valid: true,
        jointQuestions: jointQuestions,
        totalNumberOfQuestions: totalNumberOfQuestions,
        error: error
    }
}


function getJointQuestionsLul(params, isArray) {
    let psqiBool = false
    let mctqBool = false
    let meqBool = false
    let pssBool = false
    let dzsBool = false
    let demoBool = false
    let showcaseBool = false
    const res = {}
    Object.assign(res, id)
    if (isArray) {
        for (let i = 0; i < params.length; i++) {
            let e = params[i]
            switch (e) {
                case 'psqi':
                    if (psqiBool) {
                        break;
                    }
                    Object.assign(res, psqi)
                    psqiBool = true
                    break
                case 'mctq':
                    if (mctqBool) {
                        break;
                    }
                    Object.assign(res, mctq)
                    mctqBool = true
                    break
                case 'meq':
                    if (meqBool) {
                        break;
                    }
                    Object.assign(res, meq)
                    meqBool = true
                    break
                case 'pss':
                    if (pssBool) {
                        break;
                    }
                    Object.assign(res, pss)
                    pssBool = true
                    break
                case 'dzs':
                    if (dzsBool) {
                        break;
                    }
                    Object.assign(res, dzs)
                    dzsBool = true
                    break
                case 'demo':
                    if (demoBool) {
                        break;
                    }
                    Object.assign(res, demo)
                    demoBool = true
                    break
                case 'showcase':
                    if (showcaseBool) {
                        break;
                    }
                    Object.assign(res, showcase)
                    showcaseBool = true
                    break
                default:
                    break;
            }
        }
    } else {
        switch (params) {
            case 'psqi':
                if (psqiBool) {
                    break;
                }
                Object.assign(res, psqi)
                psqiBool = true
                break
            case 'mctq':
                if (mctqBool) {
                    break;
                }
                Object.assign(res, mctq)
                mctqBool = true
                break
            case 'meq':
                if (meqBool) {
                    break;
                }
                Object.assign(res, meq)
                meqBool = true
                break
            case 'pss':
                if (pssBool) {
                    break;
                }
                Object.assign(res, pss)
                pssBool = true
                break
            case 'dzs':
                if (dzsBool) {
                    break;
                }
                Object.assign(res, dzs)
                dzsBool = true
                break
            case 'demo':
                if (demoBool) {
                    break;
                }
                Object.assign(res, demo)
                demoBool = true
                break
            case 'showcase':
                if (showcaseBool) {
                    break;
                }
                Object.assign(res, showcase)
                showcaseBool = true
                break
        }
    }
    let totalNumberOfQuestions = 0;
    Object.keys(res).forEach(e => {
        totalNumberOfQuestions += Object.keys(res[e]).length
    })
    return {
        jointQuestions: res,
        totalNumberOfQuestions: totalNumberOfQuestions
    };
}

const qs = ['psqi', 'mctq', 'meq', 'pss', 'dzs', 'demo', 'showcase']

function parametersAreValid(params) {
    let valid = true;
    let isArray = Array.isArray(params)
    let error = null;
    if (params === undefined) {
        return {
            valid: false,
            isArray: isArray,
            error: 'Chybí parametr dotazníku v URL.'
        };
    }
    if (isArray) {
        for (let i = 0; i < params.length; i++) {
            const e = params[i];
            if (!qs.includes(e)) {
                valid = false
                return {
                    valid: false,
                    isArray: isArray,
                    error: 'Dotazník \"' + e + '\" neexistuje.'
                }
            }
        }
    } else {
        if (!qs.includes(params)) {
            return {
                valid: false,
                isArray: isArray,
                error: 'Dotazník ' + params + ' neexistuje.'
            }
        }
    }
    return {
        valid: true,
        isArray: isArray,
        error: error
    };
}