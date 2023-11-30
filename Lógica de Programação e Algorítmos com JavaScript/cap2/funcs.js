function toCapitalize(string){
    //if (!string) return // se a string for falsa, não retorna nada e a execução termina
    return string.charAt(0).toUpperCase() + string.slice(1);
}



export default toCapitalize;


