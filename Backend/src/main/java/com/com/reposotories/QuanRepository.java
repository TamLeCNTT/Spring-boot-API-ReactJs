package com.com.reposotories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.com.models.Quanhuyen;
import com.com.models.TinhThanhpho;

public interface QuanRepository extends JpaRepository<Quanhuyen, String> {
List<Quanhuyen> findByTinhtp(TinhThanhpho tiunh);
}
