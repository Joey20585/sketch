let color="black";

function populateBoard(size){
    let board=document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    board.innerHTML = '';


for(let i=0; i<size* size; i++){
    let square=document.createElement('div');
    square.addEventListener("mouseover", colorSquare);
     square.style.backgroundColor="white";
    board.insertAdjacentElement("beforeend" ,square);
}
}
populateBoard(16);

function changeSize(input){
    if (input >= 2 && input <= 100){populateBoard(input);

} else{
    console.log("too many squares");
}
}
function colorSquare(){
    this.style.backgroundColor = color; 
}

function changeColor(choice){ 
    color= choice;

}
