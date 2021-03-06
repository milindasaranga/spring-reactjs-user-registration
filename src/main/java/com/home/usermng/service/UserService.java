package com.home.usermng.service;

import com.home.usermng.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public User saveUser(User user);

    public List<User> getAllUsers();

    public Optional<User> getUser(Long id);

    public Optional<User> updateUser(User updUser,Long id);

    public void deleteUser(Long id);
}
