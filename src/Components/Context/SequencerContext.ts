import React from "react";
import { Synth } from "tone";

const SequencerContext = React.createContext({
    
    synths: new Array<Synth>(),
    numMeasures: 1,
    grid: new Array<Array<boolean>>(),
    setGridSquare: (row: number, column: number, input: boolean) => {}

});

export default SequencerContext;