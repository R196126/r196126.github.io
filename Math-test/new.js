/* count score */
var score = 0;
var points = document.getElementById('score');

/* comment for correct/incorrect */
const response = document.getElementById('response');
/* start example function */
newExample()
function newExample(){
    const submit = document.getElementById('submit');
    const guess = document.getElementById('guess');
    let first = document.getElementById('first_num');
    let second = document.getElementById('sec_num');

    let numberOne = Math.round(Math.random()*10);
    let numberTwo = Math.round(Math.random()*10);
    let numberThree = numberOne + numberTwo;

    console.log(numberOne,numberTwo,numberThree);
    first.innerHTML = numberOne;
    second.innerHTML = numberTwo;

    console.log(first.textContent);
    console.log(second.textContent);

}

submit.addEventListener('click', () => {
    var oneValue = parseInt(document.getElementById('first_num').textContent);
    var twoValue = parseInt(document.getElementById('sec_num').textContent);
    var threeValue = oneValue + twoValue;

    
    if(parseInt(guess.value) === parseInt(threeValue)){
        console.log("win");

        newExample();

        /*add score*/
        score++;
        points.innerHTML = score;
        /* color of score */
        if(score > 0){
            points.style.color = "green";
        } else if(score < 0){
            points.style.color = "red";
        }else{
            points.style.color = "#000";
        }
        /* comment if correct */
        response.innerHTML = "Answer is right.";

    } else{
        console.log("err");
        newExample();

        /* remove score */
        score--;
        points.innerHTML = score;
        /* color of score */
        if(score > 0){
            points.style.color = "green";
        } else if(score < 0){
            points.style.color = "red";
        }else{
            points.style.color = "#000";
        }
        /* comment if incorrect */
        response.innerHTML = "Incorrect. Right answer is "+threeValue;
    }
    
})
