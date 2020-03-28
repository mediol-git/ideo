window.addEventListener('scroll', () => {
    const divTop = parallax.offsetTop - parallax.offsetHeight
    const divBottom = parallax.offsetTop + parallax.offsetHeight
    if (window.pageYOffset > divTop && window.pageYOffset < divBottom) {
  
      console.log(window.pageYOffset, parallax.offsetHeight, parallax.offsetTop + parallax.offsetHeight)
  
      const scrollPercent = ((window.pageYOffset - divTop) / (divBottom - divTop))
      console.log(scrollPercent, '%')
  
      const spanWidth = getComputedStyle(span).width
      console.log(spanWidth)
  
      span.style.left = `-${parseFloat(spanWidth) * (scrollPercent)}px`
    }
})