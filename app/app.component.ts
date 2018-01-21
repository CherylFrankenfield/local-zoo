import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalEditComponent } from './animal-edit.component';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="header">
      <h1>{{zooName}}</h1>
      <ul>
        <li>HOME</li>
        <li>ANIMAL LIST</li>
        <li>ANIMAL INTAKE</li>
        <li>PURCHASING ADMIN</li>
      </ul>
    </div>
    <div class="hero-animal-list">
      <animal-list [childAnimalList]="masterAnimals" (clickSender)="editAnimal($event)"></animal-list>
    </div>
    <div class="hero-animal-edit">
      <animal-edit [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></animal-edit>
    </div>
    <div class="footer">
      <animal-new (newAnimalSender)="addAnimal($event)"></animal-new>
    </div>
  </div>
  `
})

export class AppComponent {
  zooName: string = 'Zoolandia';
  masterAnimals: Animal[] = [
    new Animal('Arctic Fox','Moon',2,'Carnivore','Northern Trail',5,'Female','Cool shade','Loud noises'),
    new Animal('Lutrinae','Mrs. Whiskers',5,'Omnivore','Cascade Stream',2,'Female','Mussels','Visitors who wear purple'),
    new Animal('Oreamnos americanus','Old Beardy',15,'Herbivore','Cascade Crest',4,'Male','Climbing','Marmots'),
    new Animal('Felidae','Sneakers',1,'Carnivore','Predators of Africa',3,'Female','Being alone','Mice'),
    new Animal('Sus scrofa','Jerry',1,'Omnivore','Asia Islands',2,'Male','Dirt baths','Bacon')
  ];
  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    // alert("You just requested to edit an animal!");
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimals.push(newAnimalFromChild);
  }

}
