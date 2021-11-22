
// const init = () => {

  var content = $('.option-desc')
  $('.item-button').on('click', function(e) {
    $('.item-button').removeClass('active')
    $(this).addClass('active')
    $('.option-main').hide()
    $('#show' + $(this).attr('target')).show()
  })

  $('.btn-toggle').on('click', function(e) {
    content.slideUp()
    $('.btn-toggle').removeClass('transform rotate-180')
    $(this).addClass('transform rotate-180')
    $(this).parents().children('.option-desc').slideDown('fast')
  })

  $(window).bind('scroll', function() {
    let topbarHeight = $('.banner-stu').height() + 220
    let bottomOffset = $('.toppic-content-desc').offset().top + 100
    let set = $(window).scrollTop()

      if (set > topbarHeight) {
        $('.topic-fixed').addClass('fixed')
      } else {
        $('.topic-fixed').removeClass('fixed')
      }
      if (set > bottomOffset) {
        $('.topic-fixed').addClass('absolute')
      }
      else {
        $('.topic-fixed').removeClass('absolute')
      }
});
// }


// export default class ModOption {
//   constructor () {
//     this.$content = $('.option-desc')
//     this.$contenttab = $('.option-main')
//   }
//   init () {
//     if (this.$this.length) {
//       this.toggleSlideTab()
//     }
//   }
// }
// toggleSlideTab()
// new ModOption().init()
