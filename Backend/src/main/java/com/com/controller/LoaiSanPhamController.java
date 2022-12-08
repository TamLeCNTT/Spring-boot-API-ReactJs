package com.com.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.com.models.LoaiSanPham;
import com.com.models.SanPham;
import com.com.reposotories.LoaiSanPhamRepository;
import com.com.reposotories.SanPhamRepository;

@RestController
@RequestMapping("/loaisanpham")
@CrossOrigin(origins = "http://localhost:3000/")
public class LoaiSanPhamController {
@Autowired
private LoaiSanPhamRepository loaiSanPhamRepository; 
@GetMapping("/list")
public List<LoaiSanPham> listloaisanpham(){
	return loaiSanPhamRepository.findAll();
}
@GetMapping("/{id}")
public LoaiSanPham sanphamshow(@PathVariable Long id) {
	return loaiSanPhamRepository.findById(id).orElseThrow();
}
@PostMapping("/add")
public ResponseEntity<?> them(@RequestBody LoaiSanPham loaiSanPham) {
	loaiSanPhamRepository.save(loaiSanPham);
	return ResponseEntity.status(HttpStatus.OK).body(loaiSanPham);
}
@PutMapping("/edit")
public ResponseEntity<?> edit(@RequestBody LoaiSanPham loaiSanPham) {
	LoaiSanPham loaiSanPhams=loaiSanPhamRepository.findById(loaiSanPham.getID_LoaiSP()).orElseThrow();
	loaiSanPhams.setHinhAnh(loaiSanPham.getHinhAnh());
	loaiSanPhams.setTenLSP(loaiSanPham.getTenLSP());
	loaiSanPhamRepository.save(loaiSanPhams);
	return ResponseEntity.status(HttpStatus.OK).body(loaiSanPhams);
}
@DeleteMapping("/delete/{id}")
public ResponseEntity<?> delete(@PathVariable Long id) {
	LoaiSanPham loaiSanPhams=loaiSanPhamRepository.findById(id).orElseThrow();
	try {
		loaiSanPhamRepository.delete(loaiSanPhams);
		return ResponseEntity.status(HttpStatus.OK).body(loaiSanPhams);}
	catch(Exception e) {
		return ResponseEntity.status(HttpStatus.FAILED_DEPENDENCY).body(loaiSanPhams);
				}
	}
}


