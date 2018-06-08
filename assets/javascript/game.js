//  You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

// 3. Guess what letter I'm thinking of

// 4. Wins: (# of times the user has guessed the letter correctly)

// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// 6. Guesses Left: (# of guesses left. This will update)

// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).




 	var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var guessesSoFar = []; //user choice

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;

    var computerOptionIndex = Math.floor(Math.random()*options.length);
    var computerOption = options[computerOptionIndex];
    
    var wins_span = document.querySelector('#wins');
    var losses_span = document.querySelector('#losses');
    var guessesLeft_span = document.querySelector('#guessesLeft');

    function game(ev){
        

        var user_Guesses = ev.key;
        var user_Choice = String.fromCharCode(ev.key).toLowerCase();
        guessesSoFar.push(user_Guesses);
        //alert(guessesSoFar);
		console.log(guessesSoFar);

		document.querySelector('#userChoice').innerText = user_Choice;
        document.querySelector('#userGuesses').innerText = guessesSoFar;
        //document.querySelector('#computerChoice').innerText = computerOption;

        if (user_Guesses == computerOption){
             wins++;
             alert('Yay! You guessed it correct.');
             wins_span.innerText = wins;
             guessesLeft = 9;
             guessesSoFar.length = 0;
        } else if (guessesLeft == 0){
             losses++;
             alert('Your guess is wrong.');
             losses_span.innerText = losses;
             guessesLeft = 9;
             guessesSoFar.length = 0;
             
        } else if (user_Guesses != computerOption){
             guessesLeft--;
             //alert('decrement guesses left')
            guessesLeft_span.innerText = guessesLeft;
        }
    }

    document.onkeyup = game;