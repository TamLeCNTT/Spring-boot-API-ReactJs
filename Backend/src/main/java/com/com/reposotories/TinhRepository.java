package com.com.reposotories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.com.models.TinhThanhpho;

@Repository
public interface TinhRepository extends JpaRepository<TinhThanhpho, String>{

}
