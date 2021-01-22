package com.moodyjun.restaurantorderingapp.model;

import com.fasterxml.jackson.annotation.*;
import lombok.*;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="menu")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int menuId ;
    private String title ;
    private String description ;
    private int price ;
    private Integer promotionPrice;
    @Enumerated(EnumType.STRING)
    private FoodType foodType;
    @ElementCollection
    private List<String> imageUrls;
    @JsonIgnore
    @ManyToOne
    private Promotion promotion;
}
