package com.moodyjun.restaurantorderingapp.service;

import com.moodyjun.restaurantorderingapp.model.AppUser;
import com.moodyjun.restaurantorderingapp.model.CartItem;
import com.moodyjun.restaurantorderingapp.model.Menu;
import com.moodyjun.restaurantorderingapp.model.MyUserDetails;
import com.moodyjun.restaurantorderingapp.repositroy.AppUserRepository;
import com.moodyjun.restaurantorderingapp.repositroy.CartItemRepository;
import com.moodyjun.restaurantorderingapp.security.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    private AppUserRepository appUserRepository;
    private CartItemRepository cartItemRepository;
    private MenuService menuService;
    PasswordEncoder passwordEncoder;

    @Autowired
    public UserDetailsService(AppUserRepository appUserRepository, CartItemRepository cartItemRepository, MenuService menuService, PasswordEncoder passwordEncoder) {
        this.appUserRepository = appUserRepository;
        this.cartItemRepository = cartItemRepository;
        this.menuService = menuService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = appUserRepository.findAppUserByUsername(username);
        if(appUser==null) return null;
        return new MyUserDetails(appUser.getUsername(),appUser.getPassword(),appUser.getRole().getGrantedAuthorities());
    }

    public int createAppUser(String username, String password, String email){
        UserDetails userDetails = loadUserByUsername(username);
        if(userDetails!=null) return -1;
        AppUser appUser = appUserRepository.save(new AppUser(UUID.randomUUID(), username, passwordEncoder.encode(password), email, UserRole.CUSTOMER,new ArrayList(),new ArrayList()));
        return 1;
    }

    public AppUser findUserByUserId(String userId){
        Optional<AppUser> user = appUserRepository.findById(UUID.fromString(userId));
        return user.orElse(null);
    }


}
