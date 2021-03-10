package com.halfmoon.market;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.ProductTypeDomain;
import com.halfmoon.market.model.domain.ProductTypeSubDomain;

@Mapper
public interface MainMapper {

	List<ProductTypeDomain> selMenuList();
	List<ProductSaleDomain> selTotalList();
	List<ProductTypeSubDomain> subSelMenuList();
	
	
	
	
}
