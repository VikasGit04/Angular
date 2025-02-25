import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'empFilter',
  pure: false 
})

export class EmpFilterPipe implements PipeTransform {

  transform(employees: string[], searchValue?: string): string[] {
    return employees.filter(emp=> emp === searchValue );
  }
}

{
/* <input type="text" [(ngModel)]="searchValue">
<button (click)="changeData()"></button>

changeData(): void{
    this.employees[0].name = "SOMETHING ELSE";
}

<div *ngFor="let emp of employees | empFilter : searchValue">
    {{emp.name}}
</div>  */
}