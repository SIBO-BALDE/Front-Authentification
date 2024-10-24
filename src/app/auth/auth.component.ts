import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'] 
})
export class AuthComponent implements OnInit {
  
  // formGroup: FormGroup; 

  constructor(
   private  router: Router,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize formGroup with form controls
    // this.formGroup = this.fb.group({
    //   nom: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   genre: ['', Validators.required],
    //   telephone: ['', Validators.required]
    // });
  }

  onSubmit(): void {
    console.log('okay')
  }

  onReset(): void {
    // this.formGroup.reset();
    console.log('oaky')
  }

  navigateToLogin(): void {
   
    this.router.navigate(['/login']);
  }
}
