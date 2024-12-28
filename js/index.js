$('#login-button').click(function (event) {
	var userName = document.getElementById("userName").value;
	var pwd = document.getElementById("pwd").value;
	//修改密码请改此处
	if (userName == "朱琳" && pwd == "1215") {
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		// setTimeout(function () { location.href = "BirthdayCake.html"; }, 2000);
		setTimeout(function () { location.href = "page.html"; }, 2000);
	}
	else {
		alert("密码是你的生日哦!");
	}
});
