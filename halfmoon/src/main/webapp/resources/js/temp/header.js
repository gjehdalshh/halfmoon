var btn_my_sell = document.querySelector('#btn_my_sell')
var main_nav = document.querySelector('#main-nav')
var sub_nav_cont = document.querySelector('#sub_nav_cont')
var sub_nav = document.querySelector('#sub_nav')
// sub_nav의 자식객체
//var reg_sub = document.querySelector('#reg_sub')
var detail_sub = document.querySelector('#detail_sub')

console.log(window.location.href)

// 현재 url 위치 파싱 (자주 쓰일 듯.)
function getUrl() {
    var url = window.location.href.split('/')
    var val = '/';
    for (var i = 3; i < url.length; i++) {
        val += url[i]
        if (i != url.length - 1) {
            val += '/'
        }
    }
    return val;
}

console.log(getUrl())

// ===================== 페이지 파싱 라인 start =========================
// 상품등록페이지일때 menuList none and 위치 표시
if (getUrl() === '/sale/regProduct') {
    sub_nav_cont.style.display = 'block'
    sub_nav.style.display = 'block'
	reg_sub.style.display = 'block'
 	detail_sub.style.display = 'none'
    main_h3.innerHTML = '<h3>반월마켓 판매자센터</h3>'
	main_nav.style.display = 'none'
}
// saleDetail 페이지
if (getUrl().includes('/sale/detail')) {
    sub_nav_cont.style.display = 'block'
    sub_nav.style.display = 'block'
    reg_sub.style.display = 'none'
    detail_sub.style.display = 'block'
    main_h3.innerHTML = '<h3>반월마켓 상품구매</h3>'
	main_nav.style.display = 'none'
}

// ===================== 페이지 파싱 라인 end  =========================

// 물건팔기 ajax
btn_my_sell.onclick = function () {
    btn_my_sell_ajax()
}

function btn_my_sell_ajax() {
    fetch(`/regProduct`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data)
        switch (data.result) {
            case 0:
                alert('로그인 후 이용 가능합니다.')
                break
            case 1:
                location.href = '/sale/regProduct'
                break
        }
    })
}