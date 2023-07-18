export function getChronoVsRythmValueText(chronoVsRythm) {

    switch(chronoVsRythm) {
        case "EARLY":
            return "Brzy"
        case "OK":
            return "OK"
        case "LATER":
            return "Později"
        default: 
            console.error("Invalid chronoVsRythm value: " + chronoVsRythm)
            return "Error"
    }
}