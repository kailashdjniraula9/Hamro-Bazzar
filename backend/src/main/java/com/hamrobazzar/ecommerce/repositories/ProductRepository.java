package com.hamrobazzar.ecommerce.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.hamrobazzar.ecommerce.model.Product;

@CrossOrigin("*")
public interface ProductRepository extends JpaRepository<Product, Long>{
	
	@RestResource(path = "status")
	Page<Product> findByStatus(@Param("status") String status, Pageable pageable);
	
	@RestResource(path = "categoryid")
	Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

}
