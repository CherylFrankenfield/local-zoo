import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
    <h4>Animal List</h4>
    <ul>
      <li (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}}
      <ul>
        <li>{{currentAnimal.name}}</li>
        <li>{{currentAnimal.age}}</li>
        <li>{{currentAnimal.diet}}</li>
        <li>{{currentAnimal.location}}</li>
        <li>{{currentAnimal.caretakers}}</li>
        <li>{{currentAnimal.sex}}</li>
        <li>{{currentAnimal.likes}}</li>
        <li>{{currentAnimal.dislikes}}</li>
      </ul>
      <button class="edit-btn" (click)="editButtonClicked(currentAnimal)">Edit Details</button>
      </li>
    </ul>
  `

})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];

}
