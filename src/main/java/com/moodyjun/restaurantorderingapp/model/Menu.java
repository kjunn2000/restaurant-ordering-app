package com.moodyjun.restaurantorderingapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="menu")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int menuId ;
    private String title ;
    private String description ;
    private int price ;
    @Enumerated(EnumType.STRING)
    private FoodType foodType;
    @ElementCollection
    private List<String> imageUrls ;
}
