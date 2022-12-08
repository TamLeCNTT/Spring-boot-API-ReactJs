package com.com.reposotories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.com.models.SanPham;
	@Repository
	public interface SanPhamRepository extends JpaRepository<SanPham, Long>{

}
