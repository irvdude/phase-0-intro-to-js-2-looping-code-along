// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const giftGivers = ["Alice", "Bob", "Carol"];
  const messages = writeCards(giftGivers);
  
  console.log(messages);
  // Output: ["Dear Alice, thank you for your gift!", "Dear Bob, thank you for your gift!", "Dear Carol, thank you for your gift!"]
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  countDown(10);
  // Output: 10 9 8 7 6 5 4 3 2 1 0
  