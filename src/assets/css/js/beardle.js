
document.addEventListener("DOMContentLoaded", () => {
    createsquares();

    const keys = document.querySelectorAll(".keyboard-row button");
    let guessedwords = [[]];
    let availablespace = 1;

    let wordlist = ["math","bear","paws","hall","club","band","book","work","milk","dens","chem","grad","hard","test","quiz","room","tech","news","dope","food","drip","fear","cool","bold","quad","claw","exam","epic","film","grow","rail","step","fail","door","food","beat","tree","note","seat","form","desk","bell","wall","dean","read","team","teen","sing","play"]
    let beardle = wordlist[Math.floor(Math.random()*wordlist.length)];
    let guessedwordcount = 0;

    for (let index = 0; index < keys.length; index++) {
        keys[index].onclick = ({target}) => {
            const key = target.getAttribute("data-key");
            if (key === "enter"){
                submitword();
                return;
            }

            if (key === "del"){
                deleteLetter()
                return;
            }

            updateGuessedWords(key);
        }
        
    }


    function gettilecolor(letter, index, currentword) {
        const iscorrectletter = beardle.includes(letter);

        if (!iscorrectletter){
            return "rgb(136, 136, 143)";
        }

        const isinpostition = letter === beardle.charAt(index);
        

        if (!isinpostition) {
            if (index === 0){
                return "rgb(207, 170, 6)";
            }

            if (index === 1){
                if (!(letter === currentword[0])){
                    return "rgb(207, 170, 6)";
                }
            }

            if (index === 2){
                if(!(letter === currentword[0]) && !(letter === currentword[1])){
                    return "rgb(207, 170, 6)";
                }
            }

            if (index === 3){
                if(!(letter === currentword[0]) && !(letter === currentword[1]) && !(letter === currentword[2])){
                    return "rgb(207, 170, 6)";
                }
            }

            return "rgb(136, 136, 143)";
            
        }


        return "rgb(83, 141, 78)";
        

    }


    function submitword() {
        const currentword = getCurrentWord()

        //FETCH -- CHECK IF ACC WORD

        if (currentword.length !== 4) {
            alert("word must be 4 letters!");
        }

        const currentwordcheck = currentword.join("");

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentwordcheck}`, {
            method: "GET",
          }).then((result) => {
            if(!result.ok){
                throw Error()
            }

        const firstletterid = guessedwordcount * 4 + 1;
        const timeinterval = 200;
        currentword.forEach((letter, index) => {
            setTimeout(() => {
                const tilecolor = gettilecolor(letter, index, currentword);
                const letterid = firstletterid + index;
                const letterelement = document.getElementById(letterid);
                letterelement.classList.add("animate__flipInX");
                letterelement.style = `background-color: ${tilecolor};`;


            }, timeinterval * index)
        })

        guessedwordcount += 1;

        if (currentword.join('') == beardle) {
            setTimeout(() => alert("Congratulations! You got the correct word!"), 1200)
        }

        if (guessedwords.length > 4){
            setTimeout(() => alert(`You Lost! The correct word was "${beardle}"`), 1200)
        }

        guessedwords.push([]);


          }).catch(()=>{
            setTimeout(() => window.alert("Word is not recognized!"), 100)
          })

        
    }

    function deleteLetter() {
        const currentword = getCurrentWord()

        if(currentword.length > 0 && currentword.length < 5){
            const removedLetter = currentword.pop()

        guessedwords[guessedwords.length - 1] = currentword;

        const lastLetterElement = document.getElementById(String(availablespace - 1));
        lastLetterElement.textContent = '';
        availablespace = availablespace - 1;
        }
        

    }


    function createsquares() {
        const gameboard = document.getElementById("board")

        for (let index = 0; index < 20; index++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("animate__animated");
            square.setAttribute("id", index + 1);
            gameboard.appendChild(square);            
        }

    }

    function getCurrentWord() {
        const numberGuessedWords = guessedwords.length;
        return guessedwords[numberGuessedWords - 1];
    }

    function updateGuessedWords(letter) {
        const currentword = getCurrentWord()

        
        if (currentword && currentword.length < 4) {
            currentword.push(letter);

            const avaialblespaceelement = document.getElementById(String(availablespace));
            availablespace ++;

            avaialblespaceelement.textContent = letter;
        }
    }

});
    
        
