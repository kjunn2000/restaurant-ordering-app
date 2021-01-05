package com.moodyjun.restaurantorderingapp.service;

import com.moodyjun.restaurantorderingapp.model.Menu;
import com.moodyjun.restaurantorderingapp.model.Order;
import com.moodyjun.restaurantorderingapp.model.OrderStatus;
import com.moodyjun.restaurantorderingapp.repositroy.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class OrderService {

    public OrderRepository orderRepository;
    public MenuService menuService;
    public UserDetailsService userDetailsService;

    @Autowired
    public OrderService(OrderRepository orderRepository, MenuService menuService, UserDetailsService userDetailsService) {
        this.orderRepository = orderRepository;
        this.menuService = menuService;
        this.userDetailsService = userDetailsService;
    }

    public Order createOrder(String userId, int totalPrice, List<Integer> menuIdList){
        Order order = new Order ();
        order.setOrderId(UUID.randomUUID());
        order.setAppUser(userDetailsService.findUserByUserId(userId));
        order.setTotalPrice(totalPrice);
        order.setOrderStatus(OrderStatus.PENDING);
        order.setOrderTime(LocalDateTime.now());
        List<Menu> orderItemList = new ArrayList<>();
        for(int menuId : menuIdList){
            orderItemList.add(menuService.findMenuById(menuId));
        }
        order.setOrderItemList(orderItemList);
        return orderRepository.save(order);
    }
}
