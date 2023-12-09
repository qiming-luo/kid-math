// initiate game data
const game = {
    tutorial: {
        mod: '',
        x: 0,
        y: 0,
        answer: 0
    },
    randomQuiz: {
        x: 0,
        y: 0,
        answer: 0
    }
}

// random quize events......................................................................................
// elements
const nextBtnRandomQ = document.getElementById('next-btn-randomQ')
const questionRandom = document.getElementById('question-random')
const userAnswerRandomQ = document.getElementById('user-answer-randomQ')

// next-btn event (display question)
nextBtnRandomQ.addEventListener('click', function(){
    // gen 2 random num(1-9)
    let val1 = Math.ceil(Math.random()*9)
    let val2 = Math.ceil(Math.random()*9)
    // donnot repeat the next question
    while(val1 == game.randomQuiz.x && val2==game.randomQuiz.y){
        val1 = Math.ceil(Math.random()*9)
        val2 = Math.ceil(Math.random()*9)
    }
    // store values 
    game.randomQuiz.x = val1
    game.randomQuiz.y = val2
    game.randomQuiz.answer = val1 + val2
    // display question
    questionRandom.textContent = `${val1} + ${val2} = `
    // clear stars and other txt
    document.getElementById('x-stars-random').innerHTML = ''
    document.getElementById('y-stars-random').innerHTML = ''
    document.getElementById('answer-verifier-symbol-random').innerHTML = ''
    document.getElementById('answer-verifier-text-ranom').textContent = ''
    document.getElementById('user-answer-randomQ').value = ''
})

// count stars event
document.getElementById('count-stars-btn-random').addEventListener('click', function(){
    let xStars = ''
    let yStars = ''
    // asign x and y stars
    for(let i=1; i<=game.randomQuiz.x; i++){
        xStars += '&#9872;  '
    }
    for(let i=1; i<=game.randomQuiz.y; i++){
        yStars += '&#9872;  '
    }
    // display them
    document.getElementById('x-stars-random').innerHTML = xStars
    document.getElementById('y-stars-random').innerHTML = yStars
})

// check answer event
document.getElementById('check-answer-btn-random').addEventListener('click', function(){
    // get user answer
    const userAnswer = Number(document.getElementById('user-answer-randomQ').value)
    // verify answer
    if(userAnswer == game.randomQuiz.answer){
        document.getElementById('answer-verifier-symbol-random').innerHTML = '&#9883;'
        document.getElementById('answer-verifier-text-ranom').textContent = 'well done'
    }else{
        document.getElementById('answer-verifier-symbol-random').innerHTML = '&#9747;'
        document.getElementById('answer-verifier-text-ranom').textContent = 'try again'
    }
})

// tutorial events ----------------------------------------------------------------------------------------
// elements
const xEle = document.getElementById('x-chooice-form')
const tutorialMod = document.getElementById('tutorial-mod')

// handle game mod/x change
tutorialMod.addEventListener('change', function(e){
    // load mod, 2 mods: stsTutorial, tutorialQuiz
    game.tutorial.mod = e.target.value
    // reset y to 0 if on step by step mod
    if(game.tutorial.mod == 'stsTutorial'){
        game.tutorial.y = 0
    }
    // clear txt
    document.getElementById('answer-verifier-symbol-tutorial').innerHTML = ''
    document.getElementById('answer-verifier-text-tutorial').textContent = ''
    document.getElementById('x-stars-tutorial').innerHTML = ''
    document.getElementById('y-stars-tutorial').innerHTML = ''
    document.getElementById('tutorial-user-answer').value=''
    document.getElementById('questionT').textContent = ''
})

xEle.addEventListener('change', function(e){
    // load data
    game.tutorial.x = Number(e.target.value)
    // reset y to 0 if on step by step mod
    if(game.tutorial.mod == 'stsTutorial'){
        game.tutorial.y = 0
    }
    // clear txt
    document.getElementById('answer-verifier-symbol-tutorial').innerHTML = ''
    document.getElementById('answer-verifier-text-tutorial').textContent = ''
    document.getElementById('x-stars-tutorial').innerHTML = ''
    document.getElementById('y-stars-tutorial').innerHTML = ''
    document.getElementById('tutorial-user-answer').value=''
    document.getElementById('questionT').textContent = ''
})

// display question (next btn event)
document.getElementById('next-btn-tutorial').addEventListener('click', function(){
    
    // handle step by step mod
    if(game.tutorial.mod == 'stsTutorial'){
        let val1 = game.tutorial.x
        if(game.tutorial.y == 9){
            game.tutorial.y = 0
        }
        // increment by 1 each click
        let val2 = game.tutorial.y + 1
        // store value
        game.tutorial.y = val2
        game.tutorial.answer = val1 + val2
        // write question
        document.getElementById('questionT').textContent = `${val1} + ${val2} = `
    }
    // handle tutorial quiz 
    if(game.tutorial.mod == 'tutorialQuiz'){
        let val1 = game.tutorial.x
        let val2 =  Math.ceil(Math.random()*9)
        // donnot repeat next question
        while(val2 == game.tutorial.y){
            val2 =  Math.ceil(Math.random()*9)
        }
        //store data
        game.tutorial.y = val2
        game.tutorial.answer = val1 + val2
        // write question
        document.getElementById('questionT').textContent = `${val1} + ${val2} = `
    }

    //clear txt
    document.getElementById('answer-verifier-symbol-tutorial').innerHTML = ''
    document.getElementById('answer-verifier-text-tutorial').textContent = ''
    document.getElementById('x-stars-tutorial').innerHTML = ''
    document.getElementById('y-stars-tutorial').innerHTML = ''
    document.getElementById('tutorial-user-answer').value=''
})

//answer verifier event
document.getElementById('check-answer-btn-tutorial').addEventListener('click', function(){
    // get user input
    const userAnswer = document.getElementById('tutorial-user-answer').value
    // verify
    if(userAnswer == game.tutorial.answer){
        document.getElementById('answer-verifier-symbol-tutorial').innerHTML = '&#9883;'
        document.getElementById('answer-verifier-text-tutorial').textContent = 'well done'
    }else{
        document.getElementById('answer-verifier-symbol-tutorial').innerHTML = '&#9747;'
        document.getElementById('answer-verifier-text-tutorial').textContent = 'try again'
    }
})

// show stars events
document.getElementById('count-stars-btn-tutorial').addEventListener('click', function(){
    let xStars = ''
    let yStars = ''
    for(let i=0; i<game.tutorial.x; i++){
        xStars += '&#9872;  '
    }
    for(let i=0; i<game.tutorial.y; i++){
        yStars += '&#9872;  '
    }
    // write
    document.getElementById('x-stars-tutorial').innerHTML = xStars
    document.getElementById('y-stars-tutorial').innerHTML = yStars
})