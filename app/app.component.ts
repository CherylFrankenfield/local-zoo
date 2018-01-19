import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalListComponent } from './animal-list.component';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{zooName}}</h1>
    <animal-list [childAnimalList]="masterAnimals"></animal-list>
    <animal-edit [childSelectedAnimal]="selectedAnimal"></animal-edit>
    <animal-new > </animal-new>
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

  editAnimal() {
    alert("You just requested to edit an animal!");
  }

}
