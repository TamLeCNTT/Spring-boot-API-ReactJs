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

	
public class Quanhuyen  {
	@Id

	private String maqh;
    private String name;
    private String type;
   
    
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name="matp")
    private TinhThanhpho tinhtp;
   
    
	public TinhThanhpho getTinhtp() {
		return tinhtp;
	}
	public void setTinhtp(TinhThanhpho tinhtp) {
		this.tinhtp = tinhtp;
	}
	public Quanhuyen() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getMaqh() {
		return maqh;
	}
	public void setMaqh(String maqh) {
		this.maqh = maqh;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
}