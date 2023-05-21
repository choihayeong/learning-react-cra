import { useState } from "react";
import Welcome from "../../components/Welcome";
import { MemorizedButton } from "../../components/Button";

function CleanUp() {
    const [isShowing, setShowing] = useState(false);
    const onClick = () => setShowing(prev => !prev);

    return (
        <div>
            <h2>Clean Up</h2>
            
            {isShowing ? <Welcome /> : ''}
            <MemorizedButton text={isShowing ? 'Hide' : 'Show'} changeValue={onClick} />
        </div>
    )
}

export default CleanUp;