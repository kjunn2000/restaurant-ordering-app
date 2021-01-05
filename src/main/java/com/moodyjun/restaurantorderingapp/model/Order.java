package com.moodyjun.restaurantorderingapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name="order_table")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    private UUID orderId;
    @ManyToOne
    private AppUser appUser;
    private int totalPrice;
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;
    private LocalDateTime orderTime;
    @OneToMany
    private List<Menu> orderItemList;

}
