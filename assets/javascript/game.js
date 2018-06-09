	//computer choice
 	var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    //user choice
    var guessesSoFar = []; 


    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;

    //random computer choice
    var computerOptionIndex = Math.floor(Math.random()*options.length);
    var computerOption = options[computerOptionIndex];
    
    //html tags
    var wins_span = document.querySelector('#wins');
    var losses_span = document.querySelector('#losses');
    var guessesLeft_span = document.querySelector('#guessesLeft');

    //Function to play the game
    function game(ev){
        
    	//user choices
        var user_Guesses = ev.key;
        //var user_Choice = String.fromCharCode(ev.key).toLowerCase();
        guessesSoFar.push(user_Guesses);
        //alert(guessesSoFar);
		console.log(guessesSoFar);

		
        document.querySelector('#userGuesses').innerText = guessesSoFar;
        // document.querySelector('#userChoice').innerText = user_Choice;
        //document.querySelector('#computerChoice').innerText = computerOption;

        //If user guess is equal to computer option, increment wins count, and start the game over again.
        //If guesses left count is equal to 0, increment losses count, and start the game over again.
        //If user guess is not equal to computer option, decrement guesses left.
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