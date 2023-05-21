import { useState, useEffect } from 'react';
import { MemorizedButton } from '../../components/Button';

function SampleApiCall() {
    const [count, setCount] = useState(0);
    const addCounts = () => setCount(prev => prev + 1);
    // console.log('call an api');
    console.log('I run all the time');
    useEffect(() => {
        console.log('CALL THE API................');
    }, [])

    return (
        <div>
            <h2>useState</h2>
            <p>Count: {count}</p>
            <MemorizedButton text='Click Me' changeValue={addCounts} />
            {/* <button type='button' onClick={onClick}>Click</button> */}
        </div>
    )
}

export default SampleApiCall;