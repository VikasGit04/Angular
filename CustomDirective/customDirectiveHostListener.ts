import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[customHover]'
})

export class CustomHover {

    constructor(private el : ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlightElement('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlightElement('');
    }
    
    private highlightElement(color : string ) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}