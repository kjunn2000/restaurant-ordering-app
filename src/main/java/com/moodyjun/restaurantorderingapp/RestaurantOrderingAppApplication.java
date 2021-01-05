package com.moodyjun.restaurantorderingapp;

import com.moodyjun.restaurantorderingapp.model.AppUser;
import com.moodyjun.restaurantorderingapp.repositroy.AppUserRepository;
import com.moodyjun.restaurantorderingapp.security.UserRole;
import com.moodyjun.restaurantorderingapp.service.UserDetailsService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.UUID;

@EnableJpaRepositories
@SpringBootApplication
public class RestaurantOrderingAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantOrderingAppApplication.class, args);

	}

}
