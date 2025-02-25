# Core Concepts

1. Explain the Angular architecture.
=> Angular is a platform and framework for building client-side applications using HTML, CSS, and JavaScript/TypeScript. The core building blocks of Angular include components, modules, templates, services, and dependency injection. Angular uses a component-based architecture where the UI is divided into components, each managing a specific part of the view.

2. What are Angular modules (NgModules) and how are they used?
=> Angular modules (NgModules) are containers for a cohesive block of code dedicated to an application domain, a        workflow, or a closely related set of capabilities. An Angular application is defined by a set of NgModules, each of which can define components, directives, pipes, and services. NgModules also help in lazy loading and optimizing the application load time.

3. Can you explain the difference between components, directives, and pipes in Angular?
=> Components are the main building blocks of an Angular application. They control a segment of the view and manage data and logic.
Directives add behavior to existing DOM elements. There are three types of directives: structural (e.g., *ngIf,*ngFor), attribute (e.g., [ngClass], [ngStyle]), and custom directives.
Pipes transform data for display purposes. They take an input value and return a transformed value. Angular includes built-in pipes like DatePipe, CurrencyPipe, and developers can create custom pipes.

4. How does Angular handle dependency injection?
=> Angular has a hierarchical dependency injection system that provides services to components. Services are defined as injectable classes and are registered with Angular's injector. Each component or module can have its injector, and Angular manages service instances at different levels of the application based on the declared providers.

5. What is the difference between constructor and ngOnInit?
=> constructor is a special TypeScript method used for class instantiation. It is used to inject dependencies.
ngOnInit is an Angular lifecycle hook that is called once the component's input properties are set. It is a place to perform component initialization and data-fetching logic.

Advanced Concepts:
6. What are Observables, and how are they different from Promises in Angular?
=> Observables are lazy collections of multiple values that can be observed. They are part of RxJS and allow complex asynchronous operations, transformations, and error handling.
Promises deal with a single asynchronous value, while Observables can handle a stream of asynchronous events.

7. Explain the concept of ChangeDetectionStrategy. How do you use it to optimize performance?
=> ChangeDetectionStrategy controls when and how the change detection mechanism runs. The default strategy is Default, where Angular runs change detection frequently. OnPush strategy runs change detection only when the inputs change, optimizing performance by reducing unnecessary checks.

8. How does Angular's zone and change detection mechanism work?
=> Angular uses Zones to intercept asynchronous operations. The default zone (NgZone) triggers change detection whenever an async operation completes. Angular's change detection mechanism updates the view as soon as the model state changes.

9. Explain Angular's reactive forms and how they differ from template-driven forms.
=> Reactive forms are model-driven forms where the form model is explicitly created in the component code. This approach provides greater control, validation, and testability.
Template-driven forms bind the form model to the template, offering a simpler, declarative syntax but less control and testability compared to reactive forms.

10. What is Ahead-of-Time (AOT) compilation, and how does it differ from Just-in-Time (JIT) compilation?
=> AOT compilation converts Angular HTML and TypeScript code into efficient JavaScript code during the build process. It reduces the application's initialization time and provides faster rendering.
JIT compilation compiles the application in the browser during runtime, leading to longer initial load times and potentially larger bundles.

Routing:
11. Can you describe how the Angular Router works?
=> Angular Router is a service that provides navigation and URL manipulation capabilities. It uses routes configured in the module to map URLs to components. It supports features like route guards, lazy loading, and path parameters.

12. How do you use route guards in Angular?
=> Route guards are interfaces (CanActivate, CanDeactivate, Resolve, etc.) that allow control over navigation. They can check conditions before activating/deactivating routes, and resolve data before rendering a route.

13. Explain lazy loading in Angular and how you implement it.
=> Lazy loading loads feature modules on demand rather than at the initial load time. It is implemented using the loadChildren syntax in the routing module configuration. It reduces the initial bundle size and speeds up the loading time.

14. How can you handle errors and redirects in Angular routing?
=> Handling errors and redirects can be done using route guards (CanActivate, CanLoad) and handling specific cases in the route configuration with path: '**' for not found routes. Redirection can be configured using the redirectTo property in the routing configuration.

State Management:
15. What are some common patterns for state management in Angular applications?
=> Common state management patterns include using services with in-memory state, RxJS subjects, and stores. Libraries like NgRx, Akita, and NGXS are popular for managing state in larger applications.

16. Describe how you would implement a centralized state management solution using NgRx.
=> Implementing NgRx involves setting up an NgRx store, defining actions, reducers, selectors, and effects. Actions represent events, reducers specify state changes, selectors derive state for components, and effects handle side effects like API calls.

17. What are the key differences between NgRx and other state management solutions like Redux or Akita?
=> NgRx is built specifically for Angular and leverages RxJS for reactive programming. Redux is framework-agnostic and offers a library-agnostic approach. Akita provides a more straightforward, less boilerplate-heavy API for Angular applications.

Performance Optimization:
18. How do you optimize an Angular application for better performance?
=> Optimize using AOT compilation, lazy loading modules, tree shaking, lazy loading images, change detection strategy (OnPush), memoized selectors, efficient HTTP calls, server-side rendering, and optimizing bundle size.

19. What tools and practices do you use for monitoring and debugging Angular applications?
=> Tools include Angular DevTools, Chrome DevTools, Lighthouse, WebPageTest, and RxJS run-time debugging tools. Best practices include using logging, performance profiling, and analysis tools to trace performance bottlenecks.

20. Explain tree shaking and its benefits in Angular applications.
=> Tree shaking is a technique used to remove unused code from the final bundle, reducing the size of the application. It helps improve load times and reduce the amount of JavaScript that the browser has to process.

Testing:
21. How do you set up and use unit tests in Angular applications?
=> Unit tests are set up using Angular's testing utilities (Karma and Jasmine). Components, services, and pipes can be tested by defining test cases in the *.spec.ts files and using TestBed for creating component instances.

22. Explain the difference between unit tests and end-to-end (E2E) tests in the context of Angular.
=> Unit tests verify individual components and services in isolation. End-to-end (E2E) tests test the application's functionality as a whole by simulating user interactions. E2E tests in Angular are often done using Protractor.

23. What tools and libraries do you use for testing Angular applications?
=> Common tools include Karma (test runner), Jasmine (testing framework), Protractor (E2E testing), Jest (alternative to Karma/Jasmine), and Angular TestBed.

Security:
24. What are some common security concerns in Angular applications and how do you address them?
=> Common concerns include cross-site scripting (XSS), cross-site request forgery (CSRF), and insecure API calls. Mitigation strategies include output encoding, sanitizing inputs, using Angular's built-in security features, and securing API endpoints.

25. How do you prevent cross-site scripting (XSS) attacks in Angular?
=> Angular automatically escapes untrusted template data. Additionally, developers should use Angular's DomSanitizer to sanitize any unsafe inputs.

26. Explain how Angular handles sanitization of HTML content.
=> Angular provides a DomSanitizer service that helps sanitize untrusted values before rendering them. It applies context-aware sanitization, like HTML, styles, URLs, and resources.

Miscellaneous:
27. How do you manage and optimize the build process of an Angular application?
=> Use Angular CLI for managing builds. It includes optimization features such as AOT compilation, minification, compression, and configuration for different environments (ng build --configuration=production).

28. What are some best practices for structuring large-scale Angular applications?
=> Best practices include modular architecture, lazy loading, shared modules, feature modules, service segmentation (core/services), proper use of observables, state management, and code splitting.

29. Explain how you would integrate an Angular application with a backend service.
=> Integrate using Angular's HttpClient module within services. Define and use HTTP methods (GET, POST, etc.), handle observables or promises, manage headers, and implement error handling.

30. What is Angular Universal, and how does it help with SEO?
=> Angular Universal is a server-side rendering (SSR) solution for Angular applications. SSR helps improve page load times and SEO by rendering pages on the server and sending the pre-rendered HTML to the client.
