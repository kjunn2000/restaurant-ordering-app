package com.moodyjun.restaurantorderingapp.controller;

import com.moodyjun.restaurantorderingapp.dto.PromotionDto;
import com.moodyjun.restaurantorderingapp.model.Promotion;
import com.moodyjun.restaurantorderingapp.service.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/promotion")
public class PromotionController {

    @Autowired
    private PromotionService promotionService;

    @PostMapping("/create-promotion")
    public ResponseEntity<Promotion> createPromotion(@RequestBody PromotionDto promotionDto){
        return new ResponseEntity<Promotion>(promotionService.createPromotion(promotionDto), HttpStatus.OK);
    }

    @GetMapping("/get-all-promotion")
    public ResponseEntity<List<Promotion>> getAllPromotion(){
        List<Promotion> allPromotion = promotionService.getAllPromotion();
        return new ResponseEntity<List<Promotion>>(allPromotion, HttpStatus.OK);
    }

    @DeleteMapping("/delete-promotion/{promotionId}")
    public ResponseEntity<String> deletePromotion(@PathVariable String promotionId){
        promotionService.deletePromotion(UUID.fromString(promotionId));
        return new ResponseEntity<String>("Delete Successful.",HttpStatus.OK);
    }

    @PostMapping("/update-promotion-status/{promotionId}")
    public ResponseEntity<String> updatePromotion(@PathVariable String promotionId){
        promotionService.updatePromotionStatus(UUID.fromString(promotionId));
        return new ResponseEntity<String>("Update Successful.",HttpStatus.OK);
    }

}

