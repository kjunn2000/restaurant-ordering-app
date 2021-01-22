package com.moodyjun.restaurantorderingapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {

    private String orderId ;
    private int totalPrice;
    private List<UpdateCartDto> orderItems;
}
