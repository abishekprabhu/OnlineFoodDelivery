import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderServiceService } from '../order-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usersigin',
  templateUrl: './usersigin.component.html',
  styleUrls: ['./usersigin.component.css']
})
export class UsersiginComponent implements OnInit {

  loginForm: FormGroup;
  loginErrorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private userService: OrderServiceService,private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      this.userService.loginUser(username, password).subscribe(
        (response: any) => {
          console.log('User logged in successfully', response);
          this.loginErrorMessage = ''; // Clear error message on success
          this.router.navigate(['/foodlist'], { queryParams: { username } });
        },
        (error: any) => {
          console.error('Error logging in user', error);
          this.loginErrorMessage = 'Invalid credentials. Please check your username and password.';
        }
      );
    }
  }
}