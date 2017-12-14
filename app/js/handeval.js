
var hand = [];

var valuesArray = [];

var suitsArray = [];

let highCard = null;

let pairs = null;

let pairStrings = null;

let valuesNumeric = null;

// given a value "n", returns the number of occurrences of "n" in "hand" array. Useful to know how many "two"s or "three"s and so on we have on a hand
function occurrencesOf(n){
     let count = valuesArray.filter(x => x == n ).length;
     return count;
}

// thanks to occurrencesOf, this function returns a string with the combination of duplicate cards.
// If you have "Four of a Kind" it will return "4", if you have "Three of a kind" il will return "3",
// if you have "Full House" it will return "32" or "23" and so on.
function duplicateCards(){
  var occurrencesFound = [];
  var result = "";

  for(var i = 0; i < valuesArray.length; i++){

    var occurrences = occurrencesOf(valuesArray[i]);

    if(occurrences > 1 && occurrencesFound.indexOf(valuesArray[i]) == -1){

     result += occurrences;

     occurrencesFound.push(valuesArray[i]);

    }
  }
  pairStrings = occurrencesFound;
  pairs = occurrencesFound.map(
    x => {
      if (x == "J"){
        return 11
      }
      else if (x == "Q"){
        return 12
      }
      else if (x == "K"){
        return 13
      }
      else if (x == "A"){
        return 14
      }
      else {
        return Number(x)
      }
    }
  ).sort((a,b) => b-a);
  return result;
}

// this function will return the lowest number in a hand. Useful to check for straights
function getLowest(){
    return Math.min(...valuesNumeric)
}

// we have a straight when starting from the lowest card we can find an occurrence of lowest card +1, +2, +3 and +4
function isStraight(){
   var lowest = getLowest();
   for(var i = 1; i < 5; i++){
      if(valuesNumeric.filter((x) => x == (lowest + i)).length != 1){
           return false
      }
   }
   return true;
}

// we have an ace straight when you have 10 (9), J (10), Q (11), K (12) and A (0)
function isAceStraight(){
  var lowest = getLowest();
   if(lowest!==10){
     return false
   }
   else{
     for(var i = 1; i < 5; i++){
        if(valuesNumeric.filter((x) => x == (lowest + i)).length != 1){
             return false
        }
     }
   }
   return true;
}

// we have a flush when all items in suitsArray have the same value
function isFlush(){
     for(var i = 0; i < 4; i ++){
          if(suitsArray[i] != suitsArray[i+1]){
               return false;
          }
     }
     return true;
}



// main function to check the hand
export default function checkHand(evalhand){

  hand = evalhand.cards;
  valuesArray = evalhand.vals
  suitsArray = evalhand.suits

  let valuedhand ={
    desc: "",
    high: [],
    score: 0,
    arr:[]
  }

  valuesNumeric = valuesArray.map(
    x => {
      if (x == "J"){
        return 11
      }
      else if (x == "Q"){
        return 12
      }
      else if (x == "K"){
        return 13
      }
      else if (x == "A"){
        return 14
      }
      else {
        return Number(x)
      }
    }
  )

  highCard = valuesNumeric.map(x => x);
  highCard.sort((a,b) => b-a);


  switch(duplicateCards()){
    case "2":
         valuedhand.desc = "Pair of " + pairStrings[0] + "'s";
         valuedhand.score = 13 + pairs[0];
         valuedhand.arr = valuesNumeric.map(
           x =>  x === pairs[0] ? true : false
         )
         //console.log(pairs[0])
         //console.log(valuesNumeric)
         //console.log(valuedhand.arr)
         break;
     case "22":
         valuedhand.desc = "Two Pairs";
         valuedhand.score = 25 + pairs[0];
         valuedhand.arr = valuesNumeric.map(
           x => x === pairs[0] ? true : x === pairs[1] ? true : false
         )
         //console.log(pairs[0])
         //console.log(pairs[1])
         //console.log(valuedhand.arr)
         break;
    case "3":
         valuedhand.desc = "Three of a Kind";
         valuedhand.score = 38 + pairs[0];
         valuedhand.arr = valuesNumeric.map(
           x =>  x === pairs[0] ? true : false
         )
        //console.log(valuedhand.arr)
         break;
    case "23":
    case "32":
         valuedhand.desc = "Full House";
         valuedhand.score = 68 + pairs[0];
         valuedhand.arr = new Array(5).fill(true);
         //console.log(valuedhand.arr)
         break;
    case "4":
         valuedhand.desc = "Four of a Kind";
         valuedhand.score = 81 + pairs[0];
         valuedhand.arr = valuesNumeric.map(
           x =>  x === pairs[0] ? true : false
         )
         //console.log(valuedhand.arr)
         break;
    default:
        if(!isAceStraight() && isStraight()){
          valuedhand.arr = new Array(5).fill(true);
          if(isFlush()){
            valuedhand.desc = "Straight Flush"
            valuedhand.score = 90 + highCard[0];
          }
          else{
            valuedhand.desc = "Straight";
            valuedhand.score = 47 + highCard[0];
          }
        }
        if(isAceStraight()){
          valuedhand.arr = new Array(5).fill(true);
          if(isFlush()){
            valuedhand.desc = "ROYAL FLUSH OMG OMG 1 in 80,000 CHANCE"
            valuedhand.score = 90 + highCard[0];

          }
          else{
            valuedhand.desc = "Ace Straight";
            valuedhand.score = 47 + highCard[0];
          }
        }
        break;
  }
  if(!isStraight() && isFlush()){
    valuedhand.desc = "Flush";
    valuedhand.score = 56 + highCard[0]
    valuedhand.arr = new Array(5).fill(true);
  }

  //no hand, high card
  if(!valuedhand.desc){
    valuedhand.desc = "";
    valuedhand.score = highCard[0]
    if (highCard[0] < 9){
      valuedhand.arr=new Array(5).fill(false);
    }
    else{ //take nothing
      valuedhand.arr = valuesNumeric.map(
        x =>  x === highCard[0] ? true : false
      )
    }

  }

  valuedhand.high = highCard;

  return valuedhand;

}
