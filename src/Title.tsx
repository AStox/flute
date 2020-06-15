import React, { useState } from "react";
import includes from "lodash/includes";

import "./Title.sass";

const Title = ({
  value,
  onUpdate,
  saved,
}: {
  value: string;
  onUpdate(name: string): void;
  saved: booleans;
}) => {
  const [inputValue, setInputValue] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const addKeys = [13];
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (includes(addKeys, e.keyCode)) {
      onUpdate(inputValue);
    }
  };

  return (
    <div className="Title">
      <input
        className="note-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Title;
