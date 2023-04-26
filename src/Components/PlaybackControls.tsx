import React, { useContext, useRef } from "react";
import * as Tone from 'tone';
import SequencerContext from "./Context/SequencerContext";

const NOTES = [
    "C3",
    "D3",
    "E3",
    "F3",
    "G3",
    "A3",
    "B3"
]

function PlaybackControls() {

    const {synths, numMeasures, grid} = useContext(SequencerContext);

    const loop = useRef(new Tone.Loop());

    const play = () => {
        loop.current.set(new Tone.Loop(time => {

            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].length; j++) {
                    if (grid[i][j]) {
                        synths[i].triggerAttackRelease(NOTES[i], "8n", j > 0 ? `+0:${j/2}` : time);
                    }
                }
            }

        }, `${numMeasures}m`).start(0));

        Tone.Transport.start(Tone.now());
    }

    const stop = () => {
        Tone.Transport.cancel(0);
        Tone.Transport.stop(0);
        loop.current.stop(0);
        synths.forEach(synth => {
            synth.oscillator.stop();
        })
    }

    // const play = () => {
    //     for (let i = 0; i < grid.length; i++) {
    //         for (let j = 0; j < grid[i].length; j++) {
    //             if (grid[i][j]) {
    //                 const loop = new Tone.Loop(time => {
    //                     synths[i].triggerAttackRelease(NOTES[i], "8n", time);
    //                 }, `${numMeasures}m`).start(`+0:${j/2}`)
    //             }
    //         }
    //     }

    //     Tone.Transport.start(Tone.now());
    // }

    // const stop = () => {
    //     Tone.Transport.stop(Tone.now());
    // }

    return (
        <>
            <button onClick={play}>Play</button>
            <button onClick={stop}>Stop</button>
        </>
    )

}

export default PlaybackControls