var quotes = [
    {
        'author': '― Albert Einstein',
        'quote': '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”'
    },
    {
        'author': '― J.K. Rowling',
        'quote': '“It does not do to dwell on dreams and forget to live.”'
    },
    {
        'author': '― Mark Twain',
        'quote': '“Good friends, good books, and a sleepy conscience: this is the ideal life.”'
    },
    {
        'author': '― Oscar Wilde',
        'quote': '“We are all in the gutter, but some of us are looking at the stars.”'
    },
    {
        'author': 'William Shakespeare',
        'quote': '“The fool doth think he is wise, but the wise man knows himself to be a fool.”'
    },
    {
        'author': '― Allen Saunders',
        'quote': '“Life is what happens to us while we are making other plans.”'
    }
];

var lastQuoteIndex = -1;  

function generateQuote() {
    var QuoteIndex;

    do {
        QuoteIndex = Math.floor(Math.random() * quotes.length);
    } while (QuoteIndex === lastQuoteIndex);


    lastQuoteIndex = QuoteIndex;

    document.getElementById('quoteText').textContent = quotes[QuoteIndex].quote;
    document.getElementById('quoteAuthor').textContent = quotes[QuoteIndex].author;
}