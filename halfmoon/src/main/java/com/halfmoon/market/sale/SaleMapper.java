package com.halfmoon.market.sale;

import com.halfmoon.market.model.domain.LocDomain;
import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.ProductSaleDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SaleMapper {
    List<LocDomain> selLoc();
    int regProduct(ProductSaleDTO dto);
    ProductSaleDomain selProduct(ProductSaleDTO dto);
    UserDomain selProUser(ProductSaleDTO dto);

    // 상품메인이미지업데이트
    int upsMainImg(ProductSaleDTO dto);




}
