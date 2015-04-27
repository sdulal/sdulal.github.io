/* User experience animations. Dependencies include the jQuery library, Waypoints plugin and Visibility plugin. - Shafqat Dulal */
$(document).ready(function() {
    $('.background').css('height', $(window).height() + 'px');
    fadeInIntro();
	enableResize();
    stickyNav();
    alternateExperiencePositions();
    enableSmoothScroll();
    circularize();
    infoOnHover();
    guaranteeFullScreenSections();
    aboutAnimations();
    experiencesAnimations();
    interestsAnimations();
    contactAnimations();
});

function enableResize() {
	$(window).on('resize', function(event) {
		$('.background').css('height', $(window).height() + 'px');
	});
}

function stickyNav() {
    $('#content').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
}

function enableSmoothScroll() {
    $("a[href^='#']").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
}

function alternateExperiencePositions() {
    $(".experience").each(function(index, el) {
        if (index % 2 != 0) {
            $(this).css('transform', 'rotateY(180deg)');
            $(this).children().css('transform', 'scaleX(-1)');
            $(this).find('.exp-info').css('transform-origin', '25%');
        }        
    });
}

allowed = false;
function infoOnHover() {
    $('.skill-icon').hover(function() {
        if (!allowed) {
            return false;
        }
        $('.skill-icon').not(this).css('opacity', '0.6');
        var infoID = "#info" + this.id.slice(4);
        $("#info00").css('opacity', 0);
        $(infoID).css('opacity', 1);
    }, function() {
        if (!allowed) {
            return false;
        }
        $('.skill-icon').not(this).css('opacity', '1');
        var infoID = "#info" + this.id.slice(4);
        $(infoID).css('opacity', 0);
        $("#info00").css('opacity', 1);
    });
}

function fadeInIntro() {
    $('#overlay').css('display', 'none');
    $('#main-title').css('display', 'none');
    $('#small').css('display', 'none');
    setTimeout(function() {
        $('#overlay').fadeIn(500);
    }, 750);
    setTimeout(function() {
        $('#main-title').fadeIn(500);
        $('#small').fadeIn(2000);
    }, 2000);
    setTimeout(function() {
        $('#bouncing-arrow').show(500);
    }, 3500);
}

function guaranteeFullScreenSections() {
    $('section').each(function(index, el) {
        if ($(this).height() < $(window).height()) {
            $(this).css('height', $(window).height() + 'px');
        }
    });
}

var animatedAbout = false;
function aboutAnimations() {
    $(window).scroll(function(event) {
        if ($('#profile-pic').visible(true) && !animatedAbout) {
            $('#profile-pic').css('transform', 'scale(1)');
            setTimeout(function() {
                $('#about-me').fadeIn(1000);
            }, 500);
            animatedAbout = true;
        };
    });
}

var animatedInterests = false;
function interestsAnimations() {
    $(window).scroll(function(event) {
        if ($('#interests-pictures').visible(true) && !animatedInterests) {
            $('#interests-pictures').animate({
                opacity: '1',
                top: '0px'
            }, 750);
            animatedInterests = true;
        }
    });
    $('.interest').hover(function() {
        $(this).find('img').css({transform: 'scale(1.1)'});
        $(this).find('.interest-name').animate({marginTop: '0px', opacity: '1'}, 200);
        $(this).find('.interest-text').animate({top: '0px', opacity: '1'}, 200);
    }, function() {
        $(this).find('img').animate({left: '0px'}, 200);
        $(this).find('.interest-name').animate({marginTop: '-30px', opacity: '0'}, 200);
        $(this).find('.interest-text').animate({top: '100px', opacity: '0'}, 200);
        $(this).find('img').css({transform: 'scale(1)'});
    });
}

function experiencesAnimations() {
    $(window).scroll(function(event) {
        $('.experience').each(function(index, el) {
            if ($(this).visible(true) && !$(this).hasClass('visible')) {
                $(this).find('.image').delay(125).animate({right: '0px', opacity: '1'}, 500);
                $(this).find('.exp-info').delay(125).animate({left: '0px', opacity: '1'}, 500);
                $(this).addClass('visible');
            }
        });
    });
}

function circularize() {
    $(window).scroll(function(event) {
        if ($('.skill-icon').visible(true) && !$('.skill-icon').hasClass('circularized')) {
            $('.skill-icon').each(function(index, el) {
                var ID = "icon" + "0" + (index + 1);
                $(this).attr('id', ID);
            });
            setTimeout(function() {
                $('.skill-icon').addClass('circularized');
                $('#info00').css('opacity', '1');
                allowed = true;
            }, 1500);
        }
    });
}

var animatedIcons = false;
var animatedText = false;
function contactAnimations() {
    $(window).scroll(function(event) {
        if ($('#social-icons').visible(true) && !animatedIcons) {
            $('.social-icon').css('animation', 'pulse 1s 2');
            animatedIcons = true;
        }
        if ($('#contact-text').visible(true) && !animatedText) {
            $('#contact-text').css('animation', 'fade-in-bottom 1s');
            animatedText = true;
        }
    });
}