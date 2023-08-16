const menu = document.querySelector(".menu-icon");

menu.addEventListener('click', function () {
	const mobileNav = document.querySelector(".mobile-nav");

	if (mobileNav.style.display === 'none') {
		mobileNav.style.display = 'block'
	} else {
		mobileNav.style.display = 'none'
	}

	// mobileNav.classList.toggle('visibility');
})

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	items: 3,
	autoplay: true,
	autoplayTimeout: 4000,
	autoplayHoverPause: true,
	responsiveClass: true,
	responsive: {
	  0: {
		items: 1,
		nav: true,
		loop: true
	  },
	  600: {
		items: 2,
		nav: true,
		loop: true
	  },
	  1000: {
		items: 3,
		nav: true,
		loop: true
	  }
	}
  })

