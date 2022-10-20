import React, { useState } from "react";
import Checkbox from "./Checkbox";

const CheckBoxContainer = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div>
      <Checkbox
        isChecked={isChecked}
        setIsChecked={() => setIsChecked((prev) => !prev)}
      />
    </div>
  );
};

export default CheckBoxContainer;
