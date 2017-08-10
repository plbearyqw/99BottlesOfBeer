function printByNumbers(number){
          let result = '';
          let bottle = '';
          if(number <= 99 && number >= 2){
                    bottle += 'bottles';
          }
          if(number === 1){
                    bottle += 'bottle';
          }
          result += number
                     + ' ' + bottle + ' of beer on the wall, ' 
                     + number + ' ' + bottle + ' of beer.\n'
                     + 'Take one down and pass it around, ' 
                     + (number > 1? (number-1) + '': 'no more') + ' ' 
                     + (number > 1? (number === 2? 'bottle': 'bottles'): 'bottles')
                     + ' of beer on the wall.\n';
          console.log(result);
          return result;
}
    
function printFirstPart(number){
          for(let i = number; i > 0; i--){
                    printByNumbers(i);
          } 
}
    
function printLastPart(){
          let result = 'No more bottles of beer on the wall, no more bottles of beer.\n' +
                              'Go to the store and buy some more, 99 bottles of beer on the wall.';
          console.log(result);
          return result;
}

function main(){
          printFirstPart(99);
          printLastPart();
}

module.exports = {main:main, printByNumbers:printByNumbers, printLastPart:printLastPart};
