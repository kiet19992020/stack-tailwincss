

  var content = $('.option-desc')
  $('.item-button').on('click', function(e) {
    $('.item-button').removeClass('active')
    $(this).addClass('active')
    $('.option-main').hide()
    $('#show' + $(this).attr('target')).show()
  })

  $('.btn-toggle').on('click', function(e) {
    // content.slideUp()
    // $('.btn-toggle').removeClass('transform rotate-180')
    $(this).toggleClass('transform rotate-180')
    $(this).parents().children('.option-desc').slideToggle('fast')
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

// export default class ModOption {
//   constructor () {
//     this.$topic = $('.mod-option')
//     // this.$content = $('.option-desc')
//     // this.$contenttab = $('.option-main')
//     this.clsTopic = '.topic-fixed'
//   }
//   init () {
//     // this.clicktab()
//     if (this.$topic.length) {
//       this.clicktab()
//     }
//   }
//   clicktab() {
//     // let content = $('.option-desc')
//     // $('.item-button').on('click', (e) => {
//     //   $('.item-button').removeClass('active')
//     //   $(this).addClass('active')
//     //   $('.option-main').hide()
//     //   $('#show' + $(this).attr('target')).show()
//     // })

//     $('.btn-toggle').on('click', (e) => {
//       content.slideUp()
//       $('.btn-toggle').removeClass('transform rotate-180')
//       $(this).addClass('transform rotate-180')
//       $(this).parents().children('.option-desc').slideDown('fast')
//     })
//   }
//   // fixed() {
//   //   $(window).bind('scroll', (e) => {
//   //     let topbarHeight = $('.banner-stu').height() + 220
//   //     let bottomOffset = $('.toppic-content-desc').offset().top + 100
//   //     let set = $(window).scrollTop()
//   //       if (set > topbarHeight) {
//   //         $(this.clsTopic).addClass('fixed')
//   //       } else {
//   //         $(this.clsTopic).removeClass('fixed')
//   //       }
//   //       if (set > bottomOffset) {
//   //         $(this.clsTopic).addClass('absolute')
//   //       }
//   //       else {
//   //         $(this.clsTopic).removeClass('absolute')
//   //       }
//   //   })
//   // }
// }

// new ModOption().init()
