package com.com.models;

import java.io.Serializable;

/*
This class is required for storing the username and password we recieve from the client.
* */
public class JwtRequest implements Serializable {

    private static final long serialVersionUID = 5926468583005150707L;

    private String tenDangNhap;
    private String matKhau;

    //need default constructor for JSON Parsing
    public JwtRequest()
    {

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





	public JwtRequest(String tenDangNhap, String matKhau) {
		super();
		this.tenDangNhap = tenDangNhap;
		this.matKhau = matKhau;
	}

	
}
