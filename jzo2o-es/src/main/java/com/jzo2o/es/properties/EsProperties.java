package com.jzo2o.es.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "jzo2o.es")
@Data
public class EsProperties {
    /**
     * es host
     */
    private String host;
    /**
     * es 端口
     */
    private Integer port;

    /**
     * es 用户名
     */
    private String username;

    /**
     * es 密码
     */
    private String password;
}
