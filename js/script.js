/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes array
const quotes = [
  {
    quote: "It is better to remain silent and be thought a fool, than to open your mouth and remove all doubt.",
    source: "Abraham Lincoln, Mark Twain",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "Inaugural Address",
    year: 1933,
  },
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi"
  },
  {
    quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
    source: "Albert Einstein"
  },
  {
    quote: "The world ain't all sunshine and rainbows. It's a very mean and nasty place, and I don't care how tough you are, it will beat you to your knees and keep you there permanently if you let it. You, me or nobody is gonna hit as hard as life. But it ain't about how hard you hit, it's about how hard you can get hit and keep moving forward.",
    source: "Rocky Balboa",
    citation: "Rocky Balboa(film)",
    year: 2006
  },
  {
    quote: "Before you judge a man, walk a mile in his shoes. After that who cares? He's a mile away and you've got his shoes!",
    source: "Billy Connolly",
    tag: "humor"
  }
]

// getRandomQuote Function
// gets a random number and used the number to get a quote from the array 
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// printQuote Function
// gets the random quote and makes it into string
// also checks if some values are defined and adds it to the string
// lastly it prints the string
function printQuote() {
  const randomQuote = getRandomQuote();
  let string = 
    `<p class="quote">${randomQuote.quote}</p>
     <p class="source">${randomQuote.source}`;
  if(randomQuote.citation !== undefined) {
    string += `<span class="citation">${randomQuote.citation}</span>`
  }
  if(randomQuote.year !== undefined) {
    string += `<span class='year'>${randomQuote.year}</span>`
  } 
  if(randomQuote.tag !== undefined) {
    string += `<span class="citation">${randomQuote.tag}</span>`
  }
  string += '</p>'
 
  return [document.getElementById('quote-box').innerHTML = string, document.body.style.background = randomColor()];
}

// RandomColor function
// Works alot like the getRandomQuote function
function randomColor() {
  const color = ['blue','green','orange','red','black','purple','pink','gold','silver']
  const number = Math.floor(Math.random() * color.length)
  return color[number];
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);