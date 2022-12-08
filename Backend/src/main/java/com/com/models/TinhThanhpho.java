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

	
public class TinhThanhpho {
	@Id

	private String matp;
    private String name;
    private String type;
    private String viettat;
	public TinhThanhpho(String matp, String name, String type, String viettat) {
		super();
		this.matp = matp;
		this.name = name;
		this.type = type;
		this.viettat = viettat;
	}
	public String getMatp() {
		return matp;
	}
	public void setMatp(String matp) {
		this.matp = matp;
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
	public String getViettat() {
		return viettat;
	}
	public void setViettat(String viettat) {
		this.viettat = viettat;
	}
	public TinhThanhpho() {
		super();
		// TODO Auto-generated constructor stub
	}
    

}
