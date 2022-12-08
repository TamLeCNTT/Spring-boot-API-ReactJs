package com.com.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Size {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id_size;
    public Size() {
		super();
		// TODO Auto-generated constructor stub
	}
	private String tensize;
	public Long getId_size() {
		return id_size;
	}
	public void setId_size(Long id_size) {
		this.id_size = id_size;
	}
	public String getTensize() {
		return tensize;
	}
	public void setTensize(String tensize) {
		this.tensize = tensize;
	}
}
