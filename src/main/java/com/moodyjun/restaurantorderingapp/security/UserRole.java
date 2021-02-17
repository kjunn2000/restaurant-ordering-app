package com.moodyjun.restaurantorderingapp.security;

import com.google.common.collect.Sets;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

import static com.moodyjun.restaurantorderingapp.security.UserAuthority.*;

public enum UserRole {
    CUSTOMER(Sets.newHashSet(VIEW_MENU,PLACE_ORDER,ADD_TO_CART)),
    STAFF(Sets.newHashSet(UPDATE_ORDER)),
    ADMIN(Sets.newHashSet(MANAGE_PROMOTION,MANAGE_FOOD_ITEM));

    private Set<UserAuthority> authorities;

    UserRole(Set<UserAuthority> authorities) {
        this.authorities = authorities;
    }

    public Set<GrantedAuthority> getGrantedAuthorities(){
        Set grantedAuthorities = authorities.stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getAuthority()))
                .collect(Collectors.toSet());
        grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_"+this.name()));
        return grantedAuthorities;
    }
}
