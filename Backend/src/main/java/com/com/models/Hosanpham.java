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
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
public class Hosanpham {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id_hosanPham;
    private Long GiaBan;
    private Long SoLuongKho;
    private String HinhAnh;
  
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id_size")
    private Size size;

	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id_mau")
    private Mau mau;

	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id_sanpham")
    private SanPham sanpham;
    public Size getSize() {
		return size;
	}



	public SanPham getSanpham() {
		return sanpham;
	}



	public void setSanpham(SanPham sanpham) {
		this.sanpham = sanpham;
	}



	public void setSize(Size size) {
		this.size = size;
	}



	public Mau getMau() {
		return mau;
	}



	public void setMau(Mau mau) {
		this.mau = mau;
	}







	
	



	public Long getId_hosanPham() {
		return id_hosanPham;
	}



	public void setId_hosanPham(Long id_hosanPham) {
		this.id_hosanPham = id_hosanPham;
	}



	

	public Long getGiaBan() {
		return GiaBan;
	}



	public void setGiaBan(Long giaBan) {
		GiaBan = giaBan;
	}



	public Long getSoLuongKho() {
		return SoLuongKho;
	}



	public void setSoLuongKho(Long soLuongKho) {
		SoLuongKho = soLuongKho;
	}



	public String getHinhAnh() {
		return HinhAnh;
	}



	public void setHinhAnh(String hinhAnh) {
		HinhAnh = hinhAnh;
	}



	



	public Hosanpham() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
