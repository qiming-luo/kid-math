// initiate game mod
const gameMod = {
    mod: ''
}
// elements
const topChoiceForm = document.getElementById('top-choice-form')

// exp 
topChoiceForm.addEventListener('click', function(e){
    gameMod.mod = e.target.value
    document.getElementById('exp').textContent = gameMod.mod
})