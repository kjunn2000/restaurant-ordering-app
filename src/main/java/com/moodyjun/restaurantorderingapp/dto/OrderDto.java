package com.moodyjun.restaurantorderingapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {

    private String userId ;
    private int totalPrice;
    private List<Integer> orderItemList;
}
