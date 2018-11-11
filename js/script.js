/******************************************
A Random Quote Generator
******************************************/


/* List of Quotes */
var quotes = [
  {
    quote: 'The Way Get Started Is To Quit Talking And Begin Doing.',
    source: 'Walt Disney',
    citation: 'Book',
    year: 1930
  },
  {
    quote: 'Do, or do not. There is no \'try\'',
    source: 'Yoda',
    citation: 'Movie',
    year: 1997
  },
  {
    quote: 'If you can do what you do best and be happy, you are further along in life than most people.',
    source: 'Leonardo Dicaprio',
    citation: 'Interview'
  },
  {
    quote: 'Why so serious?',
    source: 'Joker',
    citation: 'Movie',
    year: 2008
  },
  {
    quote: 'To infinity and beyond!',
    source: 'Buzz Lightyear',
    citation: 'Movie',
    year: 1995
  },
  {
    quote: 'Winter in Coming',
    source: 'Stark',
    citation: 'TV'
  },
  {
    quote: 'Give me all the bacon and eggs you have.',
    source: 'Ron Swanson',
    citation: 'TV'
  },
  {
    quote: 'I\'ve made a huge mistake',
    source: 'Gob Bluth',
    citation: 'TV'
  },
  {
    quote: 'That\'s what she said',
    source: 'Michael Scott',
    citation: 'TV'
  }
];


function getRandomQuote() {
    /* Get the number of quotes */
    var quotesNum = quotes.length;

    /* Get the random number based on number of quotes */
    var ranNum = Math.floor( (Math.random() * quotesNum) );

    /* Return random quote object */
    return quotes[ranNum];
}



function printQuote() {
    var randomQuote = getRandomQuote();

    var stringOfQuoteProperties;
    var quoteText ;
    var quoteSource ;
    var quoteCitation ;
    var quoteYear ;

    /* Check for object properties */
    if('quote' in randomQuote) {
        quoteText = randomQuote.quote;
    }
    if('source' in randomQuote) {
        quoteSource = randomQuote.source;
    }
    if('citation' in randomQuote) {
        quoteCitation = randomQuote.citation;
    }
    if('year' in randomQuote) {
        quoteYear = randomQuote.year;
    }

    /* HTML template */
    stringOfQuoteProperties = 
        "<p class='quote'>" + quoteText +"</p>" +
        "<p class='source'>" + quoteSource 
            + ( typeof quoteCitation !== "undefined" ? "<span class='citation'>" + quoteCitation + "</span>" : "" )
            + ( typeof quoteYear !== "undefined" ? "<span class='year'>" + quoteYear + "</span>" : "" )
        "</p>"

    /* Display randomly generated quote */
    document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;

}




document.getElementById('loadQuote').addEventListener("click", printQuote, false);



