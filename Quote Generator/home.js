let quote= document.querySelector('span');
let person = document.querySelector('.person');
let quoteBtn = document.querySelector('.buttons');

const quotes = [{
  quote: `"The best way to find yourself is to lose yourself in the service of others'`,  
  person:` Mahatma Gandh`},
    {
  quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,  
  person: ` Albert Einstein`},
    { 
  quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst"`, 
  person: ` Aristotle`},
    {
  quote: `"Your time is limited, so dont waste it living someone else's life"`,
  person: `Steve Jobs `} ,
    {
  quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn"`,
  person: ` Benjamin Franklin` },
    {
  quote: `"If you look at what you have in life, you'1l always have more. If you look at what you don't have in life, you'11 never have enough"`,
  person: `Oprah Winfrey`},
    { 
  quote:`"It does not matter how slowly you go as long as you do not stop"`,
  person: `Confucius`},
    { 
  quote: `"Our lives begin to end the day we become silent about things that matter"`,
  person: `Martin Luther King`},  
    {  
  quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck"`,
  person: `Dalai Lama`},
    { 
  quote: `"The journey of a thousand miles begins with one step"`,
  person: `Lao Tzu` },];

quoteBtn.addEventListener('click',function(){
let random = Math.floor(Math.random()*quotes.length);
const newQuote =quotes[random];
quote.innerHTML = newQuote.quote;
person.innerHTML = newQuote.person;
  });