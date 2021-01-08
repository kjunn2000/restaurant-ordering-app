package com.moodyjun.restaurantorderingapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name="cart_item")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {

    @Id
    private UUID cartItemId;
    @OneToOne
    private Menu menuItem;
    private int quantity;
    private String comment;

    @Override
    public String toString() {
        return "CartItem{" +
                "cartItemId=" + cartItemId +
                ", menuItem=" + menuItem +
                ", quantity=" + quantity +
                ", comment='" + comment + '\'' +
                '}';
    }
}
