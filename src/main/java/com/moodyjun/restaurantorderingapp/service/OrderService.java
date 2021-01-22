package com.moodyjun.restaurantorderingapp.service;

import com.moodyjun.restaurantorderingapp.dto.OrderDto;
import com.moodyjun.restaurantorderingapp.model.*;
import com.moodyjun.restaurantorderingapp.repositroy.AppUserRepository;
import com.moodyjun.restaurantorderingapp.repositroy.CartItemRepository;
import com.moodyjun.restaurantorderingapp.repositroy.OrderRepository;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrderService {

    public AppUserRepository appUserRepository;
    public OrderRepository orderRepository;
    public MenuService menuService;
    public UserDetailsService userDetailsService;
    public CartItemRepository cartItemRepository;
    public CartService cartService;

    @Autowired
    public OrderService(AppUserRepository appUserRepository, OrderRepository orderRepository, MenuService menuService, UserDetailsService userDetailsService, CartItemRepository cartItemRepository, CartService cartService) {
        this.appUserRepository = appUserRepository;
        this.orderRepository = orderRepository;
        this.menuService = menuService;
        this.userDetailsService = userDetailsService;
        this.cartItemRepository = cartItemRepository;
        this.cartService = cartService;
    }

    @Transactional
    public Order createOrder(int totalPrice){
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        AppUser user = appUserRepository.findAppUserByUsername(username);
        ArrayList<CartItem> cartItems = new ArrayList<>(user.getCart());
        Order order = new Order ();
        order.setOrderId(UUID.randomUUID());
        order.setAppUser(user);
        order.setTotalPrice(totalPrice);
        order.setOrderStatus(OrderStatus.PENDING);
        order.setOrderTime(LocalDateTime.now());
        order.setOrderItemList(cartItems);

        orderRepository.saveAndFlush(order);
        user.setCart(new ArrayList<>());
        appUserRepository.save(user);
        return order;
    }

    public List<Order> getOrder(){
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        AppUser user = appUserRepository.findAppUserByUsername(username);
        return user.getOrderList();
    }

    public List<Order> getAllOrder(){
        return orderRepository.findAll();
    }

    public void updateOrder(OrderDto orderDto){
        System.out.println(orderDto);
        cartService.updateCart(orderDto.getOrderItems());
        Order order = orderRepository.findById(UUID.fromString(orderDto.getOrderId())).orElse(null);
         order.setTotalPrice(orderDto.getTotalPrice());
         orderRepository.save(order);
        return;
    }

    public void updateOrderStatus(String orderId){
        Order order = orderRepository.findById(UUID.fromString(orderId)).orElse(null);
        if(order.getOrderStatus()==OrderStatus.PENDING){
            order.setOrderStatus(OrderStatus.PREPARING);
        }else if (order.getOrderStatus()==OrderStatus.PREPARING){
            order.setOrderStatus(OrderStatus.COMPLETED);
        }
        orderRepository.save(order);
    }
}
