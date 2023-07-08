import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  model: User = new User('', '', '', '');

  constructor() {}

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.model);
  }
}
