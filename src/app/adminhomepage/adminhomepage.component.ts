import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent {

  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload() {
    if (!this.selectedFile) {
      console.log("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:8084/api/images/upload', formData, {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    }).subscribe(
      (response) => {
        console.log('Upload success:', response);
      },
      (error) => {
        console.error('Upload error:', error);
      }
    );
  }
}
