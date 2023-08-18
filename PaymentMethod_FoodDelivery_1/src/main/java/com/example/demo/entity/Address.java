package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data //If lombok is used

public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;
    private String addressLine1;
    private String addressLine2;
    private String street;
    private String city;
    private String state;
    private String zipcode;
	
        // getters and setters if lombok is not used

}	
