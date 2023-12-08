// initiate game mod
// game has 3 mods: tutorial, fixNum-quiz, random-quiz
const gameMod = {
    mod: '',
    firstNum: 1, // default value: 1
    secondNum: 1,  // default value
    correctAnswer: 2 // default value
}
// elements
const topChoiceForm = document.getElementById('top-choice-form')
const subOpForm = document.getElementById('sub-options')
const nextBtn = document.getElementById('next-btn')
const questionEle = document.getElementById('question')
const userAnswerEle = document.getElementById('user-answer')
const checkAnswerBtn = document.getElementById('check-answer-btn')
const answerVerifier = document.getElementById('answer-verifier')
const countStarsBtn = document.getElementById('count-stars-btn')

// handle mod event
topChoiceForm.addEventListener('click', function(e){
    gameMod.mod = e.target.value
    document.getElementById('exp').textContent = JSON.stringify(gameMod)
    
})

// handle sub-op event
subOpForm.addEventListener('click', function(e){
    // reset second num to 1 once change first num 
    let newFirstNum = Number(e.target.value)
    if(newFirstNum !== gameMod.firstNum){
        gameMod.secondNum = 1
    }
    gameMod.firstNum = newFirstNum
    document.getElementById('exp').textContent = JSON.stringify(gameMod)
})

// handle next-btn event
nextBtn.addEventListener('click', function(){
    // 
    let firstVal = 0

    // handle random quiz
    if(gameMod.mod == 'random-quiz'){
        firstVal = Math.ceil(Math.random()*8)
        let secondVal = Math.ceil(Math.random()*9)
        // no repeat for first val and second val
        while(firstVal == gameMod.firstNum && secondVal == gameMod.secondNum){
            firstVal = Math.ceil(Math.random()*8)
            secondVal = Math.ceil(Math.random()*9)
        }
        // update gameMod data
        gameMod.firstNum = firstVal
        gameMod.secondNum = secondVal
        gameMod.correctAnswer = firstVal + secondVal
        questionEle.textContent = `${firstVal} + ${secondVal} = `
    }

    // handle tutorial
    if(gameMod.mod == 'tutorial'){
        firstVal = gameMod.firstNum
        let secondVal = gameMod.secondNum
        // update secondNum
        if(gameMod.secondNum == 9){
            gameMod.secondNum = 1
        }else{
            gameMod.secondNum += 1
        }
        gameMod.correctAnswer = firstVal + secondVal
        questionEle.textContent = `${firstVal} + ${secondVal} = `
    }

    // handle fixNum-quiz
    if(gameMod.mod == 'fixNum-quiz'){
        firstVal = gameMod.firstNum
        let secondVal = Math.ceil(Math.random()*9)
        // no repeat second val
        while(secondVal == gameMod.secondNum){
            secondVal = Math.ceil(Math.random()*9)
        }
        gameMod.secondNum = secondVal
        gameMod.correctAnswer = firstVal + secondVal
        questionEle.textContent = `${firstVal} + ${secondVal} = `

    }

})

// handle verify answer
checkAnswerBtn.addEventListener('click', function(){
    let userAnswer = userAnswerEle.value
    if(Number(userAnswer) == gameMod.correctAnswer){
        document.getElementById('answer-verifier-symbol').innerHTML = '&#127802;'
        document.getElementById('answer-verifier-text').innerHTML = 'correct answer, well done'
    }else{
        document.getElementById('answer-verifier-symbol').innerHTML = '&#9747;'
        document.getElementById('answer-verifier-text').innerHTML = 'try again'
        
    }
})