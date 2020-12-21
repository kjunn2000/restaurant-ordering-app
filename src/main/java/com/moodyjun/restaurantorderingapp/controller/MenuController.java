package com.moodyjun.restaurantorderingapp.controller;

import com.moodyjun.restaurantorderingapp.dto.MenuDto;
import com.moodyjun.restaurantorderingapp.entity.Menu;
import com.moodyjun.restaurantorderingapp.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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
        return menuService.getAllMenu();
    }
}
