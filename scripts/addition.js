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
        xStars += '&#9734;  '
    }
    for(let i=1; i<=game.randomQuiz.y; i++){
        yStars += '&#9734;  '
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
        document.getElementById('answer-verifier-symbol-random').innerHTML = '&#127799;'
        document.getElementById('answer-verifier-text-ranom').textContent = 'well done'
    }else{
        document.getElementById('answer-verifier-symbol-random').innerHTML = '&#9747;'
        document.getElementById('answer-verifier-text-ranom').textContent = 'try again'
    }
})

// tutorial events ----------------------------------------------------------------------------------------

