// Fetching using arrow function
const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json()) /* response */
    .then( data => displayQuote(data) )
}

const displayQuote = quote => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote; // IMPORTANT!!
    console.log(quote);
}
/* Output without ".quote": {quote: 'I spoke to Dave Chapelle for two hours 
this morning. He is our modern day Socrates'}*/
/* এখানে quote.quote এর মধ্যে ১ম quote হচ্ছে একটি object. এই object এর 
ভিতরে quote নামে আরো একটি key আছে এবং এই key এর value আমাদেরকে নিতে
হবে। তাই quote.quote ইউজ করা হয়েছে। */