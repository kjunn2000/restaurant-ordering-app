package com.moodyjun.restaurantorderingapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class RestaurantOrderingAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantOrderingAppApplication.class, args);
	}

}
