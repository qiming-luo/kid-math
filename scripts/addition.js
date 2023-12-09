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
})
