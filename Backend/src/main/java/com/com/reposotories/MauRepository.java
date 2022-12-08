package com.com.reposotories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.com.models.Mau;
@Repository
public interface MauRepository extends JpaRepository<Mau, Long> {

}
