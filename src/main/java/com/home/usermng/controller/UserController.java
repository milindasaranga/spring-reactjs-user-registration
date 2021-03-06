package com.home.usermng.controller;

import com.home.usermng.exception.ResourceNotFoundException;
import com.home.usermng.model.User;
import com.home.usermng.service.UserService;
import com.home.usermng.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public User saveUser(@RequestBody User user){
        return this.userService.saveUser(user);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getUsers(){
        return ResponseEntity.ok(
                this.userService.getAllUsers()
        );
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable(value="id") Long id){
        User user= userService.getUser(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found")
        );
        return ResponseEntity.ok().body(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable(value="id") Long id){
        User updatedUser= userService.updateUser(user,id).orElseThrow(
                ()->new ResourceNotFoundException("User not found")
        );
        return ResponseEntity.ok().body(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable(value="id") Long id){
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

}
