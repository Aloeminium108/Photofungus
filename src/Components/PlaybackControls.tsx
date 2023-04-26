import React, { useContext, useRef } from "react";
import * as Tone from 'tone';
import SequencerContext from "./Context/SequencerContext";

const NOTES = [
    "B",
    "Bb",
    "A",
    "Ab",
    "G",
    "Gb",
    "F",
    "E",
    "Eb",
    "D",
    "Db",
    "C",
]

function PlaybackControls() {

    const {synths, numMeasures, grid} = useContext(SequencerContext);

    const loop = useRef(new Tone.Loop());

    const play = () => {
        Tone.Transport.cancel(0);
        Tone.Transport.stop(0);
        loop.current.stop(0);
        loop.current.cancel(Tone.now());
        synths.forEach(synth => {
            synth.oscillator.stop(0);
        })

        loop.current.set(new Tone.Loop(time => {
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].length; j++) {
                    if (grid[i][j]) {
                        synths[i].triggerAttackRelease(NOTES[i] + 3, "8n", j > 0 ? `+0:${j/2}` : time);
                    }
                }
            }

        }, `${numMeasures}m`).start(0));

        Tone.Transport.start(Tone.now());
    }

    const stop = () => {
        Tone.Transport.cancel();
        Tone.Transport.stop();
        loop.current.stop();
        loop.current.cancel();
        synths.forEach(synth => {
            synth.oscillator.stop();
        })
    }

    return (
        <>
            <button onClick={play}>Play</button>
            <button onClick={stop}>Stop</button>
        </>
    )

}

export default PlaybackControls