package com.moodyjun.restaurantorderingapp.repositroy;

import com.moodyjun.restaurantorderingapp.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends JpaRepository<Menu,Integer> {

}
