function timeFormat(hours, minutes){
    if (hours >= 10){
        return `${hours}:${minutes}`
    } else{
        return `0${hours}:${minutes}`
    }
}

let alphabet = 'qwertyuiopasdfghjklçzxcvbnm '
let timeZoneBrazilToFrench = 5;
let timeBrazil;
do{
    timeBrazil = prompt('Digite o horário brasileiro atual: ').trim()
} while (!timeBrazil || alphabet.includes(...timeBrazil) || Number(timeBrazil.slice(0,2)) >= 24 || Number(timeBrazil.slice(3, 5)) >= 60)


let hourBrazil = Number(timeBrazil.slice(0, 2));
let minutesBrazil = Number(timeBrazil.slice(3, 5));

let sumHourFrench = hourBrazil + timeZoneBrazilToFrench


let hourFrench = sumHourFrench
if (sumHourFrench >= 24){
    hourFrench = sumHourFrench - 24
}

alert(`
=== TIMEZONE WORLD ===

Brazil: ${timeBrazil}
French: ${timeFormat(hourFrench, minutesBrazil)}



`)






