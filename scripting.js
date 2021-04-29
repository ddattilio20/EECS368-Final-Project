//Main JavaScript Document

//Variable for keeping track of player turns
let count = 0;

 
//Array to hold player values
let board = []

//Checks for wins along the rows
function rowCheck()
{
  //All possible win conditions for horizontal wins
    let case1 = ((board[7]==board[8]  && board[7]==board[9]  && board[7]==board[10]  && board[7]!= undefined) || (board[8]==board[9] && board[8] == board[10] && board[8] == board[11] && board[8] != undefined) ||  (board[9]==board[10] && board[9]==board[11] && board[9]==board[12]&& board[9]!= undefined) || (board[10]==board[11] && board[10]==board[12] && board[10]==board[13]&& board[10]!= undefined));
    let case2 = ((board[14]==board[15]  && board[14]==board[16]  && board[14]==board[17]  && board[14]!= undefined) || (board[15]==board[16] && board[15] == board[17] && board[15] == board[18] && board[15] != undefined) ||  (board[16]==board[17] && board[16]==board[18] && board[16]==board[19]&& board[16]!= undefined) || (board[17]==board[18] && board[17]==board[19] && board[17]==board[20]&& board[17]!= undefined));
    let case3 = ((board[21]==board[22]  && board[21]==board[23]  && board[21]==board[24]  && board[21]!= undefined) || (board[22]==board[23] && board[22] == board[24] && board[22] == board[25] && board[22] != undefined) ||  (board[23]==board[24] && board[23]==board[25] && board[23]==board[26]&& board[23]!= undefined) || (board[24]==board[25] && board[24]==board[26] && board[24]==board[27]&& board[24]!= undefined));
    let case4 = ((board[28]==board[29]  && board[28]==board[30]  && board[28]==board[31]  && board[28]!= undefined) || (board[29]==board[30] && board[29] == board[31] && board[29] == board[32] && board[29] != undefined) ||  (board[30]==board[31] && board[30]==board[32] && board[30]==board[33]&& board[30]!= undefined) || (board[31]==board[32] && board[31]==board[33] && board[31]==board[34]&& board[31]!= undefined));
    let case5 = ((board[35]==board[36]  && board[35]==board[37]  && board[35]==board[38]  && board[35]!= undefined) || (board[36]==board[37] && board[36] == board[38] && board[36] == board[39] && board[36] != undefined) ||  (board[37]==board[38] && board[37]==board[39] && board[37]==board[40]&& board[37]!= undefined) || (board[38]==board[39] && board[38]==board[40] && board[38]==board[41]&& board[38]!= undefined));
    let case6 = ((board[42]==board[43]  && board[42]==board[44]  && board[42]==board[45]  && board[42]!= undefined) || (board[43]==board[44] && board[43] == board[45] && board[43] == board[46] && board[43] != undefined) ||  (board[44]==board[45] && board[44]==board[46] && board[44]==board[47]&& board[44]!= undefined) || (board[45]==board[46] && board[45]==board[47] && board[45]==board[48]&& board[45]!= undefined));

    if(case1 || case2 || case3 || case4 || case5 || case6)
    {
        return true;
    }
  else return false;
}

//Checks for wins along the columns
function columnCheck()
{
 //All possible win conditions for vertical wins
    let case1 = ((board[7]==board[14]  && board[7]==board[21]  && board[7]==board[28]  && board[7]!= undefined)  || (board[14]==board[21] && board[14] == board[28] && board[14] == board[35] && board[14] != undefined) ||  (board[21]==board[28] && board[21]==board[35] && board[21]==board[42]&& board[21]!= undefined));
    let case2 = ((board[8]==board[15]  && board[8]==board[22]  && board[8]==board[29]  && board[8]!= undefined)  || (board[15]==board[22] && board[15] == board[29] && board[15] == board[36] && board[15] != undefined) ||  (board[22]==board[29] && board[22]==board[36] && board[22]==board[43] && board[22]!= undefined));
    let case3 = ((board[9]==board[16]  && board[9]==board[23]  && board[9]==board[30]  && board[9]!= undefined)  || (board[16]==board[23] && board[16] == board[30] && board[16] == board[37] && board[16] != undefined) ||  (board[23]==board[30] && board[23]==board[37] && board[23]==board[44] && board[23]!= undefined));
    let case4 = ((board[10]==board[17] && board[10]==board[24] && board[10]==board[31] && board[10]!= undefined) || (board[17]==board[24] && board[17] == board[31] && board[17] == board[38] && board[17] != undefined) ||  (board[24]==board[31] && board[24]==board[38] && board[24]==board[45] && board[24]!= undefined));
    let case5 = ((board[11]==board[18] && board[11]==board[25] && board[11]==board[32] && board[11]!= undefined) || (board[18]==board[25] && board[18] == board[32] && board[18] == board[39] && board[18] != undefined) ||  (board[25]==board[32] && board[25]==board[39] && board[25]==board[46] && board[25]!= undefined));
    let case6 = ((board[12]==board[19] && board[12]==board[26] && board[12]==board[33] && board[12]!= undefined) || (board[19]==board[26] && board[19] == board[33] && board[19] == board[40] && board[19] != undefined) ||  (board[26]==board[33] && board[26]==board[40] && board[26]==board[47] && board[26]!= undefined));
    let case7 = ((board[13]==board[20] && board[13]==board[27] && board[13]==board[34] && board[13]!= undefined) || (board[20]==board[27] && board[20] == board[34] && board[20] == board[41] && board[20] != undefined) ||  (board[27]==board[34] && board[27]==board[41] && board[27]==board[48] && board[27]!= undefined));
  
    if(case1 || case2 || case3 || case4 || case5 || case6 || case7)    
    {
     return true;
    }
  else return false;
}


//Checks for wins along diagonals
function diagCheck()
{
  //All possible win conditions for diagonal wins
    let case1 = ((board[7]==board[15] && board[7]==board[23] && board[7]==board[31] && board[7]!= undefined) || (board[15]==board[23] && board[15] == board[31] && board[15] == board[39] && board[15] != undefined) ||  (board[23]==board[31] && board[23]==board[39] && board[23]==board[47] && board[23]!= undefined));
    let case2 = ((board[8]==board[16] && board[8]==board[24] && board[8]==board[32] && board[8]!= undefined) || (board[16]==board[24] && board[16] == board[32] && board[16] == board[40] && board[16]!= undefined) ||  (board[24]==board[32] && board[24]==board[40] && board[24]==board[48] && board[24]!= undefined));
    let case3 = ((board[9]==board[17] && board[9]==board[25] && board[9]==board[33] && board[9]!= undefined) || (board[17]==board[25] && board[17] == board[33] && board[17] == board[41] && board[17]!= undefined));
    let case4 = ((board[10]==board[18] && board[10]==board[26] && board[10]==board[34] && board[10]!= undefined));
    let case5 = ((board[14]==board[22] && board[14]==board[30] && board[14]==board[38] && board[14]!= undefined) || (board[22]==board[30] && board[22] == board[38] && board[22] == board[46] && board[22]!= undefined));
    let case6 = ((board[21]==board[29] && board[21]==board[37] && board[21]==board[45] && board[21]!= undefined));
    let case7 = ((board[28]==board[22] && board[28]==board[16] && board[28]==board[10] && board[28]!= undefined));
    let case8 = ((board[35]==board[29] && board[35]==board[23] && board[35]==board[17] && board[35]!= undefined) || (board[29]==board[23] && board[29] == board[17] && board[29] == board[11] && board[29]!= undefined));
    let case9 = ((board[42]==board[36] && board[42]==board[30] && board[42]==board[24] && board[42]!= undefined) || (board[36]==board[30] && board[36] == board[24] && board[36] == board[18] && board[36]!= undefined) ||  (board[30]==board[24] && board[30]==board[18] && board[30]==board[12] && board[30]!= undefined));
    let case10 = ((board[43]==board[37] && board[43]==board[31] && board[43]==board[25] && board[43]!= undefined) || (board[37]==board[31] && board[37] == board[25] && board[37] == board[19] && board[37]!= undefined) ||  (board[31]==board[25] && board[31]==board[19] && board[31]==board[13] && board[31]!= undefined));
    let case11 = ((board[44]==board[38] && board[44]==board[32] && board[44]==board[26] && board[44]!= undefined) || (board[38]==board[32] && board[38] == board[32] && board[38] == board[20] && board[38]!= undefined));
    let case12 = ((board[45]==board[39] && board[45]==board[33] && board[45]==board[27] && board[45]!= undefined));

    if(case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8 || case9 || case10 || case11 || case12)    
    {
      return true;
    }
    else return false;

}


//Function that calls rowCheck() diagCheck() and columnCheck()
function isWon()
{
  if(diagCheck() == true || rowCheck() == true || columnCheck() == true)
    {
      if(count % 2 == 0)
        {
       alert("Red team wins on this move. Game took " + count + " moves. Board will auto-refresh in 5 seconds.");
        setTimeout(() =>{location.reload();},5000);
        }
      else if(count % 2 != 0)
        {
          alert("Blue team wins on this move. Game took " + count + " moves. Board will auto-refresh in 5 seconds.");
        setTimeout(() =>{location.reload();},5000);
        }
    }
}



//A Column Button
function aClick()
{
 let index = 0;
    let arrayID;

    do
    {
        arrayID = index;
        index+=7;
    } while(board[index]!= null)

    if(count % 2 != 0)
    {
       document.getElementById(arrayID).style.backgroundColor = "#ff0000";
       board[index] = 1;
    }
    else
    {
        document.getElementById(arrayID).style.backgroundColor = "#0000ff";
        board[index] =2;
    }

    count++;
    isWon();
}



//B Column Button
function bClick()
{
   let index = 1;
    let arrayID;

    do
    {
        arrayID = index;
        index+=7;
    } while(board[index]!= null)

   
    if(count % 2 != 0)
    {
       document.getElementById(arrayID).style.backgroundColor = "#ff0000";
       board[index] = 1;
    }
    else
    {
        document.getElementById(arrayID).style.backgroundColor = "#0000ff";
        board[index] =2;
    }

    count++;
   isWon();
}



//C Column Button
function cClick()
{

   let index = 2;
    let arrayID;

    do
    {
        arrayID = index;
        index+=7;
    } while(board[index]!= null)


    if(count % 2 != 0)
    {
       document.getElementById(arrayID).style.backgroundColor = "#ff0000";
       board[index] = 1;
    }
    else
    {
        document.getElementById(arrayID).style.backgroundColor = "#0000ff";
        board[index] =2;
    }

    count++;
   isWon();
}



//D Column Button
function dClick()
{
   let index = 3;
    let arrayID;

    do
    {
        arrayID = index;
        index+=7;
    } while(board[index]!= null)


    if(count % 2 != 0)
    {
       document.getElementById(arrayID).style.backgroundColor = "#ff0000";
       board[index] = 1;
    }
    else
    {
        document.getElementById(arrayID).style.backgroundColor = "#0000ff";
        board[index] =2;
    }

    count++;
   isWon();
}



//E Column Button
function eClick()
{

   let index = 4;
    let arrayID;

    do
    {
        arrayID = index;
        index+=7;
    } while(board[index]!= null)


    if(count % 2 != 0)
    {
       document.getElementById(arrayID).style.backgroundColor = "#ff0000";
       board[index] = 1;
    }
    else
    {
        document.getElementById(arrayID).style.backgroundColor = "#0000ff";
        board[index] =2;
    }

    count++;
    isWon();
}



//F Column Button
function fClick()
{

   let index = 5;
    let arrayID;

    do
    {
        arrayID = index;
        index+=7;
    } while(board[index]!= null)


    if(count % 2 != 0)
    {
       document.getElementById(arrayID).style.backgroundColor = "#ff0000";
       board[index] = 1;
    }
    else
    {
        document.getElementById(arrayID).style.backgroundColor = "#0000ff";
        board[index] =2;
    }

    count++;
    isWon();
}

//G Column Button
function gClick()
{

   let index = 6;
    let arrayID;

    do
    {
        arrayID = index;
        index+=7;
    } while(board[index]!= null)


    if(count % 2 != 0)
    {
       document.getElementById(arrayID).style.backgroundColor = "#ff0000";
       board[index] = 1;
    }
    else
    {
        document.getElementById(arrayID).style.backgroundColor = "#0000ff";
        board[index] =2;
    }

    count++;
    isWon();
} 

