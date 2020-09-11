package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author liyiruo
 * @data 2020/3/17  2:57 下午
 */
@Controller
public class HelloWorldController {
    @RequestMapping("/")
    @ResponseBody
    public String hello() {

        return "hello world";
    }
}
