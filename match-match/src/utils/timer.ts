import { Subject, timer, takeUntil, switchMap, of, tap, last } from "rxjs";
import { TimerType, TimeType } from "../game/types";

const convertSeconds = (seconds: number): { seconds: string, minutes: string} => {
  const minutesNumber = Math.floor(seconds / 60);
  const secondsNumber = seconds % 60;

  const minutesStr = minutesNumber < 10 ? `0${minutesNumber}` : `${minutesNumber}`;
  const secondsStr = secondsNumber < 10 ? `0${secondsNumber}` : `${secondsNumber}`;
  return { seconds: secondsStr, minutes: minutesStr };
};

export class Timer implements TimerType {
  private timer$!:Subject<TimeType>;

  private stopTimer$!: Subject<boolean>;

  private finishTime$!:Subject<TimeType>;

  private static instance: Timer | null = null;

  static getInstance() {
    if (this.instance === null) {
      this.instance = new Timer();
    }
    return this.instance;
  }

  private constructor() {
    this.timer$ = new Subject<TimeType>();
    this.finishTime$ = new Subject<TimeType>();
    this.stopTimer$ = new Subject<boolean>();

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.restartTimer = this.restartTimer.bind(this);
    this.getCountedTime = this.getCountedTime.bind(this);
    this.getFinishTime = this.getFinishTime.bind(this);
  }

  getCountedTime() {
    return this.timer$;
  }

  getFinishTime() {
    return this.finishTime$;
  }

  startTimer() {
    timer(0, 1000)
      .pipe(
        switchMap((counted) => of(convertSeconds(counted))),
        tap((time) => this.timer$.next(time)),
        takeUntil(this.stopTimer$),
        last(),
      )
      .subscribe({
        next: (v) => {
          this.finishTime$.next(v);
        },
      });
  }

  stopTimer() {
    this.stopTimer$.next(true);
  }

  restartTimer() {
    this.timer$.next({
      seconds: "00",
      minutes: "00",
    });
  }
}
