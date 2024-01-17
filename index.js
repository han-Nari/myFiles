// Bar
$(document).ready(function() {
	let toggle = document.querySelector('#bar');
	let icon = document.querySelector('.fa-bars');

	toggle.addEventListener('click', ()=> {
		document.querySelector('#nav-bar').classList.toggle('show');
		if(icon.classList.contains('fa-bars')) {
			icon.classList.toggle('fa-times');
		}

	});
});