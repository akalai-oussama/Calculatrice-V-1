// Variables
let x,y,solution,operation;
let stringx, stringy;



// Métier
function Calculer(x,y,operation){
    let _answer = undefined;
    switch (operation) {
        case '+':
            _answer = x + y;
            break;
        case '-':
            _answer = x-y;
                break;
        default:
            break;
    }
    return _answer;
}


// Présentation
function ClickNumber(number){
    if(x == undefined){
        if(stringx == undefined) stringx = '';
        stringx += number;
    } 
    else {
        if(stringY == undefined) stringY = '';
        stringY += number;
    } 

    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
    
    if(x != undefined && y != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(stringx != undefined)
        afficheur.value += stringx 
        if(operation != undefined)
            afficheur.value += operation     
        if(stringY != undefined)
            afficheur.value += stringY 

        }
 
   
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        x = parseFloat(stringx);
        Afficher();
    }else{
        alert("You have already chosen the operation  " + operation);
    }
}

function Egale(){
    x = parseFloat(stringx);
    y = parseFloat(stringY);
    answer = Calculer(x,y,operation);
    Afficher(answer);
}

function init(){
    x = undefined;
    y = undefined;
    stringx = undefined;
    stringY = undefined;
    operation = undefined;
    let display = document.getElementById("afficheur");
    
    display.value = "";
}