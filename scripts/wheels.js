import {wheelOptionChosen} from "./transientState.js"

const handleWheelChoice = (event) => {
    if (event.target.id === "wheel") {
        wheelOptionChosen(parseInt(event.target.value))
    }
}


 export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()
    
    document.addEventListener("change", handleWheelChoice)


    let html = ""

    html += '<select id="wheel">'
    html += '<option value="0">Select style</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.style}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}