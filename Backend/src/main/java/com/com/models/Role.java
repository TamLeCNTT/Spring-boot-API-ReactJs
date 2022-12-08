package com.com.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Role {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long ID_Role;
    private String TenRole;
	public Long getID_Role() {
		return ID_Role;
	}
	public void setID_Role(Long iD_Role) {
		ID_Role = iD_Role;
	}
	public String getTenRole() {
		return TenRole;
	}
	public void setTenRole(String tenRole) {
		TenRole = tenRole;
	}

}
