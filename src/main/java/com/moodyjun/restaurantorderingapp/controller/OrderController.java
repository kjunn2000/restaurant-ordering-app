package com.moodyjun.restaurantorderingapp.controller;

import com.moodyjun.restaurantorderingapp.dto.OrderDto;
import com.moodyjun.restaurantorderingapp.model.Order;
import com.moodyjun.restaurantorderingapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    public OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @PostMapping("/create-order")
    public Order createOrder(OrderDto orderDto){
        return orderService.createOrder(orderDto.getUserId(), orderDto.getTotalPrice(),orderDto.getOrderItemList());

    }
}
