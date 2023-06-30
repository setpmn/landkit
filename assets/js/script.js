const barsMenu = document.getElementById('menu-icon')
const closeMenu = document.getElementById('close-menu')
const mainMenu = document.getElementById('main-menu')
const mainPage = document.getElementById('main-page')

barsMenu.addEventListener('click', function(){
    mainMenu.classList.add('show')
    mainPage.classList.add('overflow-height')
})

closeMenu.addEventListener('click', () => {
    mainMenu.classList.remove('show')
    mainPage.classList.remove('overflow-height')
})

const accordion = document.querySelectorAll('.accordion')
accordion.forEach((val)=>{
    val.children[1].classList.add('hidden')
    val.addEventListener('click', () =>{
        if(val.children[1].classList.contains('hidden')){
            val.children[0].children[0].style.transform='rotateZ(180deg)'
            val.children[1].classList.remove('hidden')
        }else{
            val.children[0].children[0].style.transform='rotateZ(0deg)'
            val.children[1].classList.add('hidden')
        }
        val.children[1].addEventListener('click', function(e){
            e.cancelBubble='true'
        })
    })
})
