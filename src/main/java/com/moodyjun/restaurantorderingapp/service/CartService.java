package com.moodyjun.restaurantorderingapp.service;

import com.moodyjun.restaurantorderingapp.dto.CartDto;
import com.moodyjun.restaurantorderingapp.dto.UpdateCartDto;
import com.moodyjun.restaurantorderingapp.model.AppUser;
import com.moodyjun.restaurantorderingapp.model.CartItem;
import com.moodyjun.restaurantorderingapp.model.Menu;
import com.moodyjun.restaurantorderingapp.repositroy.AppUserRepository;
import com.moodyjun.restaurantorderingapp.repositroy.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CartService {

    private AppUserRepository appUserRepository;
    private CartItemRepository cartItemRepository;
    private MenuService menuService;

    @Autowired
    public CartService(AppUserRepository appUserRepository, CartItemRepository cartItemRepository, MenuService menuService) {
        this.appUserRepository = appUserRepository;
        this.cartItemRepository = cartItemRepository;
        this.menuService = menuService;
    }

    public CartItem addToCart(int menuId, int quantity, String comment){
        Menu menu = menuService.findMenuById(menuId);
        String username = (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        AppUser user = appUserRepository.findAppUserByUsername(username);
        CartItem cartItem = new CartItem(UUID.randomUUID(),menu,quantity,comment);
        cartItemRepository.save(cartItem);
        user.getCart().add(cartItem) ;
        appUserRepository.save(user);
        return cartItem;
    }

    public List<CartItem> getCart(){
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        AppUser user = appUserRepository.findAppUserByUsername(username);
        System.out.println(user.getCart());
        return user.getCart();

    }

    public void deleteCart(UUID cartItemId){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName();
        Object credentials = auth.getCredentials();
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        AppUser user = appUserRepository.findAppUserByUsername(username);
        System.out.println(user.getCart().size());

        List<CartItem> newCart = user.getCart().stream()
                .filter(cartItem -> !(cartItem.getCartItemId().equals(cartItemId)))
                .collect(Collectors.toList());
        System.out.println(user.getCart().size());
        user.setCart(newCart);
        appUserRepository.save(user);
        cartItemRepository.deleteById(cartItemId);
    }

    public void updateCart(List<UpdateCartDto> updateCartDtoList){

        for (UpdateCartDto updateCartDto : updateCartDtoList){
            CartItem cartItem = cartItemRepository.findById(UUID.fromString(updateCartDto.getCartItemId())).orElse(null);
            assert cartItem != null;
            cartItem.setQuantity(updateCartDto.getQuantity());
            cartItem.setComment(updateCartDto.getComment());
            cartItemRepository.save(cartItem);
        }
    }

}
