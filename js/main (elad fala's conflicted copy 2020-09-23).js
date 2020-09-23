'use strict';
var HAPPY_SMILEY='😊';
var SAD_SMILEY='😒';
var WINER_SMILEY='😎';
var MINE='🧨';
var FLAG='🚩';
var gBoard;
var gLevel;
var gGame;
var gCellNextId=0
var Frame=document.querySelector('.Frame')
function initGame(){}
function buildBoard(){
gBoard=[]
for(var i=0;i<=3;i++){
gBoard.push([])
for(var j=0;j<=3;j++){
    gBoard[i].push([{'class':'cell','id':++gCellNextId,'i':i,'j':j, 'isShown':true,'containsMine':false}])
}    
} 
var test1=gBoard[0].find(cell=>cell.id=1)
var test2=gBoard[3].find(cell=>cell.id=10) 

test1.containsMine=true
test2.containsMine=true
console.log(test1)
console.log(test2)
console.table(gBoard)
} 
function setMinesNegsCount(board){}
function renderBoard(board){
    var strHTML = '';
	for (var i = 0; i < board.length; i++) {
		strHTML += '<tr>\n';
		for (var j = 0; j < board[i].length; j++) {
			var currCell = board[i][j];
			
            


            strHTML += '\t</td>\n';
            if(board[i][j].containsMine){strHTML += '\t<td class="cell "'  + '  >'+MINE+ ' </td>\n';}
			else{strHTML += '\t<td class="cell '+'innerText='+''  + '"   >\n';}
		}
		strHTML += '</tr>\n';
	}
	
	var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
    
 
}  
function cellClicked(elCell, i, j){} 
function cellMarked(elCell){}
function checkGameOver(){} 
function expandShown(board, elCell,i, j){} 
buildBoard()
renderBoard(gBoard)