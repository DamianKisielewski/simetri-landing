
$(function () {

  setupNavbarChangeOnScroll();
  setupSubscriptionSelection();

  MicroModal.init({
    disableScroll: true,
  });

  function setupNavbarChangeOnScroll() {


    const $document = $(document);
    const $navbar = $('.sl-navbar-wrapper');
    const className = 'sl-navbar-scrolled';
    
    const updateStatus = () => {
      if ($document.scrollTop() >= 30) {
        $navbar.addClass(className);
      } else {
        $navbar.removeClass(className);
      }
    }
    updateStatus();
    
    $document.scroll(updateStatus);
  }

  function setupSubscriptionSelection() {
    const $selectionLinks = $('.sl-sapphire-price-selection > a');
    $selectionLinks.on('click', (e, i) => {
      e.preventDefault();
      $('.sl-sapphire-price-selection > a.selected').removeClass('selected');
      const button = $(e.target);
      const price = button.data('price');
      button.addClass('selected');
      $('.sl-sapphire-price').text(price)
    });
  }

  // Seting up mobile menu
  $('.sl-dropdown-button')
    .on('click', () => {
      var menu = $('.sl-dropdown-wrapper')
      menu.fadeIn(100, function () {
        $(this).trigger('menu-showed');
      });
      menu.find('.sl-dropdown-menu').addClass('show');

      $('.sl-dropdown-backdrop').one('click', () => {
        menu.fadeOut(100, function () {
          $(this).trigger('menu-hidden');
        });
        menu.find('.sl-dropdown-menu').removeClass('show');
      });
    });

    $(window).on('resize', function () {
      if ($('body').hasClass('modal-open')) {
        var menu = $('.sl-dropdown-wrapper')
        menu.fadeOut(100, function () {
          $(this).trigger('menu-hidden');
        });
        menu.find('.sl-dropdown-menu').removeClass('show');
      }
    });

    $(".sl-dropdown-wrapper").on("menu-showed", function () {
      $("body").addClass("modal-open");
    }).on("menu-hidden", function () {
      $("body").removeClass("modal-open")
    });

}())


