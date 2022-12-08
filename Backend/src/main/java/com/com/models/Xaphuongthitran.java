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

	
public class Xaphuongthitran {
	@Id

	private String xaid;
    private String name;
    private String type;
   
    
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name="maqh")
    private Quanhuyen quanhuyen;


	public Xaphuongthitran() {
		super();
		// TODO Auto-generated constructor stub
	}


	public String getXaid() {
		return xaid;
	}


	public void setXaid(String xaid) {
		this.xaid = xaid;
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


	public Quanhuyen getQuanhuyen() {
		return quanhuyen;
	}


	public void setQuanhuyen(Quanhuyen quanhuyen) {
		this.quanhuyen = quanhuyen;
	}


}
