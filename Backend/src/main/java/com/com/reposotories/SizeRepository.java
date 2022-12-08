package com.com.reposotories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.com.models.Size;

@Repository
public interface SizeRepository extends JpaRepository<Size, Long>{

}
