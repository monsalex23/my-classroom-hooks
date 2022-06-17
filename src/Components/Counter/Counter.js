function Counter() {
    let quantity = 10;
function upQuantity() {
    quantity = quantity +1;
    document.getElementById("counter-box").innerHTML = quantity;
    console.log(quantity);
}

    return(
        <>
        <h2 id="counter-box">{quantity}</h2>
        <button onClick={upQuantity}>Aumentar</button>
        </>
        
    );
}

export default Counter;