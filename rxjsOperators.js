import { forkJoin, of, timer,from, tap  } from "rxjs";

// Observable handle(subscribe)
//     - Data
//     - Error
//     - Completion


// myObservable.subscribe(
//     (data) => console.log(data),
//     (error) => console.log(error),
//     () => console.log('Completed');
// )

const arrObservable = forkJoin([
    of(1,2,3,4),
    Promise.resolve(8),
    timer(4000)
]);

// arrObservable.subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('Completed!')
// });

const objObservable = forkJoin({
    foo: from([1,2,3,4]),
    bar: timer(5000),
    buz: Promise.resolve(6)
}).pipe(tap(obj => {
    console.log(obj)
}));

objObservable.subscribe({
    next: value => console.log(value),
    error: eVal => console.log(eVal),
    complete: () => console.log('Completed!')
});