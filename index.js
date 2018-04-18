function theBeatlesPlay (arrayMusicians, arrayInstruments) {
  
  let arr = [];
  
  for (let i = 0; i < arrayMusicians.length; i++) {
    
    arr.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
  }
  
  return arr;
  
}

function johnLennonFacts (facts) {
  
  let i = 0;
 
  while (i < arrFacts.length) {
  
  arrFacts[i++] += '!!!';
  
    }
  
    return facts;

    }

function iLoveTheBeatles (number) {
  
  let arr = [];
  
  let i = 0;
  
  do {
    
    arr.push("I love the Beatles!");
    
      } while (i++ < number && number < 15);
        
 
      return arr;
      
      }