package com.moodyjun.restaurantorderingapp.dto;

import com.moodyjun.restaurantorderingapp.model.Menu;
import com.moodyjun.restaurantorderingapp.model.Promotion;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuListResponseDto {

    private List<Menu> menuList;
    private List<Promotion> promotionList;
}
