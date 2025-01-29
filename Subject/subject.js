import { Subject } from 'rxjs';

const subject = new Subject();

subject.subscribe({
    next: (value)=>  console.log(`Value: ${value}`)
});

subject.subscribe((value)=> {
    console.log(`Value2: ${value}`);
});

subject.next(1);
subject.next(5);
