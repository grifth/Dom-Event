clickMe.addEventListener('click',function(e){
  popover.style.display = 'block'
})

wrapper.addEventListener('click',function(e){
  e.stopPropagation()
})

document.addEventListener('click',()=>{
  popover.style.display = 'none'
})
