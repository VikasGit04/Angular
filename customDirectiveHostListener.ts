import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[customHover]'
})

export class CustomHover {

    public elementRef : ElementRef;

    constructor(private el : ElementRef) {
        this.elementRef = el;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }
    
    private highlight(color : string ) {
        this.elementRef.nativeElement.style.backgroundColor = color;
    }
}