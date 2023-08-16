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

