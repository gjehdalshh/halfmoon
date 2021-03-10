var btn_login = document.querySelector('#btn_login')
var btn_join = document.querySelector('#btn_join')
var main_form_input = document.querySelector('.main-form-input')
var form_select_window = document.querySelector('.form-select-window')
var window_close = document.querySelector('.window_close')
var rSearch = document.querySelector('.window-a1')
var pSearch = document.querySelector('.window-a2')

var preList = document.querySelector('.list')

// 메인메뉴
var menuList = document.querySelectorAll('.menuList')

var sub_div = document.querySelectorAll('.sub_div')


// 디테일 이동 (여기서는 아작스 안씀)
function moveDetail(i_product, i_user) {
	location.href = '/sale/detail?i_product=' + i_product + '&i_user=' + i_user;

}


for(let i=0; i < menuList.length; i++) {
	console.log(menuList[i])
	menuList[i].onmouseover = function() {
		console.log(sub_div[i])
		sub_div[i].style.display = 'block'
	}
	menuList[i].onmouseout = function() {
		sub_div[i].style.display = 'none'
	}
	
	sub_div[i].onmouseover = function() {
		sub_div[i].style.display = 'block'
	}
	sub_div[i].onmouseout = function() {
		sub_div[i].style.display = 'none'
	}
}



// ==================== 검색어 창 처리 start ======================
var window1 = false
// 검색어 창 삭제
main_form_input.onblur = onblurOut

function onblurOut() {
	if(window1 == true) {
		form_select_window.style.display = 'block'
	} else {
		form_select_window.style.display = 'none'	
	}
}
form_select_window.onclick = function() {
	main_form_input.focus()
}
form_select_window.onmouseover = function() {
	window1 = true
}
form_select_window.onmouseout = function() {
	window1 = false
}

// 검색어 창 띄우기
main_form_input.onclick = function() {
	form_select_window.style.display = 'block'
}

// 검색어 창 닫기
window_close.onclick = function() {
	form_select_window.style.display = 'none'
}

// 검색어 색상 바뀌는 기능
rSearch.onclick = function() {
	rSearch.style.color = 'rgb(247, 47, 51)'
	rSearch.style.borderBottom = '2px solid rgb(247, 47, 51)'
	pSearch.style.color = 'black'
	pSearch.style.borderBottom = '2px solid rgb(217, 217, 217)'
}

pSearch.onclick = function() {
	pSearch.style.color = 'rgb(247, 47, 51)'
	pSearch.style.borderBottom = '2px solid rgb(247, 47, 51)'
	rSearch.style.color = 'black'
	rSearch.style.borderBottom = '2px solid rgb(217, 217, 217)'
}
// ==================== 검색어 창 처리 end ======================

