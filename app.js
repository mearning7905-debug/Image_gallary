let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

let items = document.querySelectorAll(".click");

items.forEach(item => {
  item.addEventListener("click", () => {
    let info = item.querySelector(".des");
    info.hidden = !info.hidden; // toggle
  });
});
