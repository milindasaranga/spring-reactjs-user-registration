package com.home.usermng.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebMainController {

    @RequestMapping("/")
    public String index(){
        return "index";
    }
}
