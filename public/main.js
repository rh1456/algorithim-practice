// // fizz buzz practice//
// function fizzBuzz(num) {
//   for (var i = 1; i <= num; i++) {
//     if (i % 15 === 0) console.log('FizzBuzz')
//     else if (i % 3 === 0) console.log('Fizz')
//     else if (i % 5 === 0) console.log('Buzz')
//     else console.log(i)
//   }
// }
// fizzBuzz(30)

function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ')
  var magazineArr = magazineText.split(' ')
  var magazineObj = {}

  // looping through every word in our magazine array and we want to place every word we come across onto our magazine object and keep count of how many times that word is present
  // we are checking to see if the current word is a property on a magazine object
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0
    magazineObj[word]++
  })

  var noteIsPossible = true
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--
      if (magazineObj[word] < 0) noteIsPossible = false
    } else noteIsPossible = false
  })
  return noteIsPossible
}
