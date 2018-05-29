package com.ruscassie.guillaume.litige;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LitigeApplicationTests {
	private final Logger LOGGER = LoggerFactory.getLogger(LitigeApplicationTests.class);

	@Test
	public void contextLoads() {
		LOGGER.info("Test");
	}

}
