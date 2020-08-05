/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Array for color characters 
***/
const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

/*** 
 * `quotes` array 
***/
const quotes = [
  { 
    tags: 'Proverb',
    quote: 'The best things in life are free. The second best are very expensive.',
    source: 'Coco Chanel',
    citation: null,
    year: null
  },
  { 
    tags: 'Politics',
    quote: 'Now we are engaged in a great civil war, testing whether our nation, or any nation so conceived and so dedicated, can long endure.',
    source: 'Abraham Lincoln',
    citation: 'Gettysburg Address',
    year: '1863'
  },
  { 
    tags: 'Entertainment',
    quote: 'To boldy go where no man has gone before.',
    source: 'Captain Kirk',
    citation: 'Star Trek: The Original Series',
    year: null
  },
  { 
    tags: 'Humor',
    quote: 'I am the president, you can\'t grab me like that!',
    source: 'Saddam Hussein',
    citation: null,
    year: null
  },
  { 
    tags: 'Proverb',
    quote: 'Faith can move mountains.',
    source: 'Jesus Christ',
    citation: 'Matthew 17:20',
    year: null
  },
  { 
    tags: 'Humor',
    quote: 'Why join the navy when you can be a pirate?',
    source: 'Steve Jobs',
    citation: null,
    year: null
  },
  { 
    tags: 'Humor',
    quote: 'Airplane travel is nature\'s way making you look like your passport photo.',
    source: 'Al Gore',
    citation: null,
    year: null
  }
]

/***
 * Generate random colour
***/
const getRandomColor = () => {
  let color = '#';
  // Runs loop to generate a random HEX value
  for (let i = 0; i < 6; i++) {
      color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}


/***
 * `getRandomQuote` function
***/
const getRandomQuote = (quotes) => {
  // Generates random number and return a random selection from quotes array
  let randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
}

/***
 * `printQuote` function
***/
const printQuote = () => {
  let quoteObj = getRandomQuote(quotes);

  // Insert content into a variable
  let html = `
    <p class="quote">${quoteObj.quote}</p>
    <p class="source">${quoteObj.source}
  `;
  // Lets check if there is a citation
  if(quoteObj.citation !== null) {
    html += `<span class="citation">${quoteObj.citation}</span>`
  }
  // Lets check if there is a year
  if(quoteObj.year !== null) {
    html += `<span class="year">${quoteObj.year}</span>`
  }
  html += `<span>, ${quoteObj.tags}</span>`
  html += `</p>`
  // Inserts html into page and changes background colour
  document.getElementById('quote-box').innerHTML = html;
  document.getElementById('bg').style.backgroundColor = getRandomColor(); 
}

// Calls the printQuote function every 8 seconds
setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);