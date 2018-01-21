import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-new',
  template: `
    <h2>Animal Intake</h2>
    <p>Add new animal to database.<p>
    <form>
      <div class="form-group">
        <label name="species">Species Name</label>
        <input #newSpecies name="species"><br>
        <label name="name">Animal Name</label>
        <input #newName name="name"><br>
        <label name="age">Animal Age</label>
        <input #newAge name="age"><br>
        <label name="diet">Diet</label>
        <input #newDiet name="diet"><br>
        <label name="location">Zoo Location</label>
        <input #newLocation name="location"><br>
        <label name="caretakers"># of Caretakers</label>
        <input #newCaretakers name="caretakers"><br>
        <label name="sex">Sex of Animal</label>
        <input #newSex name="sex"><br>
        <label name="likes">Animal Likes</label>
        <input #newLikes name="likes"><br>
        <label name="dislikes">Animal Dislikes</label>
        <input #newDislikes name="dislikes"><br>
      </div>
      <button class="btn btn-outline-secondary" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">ADD ANIMAL</button>
    </form>
  `
})

export class AnimalNewComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species,name,age,diet,location,caretakers,sex,likes,dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
