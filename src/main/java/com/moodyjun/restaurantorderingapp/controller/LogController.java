package com.moodyjun.restaurantorderingapp.controller;

import com.moodyjun.restaurantorderingapp.dto.UserDto;
import com.moodyjun.restaurantorderingapp.jwt.UsernameAndPasswordRequest;
import com.moodyjun.restaurantorderingapp.model.AppUser;
import com.moodyjun.restaurantorderingapp.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/log")
@RestController
public class LogController {

    @Autowired
    UserDetailsService userDetailsService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto userDto){
       int result = userDetailsService.createAppUser(userDto.getUsername(),userDto.getPassword(),userDto.getEmail());
       if(result==1)
        return new ResponseEntity<String>("Registered successfully", HttpStatus.OK);
       else if (result==-1) return new ResponseEntity<String>("Username existed", HttpStatus.EXPECTATION_FAILED);
       return null;
    }


}
