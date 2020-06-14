import React, { useState } from "react";
import map from "lodash/map";
import includes from "lodash/includes";
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
  value: Note[];
  onChange(notes: Note[]): void;
}) => {
  const [inputState, setInputState] = useState("");

  const addKeys = [9, 13, 188];

  const deleteKeys = [8];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (includes(addKeys, e.keyCode)) {
      onChange([...value, { name: inputState }]);
      setInputState("");
    }
    if (includes(deleteKeys, e.keyCode)) {
      if (inputState === "") RemoveAtIndex(value.length - 1);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const RemoveAtIndex = (index: number) => {
    value.splice(index, 1);
    const newValue = [...value];
    onChange(newValue);
  };

  console.log("TaggedInput", value);

  return (
    <span className="TaggedInput">
      <div className="notes">
        {map(value, (note: Note, index: number) => {
          return (
            <div className="note" key={note.name}>
              <div className="note-name">{note.name}</div>
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
              <button onClick={() => RemoveAtIndex(index)}>X</button>
            </div>
          );
        })}
        <input
          type="text"
          value={inputState}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </span>
  );
};

export default TaggedInput;
