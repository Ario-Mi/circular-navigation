let menu = document.querySelector('.menu');
let menuToggle = document.querySelector('.toggle');
let lists = document.querySelectorAll('li')

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
})

lists.forEach(list => list.addEventListener('click', function(){
    lists.forEach(i => i.classList.remove('active'))
    this.classList.add('active')
}))
