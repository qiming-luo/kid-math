
// const modChoosed= {
//     // game has 3 mods: tutorial, fixNum-quiz, random-quiz
//     mod: ''
// }

// const gameData = {
//     // seperate tutorial and other mods to avoid data interuption
//     tutorial: {
//         firstNum: 0,
//         secondNum: 0,
//         answer: 0
//     },

//     otherMods: {
//         firstNum: 0,
//         secondNum: 0,
//         answer: 0
//     }
// }

// // elements
// const topChoiceForm = document.getElementById('top-choice-form')
// const subOpForm = document.getElementById('sub-options')
// const nextBtn = document.getElementById('next-btn')
// const questionEle = document.getElementById('question')
// const userAnswerEle = document.getElementById('user-answer')
// const checkAnswerBtn = document.getElementById('check-answer-btn')
// const answerVerifier = document.getElementById('answer-verifier')
// const countStarsBtn = document.getElementById('count-stars-btn')

// // handle mod event
// topChoiceForm.addEventListener('click', function(e){
//     // clear txt
//     questionEle.textContent = ''
//     // store game mode choosed
//     modChoosed.mod = e.target.value
//     // while choose tutorial mod, reset sec num to 0
//     if(modChoosed.mod == 'tutorial'){
//         gameData.tutorial.secondNum = 0
//     }
// })

// // handle sub-op event, set first-num
// subOpForm.addEventListener('click', function(e){
//     // clear txt
//     questionEle.textContent = ''

//     // game has 3 mods: tutorial, fixNum-quiz, random-quiz
//     // set first num
//     if(modChoosed.mod == 'tutorial'){
//         gameData.tutorial.firstNum = Number(e.target.value)
//         gameData.tutorial.secondNum = 0 // while choose a different first num, reset sec num to 0
//     }else{
//         gameData.otherMods.firstNum = Number(e.target.value)
//     }
// })

// // handle next-btn event
// nextBtn.addEventListener('click', function(){
//     // clear stars
//     document.getElementById('first-num-stars').innerHTML = ''
//     document.getElementById('second-num-stars').innerHTML = ''
//     // 
//     // handle random quiz
//     if(modChoosed.mod == 'random-quiz'){
       
//        let firstVal =  Math.ceil(Math.random()*9)
//        let secondVal = Math.ceil(Math.random()*9)
//        // make sure sequential question donot repeat
//         while(firstVal == gameData.otherMods.firstNum && secondVal == gameData.otherMods.secondNum){
//             firstVal =  Math.ceil(Math.random()*9)
//             secondVal = Math.ceil(Math.random()*9)
//         }
//        // store two vals
//        gameData.otherMods.firstNum = firstVal
//        gameData.otherMods.secondNum = secondVal
//        gameData.otherMods.answer = firstVal + secondVal

//        // write question txt
//        questionEle.textContent = `${firstVal} + ${secondVal} = `
//     }

//     // handle tutorial
//     if(modChoosed.mod == 'tutorial'){
//        // let firstVal = gameData.tutorial.firstNum
//         let firstVal = subOpForm.subOb.value
//         console.log(firstVal)
//         if(gameData.tutorial.secondNum === 9){
//             gameData.tutorial.secondNum = 0
//         }
//         // present val = preVal + 1
//         let secondVal = gameData.tutorial.secondNum + 1
//         // store vals
//         gameData.tutorial.secondNum = secondVal
//         gameData.tutorial.answer = firstVal + secondVal
//         // write question txt
//         questionEle.textContent = `${firstVal} + ${secondVal} = `
//     }

//     // handle fixNum-quiz
//     if(modChoosed.mod == 'fixNum-quiz'){
//         let firstVal = gameData.otherMods.firstNum
//         let secondVal = Math.ceil(Math.random()*9)
//         // make second num not repeat itself
//         while(secondVal == gameData.otherMods.secondNum){
//             secondVal = Math.ceil(Math.random()*9)
//         }
//         // store data
//         gameData.otherMods.secondNum = secondVal
//         gameData.otherMods.answer = firstVal + secondVal
//         //write question
//         questionEle.textContent = `${firstVal} + ${secondVal} = `

//     }

// })

// // handle verify answer
// checkAnswerBtn.addEventListener('click', function(){
//     let userAnswer = userAnswerEle.value
    
// })

// // handle count stars event
// // countStarsBtn.addEventListener('click', function(){
// //     let starsOne = ''
// //     let starsTwo = ''
// //     for(let i=1; i<=gameMod.firstNum; i++){
// //         starsOne += '&#9734  '
// //     }
// //     document.getElementById('first-num-stars').innerHTML = starsOne

// //     for(let i=1; i<=gameMod.secondNum; i++){
// //         starsTwo += '&#9734  '
// //     }
// //     document.getElementById('second-num-stars').innerHTML = starsTwo
// // })

//-------------------

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