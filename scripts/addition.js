// initiate game mod
const gameMod = {
    mod: '',
    firstNum: 1
}
// elements
const topChoiceForm = document.getElementById('top-choice-form')
const subOpForm = document.getElementById('sub-options')

// exp 
topChoiceForm.addEventListener('click', function(e){
    gameMod.mod = e.target.value
    document.getElementById('exp').textContent = JSON.stringify(gameMod)
})

// exp sub-op event
subOpForm.addEventListener('click', function(e){
    gameMod.firstNum = Number(e.target.value)
    document.getElementById('exp').textContent = JSON.stringify(gameMod)
})