import React, { useState } from "react";
import TaggedInput from "./TaggedInput";

// import Notes from "./Notes";

const FluteContainer = () => {
  const [notes, setNotes] = useState([] as Note[]);

  const handleChange = (newNotes: Note[]) => {
    setNotes(newNotes);
  };

  // const noteReg = /[ABCDEFG][#b]?[4567]/g

  return <TaggedInput value={notes} onChange={handleChange} />;
};

export default FluteContainer;
