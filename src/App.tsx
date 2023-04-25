import React from 'react';
import * as Tone from 'tone';
import './App.css';
import NoteButton from './Components/NoteButton';
import SequencerGrid from './Components/SequencerGrid';

function App() {

  const readyAudio = async () => {
    await Tone.start();
    console.log("Audio is ready");
  }

  return (
    <>
      <button onClick={readyAudio}>Ready Audio</button>

      <NoteButton note="C4" />
      <NoteButton note="B4" />
      <NoteButton note="A4" />

      <SequencerGrid numRows={7} numColumns={20}/>
    </>
  );
}

export default App;
