importDescription = document.querySelector("#importText");
outputDescription = document.querySelector("#outputDescription")

outputVAT = document.querySelector("#outputVAT");
outputValue = document.querySelector("#outputValue");

labelCalcUp = document.querySelector("#labelCalcUp");
labelCalcDown = document.querySelector("#labelCalcDown");

let ImportType = "netto";

let perc = 19;

// * ==== Deklaration der Auswahlfunktionen welcher Importwert zu Grund gelegt werden soll!

document.getElementById("netto").addEventListener("change", () => {
    importDescription.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro <span id='starRed'>*</span>";
    console.log("Brutto_Netto");
    outputDescription.innerHTML = "Bruttobetrag (Endpreis)";

    ImportType = "netto";
})

document.getElementById("brutto").addEventListener("change", () => {
    importDescription.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro <span id='starRed'>*</span>";
    console.log("Netto_Brutto");
    outputDescription.innerHTML = "Nettobetrag";

    ImportType = "brutto";
})

document.getElementById("perc19").addEventListener("change", () => {
    perc = 19;
})
document.getElementById("perc7").addEventListener("change", () => {
    perc = 7;
})

// ! === Abschluss der AddEventListener Funktionen

const importValue = () => {

    // sicherstellen, dass auf 2 Nachkommestellen gerundet wird!
    let value = document.querySelector("#input").value;

    let VAT = 0;
    let amount = 0;

    switch (ImportType) {
        case "netto":
            VAT = (Number(value) * perc) / 100;
            amount = Number(value) + Number(VAT.toFixed(2));

            outputVAT.innerHTML = VAT.toFixed(2);
            outputValue.innerHTML = amount;
            break;
        case "brutto":
            amount = Number(value) / ((100 + perc) / 100);
            VAT = (amount * perc) / 100;
            // value + VAT.toFixed(2);

            outputVAT.innerHTML = VAT.toFixed(2);
            outputValue.innerHTML = amount.toFixed(2);
            break;
    }
}

function calcVAT() {
    importValue();
}







