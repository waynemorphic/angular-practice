# Goals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Creating a class
Run `ng generate class <class name>`

## Creating a component
Components enable us in the decoupling of an application so that specific functionalities are handled by specific components.
Run `ng generate component <component name>`

## Creating a service for dependency injection
Run `ng generate service <service folder name/service file name>`

ie `ng generate service goal-service/goal`
This creates a goal-service folder and inside it, goal as the service file

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Rabbit Holes
1. `Property '...' has no initializer and is not definitely assigned in the constructor`
This error occurs because Angular has strict proprty initialization turned on. To change this strict initialization, go to `tsconfig.json` and add `"strictPropertyInitialization": false`

Alternatively, for the given property, you can initialize it by using `!` ie `id!:number` This is not the best approach since it may not always work in edge cases.

2. `Parameter '...' has implicitly any type`
This error occurs when a parameter is implied as having the type, `any` without being directly defined as so. We solve this error by adding .any at the point where the parameter is accessed. ie `this.goals[index:any]` where index is a function's parameter.


# Notes
## Input Property Binding
This is done so that child components are able to recieve data from parent components. In the child component, the decorator, `@Input() <property name >:<Blueprint class name>` ie`@Input() objective: Goal;` is used.

In the template of the parent component, property binding of the child component property in parent property is then executed.
ie `<app-goal-detail [objective]=[goal]></app-goal-detail>
where `[objective]` is the property you decorate with `@Input` from the child component while `[goal]`is the property from the parent component

## Adding Bootstrap
`npm install --save bootstrap popper`

Add `@import "~bootstrap/dist/css/bootstrap.css"` in the app/styles.css

## Creating Forms
In the app.module.ts, add `FormsModule` in the imports array since the module is not available in the angular app by default.

## Deployment to Angular Apps to GitHub
Run `npm i angular-cli-ghpages --save-dev` to install angular-cli-pages tool

Run `ng build --prod --base-href "https://GithubUserName.github.io/GithubRepoName/"` to build the project

Run `npx angular-cli-ghpages --dir=dist/Project-name` to deploy the angular application to gh-pages