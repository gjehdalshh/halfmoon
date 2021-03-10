package com.halfmoon.market.sale;

import com.halfmoon.market.common.FileUtils;
import com.halfmoon.market.common.SecurityUtils;
import com.halfmoon.market.model.UserEntity;
import com.halfmoon.market.model.domain.LocDomain;
import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.ProductSaleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class SaleService {

    @Autowired
    SaleMapper mapper;

    @Autowired
    FileUtils fUtils;

    List<LocDomain> selLoc() {
        return mapper.selLoc();
    }

    int regProduct(ProductSaleDTO dto) {
        return mapper.regProduct(dto);
    }

    ProductSaleDomain selProduct(ProductSaleDTO dto) {
        return mapper.selProduct(dto);
    }

    UserDomain selProUser(ProductSaleDTO dto) {
        return mapper.selProUser(dto);
    }


    //이미지 업로드
    public int profileUpload(MultipartFile[] imgs, int i_product) {
        if(imgs.length > 5 || imgs.length == 0) {
            return 0;
        }
        String folder = "/resources/img/sale/p_" + i_product;
        try {
            for(int i=0; i<imgs.length; i++) {
                MultipartFile file = imgs[i];
                String fileNm = fUtils.saveFile(file, folder);
                if(fileNm == null) {
                    return 0;
                }
                if(i==0) { //메인 이미지 업데이트
                    ProductSaleDTO dto = new ProductSaleDTO();
                    dto.setP_img_main(fileNm);
                    dto.setI_product(i_product);
                    mapper.upsMainImg(dto);
                }
            }
        } catch(Exception e) {
            e.printStackTrace();
            return 0;
        }
        return 1;
    }



}
