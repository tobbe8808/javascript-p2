let start = document.querySelector('#swing');
let ex = 10;
function swing(element) {

    function update(time) {
        
        const x = Math.sin(time / 1231) * ex;
        const y = Math.sin(time / 1458) * ex;

        element.style.transform = [
            `rotateX(${x}deg)`,
            `rotateY(${y}deg)`
        ].join(' ');

        requestAnimationFrame(update);
    }
    update(0); 
}

swing(start);


let start_button = start.querySelector('a');
let og_color = start_button.style.color;
let inter = 0;

start.addEventListener('mouseover', (e) => {
  
 ex = 20;  
 inter = setInterval(()=>{  
    start_button.style.color = '#'+Math.floor(Math.random()*16777215).toString(16); 
  }, 1000); 
  
});


start.addEventListener('mouseout', (e) => {
  
  ex = 10;
  clearInterval(inter);
  start_button.style.color = og_color; 
  
});