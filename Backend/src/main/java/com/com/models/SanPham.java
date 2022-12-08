package com.com.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
public class SanPham {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long ID_SanPham;
    private String TenSanPham;
    private String MoTa;
  
  
    private String HinhAnh;
    private double SoSao;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name="ID_LoaiSP")
   
    private LoaiSanPham LoaiSP;
   
	public LoaiSanPham getLoaiSP() {
		return LoaiSP;
	}
	public void setLoaiSP(LoaiSanPham loaiSP) {
		LoaiSP = loaiSP;
	}
	public SanPham(String tenSanPham, String moTa, String giaBan, Long soLuongKho, String hinhAnh, double soSao,
			LoaiSanPham loaiSP) {
		super();
		TenSanPham = tenSanPham;
		MoTa = moTa;
		
		HinhAnh = hinhAnh;
		SoSao = soSao;
		LoaiSP = loaiSP;
	}
	public SanPham() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getID_SanPham() {
		return ID_SanPham;
	}
	public void setID_SanPham(Long iD_SanPham) {
		ID_SanPham = iD_SanPham;
	}
	public String getTenSanPham() {
		return TenSanPham;
	}
	public void setTenSanPham(String tenSanPham) {
		TenSanPham = tenSanPham;
	}
	public String getMoTa() {
		return MoTa;
	}
	public void setMoTa(String moTa) {
		MoTa = moTa;
	}
	
	public String getHinhAnh() {
		return HinhAnh;
	}
	public void setHinhAnh(String hinhAnh) {
		HinhAnh = hinhAnh;
	}
	public double getSoSao() {
		return SoSao;
	}
	public void setSoSao(double soSao) {
		SoSao = soSao;
	}
    
}
