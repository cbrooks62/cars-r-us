const transientState = {
    "paintId": 0,
    "interiorId": 0,
    "technologyId": 0,
    "wheelId": 0

}

export const paintOptionChosen = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const interiorOptionChosen = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const technologyOptionChosen = (chosenTechnology) => {
    transientState.technologyId= chosenTechnology
    console.log(transientState)
}
export const wheelOptionChosen = (chosenWheel) => {
    transientState.wheelId= chosenWheel
    console.log(transientState)
}

export const customOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)

    }
console.log(postOptions)
    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newCustomOrder")
    document.dispatchEvent(customEvent)

}
