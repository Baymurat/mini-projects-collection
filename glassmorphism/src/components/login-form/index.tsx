import React from "react";
import Presentation from "./Presentation";

const LoginForm = () => (
  <div>
    <Presentation
      onSubmit={(values) => {
        console.log("Submited: ", values);
      }}
    />
  </div>
);

export default LoginForm;
