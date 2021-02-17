package com.moodyjun.restaurantorderingapp.controller;

import com.moodyjun.restaurantorderingapp.dto.MenuListResponseDto;
import com.moodyjun.restaurantorderingapp.model.FoodType;
import com.moodyjun.restaurantorderingapp.model.Menu;
import com.moodyjun.restaurantorderingapp.service.MenuService;
import com.moodyjun.restaurantorderingapp.service.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/menu")
public class MenuController {

    public MenuService menuService;
    public PromotionService promotionService;

    @Autowired
    public MenuController(MenuService menuService, PromotionService promotionService) {
        this.menuService = menuService;
        this.promotionService = promotionService;
    }

    @PostMapping("/add-menu")
    public Menu addMenu(@RequestBody Menu menuDto) {
        menuService.addMenu(menuDto);
        return menuDto;
    }

    @GetMapping("/get-all-menu")
    public MenuListResponseDto getAllMenu(){
        SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return new MenuListResponseDto(menuService.getAllMenu(),
                promotionService.getAllPromotion());
    }

    @GetMapping("/get-all-food-type")
    public List<FoodType> getAllFoodTypes(){
        return List.of(FoodType.values());
    }

    @GetMapping("/{menuId}")
    public Menu getMenu(@PathVariable("menuId") int menuId){
        return menuService.findMenuById(menuId);
    }

    @PostMapping("/update-menu")
    public ResponseEntity<String> updateMenu(@RequestBody Menu menu){
        menuService.updateMenu(menu);
        return new ResponseEntity<String>("Update successful", HttpStatus.OK);
    }

    @DeleteMapping("/{menuId}")
    public ResponseEntity<String> deleteMenu(@PathVariable("menuId") int menuId){
        menuService.deleteMenuById(menuId);
        return new ResponseEntity<String>("Delete successful", HttpStatus.OK);
    }
}
