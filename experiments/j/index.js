$(document).ready(function() {
  $('.app-list li').click(function() {
    var timeoutId = this.checkTimeout
    clearTimeout(timeoutId)

    var iframe = $('<iframe />')

    var clearIframe = function() {
      iframe.remove()
    }

    var $el = $(this)
    iframe.on('load', function() {
      console.log('loaded!')
      clearTimeout(timeoutId)
      clearIframe()
      $el.find('.result').text('Installed')
    })

    iframe.attr('sandbox', '')
    iframe.attr('src', $el.attr('data-url'))
    $el.append(iframe)
    timeoutId = this.checkTimeout = setTimeout(function() {
      clearIframe()
      $el.find('.result').text('Not Installed')
    }, 2000)
  })
})
