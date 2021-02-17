package com.moodyjun.restaurantorderingapp.security;

public enum UserAuthority {

    VIEW_MENU("view_menu"),
    PLACE_ORDER("place_order"),
    ADD_TO_CART("add_to_cart"),
    UPDATE_ORDER("update_order"),
    MANAGE_FOOD_ITEM("manage_food_item"),
    MANAGE_PROMOTION("manage_promotion");

    private final String authority;

    UserAuthority(String authority){
        this.authority = authority;
    }

    public String getAuthority() {
        return authority;
    }
}
