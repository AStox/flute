import React, { useState } from "react";
import TaggedInput from "./TaggedInput";

import "./FluteContainer.sass";
// import Notes from "./Notes";
const wolves = [
  ["F#4", "B4", "A#4", "B4", "A#4", "F#4", "D#4"],
  ["D#5", "F#5", "B4", "A#4", "B4", "D#5", "G5", "D#5"],
  ["F#5", "F#5", "D#5", "-", "D5", "F4"],
];

const FluteContainer = () => {
  const [notes, setNotes] = useState([[]] as Note[][]);

  const handleChange = (newNotes: Note[][]) => {
    setNotes(newNotes);
  };

  // const noteReg = /[ABCDEFG][#b]?[4567]/g

  return (
    <div className="FluteContainer">
      <TaggedInput value={notes} onChange={handleChange} />
    </div>
  );
};

export default FluteContainer;
