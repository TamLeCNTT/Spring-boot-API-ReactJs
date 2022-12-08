package com.com.models;

import java.io.Serializable;

import org.springframework.security.core.userdetails.UserDetails;

/*
This is class is required for creating a response containing the JWT to be returned to the user.
 */
public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final String jwttoken;
    private final NguoiDung user;
    public NguoiDung getUser() {
		return user;
	}
    
	public JwtResponse(String jwttoken, NguoiDung user) {
        this.jwttoken = jwttoken;
        this.user = user;
    }

    public String getToken() {
        return this.jwttoken;
    }
}
