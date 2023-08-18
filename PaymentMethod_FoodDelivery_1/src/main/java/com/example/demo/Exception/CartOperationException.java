package com.example.demo.Exception;

public class CartOperationException extends RuntimeException {
    public CartOperationException(String message) {
        super(message);
    }
}
