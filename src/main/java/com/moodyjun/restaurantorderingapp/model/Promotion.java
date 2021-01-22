package com.moodyjun.restaurantorderingapp.model;

import com.fasterxml.jackson.annotation.*;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name="promotion")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Promotion {
    @Id
    private UUID promotionId;
    private String promotionName;
    private LocalDate dateOfExpired;
    private int discountPercentage;
    private boolean active;
    @OneToMany(mappedBy = "promotion")
    private List<Menu> promotionItems;

}
