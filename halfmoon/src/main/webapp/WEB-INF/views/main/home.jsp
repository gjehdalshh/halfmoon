<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<link rel="stylesheet" href="/res/css/common.css?ver=4">
<div id="main-section">
	<div class="main-sectiondiv">
		<img class="asd" alt="" src="/res/img/1.jpg">
	</div>
</div>
<div id="main-section2">
	<div class="main-sectiondiv">
		<h3>전체상품(임시List)</h3>
		<c:forEach items="${total_list}" var="item">
			<div class="product_cont" onclick="moveDetail(${item.i_product}, ${item.i_user});">
				<input type="hidden" id="i_product" value="${item.i_product}">
				<div class="img">
					<img src="/res/img/sale/p_${item.i_product}/${item.p_img_main}">
				</div>
				<div class="title">
					${item.title}
				</div>
				<div class="mid_cont">
					<div class="price">
						${item.p_price}원
					</div>
					<div class="time">
						${item.show_time}
					</div>
				</div>
				<div class="loc">
					${item.show_loc}
				</div>
			</div>
		</c:forEach>
	</div>
</div>
<div id="main-section3">
	<div class="main-sectiondiv">
		
	</div>
</div>
<div id="main-section4">
	<div class="main-sectiondiv">
		
	</div>
</div>
<div id="main-section5">
	<div class="main-sectiondiv1">
		<div class="famoush1">
			<h1>중고거래 인기매물</h1>
		</div>
		<div class="famous-cont">
			<c:forEach items="${total_list}" var="item">
			<div class="famous-box">
					<div class="" onclick="moveDetail(${item.i_product}, ${item.i_user});">
						<input type="hidden" id="i_product" value="${item.i_product}">
						<div class="famous_img">
							<img class="famous_img" src="/res/img/sale/p_${item.i_product}/${item.p_img_main}">
						</div>
						<div class="famous_tl">
							<div class="famous_title">
								${item.title}
							</div>
							<div class="famous_time">
								${item.show_time}
							</div>
						</div>
						<div class="famous_pt">
							<div class="famous_price">
								${item.p_price}원
							</div>
							<div class="famous_loc">
								${item.show_loc}
							</div>
						</div>
					</div>
				</div>
			</c:forEach>
		</div>
	</div>
</div>
