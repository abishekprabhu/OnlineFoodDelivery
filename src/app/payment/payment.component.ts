import { Component, OnInit } from '@angular/core';
import { RazorpayService } from '../razorpay.service';
import { HttpClient } from '@angular/common/http';
import { OrderServiceService } from '../order-service.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  isLoading: boolean = false;
  amount!: number;
  email!: string;
  contact!: string;
  name!: string;
  address!: string;
  city!: string;
  state!: string;
  zip!: string;
  cartItems: CartItem[] = [];
  paymentForm: FormGroup;
  emailInvalid: boolean = false;
  contactInvalid: boolean = false;
  totalCartCost: number = 0;
  alertMessage='';

  regForm = this.builder.group({
    amount: this.builder.control({ value: this.amount, disabled: true }, Validators.required),
    email: this.builder.control('', [Validators.required, Validators.email]),
    contact: this.builder.control('', Validators.required),
    name: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    city: this.builder.control('', Validators.required),
    state: this.builder.control('', Validators.required),
    zip: this.builder.control('', Validators.required)
  });
  constructor(
    private razorpayService: RazorpayService,
    private http: HttpClient,
    private orderService: OrderServiceService,
    private router: Router,
    private cartService: CartService,
    private builder: FormBuilder
  ) {
    this.paymentForm = this.builder.group({
      amount: [{ value: '', disabled: true }, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }



  ngOnInit(): void {
    this.razorpayService.loadScript().subscribe(() => {
      // Razorpay SDK loaded
    });
    this.getCartItems();
    this.amount = this.cartItemsTotalCost();
  }

  getCartItems(): void {
    this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
      this.amount = this.cartItemsTotalCost();
    });
  }

  cartItemsTotalCost(): number {
    return this.cartItems.reduce((total, cartItem) => total + cartItem.totalFoodItemCost, 0);
  }

  makePayment() {
    const userId = 1;
    const paymentType = 'online';
    const options: any = {
      key: 'rzp_test_t51Ev8vhVfMTFO',
      amount: this.amount * 100, // Amount in paisa
      name: 'FoodPanda',
      description: 'Payment for your order',
      handler: (response: any) => {
        console.log(response);
        const userDetails = { /* user data */ };
        const orderDetails = {
          userId: userId,
          name: this.name,
          email: this.email,
          contact: this.contact,
          amount: this.amount,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          paymentMethod: paymentType,
          paymentid: response.razorpay_payment_id
        };

        this.orderService.createOrder(orderDetails).subscribe(
          (data: any) => {
            console.log('Order created:', data);
          },
          (error: any) => {
            console.error('Error creating order:', error);
          }
        );

        this.router.navigate(['/order-summary'], {
          queryParams: { order: JSON.stringify(orderDetails), user: JSON.stringify(userDetails) }
        });
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
        color: '#6466e3'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        }
      }
    };

    const rzp = new Razorpay(options);
    rzp.on('payment.failed', (response: any) => {
      console.log('Payment failed:', response.error.code, response.error.description);
    });
    rzp.open();
  
    // Reset the amount after payment is made
    rzp.on('payment.success', (response: any) => {
      this.amount = 0; // Reset the amount to null
    });
  }

  payWithCash() {
    // Handle cash payment logic here
      this.isLoading = true; // Show the spinner

    setTimeout(() => {
    const userId = 1;
    const paymentType = 'cash';
    const userDetails = { /* user data */ };
    const orderDetails = {
      userId: userId,
      name: this.name,
      email: this.email,
      contact: this.contact,
      amount: this.amount,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip,
      paymentMethod: paymentType
    };

    this.orderService.createOrder(orderDetails).subscribe(
      (data: any) => {
        console.log('Order created:', data);
      },
      (error: any) => {
        console.error('Error creating order:', error);
      }
    );

    this.router.navigate(['/order-summary'], {
      queryParams: { order: JSON.stringify(orderDetails), user: JSON.stringify(userDetails) }
    });
  

  // Reset isLoading state after navigation
  setTimeout(() => {
    this.isLoading = false;
  }, 100); // A small delay to ensure smooth transition
}, 100); // Wait for 0.1 seconds
}

  validateEmail(email: string): void {
    this.emailInvalid = !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  }

  validateContact(contact: string): void {
    this.contactInvalid = !/^\d{10}$/.test(contact);
  }

  get emailField() {
    return this.regForm.get('email');
  }

  get contactField() {
    return this.regForm.get('contact');
  }

  get nameField() {
    return this.regForm.get('name');
  }

  get addressField() {
    return this.regForm.get('address');
  }

  get cityField() {
    return this.regForm.get('city');
  }

  get stateField() {
    return this.regForm.get('state');
  }

  get zipField() {
    return this.regForm.get('zip');
  }

}
