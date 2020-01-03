// Code your solutions in this file
function writeCards(namesArray, event) {
  for (let i = 0, i < namesArray.length; i++) {
    thankYouCards.push(`Thank you, ${namesArray[i]} for the wonderful ${event} gift!`)
  }
  return thankYouCards
}
