package com.moodyjun.restaurantorderingapp.service;

import com.moodyjun.restaurantorderingapp.dto.MenuListResponseDto;
import com.moodyjun.restaurantorderingapp.model.Menu;
import com.moodyjun.restaurantorderingapp.model.Promotion;
import com.moodyjun.restaurantorderingapp.repositroy.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

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
        Menu toSave = findMenuById(menu.getMenuId());
        toSave.setTitle(menu.getTitle());
        toSave.setPrice(menu.getPrice());
        toSave.setImageUrls(menu.getImageUrls());
        toSave.setDescription(menu.getDescription());
        toSave.setFoodType(menu.getFoodType());
        if(toSave.getPromotion()!=null){
            toSave.setPromotionPrice(toSave.getPrice()
                    *(100-toSave.getPromotion().getDiscountPercentage())/100);
        }
        return menuRepository.save(toSave);
    }

    public void deleteMenu(Menu menu){
        menuRepository.delete(menu);
    }

    public void deleteMenuById(int menuId) { menuRepository.deleteById(menuId);}

}