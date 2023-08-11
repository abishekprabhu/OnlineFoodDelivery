import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditpasswordComponent } from '../editpassword/editpassword.component';
import { OrderServiceService } from '../order-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = '';
  showPasswordUpdate: boolean = false;
  newPassword: string = '';

  constructor(private route: ActivatedRoute, private userService: OrderServiceService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  togglePasswordUpdate() {
    this.showPasswordUpdate = !this.showPasswordUpdate;
  }

  updatePassword() {
    this.userService.updatePassword(this.username, this.newPassword).subscribe(
      response => {
        console.log('Password updated successfully', response);
        // Show a success message to the user
      },
      error => {
        console.error('Error updating password', error);
        // Show an error message to the user
      }
    );
  }
}