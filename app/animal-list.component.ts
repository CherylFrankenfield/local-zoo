import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
    <h5>Sort by Ages</h5>
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="young">Baby Animals</option>
      <option value="mature" selected="selected">Mature Animals</option>
    </select>
    <h3>Animal List</h3>
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{currentAnimal.species}}
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Animal Name: {{currentAnimal.name}}</li>
          <li class="list-group-item">Age: {{currentAnimal.age}}</li>
          <li class="list-group-item">Diet: {{currentAnimal.diet}}</li>
          <li class="list-group-item">Zoo region: {{currentAnimal.location}}</li>
          <li class="list-group-item">Caretakers on staff: {{currentAnimal.caretakers}}</li>
          <li class="list-group-item">Sex: {{currentAnimal.sex}}</li>
          <li class="list-group-item">Likes: {{currentAnimal.likes}}</li>
          <li class="list-group-item">Dislikes: {{currentAnimal.dislikes}}</li>
        </ul>
      </div>
      <button class="btn btn-outline-secondary" (click)="editButtonClicked(currentAnimal)">Edit Details</button>
      </li>
    </ul>
  `

})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "mature";

  // isDone(clickedAnimal) {
  //   console.log("animal list");
  // }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
