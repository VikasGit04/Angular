import { from, pipe,filter, map } from 'rxjs';

// function foo() {
//     console.log('Hello');
//     return 42;
//   }
  
//   const x = foo().call(); // same as foo()
//   console.log(x);
//   const y = foo.call(); // same as foo()
//   console.log(y);

  const user = [
    { id: 1, active: true },
    { id: 2, active: true },
    { id: 3, active: false },
    { id: 4, active: true },
  ]

  const user$ = from(user);

  const activeUser$ = user$.pipe(
    filter((user)=> user.active),
    map((user)=> user.id)
  );

  activeUser$.subscribe((data)=> {
    console.log(data);
  })