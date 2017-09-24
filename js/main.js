// Slideshow
$('.carousel').carousel({
  interval: 2500
})
$('.carousel').carousel('cycle')

// Link Hover Effect
var emailLink = document.getElementById('link-email');
emailLink.onmouseenter = function() { document.getElementById('link-email-img').src = 'img/link_email_hover.png'; };
emailLink.onmouseleave = function() { document.getElementById('link-email-img').src = 'img/link_email.png'; };
var linkedinLink = document.getElementById('link-linkedin');
linkedinLink.onmouseenter = function() { document.getElementById('link-linkedin-img').src = 'img/link_linkedin_hover.png'; };
linkedinLink.onmouseleave = function() { document.getElementById('link-linkedin-img').src = 'img/link_linkedin.png'; };
var resumeLink = document.getElementById('link-resume');
resumeLink.onmouseenter = function() { document.getElementById('link-resume-img').src = 'img/link_resume_hover.png'; };
resumeLink.onmouseleave = function() { document.getElementById('link-resume-img').src = 'img/link_resume.png'; };

// Scroll Effect
document.getElementById('work').onclick = function() { document.getElementById('work-container').scrollIntoView({ behavior: 'smooth' }); };
document.getElementById('about').onclick = function() { document.getElementById('about-container').scrollIntoView({ behavior: 'smooth' }); };

// Vivus Hi
var hi = new Vivus('hi-there', {type: 'scenario-sync', duration: 35, start: 'autostart', dashGap: 20, forceRender: false, animTimingFunction: Vivus.EASE}, callback);
	function callback() {
		hi.play(hi.getStatus() === 'end' ? -1 : 1)
	}
var camera = new Vivus('camera', {
    type: 'scenario-sync',
    duration: 25,
    start: 'autostart', 
    dashGap: 30, 
    animTimingFunction: Vivus.EASE
  }, 
	function () {
		if (window.console) {
			camera.play(camera.getStatus() === 'end' ? -1 : 1)
		}
	}
);
	// obt1 = new Vivus('obturateur1', {type: 'delayed', duration: 150}),
	// obt2 = new Vivus('obturateur2', {type: 'sync', duration: 150}),
	// obt3 = new Vivus('obturateur3', {type: 'oneByOne', duration: 150}),
	// pola = new Vivus('polaroid', {type: 'scenario-sync', duration: 20, forceRender: false});