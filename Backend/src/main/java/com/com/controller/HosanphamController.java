package com.com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.com.models.Hosanpham;
import com.com.models.Mau;
import com.com.models.SanPham;
import com.com.models.Size;
import com.com.reposotories.HosanphamRepositpry;
import com.com.reposotories.MauRepository;
import com.com.reposotories.SizeRepository;

@RestController
@RequestMapping("/hosanpham")
@CrossOrigin(origins = "http://localhost:3000/")
public class HosanphamController {
	@Autowired
	private HosanphamRepositpry hosanphamRepositpry;
@Autowired
private MauRepository mauRepository;
@Autowired 
private SizeRepository sizeRepository;
	@GetMapping("/mau")
	public List<Mau> listmau(){
		return mauRepository.findAll();
	}
	@GetMapping("/mau/{id}")
	public Mau mauid(@PathVariable Long id){
		return mauRepository.findById(id).orElseThrow();
	}
	@GetMapping("/size")
	public List<Size> listsize(){
		return sizeRepository.findAll();
	}
	@GetMapping("/size/{id}")
	public Size size(@PathVariable Long id){
		return sizeRepository.findById(id).orElseThrow();
	}
	@PutMapping("/save")
	
	public ResponseEntity<?> them(@RequestBody Hosanpham hosanpham) {
//		LoaiSanPham loaiSanPham=loaiSanPhamRepository.findById(sanPham.getSoLuongKho()).orElseThrow();
//		sanPham.setLoaiSP(loaiSanPham);
		System.out.println("hello");
		Hosanpham hosanphamold=hosanphamRepositpry.findBySanphamAndSizeAndMau(hosanpham.getSanpham(),hosanpham.getSize(), hosanpham.getMau());
		if (hosanphamold!=null) {
			hosanphamold.setGiaBan(hosanphamold.getGiaBan()>hosanpham.getGiaBan()?hosanphamold.getGiaBan():hosanpham.getGiaBan());
			hosanphamold.setSoLuongKho(hosanpham.getSoLuongKho()+hosanphamold.getSoLuongKho());
			hosanphamRepositpry.save(hosanphamold);
			return ResponseEntity.status(HttpStatus.OK).body(hosanphamold);
		}
		else {
		hosanphamRepositpry.save(hosanpham);
		return ResponseEntity.status(HttpStatus.OK).body(hosanpham);}
	}
}
