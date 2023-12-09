
// game has 3 mods: tutorial, fixNum-quiz, random-quiz
const game = {
    mod: '',
    firstNum: 0,
    secondNum: 0,
    answer: 0
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
    // clear txt
    questionEle.textContent = ''
    // store game mode choosed
    game.mod = e.target.value
    // reset second num to 0 
    if(game.mod == 'tutorial'){
        game.secondNum = 0
    }
})

// handle sub-op event, set first-num
subOpForm.addEventListener('click', function(e){
    // clear txt
    questionEle.textContent = ''

    // game has 3 mods: tutorial, fixNum-quiz, random-quiz
    // set first num
    game.firstNum = Number(e.target.value)
    // while choose a different first num, reset sec num to 0
    if(game.mod == 'tutorial'){
        game.secondNum = 0
    }
})

// handle next-btn event
nextBtn.addEventListener('click', function(){
    // clear stars
    document.getElementById('first-num-stars').innerHTML = ''
    document.getElementById('second-num-stars').innerHTML = ''
    // 
    // handle random quiz
    if(game.mod == 'random-quiz'){
       
       let firstVal =  Math.ceil(Math.random()*9)
       let secondVal = Math.ceil(Math.random()*9)
       // make sure sequential question donot repeat
        while(firstVal == game.firstNum && secondVal == game.secondNum){
            firstVal =  Math.ceil(Math.random()*9)
            secondVal = Math.ceil(Math.random()*9)
        }
       // store two vals
       game.firstNum = firstVal
       game.secondNum = secondVal
       game.answer = firstVal + secondVal

       // write question txt
       questionEle.textContent = `${firstVal} + ${secondVal} = `
    }

    // handle tutorial
    if(game.mod == 'tutorial'){
        let firstVal = game.firstNum
        
        if(game.secondNum === 9){
            game.secondNum = 0
        }
        // present val = preVal + 1
        let secondVal = game.secondNum + 1
        // store vals
        game.secondNum = secondVal
        game.answer = firstVal + secondVal
        // write question txt
        questionEle.textContent = `${firstVal} + ${secondVal} = `
    }

    // handle fixNum-quiz
    if(game.mod == 'fixNum-quiz'){
        let firstVal = game.firstNum
        let secondVal = Math.ceil(Math.random()*9)
        // make second num not repeat itself
        while(secondVal == game.secondNum){
            secondVal = Math.ceil(Math.random()*9)
        }
        // store data
        game.secondNum = secondVal
        game.answer = firstVal + secondVal
        //write question
        questionEle.textContent = `${firstVal} + ${secondVal} = `

    }

})

// handle verify answer
checkAnswerBtn.addEventListener('click', function(){
    let userAnswer = userAnswerEle.value
    
})

// handle count stars event
// countStarsBtn.addEventListener('click', function(){
//     let starsOne = ''
//     let starsTwo = ''
//     for(let i=1; i<=gameMod.firstNum; i++){
//         starsOne += '&#9734  '
//     }
//     document.getElementById('first-num-stars').innerHTML = starsOne

//     for(let i=1; i<=gameMod.secondNum; i++){
//         starsTwo += '&#9734  '
//     }
//     document.getElementById('second-num-stars').innerHTML = starsTwo
// })