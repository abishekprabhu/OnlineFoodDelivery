package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.TransactionDetails;
import com.example.demo.service.TransactionService;

@Controller
@RestController
public class TransactionController {

	
	@Autowired
	TransactionService transactionService;
	
	@GetMapping({"createTransaction/{amount}"})
	public TransactionDetails createTransaction(@PathVariable(name="amount") Double amount) {
	   return transactionService.createTransaction(amount);
	}
}
