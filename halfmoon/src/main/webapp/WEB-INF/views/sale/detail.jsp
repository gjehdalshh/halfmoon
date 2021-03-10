<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<link rel="stylesheet" href="/res/css/sale/detail.css">
<div id="detail_cont">
    <h3>상품구매페이지</h3>
    <!-- 본격 디테일 작업 시작, 번개장터 참고.-->

    <div id="main_detail_cont">
        <div id="main_detail_cont_right">
            <img id="detail_img" src="/res/img/sale/p_${data.i_product}/${data.p_img_main}">
        </div>
        <div id="main_detail_cont_left">
            <div id="detail_title">${data.title}</div>
            <div id="detail_price">${data.p_price}원</div>
            <div id="detail_mid">
                <div>하트 : ? |</div>
                <div>뷰 : ? |</div>
                <div>${data.show_time}</div>
            </div>
            <div id="detail_loc">거래지역 : ${data.i_loc}</div>
            <div id="detail_state">상품상태 : ${data.state}</div>
            <div>
                <button>찜하기</button>
                <button>거래신청</button>
            </div>
        </div>
    </div>
    <div id="mid_detail_cont">
        <div>연관상품</div>
        <div>
            이미지 리스트
        </div>
    </div>
    <div id="last_detail_cont">
        <div id="last_detail_cont_right">
            <div>
                <a href="">상품정보</a>
                <a href="">상품문의</a>
            </div>
        </div>
        <div id="last_detail_cont_left">
            <div>
                상점정보
            </div>
        </div>
    </div>
</div>



