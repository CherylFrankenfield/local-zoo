import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-edit',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <label name="species">Animal Species: </label>
        <input [(ngModel)]="childSelectedAnimal.species" name="species" type="text" id="species-name">
        <label name="name">Animal Name: </label>
        <input [(ngModel)]="childSelectedAnimal.name" name="name" type="text" id="animal-name">
        <label name="age">Age: </label>
        <input [(ngModel)]="childSelectedAnimal.age" name="age" type="text" id="age">
        <label name="diet">Diet: </label>
        <input [(ngModel)]="childSelectedAnimal.diet" name="diet" type="text" id="diet">
        <label name="location">Zoo Location: </label>
        <input [(ngModel)]="childSelectedAnimal.location" name="location" type="text" id="location">
        <label name="caretakers"># Caretakers on Staff: </label>
        <input [(ngModel)]="childSelectedAnimal.caretakers" name="caretakers" type="text" id="caretakers">
        <label name="sex">Sex of Animal: </label>
        <input [(ngModel)]="childSelectedAnimal.sex" name="sex" type="text" id="sex">
        <label name="likes">Likes: </label>
        <input [(ngModel)]="childSelectedAnimal.likes" name="likes" type="text" id="likes">
        <label name="dislikes">Dislikes: </label>
        <input [(ngModel)]="childSelectedAnimal.dislikes" name="dislikes" type="text" id="dislikes">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `

})

export class AnimalEditComponent {
  @Input() childSelectedAnimal: Animal;

}
