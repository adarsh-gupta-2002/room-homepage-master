openMenu = document.getElementById('openMenu')
closeMenu = document.getElementById('closeMenu')

leftBtn = document.getElementById('left')
rightBtn = document.getElementById('right')
 
images = document.querySelectorAll('.image')
articles = document.querySelectorAll('.tab')


nav = document.querySelector('.nav')

openMenu.addEventListener('click' , ()=>{
    nav.classList.add('mobile-view')
})
closeMenu.addEventListener('click' , ()=>{
    nav.classList.remove('mobile-view')
})


articles.forEach(element => {
    console.log(element)
});


let index = 0

rightBtn.addEventListener('click' , ()=>{
    prev = index
    if(index < articles.length-1){

        index++
    }else{
        index = 0
    }

     
    update(prev,index)
})

leftBtn.addEventListener('click' , ()=>{
    prev = index
    if(index > 0){

        index--
    }else{
        index = 1
    }
     
    update(prev,index)
})

function update( prev , index){
    images[prev].classList.add('hidden')
    images[index].classList.remove('hidden')
   
    let current = articles[index] 
    let previous = articles[prev]
    previous.classList.add('hidden')
    current.classList.remove('hidden')
 
}