export const CustomOrders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=wheel&_expand=technology");
    const orders = await fetchResponse.json();

    
    let CustomOrdersHTML = orders.map((order) => {
        const orderPrice = order.paint.price + order.interior.price + order.technology.price + order.wheel.price
        
        const totalCustomOrder = orderPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
        
        return `<div>Order #${order.id} cost ${totalCustomOrder}</div>`;
    }

);

    return CustomOrdersHTML.join("")
}