// 주소 id 참조
var postcode = document.querySelector('#postcode')	// 우편번호
var roadAddr = document.querySelector('#roadAddress') // 도로명 주소
var jibunAddr = document.querySelector('#jibunAddress') // 지번 주소
var detailAddr = document.querySelector('#detailAddress') // 상세 주소
var extraAddr = document.querySelector('#extraAddress') // 참고 항목
var inputImgElem = document.querySelector('#inputImg')
var user_pwElem = document.querySelector('#user_pw')
var user_phoneElem = document.querySelector('#ph')
var chPwbtnElem = document.querySelector('#chPwbtn')
var status = 0;


//비밀번호 변경
function chPw(i_user){
	pwAjax(i_user)
}

function pwAjax(i_user){
	var userPwElem = document.querySelector('#userPw')
	var chkUserPwElem = document.querySelector('#chkUserPw')
	
	if(!userPwElem.value==chkUserPwElem.value){
		alter("변경할 비밀번호를 확인해 주세요")
		return
	}
	
	var param = {
		i_user: i_user,
		user_pw: userPwElem.value,
		state: 1
	}
	
	fetch('/user/my/updUser', { 
			method: 'post',
			headers: {
            	'Content-Type': 'application/json'
			},
			body: JSON.stringify(param)
		}).then(res => res.json())
		.then(function(data){
			if(data.result==1){
				alert('비밀번호가 변경되었습니다.')
				window.opener.close()
			}
		})
	
}
//비밀번호 변경 팝업창
function clkPwPop(i_user,code){
	console.log(user_pwElem.value)	
	var param ={
		i_user: i_user,
		clk_pw: user_pwElem.value,
		code: code
	}
	
	fetch(`/user/my/updPw?i_user=${i_user}&code=${code}`,{
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	}).then(res => res.json())
		.then(function(data){
			if(data.result ==1){
				popupOpen(i_user,code)
			} else if(data.result ==2){
				alert("비밀번호를 확인해주세요.")
			}
		})	
	
}
//팝업창 만들기
function popupOpen(i_user,code){
	var url = `/user/my/changePw?i_user=${i_user}&code=${code}`
	var popupOption = 'width=500, height=600, top=30, left=30, resizable=no, scrollbars=no, location=no'

	window.open(url,"비밀번호 변경",popupOption)
}


//주소 변경
function chAddr(i_user){
	addrAjax(i_user)
	
}

function addrAjax(i_user){
	var param ={
		i_user: i_user,
		state: 2,
		postcode: postcode.value,
		roadAddr: roadAddr.value,
		jibunAddr: jibunAddr.value,
		detailAddr: detailAddr.value,
		extraAddr: extraAddr.value
		}
	console.log("dddd")
	fetch(`/user/my/updUser`, { 
			method: 'post',
			headers: {
            	'Content-Type': 'application/json'
			},
			body: JSON.stringify(param)
		}).then(res => res.json())
		.then(function(data){
			if(data.result ==1){
				alert('주소가 변경되었습니다.')
			}
		})
}
//프로필 사진
function uploadImg(){ //사진 업로드
	if(inputImgElem.files.length==0){
		alert("사진을 선택해 주세요")
		return
	}
	imgAjax()
}

function imgAjax(){
	var formData = new FormData()
	for(var i=0; i<inputImgElem.files.length; i++) {
			formData.append('imgs', inputImgElem.files[i])	
		}
	fetch(`/user/my/updProfile`,{
		method: 'post',
		body: formData
	}).then(window.location.reload())
}
//프로필 이미지 가져오기
function imgLocation(){
	fetch('/user/profileData')
	.then(res => res.json())
	.then(myJson => {
		proc(myJson)
	})
	
	function proc(myJson){
	var UprofileElem = document.querySelector("#Uprofile")
	var div = document.createElement('div')
	div.id = ''
	UprofileElem.prepend(div)
	
	var delProfileHTML=''
	var imgSrc = `/res/img/1234.png`
	if(myJson.profile_img){
		console.log(myJson.profile_img)
		imgSrc = `/res/img/user/${myJson.i_user}/${myJson.profile_img}`
		delProfileHTML=`
			<div id="delProfileBtnContainer">
					<button onclick="delProfileImg();">기본이미지 사용</button>
			</div>
		`
	} 
	
	div.innerHTML =`
	<img id="user_profile_img" class="profile_img" src="${imgSrc}" alt="프로필 이미지">
	${delProfileHTML}
	`
	}
}

imgLocation() //프로필이미지 가져오기 실행

//프로필 기본이미지 사용
function delProfileImg(){
	return new Promise(function(resolve) {
	
		fetch(`/user/delImg`, {
			method: 'put',
		})
		.then(res => res.json())
		.then(myJson => {
			var img_Elem = document.querySelector('#user_profile_img')
			img_Elem.src = `/res/img/1234.png`
			resolve(myJson)
			
		})	
	})
	
}

//핸드폰 번호 변경
function chPh(){
	phAjax()
}

function phAjax(){
	var param ={
		state: 3,
		ph: user_phoneElem.value
		}
	fetch(`/user/my/updUser`, { 
			method: 'post',
			headers: {
            	'Content-Type': 'application/json'
			},
			body: JSON.stringify(param)
		}).then(res => res.json())
		.then(function(data){
			if(data.result ==1){
				alert('핸드폰 번호가 변경 되었습니.')
			}
		})
}
//다음 주소 api
function execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var roadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 참고 항목 변수

                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('postcode').value = data.zonecode;
                document.getElementById("roadAddress").value = roadAddr;
                document.getElementById("jibunAddress").value = data.jibunAddress;
                
                // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
                if(roadAddr !== ''){
                    document.getElementById("extraAddress").value = extraRoadAddr;
                } else {
                    document.getElementById("extraAddress").value = '';
                }

                var guideTextBox = document.getElementById("guide");
                // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
                if(data.autoRoadAddress) {
                    var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                    guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                    guideTextBox.style.display = 'block';

                } else if(data.autoJibunAddress) {
                    var expJibunAddr = data.autoJibunAddress;
                    guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                    guideTextBox.style.display = 'block';
                } else {
                    guideTextBox.innerHTML = '';
                    guideTextBox.style.display = 'none';
                }
            }
        }).open();
}

