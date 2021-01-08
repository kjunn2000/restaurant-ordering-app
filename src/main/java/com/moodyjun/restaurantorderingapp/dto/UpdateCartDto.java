package com.moodyjun.restaurantorderingapp.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateCartDto {

    private String cartItemId;
    private int quantity;
    private String comment;
}
