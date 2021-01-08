package com.moodyjun.restaurantorderingapp.controller;

import com.moodyjun.restaurantorderingapp.model.FoodType;
import com.moodyjun.restaurantorderingapp.model.Menu;
import com.moodyjun.restaurantorderingapp.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/menu")
public class MenuController {

    public MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @PostMapping("/add-menu")
    public Menu addMenu(@RequestBody Menu menuDto) {
        System.out.println("I am in.");
        System.out.println(menuDto);
        menuService.addMenu(menuDto);
        return menuDto;
    }

    @GetMapping("/get-all-menu")
    public List<Menu> getAllMenu(){
        SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return menuService.getAllMenu();
    }

    @GetMapping("/get-all-food-type")
    public List<FoodType> getAllFoodTypes(){
        return List.of(FoodType.values());
    }

    @GetMapping("/{menuId}")
    public Menu getMenu(@PathVariable("menuId") int menuId){
        return menuService.findMenuById(menuId);
    }
}
