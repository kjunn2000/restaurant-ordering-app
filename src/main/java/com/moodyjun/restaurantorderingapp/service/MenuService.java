package com.moodyjun.restaurantorderingapp.service;

import com.moodyjun.restaurantorderingapp.model.Menu;
import com.moodyjun.restaurantorderingapp.repositroy.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    public MenuRepository menuRepository;

    @Autowired
    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    public void addMenu(Menu menu){
        menuRepository.save(menu);
    }

    public Menu findMenuById(Integer menuId){
        return menuRepository.findById(menuId).orElse(null);
    }

    public List<Menu> getAllMenu(){
         return menuRepository.findAll();
    }

    public Menu updateMenu(Menu menu){
        return menuRepository.save(menu);
    }

    public void deleteMenu(Menu menu){
        menuRepository.delete(menu);
    }

}