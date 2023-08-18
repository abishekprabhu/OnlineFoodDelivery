package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.User;



public interface UserRepo extends JpaRepository<User, Long> {
	User findByUsername(String username);
	User findByEmail(String email);
	
}
