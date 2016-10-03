$('.js-current-year').text(new Date().getFullYear());

function anchorScroll(this_obj, that_obj, base_speed) {
  var this_offset = this_obj.offset();
  var that_offset = that_obj.offset();
  var offset_diff = Math.abs(that_offset.top - this_offset.top);

  var speed       = (offset_diff * base_speed) / 1000;

  $("html,body").animate({
    scrollTop: that_offset.top
  }, speed);
}

$(".js-experience-nav a, .js-education-nav a, .js-skills-nav a, .js-smsdata").on('click', function(e) {
  e.preventDefault();
  anchorScroll( $(this), $($(this).attr("href")), 500 );
});

$('.js-fixed-nav').sticky({
  topSpacing:0,
  zIndex: 1
});

var activeTag = (function() {
  var s = {
    activeClass: 'c-section-nav__options__item--curent',
    resizeWait: undefined,
    delta: 5
  };
  var checkPosition = function($element, elementPosition) {
    var winScrollTop = s.$window.scrollTop();
    if (winScrollTop >= (elementPosition - s.delta)) {
      clearPrevious();
      $element.addClass(s.activeClass);
    }
    else {
      if ($element.hasClass(s.activeClass)) {
        $element.removeClass(s.activeClass);
      }
    }
    if (winScrollTop + s.$window.height() == $(document).height()) {
      if (!s.$skillsNav.hasClass(s.activeClass)) {
        clearPrevious();
        s.$skillsNav.addClass(s.activeClass);
      }
    }
  };
  var clearPrevious = function() {
    if ($('.' + s.activeClass).length) {
      $('.' + s.activeClass).removeClass(s.activeClass);
    }
  };
  var checkAllPositions = function() {
    checkPosition(s.$experienceNav, s.experiencePosition);
    checkPosition(s.$educationNav, s.educationPosition);
    checkPosition(s.$skillsNav, s.skillsPosition);
  };
  var handlers = function() {
    s.$window.scroll(function() {
      checkAllPositions();
    });
    s.$window.on('resize', function() {
      if (typeof s.resizeWait != 'undefined') {
        clearTimeout(s.resizeWait);
      }
      s.resizeWait = setTimeout(function () {
        s.experiencePosition = s.$experienceItem.offset().top;
        s.educationPosition = s.$educationItem.offset().top;
        s.skillsPosition = s.$skillsItem.offset().top;
      }, 500);
    });
  };
  var init = function() {
    s.$window = $(window);
    s.$experienceNav = $('.js-experience-nav');
    s.$experienceItem = $('#experience');
    s.$educationNav = $('.js-education-nav');
    s.$educationItem = $('#education');
    s.$skillsNav = $('.js-skills-nav');
    s.$skillsItem = $('#skills');
    s.experiencePosition = s.$experienceItem.offset().top;
    s.educationPosition = s.$educationItem.offset().top;
    s.skillsPosition = s.$skillsItem.offset().top;
    checkAllPositions();
    handlers();
  };
  return {
    init: init
  };
})();
activeTag.init();

function PopupConstructor(items) {
  this.items = items;
  this.gallery = {enabled: true};
  this.type = 'image';
  this.mainClass = 'mfp-fade';
  this.fixedContentPos = true;
  this.closeBtnInside = false;
}

$('.js-popup-video').magnificPopup({
  type: 'iframe',
  mainClass: 'mfp-fade'
});

$('.js-black-lead').magnificPopup(new PopupConstructor([
  {
    src: 'images/themes-chest/black-lead-1.jpg'
  },
  {
    src: 'images/themes-chest/black-lead-2.jpg'
  }
]));

$('.js-popup-bubblegum').magnificPopup(new PopupConstructor([
  {
    src: 'images/themes-chest/bubblegum-1.jpg'
  },
  {
    src: 'images/themes-chest/bubblegum-2.jpg'
  },
  {
    src: 'images/themes-chest/bubblegum-3.jpg'
  }
]));

$('.js-popup-bitter-fruit').magnificPopup(new PopupConstructor([
  {
    src: 'images/themes-chest/bitter-fruit-1.jpg'
  },
  {
    src: 'images/themes-chest/bitter-fruit-2.jpg'
  },
  {
    src: 'images/themes-chest/bitter-fruit-3.jpg'
  }
]));

$('.js-popup-traveller').magnificPopup(new PopupConstructor([
  {
    src: 'images/themes-chest/traveller-1.jpg'
  },
  {
    src: 'images/themes-chest/traveller-2.jpg'
  },
  {
    src: 'images/themes-chest/traveller-3.jpg'
  }
]));

$('.js-popup-themeschest').magnificPopup(new PopupConstructor([
  {
    src: 'images/themes-chest/themes-chest-1.jpg'
  },
  {
    src: 'images/themes-chest/themes-chest-2.jpg'
  },
  {
    src: 'images/themes-chest/themes-chest-3.jpg'
  }
]));

$('.js-popup-unlock').magnificPopup(new PopupConstructor([
  {
    src: 'images/smsdata/unlock-tutorials-1.jpg'
  },
  {
    src: 'images/smsdata/unlock-tutorials-2.jpg'
  },
  {
    src: 'images/smsdata/unlock-tutorials-3.jpg'
  },
  {
    src: 'images/smsdata/unlock-tutorials-4.jpg'
  }
]));

$('.js-popup-ubox').magnificPopup(new PopupConstructor([
  {
    src: 'images/smsdata/ubox-christmas-1.png'
  },
  {
    src: 'images/smsdata/ubox-christmas-2.png'
  }
]));

$('.js-popup-alfocea').magnificPopup(new PopupConstructor([
  {
    src: 'images/education/alfocea-1.jpg'
  },
  {
    src: 'images/education/alfocea-2.jpg'
  },
  {
    src: 'images/education/alfocea-3.jpg'
  },
  {
    src: 'images/education/alfocea-4.jpg'
  },
  {
    src: 'images/education/alfocea-5.jpg'
  },
  {
    src: 'images/education/alfocea-6.jpg'
  },
  {
    src: 'images/education/alfocea-7.jpg'
  },
  {
    src: 'images/education/alfocea-8.jpg'
  }
]));

$('.js-popup-see-next').magnificPopup(new PopupConstructor([
  {
    src: 'images/education/see-next-1.jpg'
  },
  {
    src: 'images/education/see-next-2.jpg'
  },
  {
    src: 'images/education/see-next-3.jpg'
  },
  {
    src: 'images/education/see-next-4.jpg'
  }
]));

$('.js-popup-school').magnificPopup({
  delegate: 'a',
  type: 'image',
  mainClass: 'mfp-fade'
});
