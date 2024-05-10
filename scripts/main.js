import { PaintOptions } from "./paints.js"
import { Technologies } from "./technologies.js"
import { WheelOptions } from "./wheels.js"
import { InteriorOptions } from "./interiors.js"
import {saveOrderPlaced} from "./orders.js"
import { CustomOrders } from "./customOrders.js"

const container = document.querySelector("#container")

const render = async () => {
    const PaintOptionsHTML = await PaintOptions()
    const TechOptionsHTML = await Technologies()
    const WheelOptionsHTML = await WheelOptions()
    const InteriorOptionsHTML = await InteriorOptions()
    const savedOrderHTML = await saveOrderPlaced()
    const customOrdersHTML = await CustomOrders()

    const composedHTML = `
        <h1>Cars 'R Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint Color</h2>
               ${PaintOptionsHTML}
            </section>

            <section class="choices__interior options">
                <h2>Interior</h2>
                ${InteriorOptionsHTML}
            </section>

            <section class="choices__technology options">
                <h2>Technology Packages</h2>
               ${TechOptionsHTML}
            </section>
            
            <section class="choices__wheels options">
                 <h2>Wheels</h2>
                ${WheelOptionsHTML}
            </section>
        </article>

        <article class="order">
               ${savedOrderHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
                ${customOrdersHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

render()
