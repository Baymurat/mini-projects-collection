import React, { FC } from "react";

type Props = {
  minutes: number;
  seconds: number;
}
const Timer: FC<Props> = ({ seconds, minutes }) => (
  <div>
    <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
    <span>:</span>
    <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
  </div>
);

export default Timer;
