package com.moodyjun.restaurantorderingapp.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "userId")
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
    @JsonIgnore
    @OneToMany(mappedBy = "appUser")
    private List<Order> orderList;
}
