package com.moodyjun.restaurantorderingapp.dto;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown =true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private String username ;
    private String password ;
    private String email;
}
