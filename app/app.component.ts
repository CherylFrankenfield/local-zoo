import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{zooName}}</h1>
  <h4>Animal Intake</h4>
  `
})

export class AppComponent {
  zooName: string = 'Zoolandia';
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox','Moon',2,'Carnivore','Northern Trail',5,'Female','Cool shade','Loud noises'),
    new Animal('Lutrinae','Mrs. Whiskers',5,'Omnivore','Cascade Stream',2,'Female','Mussels','Visitors who wear purple'),
    new Animal('Oreamnos americanus','Old Beardy',15,'Herbivore','Cascade Crest',4,'Male','Climbing','Marmots'),
    new Animal('Felidae','Sneakers',1,'Carnivore','Predators of Africa',3,'Being alone','Mice'),
    new Animal('Sus scrofa','Jerry',1,'Omnivore','Asia Islands',2,'Dirt baths','Bacon'),
  ]
}
