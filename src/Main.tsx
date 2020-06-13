import React from "react";

import "./Main.sass";

const Main = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="Main" data-testid="Main">
      {children}
    </div>
  );
};

export default Main;
