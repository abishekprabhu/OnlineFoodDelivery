import { Component, OnInit } from '@angular/core';
import { RazorpayService } from '../razorpay.service';
import { HttpClient } from '@angular/common/http';

declare var Razorpay: any;
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  amount!: number;
  paymentType!: string;
  cardNumber!: string;
  expiry!: string;
  cvv!: string;
  upiAddress!: string;
  email!: string;
  contact!: string;
  name!: string;

  constructor( private razorpayService: RazorpayService, private http: HttpClient) { }
  ngOnInit(): void {
    this.razorpayService.loadScript().subscribe(() => {
      // Razorpay SDK loaded
    });
  }
  makePayment() {
    const options:any = {
      key: 'rzp_test_t51Ev8vhVfMTFO',
      amount: this.amount * 100, // Amount in paisa
      name: 'FoodPanda',
      description: 'Payment for your order',
      handler: (response: any) => {
        // Handle successful payment response
       // console.log(paymentid);
        console.log(response);
      },
      prefill: {
        email: this.email,
        contact: this.contact,
        name: this.name
      },
      notes: {
        address: 'Your Address'
      },
      theme: {
        color: '#F37254'
      }
    };

    if (this.paymentType === 'card') {
      options['method'] = 'card';
      options['card'] = {
        number: this.cardNumber,
        expiry: this.expiry,
        cvv: this.cvv
      };
    } else if (this.paymentType === 'upi') {
      options['method'] = 'upi';
      options['vpa'] = this.upiAddress;
    }

    const rzp = new Razorpay(options);
    rzp.open();
  }
}