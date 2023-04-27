import React, { useContext, useEffect, useState } from "react";
import '../Styles/GridSquare.css'
import SequencerContext from "./Context/SequencerContext";

function GridSquare(props: {row: number, column: number}) {

    const {grid, setGridSquare} = useContext(SequencerContext);

    const [active, setActive] = useState(false);

    const [size, setSize] = useState(1);
    
    useEffect(() => {
        if (grid[props.row] !== undefined && grid[props.row][props.column] !== undefined) {
            setActive(grid[props.row][props.column]);
        }
    })

    const handleClick  = (e: React.MouseEvent) => {
        e.stopPropagation();
        setGridSquare(props.row, props.column, !active);
        setActive(!active);
        setSize(0);
    }

    const handleDrag = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('dragging');
    }

    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault();
        console.log(e.relatedTarget);
        console.log('dragged into');
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.stopPropagation();
        if (active) {
            setSize(size + 1);
        }
        console.log('drag leave')
    }

    const handleDragStart = (e: React.DragEvent) => {
        e.dataTransfer.setDragImage(new Image(), 0, 0);
        console.log('drag start');
    }

    return (
        <div className="grid-square">
            {
                active ? 
                <div 
                    className="active-square" 
                    onClick={handleClick} 
                    onDrag={handleDrag} 
                    onDragEnter={handleDragEnter} 
                    onDragStart={handleDragStart}
                    draggable={true}
                    style={{
                        width: `${size}98%`
                    }}
                ></div> : 
                <div 
                    className="inactive-square" 
                    onClick={handleClick} 
                    onDrag={handleDrag} 
                    onDragEnter={handleDragEnter} 
                    onDragStart={handleDragStart}
                    draggable={true}
                ></div> 
            }
        </div>
    )

}

export default GridSquare