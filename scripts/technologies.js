import {technologyOptionChosen} from "./transientState.js"

const handleTechChoice = (event) => {
    if (event.target.id === "technology") {
        technologyOptionChosen(parseInt(event.target.value))
    }
}


export const Technologies = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    document.addEventListener("change", handleTechChoice)
    
    let html = ""

    html += '<select id="technology">'
    html += '<option value="0">Select a package</option>'

    const arrayOfOptions = technologies.map( (technologies) => {
            return `<option value="${technologies.id}">${technologies.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}