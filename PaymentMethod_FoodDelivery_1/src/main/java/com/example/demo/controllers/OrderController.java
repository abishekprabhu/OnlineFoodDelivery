package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repo.OrderRepository;
import com.example.demo.entity.OrderDetails;

@RestController
@CrossOrigin(origins = "*")
public class OrderController {

  @Autowired
  private OrderRepository orderRepository;

  @PostMapping("/createOrder")
  public ResponseEntity<?> createOrder(@RequestBody OrderDetails orderDetails) {
    // Save order details to the database
    OrderDetails savedOrder = orderRepository.save(orderDetails);
    return ResponseEntity.ok(savedOrder);
  }
}
