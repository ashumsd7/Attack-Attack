var flag=false;
console.log("no one here"+flag);
    if (annyang) {
     //alert('Hello Ashu!');
        var commands = {

            
          'START NEW GAME': function() { 
            console.log("in start new fun" +flag);
              if(flag==true)
              {
              game.startGame(); 
              }
            
            } ,

          'ATTACK': function(){ 

            if(flag==true)
            {
                game.attack(); 
            }
            },

          'HEAL ME': function(){
            if(flag==true)
            {
                game.heal(); 
            }
            },


          'SPECIAL': function(){ 
            if(flag==true)
            {
                game.specialAttack(); 
            } 
            },


          'GIVE UP': function(){  if(flag==true) {  game.giveUp();   }  }  };

        var commands2={
            "good morning" : function(){
                console.log("in wittybrains fun" +flag);
                flag=true;
            }
        };
      
        // Add our commands to annyang
        annyang.addCommands(commands);
        annyang.addCommands(commands2);
      
        // Start listening.
        annyang.debug();
        annyang.start();
       }