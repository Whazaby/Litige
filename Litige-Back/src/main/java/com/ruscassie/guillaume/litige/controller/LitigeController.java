package com.ruscassie.guillaume.litige.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class LitigeController {

    private final Logger logger = LoggerFactory.getLogger(LitigeController.class);

    /**
     * FIXME to remove
     *
     * @return
     */
    @RequestMapping(value = "/litige", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getAllCorporateContractPrints() {
        logger.info("First call");
        return new ResponseEntity<>("Litige first", HttpStatus.OK);
    }
}
