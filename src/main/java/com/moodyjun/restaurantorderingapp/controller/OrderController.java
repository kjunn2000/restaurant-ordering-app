package com.moodyjun.restaurantorderingapp.controller;

import com.moodyjun.restaurantorderingapp.dto.OrderDto;
import com.moodyjun.restaurantorderingapp.model.Order;
import com.moodyjun.restaurantorderingapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    public OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @PostMapping("/place-order")
    public ResponseEntity<String> createOrder(@RequestBody OrderDto orderDto){

        Order order = orderService.createOrder(orderDto.getTotalPrice());
        return new ResponseEntity<String>("Successful place a new order.",HttpStatus.OK);
    }

    @GetMapping("/get-order")
    public List<Order> getOrder(){
        return orderService.getOrder();
    }

    @GetMapping("/get-all-order")
    public List<Order> getAllOrder(){
        return orderService.getAllOrder();
    }

    @PostMapping("/update-order")
    public ResponseEntity<String> updateOrder(@RequestBody OrderDto orderDto){
        orderService.updateOrder(orderDto);
        return new ResponseEntity<String>("Update Order Successfully",HttpStatus.OK);
    }

    @PostMapping("/update-order-status/{orderId}")
    public ResponseEntity<String> updateOrderStatus(@PathVariable("orderId") String orderId){
        orderService.updateOrderStatus(orderId);
        return new ResponseEntity<String>("Update Order Status Successfully",HttpStatus.OK);
    }
}
