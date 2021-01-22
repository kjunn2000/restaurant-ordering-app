package com.moodyjun.restaurantorderingapp.repositroy;

import com.moodyjun.restaurantorderingapp.model.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PromotionRepository extends JpaRepository<Promotion, UUID> {
}
