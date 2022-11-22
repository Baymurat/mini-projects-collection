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

  const minutesNumber = Math.floor(counted / 60);
  const secondsNumber = counted % 60;

  const minutes = minutesNumber < 10 ? `0${minutesNumber}` : `${minutesNumber}`;
  const seconds = secondsNumber < 10 ? `0${secondsNumber}` : `${secondsNumber}`;

  return {
    seconds, minutes, startTimer, stopTimer, restartTimer,
  };
};
