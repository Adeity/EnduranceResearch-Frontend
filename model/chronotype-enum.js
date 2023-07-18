export const CHRONOTYPE_ENUM = Object.freeze({

    STRONGLY_MORNING: Symbol({title: "Výrazně ranní typ", id: 0 }),
    WEAKLY_MORNING: Symbol({title: "Spíše ranní typ", id: 1 }),
    AMBIVALENT: Symbol({title: "Nevyhraněný typ", id: 2 }),
    WEAKLY_EVENING: Symbol({title: "Spíše večerní typ", id: 3 }),
    STRONGLY_EVENING: Symbol({title: "Výrazně večerní typ", id: 4 })
});

export function getChronotype(chronoString) {

    switch(chronoString) {
        case "STRONGLY_MORNING":
            return CHRONOTYPE_ENUM.STRONGLY_MORNING
        case "WEAKLY_MORNING":
            return CHRONOTYPE_ENUM.WEAKLY_MORNING
        case "AMBIVALENT":
            return CHRONOTYPE_ENUM.AMBIVALENT
        case "WEAKLY_EVENING":
            return CHRONOTYPE_ENUM.WEAKLY_EVENING
        case "STRONGLY_EVENING":
            return CHRONOTYPE_ENUM.STRONGLY_EVENING
    }
}

export function getChronotypeId(chronoString) {

    switch(chronoString) {
        case "STRONGLY_MORNING":
            return 0
        case "WEAKLY_MORNING":
            return 1
        case "AMBIVALENT":
            return 2
        case "WEAKLY_EVENING":
            return 3
        case "STRONGLY_EVENING":
            return 4
    }
}

export function getChronotypeString(id) {

    switch(id) {
        case 0:
            return "STRONGLY_MORNING"
        case 1:
            return "WEAKLY_MORNING"
        case 2:
            return "AMBIVALENT"
        case 3:
            return "WEAKLY_EVENING"
        case 4:
            return "STRONGLY_EVENING"
    }
}


export function getChronotypeTitle(chronoString) {
    switch(chronoString) {
        case "STRONGLY_MORNING":
            return  "Výrazně ranní typ" 
        case "WEAKLY_MORNING":
            return  "Spíše ranní typ" 
        case "AMBIVALENT":
            return  "Nevyhraněný typ" 
        case "WEAKLY_EVENING":
            return  "Spíše večerní typ" 
        case "STRONGLY_EVENING":
            return  "Výrazně večerní typ" 
    }
}
