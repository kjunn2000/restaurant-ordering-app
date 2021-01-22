package com.moodyjun.restaurantorderingapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PromotionDto {

    private String promotionName;
    private LocalDate dateOfExpired;
    private int discountPercentage;
    private List<Integer> promotionItems;
}
