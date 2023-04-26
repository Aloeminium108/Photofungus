import React, { useEffect, useRef, useState } from 'react';
import * as Tone from 'tone';
import './App.css';
import NoteButton from './Components/NoteButton';
import SequencerGrid from './Components/SequencerGrid';

import SequencerContext from './Components/Context/SequencerContext';
import PlaybackControls from './Components/PlaybackControls';

function App() {

  const NUM_MEASURES = 3;

  const NUM_ROWS = 7;
  const NUM_COLUMNS = NUM_MEASURES * 8;

  const synths: Array<Tone.Synth> = [];

  for (let i = 0; i < NUM_ROWS; i++) {
    synths.push(new Tone.Synth().toDestination());
  }

  const readyAudio = async () => {
    await Tone.start();
    console.log("Audio is ready");
  }

  const [grid, setGrid] = useState(new Array<Array<boolean>>(NUM_ROWS));

  useEffect(() => {

    const tempGrid = new Array<Array<boolean>>(NUM_ROWS)

    for (let i = 0; i < NUM_ROWS; i++) {

      const row = new Array<boolean>(NUM_COLUMNS);
  
      for (let j = 0; j < NUM_COLUMNS; j++) {
        row[j] = false;
      }
  
      tempGrid[i] = row;
  
    }

    setGrid(tempGrid);

  }, []);

  const setGridSquare = (row: number, column: number, input: boolean) => {
    let tempGrid = grid;
    tempGrid[row][column] = input;
    setGrid(tempGrid);
  }

  return (
    <SequencerContext.Provider value={{
      synths: synths,
      numMeasures: NUM_MEASURES,
      grid: grid,
      setGridSquare: setGridSquare
    }}>
      <button onClick={readyAudio}>Ready Audio</button>

      <NoteButton note="C4" />
      <NoteButton note="B4" />
      <NoteButton note="A4" />

      <button onClick={() => {console.log(grid)}}>Print Sequence</button>

      <PlaybackControls />

      <SequencerGrid numRows={NUM_ROWS} numColumns={NUM_COLUMNS}/>
    </ SequencerContext.Provider>
  );
}

export default App;
