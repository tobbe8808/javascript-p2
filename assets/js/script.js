// Taking the section and span from the html
const section = document.querySelector("section");
const Lives = document.querySelector("span");
let GameLives = 8;

Lives.textContent = GameLives;

// Images
const getData = () => [

    { imgSrc: "assets/images/dog1.jpg", name: "dog1" },
    { imgSrc: "assets/images/dog2.jpg", name: "dog2" },
    { imgSrc: "assets/images/dog3.jpg", name: "dog3" },
    { imgSrc: "assets/images/dog4.jpg", name: "dog4" },
    { imgSrc: "assets/images/dog5.jpg", name: "dog5" },
    { imgSrc: "assets/images/dog6.jpg", name: "dog6" },
    { imgSrc: "assets/images/dog7.jpg", name: "dog7" },
    { imgSrc: "assets/images/dog8.jpg", name: "dog8" },
    { imgSrc: "assets/images/dog9.jpg", name: "dog9" },
    { imgSrc: "assets/images/dog10.jpg", name: "dog10" },
    { imgSrc: "assets/images/dog11.jpg", name: "dog11" },
    { imgSrc: "assets/images/dog12.jpg", name: "dog12" },
    { imgSrc: "assets/images/dog1.jpg", name: "dog1" },
    { imgSrc: "assets/images/dog2.jpg", name: "dog2" },
    { imgSrc: "assets/images/dog3.jpg", name: "dog3" },
    { imgSrc: "assets/images/dog4.jpg", name: "dog4" },
    { imgSrc: "assets/images/dog5.jpg", name: "dog5" },
    { imgSrc: "assets/images/dog6.jpg", name: "dog6" },
    { imgSrc: "assets/images/dog7.jpg", name: "dog7" },
    { imgSrc: "assets/images/dog8.jpg", name: "dog8" },
    { imgSrc: "assets/images/dog9.jpg", name: "dog9" },
    { imgSrc: "assets/images/dog10.jpg", name: "dog10" },
    { imgSrc: "assets/images/dog11.jpg", name: "dog11" },
    { imgSrc: "assets/images/dog12.jpg", name: "dog12" },
    ];
    
    //randomizes the cards.
    const randomize = () => {
       const cardData = getData();
       cardData.sort(() => Math.random() - 0.5);
       return cardData;
    };
    
    const cardGenerator = () => {
        const cardData = randomize();


//makes it into html
        cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        
        // Makes it so you can see the cards on the page //

        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        face.setAttribute("alt", item.name);

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
 });
    });
    };
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log("flippedcards");
    
    // Logic for game matching and wrong match.
    if (flippedCards.length === 2) {
    if (
        flippedCards[0].getAttribute("name") === 
        flippedCards[1].getAttribute("name")
     ) {
    console.log("match");
    flippedCards.forEach(card => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
    });
    
        } else { 
        console.log("wrong");
        flippedCards.forEach(card => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"), 1000 );
        });
       
        // if game lives 0 you loose.
        
        GameLives--;
        Lives.textContent = GameLives;
        if (GameLives === 0) { 
            swal({
           title: "You loose!",
           text: "Dont worry you can try again!",
           icon: "error",
           button: "Try again!",
              }).then(function() {
                window.location = "game.html";
            });
        }
    }
    }
    //see if we won if won stop timer.
    if (toggleCard.length === 24) {
        clearInterval(counter);
        swal({
            title: "Good job!",
            text: "You won the Game",
            icon: "success",
            button: "Try again you are a champ!",
          }).then(function() {
            window.location = "game.html";
        });
    }
};

// countdown timer

const starTiming = 60;
let time = starTiming * 2;

const count = document.getElementById("countdowntimer");
const counter = setInterval(updatetimer, 1000);
function updatetimer(){ 
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    count.innerHTML = `${minutes}:${seconds}`;
    time--;
    
    // code to loose if timer hits 0.
    if (minutes <= 0 && seconds <= 0) {
        clearInterval((time = 0));
        swal({
            title: "You loose!",
           text: "Dont worry you can try again!",
           icon: "error",
           button: "Try again!",
        }).then(function() {
            window.location = "game.html";
        });
        
        
}
}

cardGenerator();


    




    
  