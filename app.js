let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
// let seemore = document.querySelectorAll('.item .click')

// seemore.addEventListener('click', function(){
//     let items = document.querySelectorAll('.des')
    // class="click"
// })

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// function toggle() {
//   let data = document.getElementById(".item .des");
//   data.hidden = !data.hidden; // toggles hidden state
// }

// items.forEach(item => {
//   item.addEventListener('click', () => {
//     let text = item.querySelector('.des');
//     text.hidden = !text.hidden;
//   })
// })


let items = document.querySelectorAll(".click");

items.forEach(item => {
  item.addEventListener("click", () => {
    let info = item.querySelector(".des");
    info.hidden = !info.hidden; // toggle
  });
});

// document.getElementById(".click").addEventListener("click", function() {
//   let content = document.querySelector(".des"); // match your class name
//   content.hidden = !content.hidden; // toggles hidden state
// });

const descriptions = document.querySelectorAll(".des");

btn.addEventListener("click", () => {
  descriptions.forEach(des => {
    des.style.display = (des.style.display === "none" || des.style.display === "") 
                         ? "block" 
                         : "none";
  });

  // optional: change button text
  btn.innerText = (btn.innerText === "See More") ? "See Less" : "See More";
});
