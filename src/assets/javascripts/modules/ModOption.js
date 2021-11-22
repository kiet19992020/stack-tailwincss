const $this = $('.mod-option')

const init = () => {

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
    var topbarHeight = $('.banner-stu').height() + 200
    var bottomOffset = $('.toppic-content-desc').offset().top + 120
    var set = $(window).scrollTop()

      if ( set > topbarHeight) {
        $('.topic-fixed').addClass('fixed')
      }
      else {
        $('.topic-fixed').removeClass('fixed')
      }
      if ( set > bottomOffset) {
        $('.topic-fixed').addClass('absolute')
      }
      else {
        $('.topic-fixed').removeClass('absolute')
      }
});
}
const ModOption = (() => {
  if ($this.length) {
    init()
  }
})()
export default ModOption
