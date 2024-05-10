import {paintOptionChosen} from "./transientState.js"

const handlePaintChoice = (event) => {
    if (event.target.id === "paint") {
        paintOptionChosen(parseInt(event.target.value))
    }
}


 export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()
    
    document.addEventListener("change", handlePaintChoice)


    let html = ""

    html += '<select id="paint">'
    html += '<option value="0">Select color</option>'

    const arrayOfOptions = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}