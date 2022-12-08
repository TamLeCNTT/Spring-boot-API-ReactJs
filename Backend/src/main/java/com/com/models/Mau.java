package com.com.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Mau {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id_mau;
	private String tenmau;
	private String mamau;
    public Mau() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId_mau() {
		return id_mau;
	}
	public void setId_mau(Long id_mau) {
		this.id_mau = id_mau;
	}
	public String getTenmau() {
		return tenmau;
	}
	public String getMamau() {
		return mamau;
	}
	public void setMamau(String mamau) {
		this.mamau = mamau;
	}
	public void setTenmau(String tenmau) {
		this.tenmau = tenmau;
	}
	
	
}
