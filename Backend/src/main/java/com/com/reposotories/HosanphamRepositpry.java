package com.com.reposotories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.com.models.Hosanpham;
import com.com.models.Mau;
import com.com.models.SanPham;
import com.com.models.Size;

public interface HosanphamRepositpry extends JpaRepository<Hosanpham, Long> {
 Hosanpham findBySanphamAndSizeAndMau(SanPham sanpham,Size size,Mau mau);
}
