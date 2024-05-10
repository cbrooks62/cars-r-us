import {interiorOptionChosen} from "./transientState.js"

const handleInteriorChoice = (event) => {
    if (event.target.id === "interior") {
        interiorOptionChosen(parseInt(event.target.value))
    }
}


 export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()
    
    document.addEventListener("change", handleInteriorChoice)


    let html = ""

    html += '<select id="interior">'
    html += '<option value="0">Select type</option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}