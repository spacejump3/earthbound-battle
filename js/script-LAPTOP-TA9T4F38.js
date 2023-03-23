var psiKnop = document.querySelector("#psiKnop")
var psiOptions = document.querySelector("#psiOptions")

var runKnop = document.querySelector("#runKnop")
var runOptions = document.querySelector("#runOptions")

var itemKnop = document.querySelector("#itemKnop")
var itemOptions = document.querySelector("#itemOptions")

var attack = document.querySelector("#attackRegular")
var youWin = document.querySelector("#textBoxWin")
var youLose = document.querySelector("#textBoxLose")

// psi attacks

var psiGamingAttack = document.querySelector("#psiGaming")
var psiFireAttack = document.querySelector("#psiFire")
var psiFreezeAttack = document.querySelector("#psiFreeze")
var psiThunderAttack = document.querySelector("#psiThunder")

// psi animations

var psiGamingAnimation = document.querySelector(".animationGif")
var psiFireAnimation = document.querySelector(".animationGifFire")
var psiFreezeAnimation = document.querySelector(".animationGifFreeze")
var psiThunderAnimation = document.querySelector(".animationGifThunder")

var myDialogueBox = document.querySelector("#myDialogueBox")
var myDamageOutput = document.querySelector("#myDamageOutput")

// numbers and counters

var healthCounter = document.querySelector("#healthNumber")
var psiCounter = document.querySelector("#psiNumber")
var myPsiCounter = 20
var myHealthCounter = 69
var enemyHealthCounter = 50
var starMan = document.querySelector("#starmanJr")

// audio

var backgroundMusic = document.querySelector("#backgroundMusic")
var winMusic = document.querySelector("#winMusic")
var loseMusic = document.querySelector("#loseMusic")

var music = document.querySelectorAll('audio');

music[0]


window.onload=function(){
    backgroundMusic.play()
    backgroundMusic.volume = .4
}

// dit zorgt ervoor dat je de PSI menu open en dicht kan zetten

psiKnop.addEventListener("click", togglePsiOptions)

function togglePsiOptions() {
    psiOptions.classList.remove("hidden")
}

function terugNaarMenuPSI() {
    psiOptions.classList.add("hidden")
}

// dit zorgt ervoor dat je de items open en dicht kan zetten

itemKnop.addEventListener("click", toggleItemOptions)

function toggleItemOptions() {
    itemOptions.classList.remove("hidden")
}

function terugNaarMenuItem() {
    itemOptions.classList.add("hidden")
}

// dit zorgt ervoor dat als je op run klikt, je een textbox krijgt

runKnop.addEventListener("click", toggleRunOptions)

function toggleRunOptions(){
    runOptions.classList.remove("hidden")
    setTimeout(removeToggleRunOptions, 2000)
}

function removeToggleRunOptions(){
    runOptions.classList.add("hidden")
}

// dit zorgt ervoor dat wanneer je op attack klikt, hij damage krijgt

attack.addEventListener("click", damageToEnemy)

function damageToEnemy() {
    
    if (enemyHealthCounter > 0){
        enemyHealthCounter = enemyHealthCounter -10
        myDamageOutput.textContent = 10
        starMan.classList.add("is-hurting")
        showDialogueBox()
        setTimeout(damageToMe, 1000)
    }

    else {
        starMan.style.visibility = "hidden"
        youWin.classList.remove("hidden")
        winMusic.play()
        winMusic.volume = .2
        backgroundMusic.volume = 0
    }
    console.log(enemyHealthCounter)
}

// psi Gaming

psiGaming.addEventListener("click", psiGamingDamageToEnemy)

function psiGamingDamageToEnemy() {
    
    if (enemyHealthCounter > 0 && myPsiCounter > 0){
        enemyHealthCounter = enemyHealthCounter -20
        myDamageOutput.textContent = 20
        myPsiCounter = myPsiCounter -3
        psiCounter.textContent = myPsiCounter
        psiGamingAnimation.classList.remove("hidden")
        psiOptions.classList.add("hidden")
        starMan.classList.add("is-hurting")
        showDialogueBox()
        setTimeout(damageToMe, 1000)
        setTimeout (removeHiddenPsi, 1700)
    }

    else {
        starMan.style.visibility = "hidden"
        youWin.classList.remove("hidden")
        psiOptions.classList.add("hidden")
        winMusic.play()
        winMusic.volume = .2
        backgroundMusic.volume = 0
    }
    console.log(enemyHealthCounter)
    console.log(myPsiCounter)
}

// psi Fire

psiFire.addEventListener("click", psiFireDamageToEnemy)

function psiFireDamageToEnemy() {
    
    if (enemyHealthCounter > 0 && myPsiCounter > 0){
        enemyHealthCounter = enemyHealthCounter -15
        myDamageOutput.textContent = 15
        myPsiCounter = myPsiCounter -2
        psiCounter.textContent = myPsiCounter
        psiFireAnimation.classList.remove("hidden")
        psiOptions.classList.add("hidden")
        starMan.classList.add("is-hurting")
        showDialogueBox()
        setTimeout(damageToMe, 1000)
        setTimeout (removeHiddenPsi, 1230)

        
    }

    else {
        starMan.style.visibility = "hidden"
        youWin.classList.remove("hidden")
        psiOptions.classList.add("hidden")
        winMusic.play()
        winMusic.volume = .2
        backgroundMusic.volume = 0
    }
    console.log(enemyHealthCounter)
    console.log(myPsiCounter)
}

// psi Freeze

psiFreeze.addEventListener("click", psiFreezeDamageToEnemy)

function psiFreezeDamageToEnemy() {
    
    if (enemyHealthCounter > 0){
        enemyHealthCounter = enemyHealthCounter -25
        myDamageOutput.textContent = 25
        myPsiCounter = myPsiCounter -5
        psiCounter.textContent = myPsiCounter
        psiFreezeAnimation.classList.remove("hidden")
        psiOptions.classList.add("hidden")
        starMan.classList.add("is-hurting")
        showDialogueBox()
        setTimeout(damageToMe, 1000)
        setTimeout (removeHiddenPsi, 1700)
    }

    else {
        starMan.style.visibility = "hidden"
        youWin.classList.remove("hidden")
        psiOptions.classList.add("hidden")
        winMusic.play()
        winMusic.volume = .2
        backgroundMusic.volume = 0
    }
    console.log(enemyHealthCounter)
}

// psi THunder

psiThunder.addEventListener("click", psiThunderDamageToEnemy)

function psiThunderDamageToEnemy() {
    
    if (enemyHealthCounter > 0){
        enemyHealthCounter = enemyHealthCounter -13
        myDamageOutput.textContent = 13
        myPsiCounter = myPsiCounter -1
        psiCounter.textContent = myPsiCounter
        psiThunderAnimation.classList.remove("hidden")
        psiOptions.classList.add("hidden")
        starMan.classList.add("is-hurting")
        showDialogueBox()
        setTimeout(damageToMe, 1000)
        setTimeout (removeHiddenPsi, 1700)
    }

    else {
        starMan.style.visibility = "hidden"
        youWin.classList.remove("hidden")
        psiOptions.classList.add("hidden")
        winMusic.play()
        winMusic.volume = .2
        backgroundMusic.volume = 0
    }
    console.log(enemyHealthCounter)
}

function removeHiddenPsi() {
    psiGamingAnimation.classList.add("hidden")
    psiFireAnimation.classList.add("hidden")
    psiFreezeAnimation.classList.add("hidden")
    psiThunderAnimation.classList.add("hidden")
}

function damageToMe() {
    starMan.classList.remove("is-hurting")
    myHealthCounter = myHealthCounter -20
    healthCounter.textContent = myHealthCounter
    setTimeout(hideDialogueBox, 1000)

    if(myHealthCounter < 0) {
        healthCounter.textContent = 0
    }

    if (myHealthCounter > 0){

    }

    else {
        youLose.classList.remove("hidden")
        document.getElementById("healthAndPSI").style.borderColor = "red"
        loseMusic.play()
        loseMusic.volume = .2
        backgroundMusic.volume = 0
    }
}

function showDialogueBox() {
    myDialogueBox.classList.remove("hidden")
}

function hideDialogueBox() {
    myDialogueBox.classList.add("hidden")
}

// Bronvermelding:

// Afbeelding Starman: Earthbound
// Muziek: Keiichi Suzuki Hirokazu Tanaka - Sanctuary Guardian