/* *********score************* */
var update_score = 0;
let score = document.getElementById('score');
    score.innerHTML = update_score;

let submit = document.getElementById('submit');


window.onload = newExample()
/**make new question new example**/
function newExample() {
    let firstNum = parseInt(Math.random()*10);
    let secundaryNum = parseInt(Math.random()*10);
    let total = firstNum + secundaryNum;
    
    let first = document.getElementById('first_num');
        first.innerHTML = firstNum;
    let secundary = document.getElementById('sec_num');
        secundary.innerHTML = secundaryNum;
    
    if (update_score == 0) {
            score.style.color = '#fff';
        }  else if(update_score < 0) {
            score.style.color = 'red';
        }  else{
            score.style.color = 'green';
    }
    

    submit.addEventListener('click', function(){
        
        var score = document.getElementById('score');
            score.innerHTML = update_score;
        let guess = document.getElementById('guess').value;
            guess = Number(guess);
                    //check answer
        var text = '';
        

        if (guess === total){
            
            text = 'Correct answer';
              
            document.getElementById('response').innerHTML = text;
            update_score = update_score + 1;
            

        } else {
            
            text = 'Incorrect. Answer was ' + total + '.';
            
            document.getElementById('response').innerHTML = text;  
            update_score = update_score - 1;   
              
        }

    });
}