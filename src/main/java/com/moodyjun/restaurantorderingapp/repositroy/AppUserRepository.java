package com.moodyjun.restaurantorderingapp.repositroy;

import com.moodyjun.restaurantorderingapp.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, UUID> {
        AppUser findAppUserByUsername(String username);
}
