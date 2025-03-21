// ngOnChanges --> ngOnInit --> ngDoCheck --> ngAfterContentInit --> ngAfterContentChecked --> ngAfterViewInit --> 
// ngAfterViewChecked --> ngOnDestroy

// In Angular, @ViewChild, @ViewChildren, @ContentChild, and @ContentChildren are decorator utilities that allow you to access and query elements, components, or directive instances within a template (view) or projected (content) DOM. Each serves specific purposes in component composition and interaction.
// @ViewChild
// Usage
// @ViewChild is used to query and access a single element, component, or directive instance from the view DOM. It's primarily used for direct child elements.
// Example
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `<app-child></app-child><button (click)="changeChildProperty()">Change Child Property</button>`
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child: ChildComponent;

  ngAfterViewInit() {
    // Access ChildComponent instance
    console.log(this.child);
  }

  changeChildProperty() {
    this.child.someProperty = 'new value';
  }
}

// @ViewChildren
// Usage
// @ViewChildren is used to query and access multiple elements, components, or directive instances from the view DOM.
// Example

import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <app-child></app-child>
    <app-child></app-child>
    <button (click)="changeAllChildProperties()">Change All Child Properties</button>
  `
})
export class ParentComponent implements AfterViewInit {
  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;

  ngAfterViewInit() {
    // Access QueryList of ChildComponent instances
    this.children.forEach(child => console.log(child));
  }

  changeAllChildProperties() {
    this.children.forEach(child => child.someProperty = 'new value');
  }
}

// @ContentChild
// Usage
// @ContentChild is used to query and access a single element, component, or directive instance from the projected content. This is content provided by the parent component to be projected inside the child component.
// Example

import { Component, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<ng-content></ng-content>`
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('projectedContent') projectedContent;

  ngAfterContentInit() {
    console.log(this.projectedContent);
  }
}

@Component({
  selector: 'app-parent',
  template: `
    <app-child>
      <div #projectedContent>Projected Content</div>
    </app-child>
  `
})
export class ParentComponent {}
// @ContentChildren
// Usage
// @ContentChildren is used to query and access multiple elements, components, or directive instances from the projected content.
// Example

import { Component, ContentChildren, AfterContentInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<ng-content></ng-content>`
})
export class ChildComponent implements AfterContentInit {
  @ContentChildren('projectedContent') projectedContents: QueryList<any>;

  ngAfterContentInit() {
    this.projectedContents.forEach(content => console.log(content));
  }
}

@Component({
  selector: 'app-parent',
  template: `
    <app-child>
      <div #projectedContent>Projected Content 1</div>
      <div #projectedContent>Projected Content 2</div>
    </app-child>
  `
})
export class ParentComponent {}

// Summary
// Decorator	Scope	Single/Multiple	Usage
// @ViewChild	View	Single	Access a single child element/component
// @ViewChildren	View	Multiple	Access multiple child elements/components
// @ContentChild	Content	Single	Access a single projected content element/component
// @ContentChildren	Content	Multiple	Access multiple projected content elements/components