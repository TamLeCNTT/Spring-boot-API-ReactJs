package com.com.reposotories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.com.models.Quanhuyen;
import com.com.models.TinhThanhpho;
import com.com.models.Xaphuongthitran;

@Repository
public interface XaRepository extends JpaRepository<Xaphuongthitran, String> {
	List<Xaphuongthitran> findByQuanhuyen(Quanhuyen quan);
}
