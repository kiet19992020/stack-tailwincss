const $this = $('.mod-option')

const init = () => {

  // $('.btn-toggle').click(function(e) {

  //   $('.option-items').not(content).slideUp()
  //   $(this).toggleClass('transform rotate-180')
  //   content.slideToggle()
  // })

  var content = $('.option-desc')
  $('.item-button').on('click', function(e) {
    $('.item-button').removeClass('active')
    $(this).addClass('active')
  })
  $('.btn-toggle').on('click', function(e) {
    content.slideUp()

    $('.btn-toggle').removeClass('transform rotate-180')
    $(this).addClass('transform rotate-180')
    $(this).parents().children('.option-desc').slideDown('fast')
  })

}
const ModOption = (() => {
  if ($this.length) {
    init()
  }
})()
export default ModOption
