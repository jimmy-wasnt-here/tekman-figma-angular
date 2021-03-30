# TekmanFigmaAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Quick use

Run `npm install` on the root folder of the project.

Then run `ng serve --open`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Components 

I created a series of component listed below:

  0- Toolbar
  
  1- Dashboard (created this way in case future developmet requiered an abstraction from the current main content)
  
    1- MainContent (which uses)

      a. ActiveCourseCard

      b. CourseCard

  2- CourseDetail (which uses)
  
    a. ListSessions
    
    b. CourseCard
  
  3- PrePlayScreen

## Used resources

This is a project build on angular2.

Among the styles, I used bootstrap for semi responsive behaviour. (The app needs a lot of refactoring to be fully responsive.)

https://getbootstrap.com


For the sidebar, I used ng-sidebar

https://www.npmjs.com/package/ng-sidebar

For the collection of icons, I used FontAwesome

https://fontawesome.com

## Known issues

1) The background color on the icons on the buttons of the sessions list compoment don't respond correctly when hovered.
2) The pre play screen is not fullscreen (the header navbar is visible.)
