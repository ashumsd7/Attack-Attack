var game= new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 10,
        gameIsRunning: false,
        turns: []

    },
    methods: {

        startGame: function () {
            this.gameIsRunning = true,
                this.playerHealth = 100,
                this.monsterHealth = 100

        },
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: "Ashu hits Aasim! Aasim's Health- " + this.monsterHealth

            })


            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return;

            }


            this.playerHealth -= this.calculateDamage(5, 12);

            this.turns.unshift({
                isPlayer: false,
                text: "Aasim hits Aashu !   Ashu's Health  " + this.playerHealth

            })



            if (this.playerHealth <= 0) {
                if (confirm('You Lost! New Game?')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return;

            }



        },

        specialAttack: function () {

            this.monsterHealth -= this.calculateDamage(10, 20);

            this.turns.unshift({
                isPlayer: true,
                text: "Ashu hits  Aasim hard! Aasim's Health- " + this.monsterHealth

            })

            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                    this.turns = [];
                }
                else {
                    this.gameIsRunning = false;
                    this.turns = [];
                }
                return;
            }


            this.playerHealth -= this.calculateDamage(5, 12);

            this.turns.unshift({
                isPlayer: false,
                text: "Aasim hits Aashu hard !   Ashu's Health  " + this.playerHealth

            })


            if (this.playerHealth <= 0) {
                if (confirm('You Lost! New Game?')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return;

            }

        },

        heal: function () {

            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.turns.unshift({
                    isPlayer: false,
                    text: "Ashu heals, Ashu's Health is " + this.playerHealth

                })

            } else {
                this.playerHealth = 100;
            }

        },

        giveUp: function () {

            this.gameIsRunning = false;
            this.turns = [];
        },

        calculateDamage: function (min, max) {
            var randomNumber = Math.floor((Math.random() * max));

            var damage = Math.max(randomNumber, min);
            return damage;

        },



    }
});



