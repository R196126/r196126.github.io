let playerValue;
var score = 0;
document.getElementById('komentar').style.borderColor = '#f8f8ff';
function startHry() {
    
    let start = document.getElementById('start');
    let text = document.getElementById('text');
    text.innerHTML = 'vyberte si |kámen|nůžky|papír| ';   
    

    document.getElementById('kámen').addEventListener('click', function kámenP() {
        playerValue = 0;
        document.getElementById('nadpis_hrac').innerHTML = 'Hráč = kámen';
        document.getElementById('confirm').innerHTML = 'potvrdit';
        document.getElementById('confirm').style.background = 'aqua';
        document.getElementById('confirm').style.borderColor = 'black';
        console.log(playerValue);
    })

    document.getElementById('nůžky').addEventListener('click', function nůžkyP() {
        
        playerValue = 1;
        document.getElementById('nadpis_hrac').innerHTML = 'Hráč = nůžky';
        document.getElementById('confirm').innerHTML = 'potvrdit';
        document.getElementById('confirm').style.background = 'aqua';
        document.getElementById('confirm').style.borderColor = 'black';
        console.log(playerValue);

    })

    document.getElementById('papír').addEventListener('click', function papírP() {
        playerValue = 2;
        document.getElementById('nadpis_hrac').innerHTML = 'Hráč = papír';
        document.getElementById('confirm').innerHTML = 'potvrdit';
        document.getElementById('confirm').style.background = 'aqua';
        document.getElementById('confirm').style.borderColor = 'black';
        console.log(playerValue);
    })

    document.getElementById('confirm').addEventListener('click', function potvrdit() {
        console.log(playerValue);

        let array = ['kámen', 'nůžky', 'papír'];
        var randomIndex = parseInt(Math.random()*array.length);
        console.log(randomIndex);

        if (playerValue == 0 && randomIndex == 0){
            console.log('tie');
            document.getElementById('komentar').innerHTML ='Nikdo nevyhrál';
            document.getElementById('komentar').style.color = 'black';
            document.getElementById('komentar').style.borderColor = 'black';
        }else if (playerValue == 1 && randomIndex == 1){
            console.log('tie');
            document.getElementById('komentar').innerHTML = 'Nikdo nevyhrál';
            document.getElementById('komentar').style.color = 'black';
            document.getElementById('komentar').style.borderColor = 'black';
        }else if (playerValue == 2 && randomIndex == 2){
            console.log('tie');
            document.getElementById('komentar').innerHTML = 'Nikdo nevyhrál';
            document.getElementById('komentar').style.color = 'black';
            document.getElementById('komentar').style.borderColor = 'black';
        }

        if (playerValue == 0 && randomIndex == 2){
            console.log('E_win');
            score=score-1;
            document.getElementById('komentar').innerHTML = 'Vyhrává protivník';
            document.getElementById('komentar').style.color = 'red';
            document.getElementById('komentar').style.borderColor = 'red';
            
        }else if (playerValue == 1 && randomIndex == 0){
            console.log('E_win');
            score=score-1;
            document.getElementById('komentar').innerHTML = 'Vyhrává protivník';
            document.getElementById('komentar').style.color = 'red';
            document.getElementById('komentar').style.borderColor = 'red';
        }else if (playerValue == 2 && randomIndex == 1){
            console.log('E_win');
            score=score-1;
            document.getElementById('komentar').innerHTML = 'Vyhrává protivník';
            document.getElementById('komentar').style.color = 'red';
            document.getElementById('komentar').style.borderColor = 'red';
        }

        if (playerValue == 0 && randomIndex == 1){
            console.log('P_win');
            score=score+1;
            document.getElementById('komentar').innerHTML = 'Vyhrává hráč';
            document.getElementById('komentar').style.color = 'green';
            document.getElementById('komentar').style.borderColor = 'green';
        }else if (playerValue == 1 && randomIndex == 2){
            console.log('P_win');
            score=score+1;
            document.getElementById('komentar').innerHTML = 'Vyhrává hráč';
            document.getElementById('komentar').style.color = 'green';
            document.getElementById('komentar').style.borderColor = 'green';
        }else if (playerValue == 2 && randomIndex == 0){
            console.log('P_win');
            score=score+1;
            document.getElementById('komentar').innerHTML = 'Vyhrává hráč';
            document.getElementById('komentar').style.color = 'green';
            document.getElementById('komentar').style.borderColor = 'green';
        }

        switch (randomIndex) {
            case 0:
                document.getElementById('nadpis_protihrac').innerHTML = 'Protihráč = kámen';
                document.getElementById('kámen_e').style.backgroundColor = 'green';
                document.getElementById('nůžky_e').style.backgroundColor = 'red';
                document.getElementById('papír_e').style.backgroundColor = 'red';
                break;
                case 1:
                document.getElementById('nadpis_protihrac').innerHTML = 'Protihráč = nůžky';
                document.getElementById('kámen_e').style.backgroundColor = 'red';
                document.getElementById('nůžky_e').style.backgroundColor = 'green';
                document.getElementById('papír_e').style.backgroundColor = 'red';
                break;
            case 2:
                document.getElementById('nadpis_protihrac').innerHTML = 'Protihráč = papír';
                document.getElementById('kámen_e').style.backgroundColor = 'red';
                document.getElementById('nůžky_e').style.backgroundColor = 'red';
                document.getElementById('papír_e').style.backgroundColor = 'green';
                break;
        }
        document.getElementById('score').innerHTML= 'Score: '+score;
        console.log(score);
        if (score > 0){
            document.getElementById('score').style.color = 'green';
        }else if(score < 0){
            document.getElementById('score').style.color = 'red';
        }else{
            document.getElementById('score').style.color = 'black';
        }
        
        
    })
    

    document.getElementById('end').innerHTML= '';
    
};
