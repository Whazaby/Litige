package com.ruscassie.guillaume.litige;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LitigeApplication {
	private  static final Logger LOGGER = LoggerFactory.getLogger(LitigeApplication.class);

	public static void main(String[] args) {

		SpringApplication.run(LitigeApplication.class, args);
		LOGGER.info("--- Starting Litige ---");
	}
}
