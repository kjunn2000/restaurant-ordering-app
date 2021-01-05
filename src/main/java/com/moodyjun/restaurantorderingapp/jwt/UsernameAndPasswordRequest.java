package com.moodyjun.restaurantorderingapp.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsernameAndPasswordRequest {
    private String username;
    private String password;
}
