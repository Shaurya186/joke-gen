var quotes = [
' Why was 6 afraid of 7?Because 7, 8, 9',
'What kind of tree fits in your hand?A palm tree!',
'Why was the baby strawberry crying?Because her parents were in a jam.',
'How does a scientist freshen her breath?With experi-mints!',
' What time is it when the clock strikes 13?Time to get a new clock.',
' What happened when the skunk was on trial?The judge declared, "Odor in the court, odor in the court!" ',
' What do you get if you cross a pie and a snake? A pie-thon. ',
'why do c programmers have to wear glasses? because they dont c#',
'99 little bugs in the code ,99 bugs in the code , 1 bug fixed.....compile again ,100 little bugs in the code'
]
 
function newQuote() {
       var randomNumber = Math.floor(Math.random() *  (quotes.length));
       document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}