package com.moodyjun.restaurantorderingapp.service;

import com.moodyjun.restaurantorderingapp.dto.PromotionDto;
import com.moodyjun.restaurantorderingapp.model.Menu;
import com.moodyjun.restaurantorderingapp.model.Promotion;
import com.moodyjun.restaurantorderingapp.repositroy.MenuRepository;
import com.moodyjun.restaurantorderingapp.repositroy.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class PromotionService {

    @Autowired
    private PromotionRepository promotionRepository;

    @Autowired
    private MenuRepository menuRepository;

    public Promotion createPromotion(PromotionDto promotionDto){
        Promotion promotion = new Promotion();
        promotion.setPromotionId(UUID.randomUUID());
        promotion.setPromotionName(promotionDto.getPromotionName());
        promotion.setDateOfExpired(promotionDto.getDateOfExpired());
        promotion.setDiscountPercentage(promotionDto.getDiscountPercentage());
        promotion.setActive(true);
        List<Menu> promotionItems = promotionDto.getPromotionItems().stream()
                .map(each -> (
                     menuRepository.findById(each).orElse(null)
                    ))
                .collect(Collectors.toList());
        promotion.setPromotionItems(promotionItems);
        promotionRepository.save(promotion);
        promotionItems.forEach(menu->{
            menu.setPromotion(promotion);
            menu.setPromotionPrice(menu.getPrice()*(100- promotionDto.getDiscountPercentage())/100);
            menuRepository.save(menu);
        });
        return promotion;
    }

    public List<Promotion> getAllPromotion(){
        return promotionRepository.findAll();
    }

    public void deletePromotion(UUID promotionId) {
        Promotion promotion = promotionRepository.findById(promotionId).orElse(null);
        for(Menu menu : promotion.getPromotionItems()){
            menu.setPromotion(null);
            menu.setPromotionPrice(0);
            menuRepository.save(menu);
        }
        promotionRepository.deleteById(promotionId);
    }

    public void updatePromotionStatus(UUID promotionId) {
        Promotion promotion = promotionRepository.findById(promotionId).orElse(null);
        assert promotion != null;
        promotion.setActive(!promotion.isActive());
        promotionRepository.save(promotion);
    }
}
