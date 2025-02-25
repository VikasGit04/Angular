import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[highlight]'
})

export class CustomHighlight implements OnInit {

    @Input('highlight') customColor: string;

    constructor( private el: ElementRef) {
        
    }

    ngOnInit() {
        this.highlightElement();
    }

    highlightElement() {
        this.el.nativeElement.style.backgroundColor = this.customColor || 'yellow';
    }
}

// html
// <h3>Custom Directive Demo</h3>
// <p [highlight]="myColor">Custom Highlight with property binding</p>
// <p highlight="lightblue">Custom Highlight with parameter</p>
// <p highlight>Custom Highlight without parameter</p>

//ts
// myColor="red";
