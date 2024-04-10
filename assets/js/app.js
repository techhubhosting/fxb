document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');
    const iconMenuHamburger = document.querySelector('.icon-menu-hamburger');
    const iconMenuClose = document.querySelector('.icon-menu-close');
  
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
      toggleMenuIcon();
    });
  
    function toggleMenuIcon() {
      iconMenuHamburger.style.display = navbarCollapse.classList.contains('show') ? 'none' : 'block';
      iconMenuClose.style.display = navbarCollapse.classList.contains('show') ? 'block' : 'none';
    }
  
    // Close the navbar when clicking outside of it
    document.addEventListener('click', function(event) {
      const target = event.target;
      const isNavbarToggler = target.closest('.navbar-toggler');
      const isNavbarCollapse = target.closest('#navbarSupportedContent');
  
      if (!isNavbarToggler && !isNavbarCollapse) {
        navbarCollapse.classList.remove('show');
        toggleMenuIcon();
      }
    });
  });
  
