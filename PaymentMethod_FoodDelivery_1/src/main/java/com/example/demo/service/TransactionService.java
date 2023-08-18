package com.example.demo.service;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.example.demo.entity.TransactionDetails;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@Service
public class TransactionService {

	private static final String KEY ="rzp_test_t51Ev8vhVfMTFO";
	private static final String KEY_SECRET ="74wo7RymLNZaB5fYFQDe7uae";
	private static final String CURRENCY = "INR";
	
	public TransactionDetails createTransaction(Double amount) {
		//amount
		//currency
		//key
		//secret key
		
		
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("amount", (amount*100));
		jsonObject.put("currency", CURRENCY);
		try {
			RazorpayClient razorpayClient = new RazorpayClient(KEY, KEY_SECRET);
			Order order =  razorpayClient.orders.create(jsonObject);
			
			TransactionDetails transactionDetails = prepareTransactionDetails(order); 
			return transactionDetails;
			//System.out.println(order);
		} catch (RazorpayException e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		
		return null;
	}
	
	
	private TransactionDetails prepareTransactionDetails(Order order) {
		String orderId = order.get("id");
		String currency = order.get("currency");
		int amount = order.get("amount");
		
		TransactionDetails transactionDetails = new TransactionDetails(orderId, currency , amount , KEY);
		return transactionDetails;
	}
}
