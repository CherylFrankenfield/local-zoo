import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "diet",
  pure: false
})

export class DietPipe implements PipeTransform {
  transform(input: Animal[], desiredDiet){
    var output: Animal[] = [];
    if(desiredDiet === "omnivore") {
      for (var i=0; i < input.length; i++) {
        if (input[i].diet === "omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiet === "herbivore") {
      for (var i=0; i < input.length; i++) {
        if (input[i].diet === "herbivore") {
          output.push(input[i]);
      }
    }
      return output;
    } else if (desiredDiet === "carnivore") {
      for (var i=0; i < input.length; i++) {
        if (input[i].diet === "carnivore") {
          output.push(input[i]);
      }
    }
      return output;
    } else {
      return input;
    }
  }
}
