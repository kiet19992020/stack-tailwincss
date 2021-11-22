

export default class ModOption {
  constructor () {
    this.$option = $('.mod-option')
  }
  init () {
    if (this.$option.length) {
      this.clicktab()
    }
  }
  clicktab() {
    $('.item-button').on('click', function(e) {
      let contentTab = $('.option-main')

      $('.item-button').removeClass('active')
      $(contentTab).hide()
      $(this).addClass('active')
      $('#show' + $(this).attr('target')).show()
    })

    $('.btn-toggle').on('click', function(e) {

      $(this).toggleClass('transform rotate-180')
      $(this).parents().children('.option-desc').slideToggle('fast')
    })
  }
  // fixed() {
  //   $(window).bind('scroll', (e) => {
  //     let topbarHeight = $('.banner-stu').height() + 220
  //     let bottomOffset = $('.toppic-content-desc').offset().top + 100
  //     let set = $(window).scrollTop()
  //       if (set > topbarHeight) {
  //         $(this.clsTopic).addClass('fixed')
  //       } else {
  //         $(this.clsTopic).removeClass('fixed')
  //       }
  //       if (set > bottomOffset) {
  //         $(this.clsTopic).addClass('absolute')
  //       }
  //       else {
  //         $(this.clsTopic).removeClass('absolute')
  //       }
  //   })
  // }
}

new ModOption().init()
