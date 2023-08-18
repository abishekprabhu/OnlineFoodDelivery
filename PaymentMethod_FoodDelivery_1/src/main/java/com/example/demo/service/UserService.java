package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repo.UserRepo;
import com.example.demo.entity.User;

@Service
public class UserService {

  @Autowired
  private UserRepo userRepository;

  public User createUser(User user) {
    return userRepository.save(user);
  }

  public User getUserByUsername(String username) {
    return userRepository.findByUsername(username);
  }
  public User getUserByEmail(String email) {
	    return userRepository.findByEmail(email);
	  }
  public boolean authenticateUser(String username, String password) {
	    User user = userRepository.findByUsername(username);
	    if (user != null && user.getPassword().equals(password)) {
	      return true;
	    }
	    return false;
	  }
  
  public User updateUserPassword(User user, String newPassword) {
      user.setPassword(newPassword);
      return userRepository.save(user);
  }
  
  
}
