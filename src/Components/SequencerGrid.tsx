import React from "react";
import GridSquare from "./GridSquare";
import '../Styles/SequencerGrid.css'



function SequencerGrid(props: {numRows: number, numColumns: number}) {

    let grid = [];

    for (let i = 0; i < props.numRows; i++) {

        let row = [];

        for (let j = 0; j < props.numColumns; j++) {
            row.push(<GridSquare key={`${i}-${j}`} row={i} column={j} />);
        }

        grid.push(
            <div className="grid-row" key={i}>
                {row}
            </div>
        )

    }

    return (
        <>
            {grid}
        </>
    )

}

export default SequencerGrid
