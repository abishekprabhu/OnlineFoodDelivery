package com.example.demo.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

  @Autowired
  private UserService userService;

  @PostMapping("/register")
  public ResponseEntity<?> registerUser(@RequestBody User user) {
    // Check if username already exists
    if (userService.getUserByUsername(user.getUsername()) != null) {
      return ResponseEntity.badRequest().body("Username already exists");
    }
    
    // Check if email already exists
    if (userService.getUserByEmail(user.getEmail()) != null) {
      return ResponseEntity.badRequest().body("Email already exists");
    }

    // Create user
    User newUser = userService.createUser(user);
    return ResponseEntity.ok("User registered successfully");
  }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
      String username = loginRequest.get("username");
      String password = loginRequest.get("password");

      User user = userService.getUserByUsername(username);
      if (user != null && user.getPassword().equals(password)) {
          return ResponseEntity.ok("{\"message\": \"User logged in successfully\", \"username\": \"" + username + "\"}");
      } else {
          return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Invalid credentials\"}");
      }
  }

  
  @PutMapping("/{username}/updatePassword")
  public ResponseEntity<?> updatePassword(@PathVariable String username, @RequestBody Map<String, String> newPasswordMap) {
    String newPassword = newPasswordMap.get("newPassword");
    User user = userService.getUserByUsername(username);
    if (user == null) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    }

    userService.updateUserPassword(user, newPassword);
    return ResponseEntity.ok("Password updated successfully");
  }

}
