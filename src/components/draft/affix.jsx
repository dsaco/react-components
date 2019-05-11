const affix = document.querySelector('#page-affix')
const affixOffsetTop = affix.offsetTop
window.addEventListener('scroll',() => {
	const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
	if(scrollTop >= affixOffsetTop){
        affix.style.position = 'fixed'
	}else {
        affix.style.position = 'relative'
	}
})
