package com.com.reposotories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.com.models.LoaiSanPham;
@Repository
public interface LoaiSanPhamRepository extends JpaRepository<LoaiSanPham, Long>{

}
