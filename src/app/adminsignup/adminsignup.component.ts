import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder , private authService : AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      this.authService.registerAdmin(formData).subscribe(
        response => {
          console.log(response); // Handle successful registration
        },
        error => {
          console.error(error); // Handle registration error
        }
      );
    }
  }
}