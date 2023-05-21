import { memo } from "react";
import PropTypes from 'prop-types';

function Button({text, changeValue, fontSize = 18}) {
    console.log(`${text} was rendered`);

    return (
        <button
            type='button'
            onClick={changeValue}
            style={{
                padding: 10,
                fontSize: fontSize
            }}
        >{text}</button>
    )    
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    fontSize: PropTypes.number
}

export const MemorizedButton = memo(Button);