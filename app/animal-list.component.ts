import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
    <h4>Animal List</h4>
    <h5>Sort by Ages</h5>
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="young">Baby Animals</option>
      <option value="mature" selected="selected">Mature Animals</option>
    </select>
    <ul>
      <li (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{currentAnimal.species}}
      <ul>
        <li>Animal Name: {{currentAnimal.name}}</li>
        <li>Age: {{currentAnimal.age}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <li>Zoo region: {{currentAnimal.location}}</li>
        <li>Caretakers on staff: {{currentAnimal.caretakers}}</li>
        <li>Sex: {{currentAnimal.sex}}</li>
        <li>Likes: {{currentAnimal.likes}}</li>
        <li>Dislikes: {{currentAnimal.dislikes}}</li>
      </ul>
      <button class="edit-btn" (click)="editButtonClicked(currentAnimal)">Edit Details</button>
      </li>
    </ul>
  `

})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "mature";

  isDone(clickedAnimal) {
    console.log("animal list");
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
