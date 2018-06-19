const
  prompt = require('prompt'), 
  fs = require('fs')

function addName() {
  prompt.get(['username'], function(err, result){
    console.log(' username: ' + result.username)
    fs.appendFile('guest-list.txt', result.username + "\n", function(err) {
      if(err)console.log(err) // this is a nesting of callbacks and this is where the code is done
      // since the code has stopped this is where you call the function again
      addName()
    })
  })
}

console.log("Type ctrl + c to stop")
addName()
 