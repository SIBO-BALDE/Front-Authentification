import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(
    private  router: Router,
     private fb: FormBuilder) {}

  onSubmit(): void {
    console.log('okay')
  }

  onReset(): void {
    // this.formGroup.reset();
    console.log('oaky')
  }

  navigateToLogin(): void {
    this.router.navigate(['/auth']); 
  }

}
