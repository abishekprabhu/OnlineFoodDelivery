package com.example.demo.Repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.FoodItem;


public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {
	@Query("SELECT foodItem FROM FoodItem foodItem WHERE foodItem.availableQuantity>0 AND foodItem.enabled=true ")
	public List<FoodItem> findValidFoodItems();
}