package com.com.controller;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.com.models.LoaiSanPham;
import com.com.models.SanPham;
import com.com.reposotories.LoaiSanPhamRepository;
import com.com.reposotories.SanPhamRepository;
@RestController
@RequestMapping("/sanpham")
@CrossOrigin(origins = "http://localhost:3000/")
public class SanPhamController {
	@Autowired
	private SanPhamRepository sanPhamRepository; 
	@Autowired
	private LoaiSanPhamRepository loaiSanPhamRepository; 
	@GetMapping("/list")
	public List<SanPham> listloaisanpham(){
		return sanPhamRepository.findAll();
	}
	@GetMapping("/{id}")
	public SanPham sanphamshow(@PathVariable Long id) {
		return sanPhamRepository.findById(id).orElseThrow();
	}
	@PostMapping("/add")
	public ResponseEntity<?> them(@RequestBody SanPham sanPham) {
//		LoaiSanPham loaiSanPham=loaiSanPhamRepository.findById(sanPham.getSoLuongKho()).orElseThrow();
//		sanPham.setLoaiSP(loaiSanPham);
		sanPhamRepository.save(sanPham);
		return ResponseEntity.status(HttpStatus.OK).body(sanPham);
	}
	@PutMapping("/edit")
	public ResponseEntity<?> edit(@RequestBody SanPham sanPham) {
		//LoaiSanPham loaiSanPham=loaiSanPhamRepository.findById(sanPham.getSoLuongKho()).orElseThrow();
		SanPham sanPhams=sanPhamRepository.findById(sanPham.getID_SanPham()).orElseThrow();
		sanPhams.setHinhAnh(sanPham.getHinhAnh());
		
		sanPhams.setLoaiSP(sanPham.getLoaiSP());
		sanPhams.setMoTa(sanPham.getMoTa());
		sanPhams.setTenSanPham(sanPham.getTenSanPham());
		sanPhamRepository.save(sanPhams);
		return ResponseEntity.status(HttpStatus.OK).body(sanPhams);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		SanPham sanPhams=sanPhamRepository.findById(id).orElseThrow();
		try {
			sanPhamRepository.delete(sanPhams);
			return ResponseEntity.status(HttpStatus.OK).body(sanPhams);}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.FAILED_DEPENDENCY).body(sanPhams);
					}
		}
	 private static final Logger logger = LoggerFactory.getLogger(SanPhamController.class);
	 @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	    public ResponseEntity uploadFile(@RequestParam("file") MultipartFile[] files) {
	        for (int i = 0; i < files.length; i++) {
	            logger.info(String.format("File name '%s' uploaded successfully.", files[i].getOriginalFilename()));
	        }
	        return ResponseEntity.ok().build();
	    }
}
