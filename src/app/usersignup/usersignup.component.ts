import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderServiceService } from '../order-service.service';
import { User } from '../user.model';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  registrationForm: FormGroup;
  registrationErrorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private userService: OrderServiceService) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const user: User = this.registrationForm.value;
      this.userService.registerUser(user).subscribe(
        (response: any) => {
          console.log('User registered successfully', response);
          this.registrationErrorMessage = ''; // Clear error message on success
        },
        (error: any) => {
          console.error('Error registering user', error);
          if (error.error === 'Username already exists') {
            this.registrationErrorMessage = 'Username already exists. Please choose a different username.';
          } else if (error.error === 'Email already exists') {
            this.registrationErrorMessage = 'Email already exists. Please use a different email address.';
          } else {
            this.registrationErrorMessage = 'An error occurred while registering. Please try again later.';
          }
        }
      );
    }
  }
}
