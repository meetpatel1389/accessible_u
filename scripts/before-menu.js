/*
 * JavaScript for Accessible University Demo Site
 * http://uw.edu/accesscomputing/AU
 *
 * before-menu.js = Custom inaccessible Dropdown Menu
 */

// $(document).ready(function() {

//   var timeout = 3000;
//   var timer = 0;
//   var subMenu = null;

//   $("#menu > li")
//     .on('mouseenter',function(){
//       // close previously open submenu
//       closeSubMenu();
//       // get and show new submenu
//       subMenu = $(this).children('ul');
//       subMenu.show();
//       clearTimeout(timer);
//     })
//     .parent().mouseout(function(){
//       clearTimeout(timer);
//       timer = setTimeout(function(){
//         closeSubMenu();
//       },timeout);
//     });

//   // close subMenu when click-out
//   document.onclick = closeSubMenu;

//   function closeSubMenu() {
//     if (subMenu) {
//       subMenu.hide();
//       subMenu = null;
//     }
//   }
// });
$(window).on("load resize", function() {

  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
