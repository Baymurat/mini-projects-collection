import React, { FC } from "react";

type Props = {
  minutes: string;
  seconds: string;
}
const Timer: FC<Props> = ({ seconds, minutes }) => (
  <div>
    <span>{minutes}</span>
    <span>:</span>
    <span>{seconds}</span>
  </div>
);

export default Timer;
