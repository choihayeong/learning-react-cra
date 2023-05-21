import { useState, useEffect } from "react";

function Welcome() {
    const sayGoodBye = () => console.log('Good Bye :( See ya!');
    const sayHello = () => {
        console.log('Hello :)')
        
        return sayGoodBye; // cleanup function
    }
    useEffect(sayHello, []);

    return (
        <div>Welcome :)</div>
    )
}

export default Welcome;