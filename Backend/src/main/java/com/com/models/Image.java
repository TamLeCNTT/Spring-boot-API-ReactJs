

package com.com.models;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Image {


	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id_anh;
	private String tenanh;
	   @ManyToOne(fetch = FetchType.EAGER, optional = false)
	    @JoinColumn(name="ID_sanpham")
	   
	    private SanPham sanpham;
    public Image() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId_anh() {
		return id_anh;
	}

	public void setId_anh(Long id_anh) {
		this.id_anh = id_anh;
	}

	public SanPham getSanpham() {
		return sanpham;
	}

	public void setSanpham(SanPham sanpham) {
		this.sanpham = sanpham;
	}

	public String getTenanh() {
		return tenanh;
	}

	public void setTenanh(String tenanh) {
		this.tenanh = tenanh;
	}
	
	
	
}
