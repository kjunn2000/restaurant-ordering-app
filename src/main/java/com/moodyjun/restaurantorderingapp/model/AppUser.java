package com.moodyjun.restaurantorderingapp.model;

import com.moodyjun.restaurantorderingapp.security.UserRole;
import lombok.*;

import javax.annotation.Nullable;
import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name="appUser")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppUser {

    @Id
    private UUID userId;
    private String username;
    private String password;
    private String email;
    @Enumerated
    private UserRole role;
    @OneToMany
    private List<CartItem> cart;
    @OneToMany(mappedBy = "appUser")
    private List<Order> orderList;
}
