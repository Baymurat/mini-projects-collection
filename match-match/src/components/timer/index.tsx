import React, { FC, useState, useEffect } from "react";
import { Observable } from "rxjs";

type Props = {
  countedTime$: Observable<{seconds: string, minutes: string}>;
}

const Timer: FC<Props> = ({ countedTime$ }) => {
  const [seconds, setSeconds] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");

  useEffect(() => {
    countedTime$.subscribe({
      next: ({ seconds: v1, minutes: v2 }) => {
        setSeconds(v1);
        setMinutes(v2);
      },
    });
  }, []);

  return (
    <div>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default Timer;
