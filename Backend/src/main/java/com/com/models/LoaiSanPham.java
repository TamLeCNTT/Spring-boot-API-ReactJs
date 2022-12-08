package com.com.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
@Entity
public class LoaiSanPham {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long ID_LoaiSP;
    private String TenLSP;
    private String HinhAnh;
//    @OneToMany(cascade = CascadeType.ALL,mappedBy = "LoaiSP",orphanRemoval = true)
//   	private List<SanPham> sanpham=new ArrayList<>();
//	public List<SanPham> getSanpham() {
//		return sanpham;
//	}
//	public void setSanpham(List<SanPham> sanpham) {
//		this.sanpham = sanpham;
//	}
	public Long getID_LoaiSP() {
		return ID_LoaiSP;
	}
	public LoaiSanPham(String tenLSP, String hinhAnh) {
		super();
		TenLSP = tenLSP;
		HinhAnh = hinhAnh;
	}
	public void setID_LoaiSP(Long iD_LoaiSP) {
		ID_LoaiSP = iD_LoaiSP;
	}
	public String getTenLSP() {
		return TenLSP;
	}
	public void setTenLSP(String tenLSP) {
		TenLSP = tenLSP;
	}
	public String getHinhAnh() {
		return HinhAnh;
	}
	public void setHinhAnh(String hinhAnh) {
		HinhAnh = hinhAnh;
	}
	public LoaiSanPham() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
