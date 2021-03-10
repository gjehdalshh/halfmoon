<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>      
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %> 
<link rel="stylesheet" href="/res/css/main/header.css?ver=3">

<tiles:importAttribute name="menuList"/>
<tiles:importAttribute name="subMenuList"/>
<header>
	
	<div class="mainlogodiv">
		<div class="mainlogodiv2">
			<div class="mainlogo a-img">
				<a href="/main/home">
					<img class="mainlogo" alt="" src="/res/img/mainLogo.png">
				</a>
			</div>
			
			<div class="main-form">
				<div class="select">
					<form class="form-select" action="" method="">
						<input class="main-form-input" placeholder="상품명 검색" type="text" name="" value="">
						<img class="main-select" alt="" src="/res/img/search.png">
						<div class="form-select-window">
							<div class="window-div1">
								<div class="window-a1">최근검색어</div>
								<div class="window-a2">인기검색어</div>
							</div>
							<div class="window-div2">
								dddd
							</div>
							<div class="window-div2">
								dddd
							</div>
							<div class="window-div2">
								dddd
							</div>
							<div class="window-div2">
								dddd
							</div>
							
							<div class="window-div3">
								<div>검색어 전체 삭제</div>
								<div class="window_close">닫기</div>
							</div>
						</div>
					</form>
				</div>
				<c:if test="${loginUser == null}">
				<button id="btn_my_sell">내 물건 팔기</button>
			<a href="/login">
				<button id="btn_login">로그인</button>
			</a>
			<a href="/join">
				<button id="btn_join">회원가입</button>
			</a>
		</c:if>
		<c:if test="${loginUser != null}">
				<button id="btn_my_sell">내 물건 팔기</button>
			<a href="/logout">
				<button id="btn_logout">로그아웃</button>
			</a>
			<a href="/user/my/profile">
				<button id="btn_my_page">내정보</button>
			</a>
		</c:if>	
		
		</div>
		</div>
	</div>
	<div class="List">
		<nav id="main-nav">
			<ul id="menuListUl">
				<c:forEach var="item" items="${menuList}">
					<li class="menuList">
						<img class="btn_menu_img" alt="" src="/res/img/menuImg/${item.i_product_type}.png">
					</li>
				</c:forEach>
			</ul>
		</nav>
	</div>
	
	<div id="main_h3">
		
	</div>
	
	<div class="sub_div">
		<ul class="sub_ul">
			<li><a href="">생활가전</a></li>
			<li><a href="">주방가전</a></li>
			<li><a href="">모바일/태블릿</a></li>
			<li><a href="">PC</a></li>
			<li><a href="">PC주변기기</a></li>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<li><a href="">스포츠용품</a></li>
			<li><a href="">악기용품</a></li>
			<li><a href="">등산용품</a></li>
			<li><a href="">캠핑용품</a></li>
			<li><a href="">낚시용품</a></li>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<li><a href="">상의</a></li>
			<li><a href="">하의</a></li>
			<li><a href="">신발/악세사리</a></li>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<li><a href="">상의</a></li>
			<li><a href="">하의</a></li>
			<li><a href="">신발/악세사리</a></li>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<li><a href="">가구DIY</a></li>
			<li><a href="">조명</a></li>
			<li><a href="">침구/커튼</a></li>
			<li><a href="">생활용품</a></li>
			<li><a href="">주방용품</a></li>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<li><a href="">건강식품</a></li>
			<li><a href="">신선식품</a></li>
			<li><a href="">즉석식품</a></li>
			<li><a href="">기타</a></li>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<li><a href="">콘솔</a></li>
			<li><a href="">기타</a></li>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<li><a href="">간식</a></li>
			<li><a href="">장난감</a></li>
			<li><a href="">기타</a></li>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<li><a href="">일반도서</a></li>
			<li><a href="">교육도서</a></li>
			<li><a href="">음반</a></li>
			<li><a href="">티켓</a></li>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<li><a href="">유아의류</a></li>
			<li><a href="">장난감</a></li>
			<li><a href="">유아식품</a></li>
			<li><a href="">기타</a></li>
		</ul>
	</div>
	
	<div id="sub_nav" style="display : none;">
			<ul class="sub-ul">
				<li><img class="line" src="/res/img/line.png">
					<ul>
						<li class="li-border"><a href="">디지털/가전</a>
							<ul>
								<li><a href="">생활가전</a></li>
								<li><a href="">주방가전</a></li>
								<li><a href="">모바일/태블릿</a></li>
								<li><a href="">PC</a></li>
								<li class="last-li"><a href="">PC주변기기</a></li>
							</ul>
						</li>
						<li><a href="">스포츠/레저</a>
							<ul>
								<li><a href="">스포츠용품</a></li>
								<li><a href="">악기용품</a></li>
								<li><a href="">등산용품</a></li>
								<li><a href="">캠핑용품</a></li>
								<li class="last-li"><a href="">낚시용품</a></li>
							</ul>
						</li>
						<li><a href="">남성의류</a>
							<ul>
								<li><a href="">상의</a></li>
								<li><a href="">하의</a></li>
								<li class="last-li"><a href="">신발/악세사리</a></li>
							</ul>
						</li>
						<li><a href="">여성의류</a>
							<ul>
								<li><a href="">상의</a></li>
								<li><a href="">하의</a></li>
								<li class="last-li"><a href="">신발/악세사리</a></li>
							</ul>
						</li>
						<li><a href="">가구/인테리어</a>
							<ul>
								<li><a href="">가구DIY</a></li>
								<li><a href="">조명</a></li>
								<li><a href="">침구/커튼</a></li>
								<li><a href="">생활용품</a></li>
								<li class="last-li"><a href="">주방용품</a></li>
							</ul>
						</li>
						<li><a href="">생활/가공식품</a>
							<ul>
								<li><a href="">건강식품</a></li>
								<li><a href="">신선식품</a></li>
								<li><a href="">즉석식품</a></li>
								<li class="last-li"><a href="">기타/</a></li>
							</ul>
						</li>
						<li><a href="">게임/취미</a>
							<ul>
								<li><a href="">콘솔</a></li>
								<li class="last-li"><a href="">기타</a></li>
							</ul>
						</li>
						<li><a href="">반려동물</a>
							<ul>
								<li><a href="">간식</a></li>
								<li><a href="">장난감</a></li>
								<li class="last-li"><a href="">기타</a></li>
							</ul>
						</li>
						<li><a href="">도서/티켓/음반</a>
							<ul>
								<li><a href="">일반도서</a></li>
								<li><a href="">교육도서</a></li>
								<li><a href="">음반</a></li>
								<li class="last-li"><a href="">티켓</a></li>
							</ul>
						</li>
						<li class="last-li"><a href="">유아용품</a>
							<ul>
								<li><a href="">유아의류</a></li>
								<li><a href="">장난감</a></li>
								<li><a href="">유아식품</a></li>
								<li class="last-li"><a href="">기타</a></li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div id="sub_nav_cont">
			<div id="reg_sub" style="display: none">
				<a href="">상품등록 |</a>
				<a href="">상품관리 |</a>
				<a href="">구매/판매내역</a>
			</div>
			<div id="detail_sub" style="display: none">
				<a>${user_basic.user_nm}님의 상점 | </a>
				<a>등록된 상품 ${user_basic.p_total}개 | </a>
				<a>팔로워 ?</a>
			</div>
		</div> 
</header>
<script defer src="/res/js/temp/header.js"></script>
