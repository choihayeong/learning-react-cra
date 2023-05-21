import { useState, useEffect } from 'react';
import MinutesToHours from '../../components/UnitInverter/MinutesToHours';
import InchesToCentimeters from '../../components/UnitInverter/InchesToCentimeters';

function UnitConverter() {
    const [index, setIndex] = useState('default');
    const onSelect = event => {
        setIndex(event.target.value);
    }

    return (
        <div>
            <h2>Unit Converter</h2>

            <select value={index} onChange={onSelect}>
                <option value='default'>Select units you want to convert</option>
                <option value='1'>Minutes to Hours</option>
                <option value='2'>Inches to Centimeters</option>
            </select>

            <div className='converter'>
                {index === 'default' ? 'Select Units you want to convert!' : ''}
                {index === '1' ? <MinutesToHours /> : ''}
                {index === '2' ? <InchesToCentimeters /> : ''}
            </div>            
        </div>
    )
}

export default UnitConverter;