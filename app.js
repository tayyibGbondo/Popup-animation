const popoverTrigger = document.querySelector('.trigger')
const popover = document.querySelector('.popover')
popover.setAttribute('hidden', true)

popoverTrigger.addEventListener('click', () => {
  if(popover.hasAttribute('hidden')){
    popover.removeAttribute('hidden')
  }else{
    popover.setAttribute('hidden', true)
  }
})