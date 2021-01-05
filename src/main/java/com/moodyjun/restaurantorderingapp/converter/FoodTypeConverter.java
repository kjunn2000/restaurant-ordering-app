//package com.moodyjun.restaurantorderingapp.converter;
//
//import com.moodyjun.restaurantorderingapp.model.FoodType;
//
//import javax.persistence.AttributeConverter;
//import javax.persistence.Converter;
//import java.util.stream.Stream;
//
//@Converter(autoApply = true)
//public class FoodTypeConverter implements AttributeConverter<FoodType,String> {
//
//    @Override
//    public String convertToDatabaseColumn(FoodType foodType) {
//        if (foodType == null) return null ;
//        return foodType.name();
//    }
//
//    @Override
//    public FoodType convertToEntityAttribute(String s) {
//        if (s==null) {
//            return null ;
//        }
//        return Stream.of(FoodType.values())
//                .filter(c->c.name().equals(s))
//                .findFirst()
//                .orElseThrow(IllegalAccessError::new);
//    }
//}
