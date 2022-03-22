
const section = document.querySelector("section");
const Lives = document.querySelector("span");
let GameLives = 8;

Lives.textContent = GameLives;


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
    
    //
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
        GameLives--;
        Lives.textContent = GameLives;
        if (GameLives === 0) { 
            restart("You loose!");
        }
    }
    }
    //see if we won.
    if (toggleCard.length === 24) {
        restart("You won the game, Good Job!");
    }
};

const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    cardData.forEach((item, index) => {
    cards[index].classList.remove('toggleCard');

    setTimeout(() => {
    cards[index].style.pointerEvents = "all";
    faces[index].src = item.imgSrc;
    cards[index].setAttribute("name", item.name);
    section.style.pointerEvents = "all";
    }, 1000);
    });
    GameLives = 8;
    Lives.textContent = GameLives;
    setTimeout(() => window.alert(text), 100);
};


cardGenerator();
    




    
  