package com.moodyjun.restaurantorderingapp.service;

import com.moodyjun.restaurantorderingapp.model.*;
import com.moodyjun.restaurantorderingapp.repositroy.AppUserRepository;
import com.moodyjun.restaurantorderingapp.repositroy.CartItemRepository;
import com.moodyjun.restaurantorderingapp.repositroy.OrderRepository;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class OrderService {

    public AppUserRepository appUserRepository;
    public OrderRepository orderRepository;
    public MenuService menuService;
    public UserDetailsService userDetailsService;
    public CartItemRepository cartItemRepository;

    @Autowired
    public OrderService(AppUserRepository appUserRepository, OrderRepository orderRepository, MenuService menuService, UserDetailsService userDetailsService, CartItemRepository cartItemRepository) {
        this.appUserRepository = appUserRepository;
        this.orderRepository = orderRepository;
        this.menuService = menuService;
        this.userDetailsService = userDetailsService;
        this.cartItemRepository = cartItemRepository;
    }




    public Order createOrder(int totalPrice){
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        AppUser user = appUserRepository.findAppUserByUsername(username);

        Order order = new Order ();
        order.setOrderId(UUID.randomUUID());
        order.setAppUser(user);
        order.setTotalPrice(totalPrice);
        order.setOrderStatus(OrderStatus.PENDING);
        order.setOrderTime(LocalDateTime.now());
        order.setOrderItemList(user.getCart());

        orderRepository.save(order);

        user.setCart(new ArrayList<>());

        appUserRepository.save(user);


        return order;
    }
}
