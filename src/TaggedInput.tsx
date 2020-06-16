import React, { useState } from "react";
import map from "lodash/map";
import includes from "lodash/includes";
import partial from "lodash/partial";

import Title from "./Title";

import "./TaggedInput.sass";

function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item).default;
    return item;
  });
  return images;
}

const fingerings: { [key: string]: string } = importAll(
  require.context("./img/FluteFingerings", false, /\.(png|jpe?g|svg)$/)
);

const TaggedInput = ({
  value,
  onChange,
}: {
  value: Note[][];
  onChange(notes: Note[][]): void;
}) => {
  const [inputState, setInputState] = useState("");

  const addKeys = [9, 13, 188];
  const newLineKeys = [40];
  const upKeys = [38];
  const deleteKeys = [8];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (includes(addKeys, e.keyCode)) {
      const newBar = [...value[value.length - 1], { name: inputState }];
      value.splice(value.length - 1, 1, newBar);
      const newValue = [...value];
      onChange(newValue);
      setInputState("");
    }
    if (includes(deleteKeys, e.keyCode)) {
      if (inputState === "")
        RemoveAtIndex(value.length - 1, value[value.length - 1].length - 1);
    }
    if (includes(newLineKeys, e.keyCode)) {
      onChange([...value, []]);
    }
    if (includes(upKeys, e.keyCode)) {
      if (value[value.length - 1].length <= 0) {
        value.splice(value.length - 1, 1);
        const newValue = [...value];
        onChange(newValue);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const RemoveAtIndex = (barIndex: number, index: number) => {
    value[barIndex].splice(index, 1);
    const newBar = [...value[barIndex]];
    value.splice(barIndex, 1, newBar);
    const newValue = [...value];
    onChange(newValue);
  };

  const updateTitle = (barIndex: number, index: number, name: string) => {
    value[barIndex].splice(index, 1, { name });
    const newBar = [...value[barIndex]];
    value.splice(barIndex, 1, newBar);
    const newValue = [...value];
    onChange(newValue);
  };

  return (
    <div className="TaggedInput">
      {map(value, (bar: Note[], barIndex: number) => (
        <>
          <div key={barIndex} className="notes">
            {map(bar, (note: Note, index: number) => (
              <div className="note-container" key={`${barIndex}-${index}`}>
                <div className="note">
                  <Title
                    editable
                    value={note.name}
                    onUpdate={partial(updateTitle, barIndex, index)}
                  />
                  <img
                    className="sheet"
                    src={fingerings[`s_${note.name}.png`]}
                    alt={note.name}
                  />
                  <img
                    className="fingering"
                    src={fingerings[`f_${note.name}.png`]}
                    alt={note.name}
                  />
                  <button
                    className="close-button"
                    onClick={() => RemoveAtIndex(barIndex, index)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
            <div className="input-container">
              <input
                className="main-input"
                type="text"
                value={inputState}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={bar.length > 0 ? "" : "Type a note"}
              />
            </div>
          </div>
          <div className="staff"></div>
        </>
      ))}
    </div>
  );
};

export default TaggedInput;
