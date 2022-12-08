package com.com.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.com.models.NguoiDung;
import com.com.reposotories.NguoiDungRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private NguoiDungRepository userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        NguoiDung user = userDao.findByTenDangNhap(username);
        
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getTenDangNhap(), user.getMatKhau(),
                new ArrayList<>());
    }

    public NguoiDung save(NguoiDung user) {
    	NguoiDung user_find = userDao.findByTenDangNhap(user.getTenDangNhap());
    	 if(user_find!=null) {
    		 return null;
    	 }
    	 else {
    		NguoiDung newUser = new NguoiDung();
    	        newUser.setTenDangNhap(user.getTenDangNhap());
    	        newUser.setMatKhau(user.getMatKhau());
    	        return userDao.save(newUser);
    	 }
        
    }
    }