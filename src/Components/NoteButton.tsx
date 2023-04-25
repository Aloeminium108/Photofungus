import React from "react";
import * as Tone from 'tone';

// This exists purely to try Tone.js features
// This is not meant to be included in production code

function NoteButton(props: {note: string}) {

    const synth = new Tone.Synth().toDestination();

    const triggerNote = () => {
        synth.triggerAttackRelease(props.note, "8n");
    }

    return (
        <button onClick={triggerNote}>{props.note}</button>
    )

}

export default NoteButton