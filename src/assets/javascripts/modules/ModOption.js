

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
}

new ModOption().init()
