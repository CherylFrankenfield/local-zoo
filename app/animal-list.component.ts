import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
    <h4>Animal List</h4>

    <ul>
      <li (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}}
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

  isDone(clickedAnimal) {
    console.log("animal list");
  }

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
