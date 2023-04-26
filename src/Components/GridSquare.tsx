import React, { useContext, useState } from "react";
import '../Styles/GridSquare.css'
import SequencerContext from "./Context/SequencerContext";

function GridSquare(props: {row: number, column: number}) {

    const {setGridSquare} = useContext(SequencerContext);

    const [active, setActive] = useState(false);

    const handleClick  = () => {
        setGridSquare(props.row, props.column, !active);
        setActive(!active);
    }

    return (
        <div className="grid-square" onClick={handleClick}>
            {active ? <div className="active-square"></div> : <></> }
        </div>
    )

}

export default GridSquare