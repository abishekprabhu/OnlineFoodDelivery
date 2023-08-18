package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.OrderDetails;

public interface OrderRepository extends JpaRepository<OrderDetails, Long> {
}

