import { useState, useEffect } from 'react';
import { MemorizedButton } from '../../components/Button';

function Deps() {
    const [count, setCount] = useState(0);
    const onClick = () => setCount(prev => prev + 1);
    const [keyword, setKeyword] = useState('');
    const onChange = event => setKeyword(event.target.value);
    /*  
    console.log('I run all the time');
    useEffect(() => {
        console.log('CALL THE API..............');
    }, []) */
    useEffect(() => {
        // console.log('SEARCH FOR', keyword);
        if (keyword !== '' && keyword.length > 5) {
            console.log('SEARCH FOR', keyword);
        }
    }, [keyword]) // keyword가 변할때마다 실행
    useEffect(() => {
        console.log('I run when counts change');
    }, [count]) // count가 변할때마다 실행
    useEffect(() => {
        console.log('I run when counts and keyword both change');
    }, [keyword, count]) // keyword 또는 count 둘 중 하나만 변해도 실행

    return (
        <div>
            <h2>What is Deps?</h2>
            
            <input 
                type='text'
                value={keyword}
                onChange={onChange}
                placeholder='SEARCH'
            />
            <hr />
            <p>Counts: {count}</p>
            <MemorizedButton text='Click Me' changeValue={onClick} />
        </div>
    )
}

export default Deps;