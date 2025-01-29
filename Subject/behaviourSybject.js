import { BehaviorSubject } from "rxjs";

const bSub = new BehaviorSubject(0);


bSub.subscribe((value)=> {
    console.log(`Value1: ${value}`)
});
bSub.next(1);
bSub.subscribe((value)=> {
    console.log(`Value2: ${value}`)
});
console.log('hi');
bSub.next(5);
console.log('and');
bSub.next(10);
console.log('bye');
