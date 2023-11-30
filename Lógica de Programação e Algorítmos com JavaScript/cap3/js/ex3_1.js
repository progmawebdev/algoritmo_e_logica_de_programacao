let nameStudent = document.querySelector('.name-student')
let firstGrade = document.querySelector('.ipt-1nota');
let secondGrade = document.querySelector(".ipt-2nota");

let btnSend = document.querySelector(".btn-send");

let outResult = document.querySelector('.out-result');
let outStatus = document.querySelector(".out-status");

function calGrades(grade1, grade2){
    let mean = (grade1 + grade2)/2
    
    outResult.textContent = `Média das Notas: ${mean}`

    if (mean >= 7){
        outStatus.style.color = 'gree'
        outStatus.textContent = `Parabéns, ${nameStudent.value}. Você foi Aprovado!!!`
    } else if(mean >= 4){
        outStatus.style.color = 'blue';
        outResult.textContent = `Em Exame, ${nameStudent.value}!`
    }
     else{
        outStatus.style.color = 'red'
        console.log('saas')
        outStatus.textContent = `Mermão, ${nameStudent.value}. Tu é burrão pra cacete veio!!!`
    }
}

// Wrapper Function
function eventCal(){
    calGrades(Number(firstGrade.value), Number(secondGrade.value))    
}

btnSend.addEventListener('click', eventCal)



