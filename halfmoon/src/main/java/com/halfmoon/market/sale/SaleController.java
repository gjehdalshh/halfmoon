package com.halfmoon.market.sale;
import com.halfmoon.market.common.Const;
import com.halfmoon.market.common.Utils;
import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.ProductSaleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
public class SaleController {

    @Autowired
    HttpSession hs;

    @Autowired
    SaleService service;

    @GetMapping("/sale/regProduct")
    public void regProduct(Model model) {
        // 상품등록 위치선택 데이터 추가.
        model.addAttribute("loc", service.selLoc());
    }

    // ajax 처리. 이유 : 접근제어
    @ResponseBody
    @GetMapping("/regProduct")
    public Map<String,Object> accessRegProduct() {
        Map<String,Object> val = new HashMap<String, Object>();
        UserDomain vo = (UserDomain) hs.getAttribute(Const.KEY_LOGINUSER);
        // 비로그인 접근 제어
        if (vo == null) {
            val.put(Const.KEY_RESULT, 0);
            return val;
        }
        val.put(Const.KEY_RESULT, 1);
        return val;
    }


    // 상품 이미지 등록 : 상품정보등록 성공 후 해당 ajax 호
    @ResponseBody
    @PostMapping("/productImgUpload")
    public int profileUpload(MultipartFile[] imgs, int i_product) {
        //System.out.println("imgs : " + imgs.length);
        //System.out.println("rec i_product : " + i_product);
        return service.profileUpload(imgs, i_product);   // service 파일 업로드 로직 처리하기.
    }
    // 상품 정보 등록
    @ResponseBody
    @PostMapping("/regProductProc")
    public Map<String, Object> regProductProc(@RequestBody ProductSaleDTO dto) {
        Map<String,Object> val = new HashMap<String, Object>();
        // 결과 처리
        val.put(Const.KEY_RESULT, service.regProduct(dto));
        System.out.println("i_product : " + dto.getI_product());
        // pk 값 전달
        val.put("i_product", dto.getI_product());
        return val;
    }

    // 상품 디테일 페이지
    @GetMapping("/sale/detail")
    public void saleDetail(Model model, int i_product, int i_user) {
        ProductSaleDTO dto = new ProductSaleDTO();
        dto.setI_product(i_product);
        dto.setI_user(i_user);

        // 상품 데이터 추가
        ProductSaleDomain vo = service.selProduct(dto);
        vo.setShow_time(Utils.timeFormatter(vo.getShow_time()));
        model.addAttribute(Const.KEY_DATA, vo);

        // 상품 기본 유저 정보 추가
        model.addAttribute("user_basic", service.selProUser(dto));
    }
}
