
export default class ModTopic {
  constructor () {
    this.$fixed = $('.mod-topic')
    this.clsTopic = '.topic-fixed'
  }
  init () {
    if (this.$fixed.length) {
      this.fixed()
    }
  }
  fixed() {
    $(window).bind('scroll', () => {
      let topbarHeight = $('.banner-stu').height() + 220
      let bottomOffset = $('.toppic-content-desc').offset().top + 100
      let height = bottomOffset - topbarHeight - 30
      let set = $(window).scrollTop()

        if (set > topbarHeight) {
          $(this.clsTopic).addClass('fixed')
        } else {
          $(this.clsTopic).removeClass('fixed')
        }
        if (set > bottomOffset) {
          $(this.clsTopic).addClass('absolute').css({'top': height})
        }
        else {
          $(this.clsTopic).removeClass('absolute').css({'top': '88px'})
        }
    })
  }
}

new ModTopic().init()
