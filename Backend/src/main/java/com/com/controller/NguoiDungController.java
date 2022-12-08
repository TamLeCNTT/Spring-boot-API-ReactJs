package com.com.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.com.config.JwtTokenUtil;
import com.com.models.JwtRequest;
import com.com.models.JwtResponse;
import com.com.models.NguoiDung;
import com.com.models.Role;
import com.com.reposotories.NguoiDungRepository;
import com.com.reposotories.RoleRepository;
import com.com.services.JwtUserDetailsService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000/")
public class NguoiDungController {
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
    private PasswordEncoder bcryptEncoder;
	@Autowired
	private RoleRepository roleRepository; 
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	@Autowired
	private NguoiDungRepository nguoiDungRepository;
	@Autowired
	private JwtUserDetailsService userDetailsService;
	@PostMapping("register")
    public ResponseEntity<?> registers(@RequestBody NguoiDung nguoiDung) {
    	String pas=nguoiDung.getMatKhau();
    	System.out.println(pas);
    	nguoiDung.setMatKhau(bcryptEncoder.encode(nguoiDung.getMatKhau()));
    	
    	Role role=roleRepository.findById(2L).orElseThrow();
    
    	nguoiDung.setRole(role);
  
    	
    	nguoiDungRepository.save(nguoiDung);
    
    	 System.out.println(pas);
    	 return ResponseEntity.status(HttpStatus.OK).body(nguoiDung);
	
    }
	
	
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		authenticate(authenticationRequest.getTenDangNhap(), authenticationRequest.getMatKhau());
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getTenDangNhap());
		NguoiDung user = nguoiDungRepository.findByTenDangNhap(userDetails.getUsername());
//		if (!user.getStatus().equalsIgnoreCase("active"))
//			return ResponseEntity.status(HttpStatus.BAD_GATEWAY)
//					.body(new ResponseObject("info", "Your must click link in your mail to active account", ""));
//		else {
			final String token = jwtTokenUtil.generateToken(userDetails);
		//	session.setAttribute("username", userDetails.getUsername());
			return ResponseEntity.ok(new JwtResponse(token, user));
		
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}
