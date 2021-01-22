package com.moodyjun.restaurantorderingapp.controller;

import com.moodyjun.restaurantorderingapp.dto.CartDto;
import com.moodyjun.restaurantorderingapp.dto.UpdateCartDto;
import com.moodyjun.restaurantorderingapp.model.CartItem;
import com.moodyjun.restaurantorderingapp.service.CartService;
import com.moodyjun.restaurantorderingapp.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserDetailsService userDetailsService;
    private CartService cartService;

    @Autowired
    public UserController(UserDetailsService userDetailsService, CartService cartService) {
        this.userDetailsService = userDetailsService;
        this.cartService = cartService;
    }

    @PostMapping("/add-to-cart")
    public ResponseEntity<CartItem> addToCart(@RequestBody CartDto addToCartDto){
        CartItem cartItem = cartService.addToCart(addToCartDto.getMenuId(), addToCartDto.getQuantity(), addToCartDto.getComment());
        return new ResponseEntity<CartItem>( cartItem, HttpStatus.OK);
    }

    @GetMapping("/get-cart")
    public ResponseEntity<List<CartItem>> getCart(){
        return new ResponseEntity<List<CartItem>>(cartService.getCart(),HttpStatus.OK);
    }

    @DeleteMapping("/delete-cart/{cartItemId}")
    public ResponseEntity<String> deleteCartItem(@PathVariable("cartItemId") String cartItemId ){
        cartService.deleteCart(UUID.fromString(cartItemId));
        return new ResponseEntity<String>("Deleted Successful from the cart",HttpStatus.OK);

    }

    @PostMapping("/update-cart")
    public ResponseEntity<String> updateCartItem(@RequestBody List<UpdateCartDto> cartDtoList){
        cartService.updateCart(cartDtoList);
        return new ResponseEntity<String>("Update Successfully to the cart",HttpStatus.OK);
    }
}
