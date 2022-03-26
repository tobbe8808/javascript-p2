# Find The Dog Memory Game<br>
Project is deployed [Here](https://tobbe8808.github.io/javascript-p2/)<br>

Github repository [Here](https://github.com/tobbe8808/javascript-p2/tree/main)<br>

 This is a memory card game with a dog theme. The game starts with 24 cards all faced down so you don't know what picture is which.<br>
 You will flip the cards two at a time and try to find the pictures that match if the cards don't match, they flip over again if they do match they stay up.<br>
 If you pick the right two cards you won't lose any life, but if you pick the wrong cards that doesn't match a life will be taken from you.<br>
 You have a timeframe of two minutes to finish the game and 8 lives that tick down every time you pick the wrong card.<br>
 This game is for all ages cause it's a great way to practice your memory.<br>


![alt responsiveimg](./assets/READMEimages/responsivedesign.PNG)<br>

# Design

For the design I wanted to go for a Psychedelic design around the game and for the background of the cards, also in the text.<br>
The colors of the text are colorful but also easy to see for someone with visual impairment.<br>
Font-family used PT Sans for the page.<br>
## Skeleton 

### **Landing page**<br>

![alt landing](./assets/READMEimages/Wireindex.PNG)<br>

### **Game page**<br>

![alt gamepage](/assets/READMEimages/wiregamepage.PNG)<br>




## Colors used for text<br>


### **Click here to start text.**<br>

![alt clickhere](./assets/READMEimages/clickhere.PNG)

The click here to start text is plain black if you don't hover over it.<br>
It has a background of rgba(0,0,40,0). And a font size of 3em.<br>
When you hover over it starts to change colors in many different variations.<br>

### **Twitter text.**

![alt twitter](./assets/READMEimages/twitter.PNG)

The twitter background is in Rebeccapurple color.<br>
The text is Limegreen.<br>
On hover it turns limegreen as in picture below.<br>
font-size used is xx-large.<br>

![alt twitterhover](./assets/READMEimages/twitter2.PNG)<br>

The text has a fontawesome twitter icon in the start.<br>

### **Made by tobias text.**<br>

![alt madeby](./assets/READMEimages/madeby.PNG)<br>

The text has a background color of rebeccapurple.<br>
The text blinks from black to whitesmoke.<br>
font-size used is 30px.

### **Timer**

![alt timer](./assets/READMEimages/timer.PNG)<br>

Timer uses Black color.<br>
Font-size is 30px.<br>

### **Lives**

![alt Lives](./assets/READMEimages/lives.PNG)<br>

Lives uses Black color.<br>
Font-size on Lives is 2em.

## Picture landing page.<br>

![alt landing](./assets/images/dogflip.jpeg)

The picture is moving even when not hoverd over but when you hover over it starts moving faster.<br>
The image is scaled down and i used [Headermaker](https://www.freewebheaders.com/header-maker/) to make the text and crop the picture.<br>

## Background used.<br>

![alt landing](./assets/READMEimages/firstpageback2.jpg)<br>

## Card background used.<br>

![alt landing](./assets/images/backcards.jpg)<br>

# User Experience<br>

## First time user.<br>

- For the first time user i want the game to be easy to navigate the Landing page and to get into the game.<br>
- The user should find the game easy to adapt and learn fast and wanting to stay and play.<br>
- The user should be able to play the game on multiple screens with diffrent resolutions so he's not forced to use it on his pc or phone.<br>

## Returning user.<br>

- The game is 2-3 times Return user friendly, but then the user expects more.<br>
- I think my game is a bit too simplistic for a returning user.<br>
- To get returning users the game needs for features so the user can feel that they progress.<br>
- High score and multiple difficulties is a good start to make the game return user friendly.<br>


## Owner goals.<br>

- My goals are to later on update the website with more features.<br>
- Adding a high score name board, Multiple difficulty levels.<br>
- These changes should make the website more friendly for returning users.<br>
- Try to keep the user interested for as long as possible with updates.<br>

# Features<br>

## Landing page.<br>

When you first enter the website you will start at the landing page also called index page.<br>
On the index page you got a swaying image of a dog with a text that sais Match the dog card game.<br>
Under the dog image you got the click here to start game which brings you to the game.<br>
Under the dog image you got the contact us on twitter and the made by tobias text.<br>
If you hover over the dog image the picture start swaying faster than it did when not hovering.<br>
The twitter text gets a hover color of lime green.<br>
The made by Tobias changes text colors blinking.<br>
The Landing page is made to be simple with some quick info what the game is and click here to play.<br>

![alt landingpage](./assets/READMEimages/landing.PNG)

## Game page.<br>

**Timer**<br>
The game page when you enter it on the top you see the countdown timer that starts on 2minutes.<br>
If the counter goes down to 0 you lose the game and get a popup that says you lost the game.<br>
If you win the game by finding all the right pairs the counter automatically stops counting down and you get a you win popup.<br>

**Lives**<br>

The Lives counter is just under the timer counter.<br>
Every time you pick a wrong pair you lose a life.<br>
If the lives counter reaches 0 you lose and get a you lost popup.<br>

**Card board**<br>

Below the Lives and timer functions you got 4 rows with 6 cards in every row and a total of 24 cards and 12 pairs to find.<br>

![alt landingpage](./assets/READMEimages/gamepage.PNG)<br>

**Win popup**<br>
![alt win](./assets/READMEimages/win.PNG)<br>

**lose popup**<br>
![alt loose](./assets/READMEimages/loose.PNG)<br>

# Technologies Used

## Coding Languages Used

- HTML 5
- CSS
- Javascript

## Applications Used

- Balsamiq was used to create wireframes.
- Google Fonts were used for the text font.
- Github to upload and store the project.
- Chrome dev tools to test responsiveness test check code.
- Gitpages to upload the site.
- W3 validator to validate css and html code.
- Jshint to validate Javascript code.
- Fontawesome for twitter icon.
- https://www.freewebheaders.com/header-maker/ to make the landing page picture.
- Gitpod To code the website and use git to commit and push code.
- Github pages to upload the website.
- SweetAlert to make a good looking lose/win popup.

# Testing

## Lighthouse

I tested my webpage via lighthouse in the google dev tools.<br>
I ran google chrome in incognito mode to run the lighthouse tests.<br>
I ran the Lighthouse checks for Mobile and Desktop.<br>
At first i had some problems with accessibility score that was just at 70 cause of image ALT code wasn't there, but  after adding that the score  bumped up a lot.<br>

**Mobile**<br>
![alt Mobile](./assets/READMEimages/lighthousemobile.PNG)

**Desktop**<br>
![alt Desktop](./assets/READMEimages/lighthousedesktop.PNG)


## W3C CSS Validator

I ran the Validator using W3C CSS validator and had one warning for the import of google fonts.
The warnings meaning is that W3C CSS validator is just saying that it won't check the font link so it's not really a problem.

![alt CSSVALI](./assets/READMEimages/cssvalidator1.PNG)

![alt CSSVALIW](./assets/READMEimages/cssvalidator2.PNG)

## W3C HTML Validator

I ran the W3C Validator on both the index.html and game.html with no warnings or errors.<br>

**Index.html**

![alt htmlVALI](./assets/READMEimages/indexhtml.PNG)
**Game.html**

![alt htmlVALII](./assets/READMEimages/gamehtmlv.PNG)

## JSHint Validator

I used JsHint to validate my javascript code using the ES6 feature option for the newer version of the code.<br>
I validated both the script.js and swing.js.<br>
The undefined variable swal showing up is from sweetalets cause the validator doesn't recognise those commands.<br>

**script.js**<br>
![alt scriptjsvali](./assets/READMEimages/scriptjs.PNG)


**swing.js**<br>
![alt htmlVALII](./assets/READMEimages/swingjs.PNG)

## Responsive

I coded the website with media queries to be responsive on diffrent resolutions.<br>
I used google dev tools to test how responsive it was and as reference on how to code it to be responsive.<br>

The website is responsive on the most used resolutions that i checked via ami.responsivedesign.<br>

Resolutions<br>
Desktop<br>
1600x992px scaled down to scale(0.3181)<br>
Laptop<br>
1280x802px scaled down to scale(0.277)<br>
Tablet<br>
768x1024px scaled down to scale(0.219)<br>
Mobile<br>
320x480px scaled down to scale(0.219)<br>

I also checked so it works in google dev tools using a few devices.<br>

It works on all the devices on the picture below.<br>

![alt responsive](./assets/READMEimages/responsive.PNG)<br>

## Solved bugs<br>
### Bug 1<br>
I had some problems to get my timer to stop counting down when you wont the game.<br>
At first it had the code<br> 
`if (toggleCard.length === 24) {
        clearInterval(countdowntimer);`
        Targeting my p id.<br>
I tried many diffrent things and it took awhile.<br>
I had to change the code `setInterval(updateTimer, 1000);`<br>
I changed it to `const counter = setInterval(updatetimer, 1000);`<br>
I had to change it so i could targeted the setinterval and name it.<br>
After that the timer stopt when i won the game.<br>
And i used `clearInterval(counter);` and `const counter = setInterval(updatetimer, 1000);`<br>
to fix it and make counter stop when i won.<br>

### Bug 2<br>

I had problems for some time when i tried to upload my page to github pages.<br>
When i uploaded it didn't wanna show my pictures and after some looking around i understood why.
i wrote my picture patch out like /assets/images github pages doesn't like that.<br>
Github pages want you to write out the relative paths starting with ../images.<br>

### Bug 3<br>

When I did the lighthouse testing i got a score of 70% in accessibility cause my images didn't have any alt tags.<br>
After looking around a bit for a solution i found one using the code `face.setAttribute("alt", item.name);`<br>
That code made all the images get an alt tag and the accessibility score went up to high 90s.<br>

### Unsolved bugs<br>

None that i know of.<br>































































