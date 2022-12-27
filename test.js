/* eslint-disable */
const { from, timer } = require("rxjs");
const { last, finalize, takeUntil } = require('rxjs/operators');

const source$ = timer(0, 1000)

const result$ = source$.pipe(
  takeUntil()
)