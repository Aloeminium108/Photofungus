import React, { useState } from "react";
import '../Styles/GridSquare.css'

function GridSquare() {

    const [active, setActive] = useState(false);

    const handleClick  = () => {
        setActive(!active);
    }

    return (
        <div className="grid-square" onClick={handleClick}>
            {active ? <div className="active-square"></div> : <></> }
        </div>
    )

}

export default GridSquare