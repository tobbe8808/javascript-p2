
const section = document.querySelector("section");
const Lives = document.querySelector("span");
const GameLives = 8;

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

        cardData.forEach(item => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        
        // Makes it so you can see the cards on the page //
        face.src = item.imgSrc;

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        });
    };

    cardGenerator();



    
  