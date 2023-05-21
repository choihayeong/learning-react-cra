import { useState, useEffect } from 'react';

function MinutesToHours() {
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
            <h3>Minutes to Hours</h3>

            <section className='convert__box'>
                <div className='input-box'>
                    <label htmlFor='minutes'>Minutes: </label>
                    <input 
                        type='number'
                        id='minutes' 
                        value={inverted ? amount : amount * 60}
                        onChange={onAmountChange}
                        min={0}
                        disabled={!inverted}
                    />
                </div>
                <div className='input-box'>
                    <label htmlFor='hours'>Hours: </label>
                    <input 
                        type='number'
                        id='hours' 
                        value={inverted ? amount / 60 : amount}
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

export default MinutesToHours;