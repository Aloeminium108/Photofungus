import React from "react";
import * as Tone from 'tone';
import { BPM } from "tone/build/esm/core/type/Units";
import { RecursivePartial } from "tone/build/esm/core/util/Interface";

function BPMSlider() {

    //const bpm = React.useRef<HTMLInputElement>();

    const updateBPM = (bpm: number) => {
        Tone.Transport.bpm.rampTo(bpm);
    }

    return (
        <input type="number" defaultValue={100} min={0} max={500} id="bpm" name="bpm" step={1} onChange={(e) => updateBPM(parseInt(e.target.value))}/>
    )

}

export default BPMSlider