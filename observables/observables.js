import { of, from, first, interval, Observable } from 'rxjs';
import { last, map, pluck, skip, skipLast, tap } from 'rxjs/operators';

// of(1, 2, 3)
//   .pipe(map((x) => x * x))
//   .subscribe((v) => console.log(`value: ${v}`));

// of(1, 2, 3)
//   .pipe(skip(1))
//   .subscribe((v) => console.log(`value: ${v}`));

// const array$ = from([10,20,30]);
// array$.subscribe((value)=> {
//     console.log('Value:', value);

// });

// const data$ = of(1, 2, 3);
// data$.subscribe((value)=> console.log('Data:', value));
// // data$.subscribe(console.log); // this is also a way to console log
// const doubled$ = data$.pipe(map(value => value * 2));
// doubled$.subscribe((value)=> console.log('Double data:', value));

// const obj$ = from([{ name : 'Raj', age: 27}, { name: 'Rahul', age : 25}]);
// obj$.pipe(pluck('name')).subscribe((name)=> console.log(name));

// const data$ = of(10, 20, 30);
// data$.pipe(
//   tap(value => console.log(`Value before map: ${value}`)),
//   map(value => value + 10),
//   tap(value => console.log(`Value after map: ${value}`))
// ).subscribe(value => console.log(`After Subscription: ${value}`))

// interval(1000).subscribe(console.log);

// const obs$ = new Observable((subscriber)=> {
//     subscriber.next('Hello');
//     subscriber.next('How are you?');
//     subscriber.complete();
// });

// // obs$.next('hello'); TypeError: obs$.next is not a function

// obs$.subscribe((value) => console.log('Observable subscriber 1:', value));

// obs$.subscribe((value) => console.log('Observable subscriber 2:', value));

