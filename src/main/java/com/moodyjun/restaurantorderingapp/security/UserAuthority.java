package com.moodyjun.restaurantorderingapp.security;

public enum UserAuthority {

    VIEW_MENU("view_menu"),PLACE_ORDER("place_order"),UPDATE_ORDER("update_order"),
    ADD_FOOD_ITEM("add_food_item"),UPDATE_FOOD_ITEM("update_food_item"),DELETE_FOOD_ITEM("delete_food_item");

    private final String authority;

    UserAuthority(String authority){
        this.authority = authority;
    }

    public String getAuthority() {
        return authority;
    }
}
