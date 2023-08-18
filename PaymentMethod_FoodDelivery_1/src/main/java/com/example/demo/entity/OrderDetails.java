package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "orders")
public class OrderDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long orderid;

  private String name;
  private String email;
  private String contact;
  private Double amount;
  private String address;
  private String city;
  private String state;
  private String zip;
  
  private Long userId;
  private String paymentMethod;
  private Long paymentid;
  // Getters and setters

}
