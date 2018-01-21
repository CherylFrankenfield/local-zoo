# Local Zoo - Animal Tracking App

##### Using Angular, create an internal app for zoo employees  

#### By Cheryl Frankenfield, 1/19/18

## Description

_Create an app for zoo employees to do animal intakes, creating records of new animals added to zoo. Employees also should be able to view a list of all animals, edit some animals' records/details, and sort through data to filter animals by age._

## Setup/Installation Requirements
-------
* Git clone (https://github.com/CherylFrankenfield/local-zoo.git)
* Run:

* npm install
* bower install
* gulp bower
* gulp serve

## Planning

### 1. Configuration/dependencies
  * This app uses Angular, Typescript, Bootstrap.

### 2. Specs
_The app will allow a zoo employee to view a display of animals currently at the zoo._
* _Input: Click button to view list._
* _Output: Returns list of animals currently at the zoo._

_The app will allow a zoo employee to enter animal data in form._
* _Input: Text input of animal intake: "Name: , Species: , Age: "._
* _Output: Returns a doctor's first name: "Leo, Panthera leo, 5"._

_The app will allow a zoo employee to edit animal data after the initial intake._
* _Input: Click on edit button._
* _Output: Returns a form field to edit animal data._

_The app will allow a zoo employee to filter animals by age and view data. Options include all, young (less than 2), mature (2 and older)._
* _Input: A dropdown form field and one is selected: Young._
* _Output: Filters animal data list and displays only those less than 2 years old._


### 3. Integration
  * Display user form fields for animal intake, a submit button, a list to display animals at the zoo and a dropdown to filter animals by criteria (age, etc.).
  * Future user story to include additional filtering options. For example, what do animals eat for food ordering purposes.
  * Future user story to include health or vet-related data on animals. For example, what medications, if any, animals take, surgeries, injuries, etc.
  * Future user story may include history of animal. For example, what zoo did animals come from, or where was it born? Wild or captivity?

### 4. UX/UI
    * Include and modify Bootstrap/Sass etc.
    * Develop custom style and create a mobile version for zookeepers to access on phones while on foot around zoo.

## Known Bugs

_Added DietPipe but unsure how to connect two filter pipes on same dataset. Also having some trouble with list group and flexbox to work together. I will also need to add more show/hide functionality._

## Support and contact details

_If you have any issues, questions, ideas or concerns, please contact me._

## Technologies Used

* HTML
* CSS
* Angular
* Typescript
* Javascript
* jQuery
* Gulp
* Node.js

### License

*This is open source so feel free to grab and use.*

Copyright (c) 2018 **_Cheryl Frankenfield_**
