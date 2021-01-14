package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Bike;

public interface BikeRepositories extends JpaRepository<Bike, Long> {

}
