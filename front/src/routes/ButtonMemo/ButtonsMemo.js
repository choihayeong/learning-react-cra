import { useState } from "react";
import { MemorizedButton } from "../../components/Button";

function ButtonsMemo() {
    const [textValue, setText] = useState('Default');
    const changeText = () => setText('Revert');

    return (
        <div>
            <MemorizedButton text={textValue} changeValue={changeText} />
            <MemorizedButton text={`buy`} fontSize={16} />
        </div>
    )
}

export default ButtonsMemo;