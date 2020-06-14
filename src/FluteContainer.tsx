import React, { useState } from "react";
import map from "lodash/map";
import TagsInput from "react-tagsinput";
import 'react-tagsinput/react-tagsinput.css'

import Notes from "./Notes";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const isNote = (text: string) => /[abcdefg][#b]/g.test(text);

interface Note {
  id: number;
  name: string;
}

const FluteContainer = () => {
  const [notes, setNotes] = useState([] as Note[]);

  const handleDelete = (i: number) => {
    setNotes(notes.filter((_, index) => index !== i));
  };

  const handleAddition = (note: Note) => {
    if (isNote(note.name)) setNotes([...notes, note]);
  };

  const handleChange = (notes: Note[]) => {
    setState({notes})
  }

  const handleDrag = (note: Note, from: number, to: number) => {
    const newNotes = notes.slice();
    newNotes.splice(from, 1);
    newNotes.splice(to, 0, note);
    setNotes(newNotes);
  };

  return (
    <div>
      kjhfgk
      <TagsInput value={notes} onChange={handleChange} />
    </div>
  );
};

export default FluteContainer;
