import React from "react";
import { Synth } from "tone";

const SequencerContext = React.createContext({
    
    synths: new Array<Synth>(),
    numMeasures: 1,
    grid: new Array<Array<boolean>>(),
    setGridSquare: (row: number, column: number, input: boolean) => {},
    setGrid: (grid: React.SetStateAction<boolean[][]>) => {},
    bpm: 100,
    setBPM: (bpm: number) => {},
    octave: 3,
    setOctave: (octave: number) => {}

});

export default SequencerContext;