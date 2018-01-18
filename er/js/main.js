var mobileBtn = document.querySelector('.mobile-btn');
var mobileNav = document.querySelector('.mobile-sidebar');
var mobileShadow = document.querySelector('.shadow');

function toggleNav () {
	if (mobileNav.classList.contains('mobile-sidebar_active')) {
		mobileNav.classList.remove('mobile-sidebar_active');
    mobileShadow.classList.remove('shadow_active');
		mobileBtn.classList.remove('mobile-btn_active');

		document.body.style.overflow = 'visible';
		document.body.style.overflowX = 'hidden';
	} else {
		mobileNav.classList.add('mobile-sidebar_active');
    mobileShadow.classList.add('shadow_active');
		mobileBtn.classList.add('mobile-btn_active');

		document.body.style.overflow = 'hidden';
	}
}

mobileBtn.addEventListener('click', toggleNav);
mobileShadow.addEventListener('click', toggleNav);

$('.drop > a, .drop > i').click(function(e) {
	e.preventDefault();
	$(this).parent().find('.mobile-nav__drop').slideToggle(300);
});



// main tabs
var tabCtrl = document.querySelectorAll('.tab-ctrl');
var tabs = document.querySelectorAll('.tab-el');

function showTab () {
	var curTabCtrl = this.getAttribute("data-first");

	for (var i = 0; i < tabCtrl.length; i++) {
		tabCtrl[i].classList.remove('first_active');
	}

	for (var i = 0; i < tabs.length; i++) {

		var curTabEl = tabs[i].getAttribute("data-first");

		if (curTabEl === curTabCtrl) {
			tabs[i].style.display = "block";
		} else {
			tabs[i].style.display = "none";
		}
	}

	this.classList.add('first_active');
}

for (var i = 0; i < tabCtrl.length; i++) {
	tabCtrl[i].addEventListener('click', showTab);
}



// first inner tabs
var inCtrlFirst = document.querySelectorAll('.inner-ctrl-first');
var inTabsFirst = document.querySelectorAll('.inner-el-first');

function showInFirst () {
	var curTabCtrl = this.getAttribute("data-second");

	for (var i = 0; i < inCtrlFirst.length; i++) {
		inCtrlFirst[i].classList.remove('second_active');
	}

	for (var i = 0; i < inTabsFirst.length; i++) {

		var curTabEl = inTabsFirst[i].getAttribute("data-second");

		if (curTabEl === curTabCtrl) {
			inTabsFirst[i].style.display = "block";
		} else {
			inTabsFirst[i].style.display = "none";
		}
	}

	this.classList.add('second_active');
}

for (var i = 0; i < inCtrlFirst.length; i++) {
	inCtrlFirst[i].addEventListener('click', showInFirst);
}



// second inner tabs
var inCtrlSecond = document.querySelectorAll('.inner-ctrl-second');
var inTabsSecond = document.querySelectorAll('.inner-el-second');

function showInSecond () {
	var curTabCtrl = this.getAttribute("data-third");

	for (var i = 0; i < inCtrlSecond.length; i++) {
		inCtrlSecond[i].classList.remove('second_active');
	}

	for (var i = 0; i < inTabsSecond.length; i++) {

		var curTabEl = inTabsSecond[i].getAttribute("data-third");

		if (curTabEl === curTabCtrl) {
			inTabsSecond[i].style.display = "block";
		} else {
			inTabsSecond[i].style.display = "none";
		}
	}

	this.classList.add('second_active');
}

for (var i = 0; i < inCtrlSecond.length; i++) {
	inCtrlSecond[i].addEventListener('click', showInSecond);
}




// first inner tabs
var inCtrlThird = document.querySelectorAll('.inner-ctrl-third');
var inTabsThird = document.querySelectorAll('.inner-el-third');

function showInThird () {
	var curTabCtrl = this.getAttribute("data-fourth");

	for (var i = 0; i < inCtrlThird.length; i++) {
		inCtrlThird[i].classList.remove('second_active');
	}

	for (var i = 0; i < inTabsThird.length; i++) {

		var curTabEl = inTabsThird[i].getAttribute("data-fourth");

		if (curTabEl === curTabCtrl) {
			inTabsThird[i].style.display = "block";
		} else {
			inTabsThird[i].style.display = "none";
		}
	}

	this.classList.add('second_active');
}

for (var i = 0; i < inCtrlThird.length; i++) {
	inCtrlThird[i].addEventListener('click', showInThird);
}
