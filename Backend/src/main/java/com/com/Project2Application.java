package com.com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.com.models.LoaiSanPham;
import com.com.reposotories.LoaiSanPhamRepository;
import com.com.reposotories.SanPhamRepository;

@SpringBootApplication
public class Project2Application {
@Autowired
public LoaiSanPhamRepository loaiSanPhamRepository;
@Autowired 
public SanPhamRepository sanPhamRepository;
	public static void main(String[] args) {
		SpringApplication.run(Project2Application.class, args);
		
	}

}
