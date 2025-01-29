import { ReplaySubject } from "rxjs";

const rSub = new ReplaySubject();

rSub.subscribe((value)=> {
    console.log(`Value1: ${value}`);
});
rSub.next(1);
rSub.next(2);
rSub.next(3);
rSub.next(4);
rSub.next(5);
rSub.next(6);
rSub.subscribe((value)=> {
    console.log(`Value2: ${value}`);
});


console.log('Bye');
