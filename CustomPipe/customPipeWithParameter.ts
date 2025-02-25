import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'surname'
})

export class SurnamePipe implements PipeTransform {
    transform(name: any, gender: string) {
        switch(gender){
            case 'M':
                return `Mr. ${name}`;
            case 'F':    
                return `Mrs. ${name}`;
            default:
                return name;
        }
    }
}



// html
// <h3>Custom Pipe Demo</h3>
// <p>{{name | surname:'M'}}</p>
// <p>{{name | surname:gender}}</p>
// <p>{{name | surname:gender2}}</p>
// <p>{{name | surname:gender3}}</p>

// ts
// name = 'Sonal';
// gender1 = 'M';
// gender2 = 'F';
// gender3 = 'Other';
