package com.home.usermng.service.impl;

import com.home.usermng.exception.ResourceNotFoundException;
import com.home.usermng.model.User;
import com.home.usermng.repository.UserRepository;
import com.home.usermng.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUser(Long id) {
        return this.userRepository.findById(id);
    }

    @Override
    public Optional<User> updateUser(User updUser, Long id) {
        return this.userRepository.findById(id).map(
                user->{
                    user.setId(id);
                    user.setFirstName(updUser.getFirstName());
                    user.setLastName(updUser.getLastName());
                    user.setEmail(updUser.getEmail());
                    user.setUsername(updUser.getUsername());
                    user.setPassword(updUser.getPassword());
                    return this.userRepository.save(user);
                }
        );
    }

    @Override
    public void deleteUser(Long id) {
        this.userRepository.deleteById(id);
    }

}
