var li = document.getElementsByClassName('m-item');
var p1 = document.getElementById("p1");
var ul = document.getElementsByTagName("ul")[0];

li[0].onclick = function() {
	p1.style.color = "red";
}
li[1].onclick = function() {
	document.getElementsByTagName("h1")[0].innerHTML = date();
}
li[2].onclick = function() {
	this.classname += "fn-active";
}
li[3].onclick = function() {
	ul.removeChild(ul.getElementsByTagName("li")[7]);
}
li[4].onclick = function() {
	window.open('https://taobao.com/');
}
li[5].onclick = function() {
	var p9 = document.createElement("li");
	p9.innerHTML = "p9";
	ul.appendChild(p9);
}
li[6].onclick = function() {
	var box = document.getElementsByClassName('m-box')[0];
	var width = window.screen.availWidth;
	box.style.width = width + 'px';
}
ul.onclick = function(e) {
	var a = ul.getElementsByTagName('li');
	var e = e || window.event,
		target = e.target || e.scrElement;
	for(var s in a) {
		if (target == a[s]) {
			s = parseInt(s) + 1;
			alert(s);
			break;
		}
	}
}

function date() {
	var date = new Date();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var year = date.getFullYear();
	var connectChar = "-";
	if (1 <= month && 9 >= month) {
		month = "0" + month;
	}
	if (0 <= day && 9 >= day) {
		day = "0" + day;
	}
	var date = year + connectChar + month + connectChar + day;
	return date;
}