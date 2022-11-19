import { useState } from "react";
import { UseTimerType } from "../game/types";

export const useTimer = (): UseTimerType => {
  const [counted, setCounted] = useState(0);
  const [intervalId, setintervalId] = useState<NodeJS.Timer>();

  const startTimer = () => {
    const timerId = setInterval(() => {
      setCounted((prev) => prev + 1);
    }, 1000);
    setintervalId(timerId);

    return timerId;
  };

  const stopTimer = () => clearInterval(intervalId);
  const restartTimer = () => setCounted(0);

  const minutes = Math.floor(counted / 60);
  const seconds = counted % 60;

  return {
    seconds, minutes, startTimer, stopTimer, restartTimer,
  };
};
