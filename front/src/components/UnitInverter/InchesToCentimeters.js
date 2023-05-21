import { useState, useEffect } from 'react';

function InchesToCentimeters() {
    const [amount, setAmount] = useState(0);
    const [inverted, setInvert] = useState(true);
    const onAmountChange = event => {
        setAmount(event.target.value);
    }
    const onInverting = event => {
        onReset();
        setInvert(current => !current);
    }
    const onReset = () => {
        setAmount(0);
    }
        
    return (
        <div>
            <h3>Inches to Centimeters</h3>

            <section className='convert__box'>
                <div className='input-box'>
                    <label htmlFor='inches'>Inches: </label>
                    <input 
                        type='number'
                        id='inches' 
                        value={inverted ? amount : amount / 2.54}
                        onChange={onAmountChange}
                        min={0}
                        disabled={!inverted}
                    />
                </div>
                <div className='input-box'>
                    <label htmlFor='centimeters'>Centimeters: </label>
                    <input 
                        type='number'
                        id='centimeters' 
                        value={inverted ? amount * 2.54 : amount}
                        onChange={onAmountChange}
                        min={0}
                        disabled={inverted}
                    />
                </div>
                <div className='buttons'>
                    <button
                        type='button'
                        onClick={onInverting}
                    >Unit Inverting</button>
                    <button
                        type='button'
                        onClick={onReset}
                    >Reset</button>
                </div>
            </section>

        </div>
    )
}

export default InchesToCentimeters;