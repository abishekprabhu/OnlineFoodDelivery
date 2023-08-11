import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderServiceService } from '../order-service.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.css']
})
export class EditpasswordComponent implements OnInit {

  username: string = '';
  profileForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: OrderServiceService
  ) {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      // Add other fields as needed
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.loadUserProfile();
    });
  }

  loadUserProfile() {
    // Retrieve user details using the username and populate the form
    this.userService.getUserByUsername(this.username).subscribe(
      (user: User) => {
        this.profileForm.patchValue(user);
      },
      (error: any) => {
        console.error('Error fetching user profile', error);
      }
    );
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const updatedUser: User = this.profileForm.value;
      this.userService.updateUserDetails(updatedUser).subscribe(
        (response: any) => {
          console.log('User details updated successfully', response);
          // Handle success or navigate to another page
        },
        (error: any) => {
          console.error('Error updating user details', error);
          // Handle error
        }
      );
    }
  }
}