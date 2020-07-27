let  readlineSync  =  require('readline-sync');
let difficulty = ["Normal", "Medium",  "Expoert", ]
let riddleExpoert = 
    "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why? " 
let riddleMedium = "What goes up but never comes down? "
let riddleNormal = "What has to be broken before you can use it?"
let answer = ["An egg", "There aren’t any—it’s a one-story house.","Your age", "He was bald."," Your word"," A barber"]



    if (readlineSync.keyInYN(" Need a little break to unwind with some fun brain teasers?")) {
        // 'Y' key was pressed.
        console.log(' ')
        console.log(`Great we have some 1Riddle for you`)
        // Do something...
      } 
      else {
        console.log(' ')
        console.log(`I guess you'r not that  smart`)
        process.exit()
      }
   

      selecteLevels = readlineSync.keyInSelect(difficulty, "Choose Difficulty!\n");
       console.log(' ')
       console.log(' ')
       console.log(' You want a ' + difficulty[selecteLevels] + ' Riddle \n')


       if (difficulty[selecteLevels] === difficulty[0]){
          console.log(` Great we have a ${difficulty[0]}\n`)
          console.log(`${riddleNormal} \n`)
          } 
       else if (difficulty[selecteLevels] === difficulty[1]){
        console.log(`Great we have a ${difficulty[1]}\n`)
        console.log(`${riddleMedium} \n`)
        } 
        else if (difficulty[selecteLevels] === difficulty[2]){
        console.log(` Great we have a ${difficulty[2]}`)
        console.log(`${riddleExpoert} \n`);
        }
       else  {
        // Another key was pressed.
        console.log(' ')
        console.log(`I guess you'r not that  smart`)
        process.exit()
        // Do something...
      }
    // Normal riddle 
        
    normalRiddle = () => {
        selctedNormal = readlineSync.keyInSelect
        (answer, "Choose You'r Answer");
      if( answer[selctedNormal] === answer[0] ){
      console.log(`'Winner Winner Chicken Dinner '`)
      process.exit()
    }
     else {
      console.log(' ')
      console.log(`I guess you'r not that  smart`)
      process.exit()
      normalriddle()
    }

    }
    normalriddle()

 medium = () => {
        mediumRiddle = readlineSync.keyInSelect
        (answer, "Choose You'r Answer")
      if( answer[mediumRiddle] === answer[2] ){
      console.log(`'Winner Winner Chicken Dinner '`)
      process.exit()
    }
     else {
      // Another key was pressed.
      console.log(' ')
      console.log(`I guess you'r not that  smart`)
      process.exit()
      medium()
    
    }
    medium()
 }
    
   hard = () => {
    selctedExpoert = readlineSync.keyInSelect
    (answer, "Choose You'r Answer");
  if( answer[selctedExpoert] === answer[2] ){
  console.log(`'Winner Winner Chicken Dinner '`)
  process.exit()
}
 else {
  // Another key was pressed.
  console.log(' ')
  console.log(`I guess you'r not that  smart`)
  process.exit()
  hard()
}
}
hard() 
    
    
    
    
   

      
     
      
      
      
   
    