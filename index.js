const btn = document.querySelector('.js-top')
console.log(btn)

function scrollFun() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.classList.add("visible")
        console.log(btn.classList)
    } else {
        btn.classList.remove('visible')
        console.log(btn.classList)
        console.log('top')
    }
}
function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log('click')
}
btn.addEventListener('click', scrollUp)
window.addEventListener('scroll', scrollFun)