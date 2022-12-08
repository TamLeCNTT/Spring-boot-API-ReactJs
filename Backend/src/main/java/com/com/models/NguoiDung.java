package com.com.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class NguoiDung {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
		private Long ID_Nguoidung;
		private String tenDangNhap;
	    
		private String matKhau;
		private String Ho;
		private String Ten;
		private String DiaChi;
	    private String Email;
	    private String SoDienThoai;
	    private String AnhDaiDien;
	    @ManyToOne(fetch = FetchType.EAGER, optional = false)
	    @JoinColumn(name="ID_Role")
		   
		    private Role role;
	    
	    @ManyToOne(fetch = FetchType.EAGER, optional = false)
	    @JoinColumn(name="id_xa")
	   
	    private Xaphuongthitran xa;
		public Xaphuongthitran getXa() {
			return xa;
		}
		public void setXa(Xaphuongthitran xa) {
			this.xa = xa;
		}
		public Long getID_Nguoidung() {
			return ID_Nguoidung;
		}
		public void setID_Nguoidung(Long iD_Nguoidung) {
			ID_Nguoidung = iD_Nguoidung;
		}
		public String getTenDangNhap() {
			return tenDangNhap;
		}
		public void setTenDangNhap(String tenDangNhap) {
			this.tenDangNhap = tenDangNhap;
		}
		public String getMatKhau() {
			return matKhau;
		}
		public void setMatKhau(String matKhau) {
			this.matKhau = matKhau;
		}
		public String getHo() {
			return Ho;
		}
		public void setHo(String ho) {
			Ho = ho;
		}
		public String getTen() {
			return Ten;
		}
		public void setTen(String ten) {
			Ten = ten;
		}
		public String getDiaChi() {
			return DiaChi;
		}
		public void setDiaChi(String diaChi) {
			DiaChi = diaChi;
		}
		public String getEmail() {
			return Email;
		}
		public void setEmail(String email) {
			Email = email;
		}
		public String getSoDienThoai() {
			return SoDienThoai;
		}
		public void setSoDienThoai(String soDienThoai) {
			SoDienThoai = soDienThoai;
		}
		public String getAnhDaiDien() {
			return AnhDaiDien;
		}
		public void setAnhDaiDien(String anhDaiDien) {
			AnhDaiDien = anhDaiDien;
		}
		public Role getRole() {
			return role;
		}
		public void setRole(Role role) {
			this.role = role;
		}
	   
	    
	    
	    

		
	

}
