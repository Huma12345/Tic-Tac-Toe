
var cells = [0,0,0,0,0,0,0,0,0,0]; // make it 10 for the sake of array index  
var turn = 'O'; // first turn : O 
var infoDiv = document.getElementById('turnInfo');

function toggleTurn(){
   turn = turn == 'O' ? 'X' : 'O';
   infoDiv.innerHTML = 'Turn : '+turn;
   return turn;
}

function canvasClicked(cell){
   var cellIndex = cell.getAttribute('cell');
   if(!cells[cellIndex]){
      cells[cellIndex] = toggleTurn();
      cell.innerHTML = turn; // you can also add image here.
      checkWinner();
   }
}

//all possible combinations :P
function checkWinner(){
   winningCombinations = [
     [1,2,3],
     [4,5,6],
     [7,8,9],
     [1,4,7],
     [2,5,8],
     [3,6,9],
     [1,5,9],
     [3,5,7]
   ];

   // starting for loop
   for(var index=0; index <  winningCombinations.length; index++){
       winCond = winningCombinations[index];
       if(cells[winCond[0]] != 0 && 
          cells[winCond[0]] == cells[winCond[1]] && 
          cells[winCond[1]] == cells[winCond[2]])
       {
          alert(turn + ' is winner');
          playAgain();
          return;
       }
   }

   var allCellsFilled = 1;
   for(var index =1; index < cells.length; index++){
       if(!cells[index]){
          allCellsFilled = 0;
          break;
       }
   } 
   if(allCellsFilled){
      alert('Game is draw!');
      playAgain();
   }
}

// just another function to reset the game
function playAgain(){ 
    y=confirm("PLAY AGAIN?");
    if(y==true){
        location.reload(true);
    }else{
        alert('Good Bye Then!!');
    }
}