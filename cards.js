let cards = []
suits = ["Hearts","Spades","Clubs","Diamonds"]
values = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"]
for(var i = 0; i < 4; i++)
  for(var j = 0; j < 13; j++) {
    var json = {};
    json["suit"] = i
    json["value"] = j
    cards.push(json)
  }

Shuffle(cards)

PrettyPrint(cards[0])

function Deal(cards) {
  if(cards.length == 0) {
    return null
  }
  var returnThis = cards[cards.length - 1]
  cards.length--
  return returnThis
}

for(var i = 0; i < 60; i++) {
  PrettyPrint(Deal(cards))
}

function PrettyPrint(card) {
  console.log(values[card.value] + " of " +suits[card.suit])
}

//Fisher-Yates
function Shuffle(cards) {
  for(var i = 0; i < 52; i++) {
    let target = getRandomInt(i+1,52)
    var temp = cards[i]
    cards[i] = cards[target]
    cards[target] = temp
  }
  return cards
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}