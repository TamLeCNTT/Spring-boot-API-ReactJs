package com.com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.com.models.Quanhuyen;
import com.com.models.TinhThanhpho;
import com.com.models.Xaphuongthitran;
import com.com.reposotories.QuanRepository;
import com.com.reposotories.TinhRepository;
import com.com.reposotories.XaRepository;

@RestController
@RequestMapping("/diachi")
@CrossOrigin(origins = "http://localhost:3000/")
public class DiachiController {
	@Autowired
	private XaRepository xaRepository;
	@Autowired
	private QuanRepository quanRepository;
	
	@Autowired
	private TinhRepository tinhRepository;
	
	@GetMapping("/tinh")
	public List<TinhThanhpho> tinh() {
		return tinhRepository.findAll();
	}
	@GetMapping("/huyen/{matp}")
	public List<Quanhuyen> huyen(@PathVariable String matp) {
		TinhThanhpho tinh=tinhRepository.findById(matp).orElseThrow();
		return quanRepository.findByTinhtp(tinh);
	}
	@GetMapping("/xa/{maqh}")
	public List<Xaphuongthitran> xa(@PathVariable String maqh) {
		Quanhuyen quan=quanRepository.findById(maqh).orElseThrow();
		return xaRepository.findByQuanhuyen(quan);
	}
	@GetMapping("/xaid/{xaid}")
	public Xaphuongthitran xaid(@PathVariable String xaid) {
		
		return xaRepository.findById(xaid).orElseThrow();
	}
}
