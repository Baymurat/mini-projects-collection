import React, { FC } from "react";

type Props = {
  height: number;
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
  width: number;
  background: string;
}

const BluredBackground: FC<Props> = (props) => {
  const {
    background,
    height,
    bottom,
    left,
    right,
    top,
    width,
  } = props;

  return (
    <div style={{
      background,
      position: "absolute",
      filter: "blur(150px)",
      height,
      bottom,
      left,
      right,
      top,
      width,
    }}
    />
  );
};

export default BluredBackground;
