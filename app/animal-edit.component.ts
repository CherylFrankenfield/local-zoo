import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-edit',
  template: `
    <form id="animal-edit-form">
      <div class="form-group">
        <div *ngIf="childSelectedAnimal">
          <label name="species">Species Name: </label>
          <input [(ngModel)]="childSelectedAnimal.species" name="species" type="text" id="species-name"><br>
          <label name="name">Animal Name: </label>
          <input [(ngModel)]="childSelectedAnimal.name" name="name" type="text" id="animal-name"><br>
          <label name="age">Animal Age: </label>
          <input [(ngModel)]="childSelectedAnimal.age" name="age" type="text" id="age"><br>
          <label name="diet">Animal Diet: </label>
          <input [(ngModel)]="childSelectedAnimal.diet" name="diet" type="text" id="diet"><br>
          <label name="location">Zoo Location: </label>
          <input [(ngModel)]="childSelectedAnimal.location" name="location" type="text" id="location"><br>
          <label name="caretakers"># Caretakers: </label>
          <input [(ngModel)]="childSelectedAnimal.caretakers" name="caretakers" type="text" id="caretakers"><br>
          <label name="sex">Sex of Animal: </label>
          <input [(ngModel)]="childSelectedAnimal.sex" name="sex" type="text" id="sex"><br>
          <label name="likes">Animal Likes: </label>
          <input [(ngModel)]="childSelectedAnimal.likes" name="likes" type="text" id="likes"><br>
          <label name="dislikes">Animal Dislikes: </label>
          <input [(ngModel)]="childSelectedAnimal.dislikes" name="dislikes" type="text" id="dislikes"><br>
          <button class="btn btn-outline-secondary" (click)="doneButtonClicked()">DONE</button>
        </div>
      </div>
    </form>
  `

})

export class AnimalEditComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
