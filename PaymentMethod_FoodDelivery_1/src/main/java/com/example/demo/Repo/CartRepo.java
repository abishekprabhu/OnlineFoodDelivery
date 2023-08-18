package com.example.demo.Repo;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.CartItem;
import com.example.demo.entity.FoodItem;



public interface CartRepo extends JpaRepository<CartItem, Long> {

	public List<CartItem> findAllByUserId(Long userId);

	public CartItem findByUserIdAndFoodItem(Long userId, FoodItem foodItem);

}
