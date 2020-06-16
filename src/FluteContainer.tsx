import React, { useState } from "react";
import TaggedInput from "./TaggedInput";

import "./FluteContainer.sass";
// import Notes from "./Notes";

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
