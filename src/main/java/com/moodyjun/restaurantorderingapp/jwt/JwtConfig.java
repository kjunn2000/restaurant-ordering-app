package com.moodyjun.restaurantorderingapp.jwt;

import com.google.common.net.HttpHeaders;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@Data
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties(prefix = "application.jwt")
public class JwtConfig {

    private String tokenPrefix;
    private String key;
    private int expiredDate;

    public String getAuthorizationHeader(){
        return HttpHeaders.AUTHORIZATION;
    }
}
