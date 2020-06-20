var randomQuote =  {
  quotes:[
    'Comedy is simply a funny way of being serious.',
    'The price of anything is the amount of life you exchange for it.',
    'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',
    'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
    'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.',
    'You don’t have to live your life so that your life is suitable for small talk. Life can be lived in ways that circumnavigate a myriad of colors and landscapes.',
    'So many books, so little time.',
    'Power always has to be kept in check; power exercised in secret, especially under the cloak of national security, is doubly dangerous.',
    'It\'s a lie to think you\'re not good enough. It\'s a lie to think you\'re not worth anything',
    'Stop doing what is easy. Start doing what is right',
    'Beauty is not who you are on the outside, it is the wisdom and time you gave away to save another struggling soul like you.',
    'You must expect great things of yourself before you can do them',
    'We are what we believe we are!',
    'Being brave is when you have to do something because you know it is right, but at the same time, you are afraid to do it, because it might hurt or whatever. But you do it anyway',
    'How much you can learn when you fail determines how far you will go into achieving your goals'

  
  ],
  author:[
    'Peter Ustinov',
    'David Thoreau',
    'Charles Lindbergh',
    'John Kenneth Galbraith',
    'Tyne Daly',
    'Cherie Ve Ard',
    'Frank Zappa',
    'William Proxmire',
    'Nick Vujicic',
    'Roy T. Bennett, The Light in the Heart',
    'Shannon L. Alder',
    'Michael Jordan',
    'C.S. Lewis',
    'Meg Cabot, All-American Girl',
    'Roy T. Bennett, The Light in the Heart'
  ]
};
//page load
document.querySelector(".quote-text").innerHTML=randomQuote.quotes[0];
  document.querySelector(".author").innerHTML="- " + randomQuote.author[0];

//
function generateQuote() {
  index=Math.floor(Math.random()*randomQuote.quotes.length);
  document.querySelector(".quote-text").innerHTML=randomQuote.quotes[index];
  document.querySelector(".author").innerHTML="- " + randomQuote.author[index];
  

}
