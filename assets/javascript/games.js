
            var IntialCrystalVal_1 = 0;
            var IntialCrystalVal_2 = 0;
            var IntialCrystalVal_3 = 0;
            var IntialCrystalVal_4 = 0;
            
            var txtval = 0;
            var score = 0;
            var win = 0;
            var lose = 0;
            var status = 0;
            var status1 = 0;
            var status2 = 0;
            var status3 = 0;
            var status4 = 0;
            var scoreval = "";
           txtval = $("<div>");
           
            $(document).ready(function () {
                txtval = Math.floor(Math.random() * (120 - 19)) + 19;
                $("#txt").append(txtval);
            $("#crystal1").on("click", function () {
                if (parseInt(status1) === 0) {
                    IntialCrystalVal_1 = crystalGuessIntial(IntialCrystalVal_1);
                    status1 = 1;
                }
                else if (parseInt(status1) === 1) {
                    IntialCrystalVal_1 = crystalGuessRemaining(IntialCrystalVal_1);
                }
            })
            $("#crystal2").on("click", function () {
                if (parseInt(status2) === 0) {
                    IntialCrystalVal_2 = crystalGuessIntial(IntialCrystalVal_2);
                    status2 = 1;
                }
                else if (parseInt(status2) === 1) {
                    IntialCrystalVal_2 = crystalGuessRemaining(IntialCrystalVal_2);
                }
            })
            $("#crystal3").on("click", function () {
                if (parseInt(status3) === 0) {
                    IntialCrystalVal_3 = crystalGuessIntial(IntialCrystalVal_3);
                    status3 = 1;
                }
                else if (parseInt(status3) === 1) {
                    IntialCrystalVal_3 = crystalGuessRemaining(IntialCrystalVal_3);
                }
            })
            $("#crystal4").on("click", function () {
                if (parseInt(status4) === 0) {
                    IntialCrystalVal_4 = crystalGuessIntial(IntialCrystalVal_4);
                    status4 = 1;
                }
                else if (parseInt(status4) === 1) {
                    IntialCrystalVal_4 = crystalGuessRemaining(IntialCrystalVal_4);
                }
            })
            function getRandomInt(max) {
                return Math.floor(Math.random() * (12 - 1)) + 1;
            }
            function checkScore() {
                var x = score;
                var y = parseInt(txtval);
                if (x === y) {
                    win++;
                    $("#win").text(" ");
                    $("#win").append(win);
                    $("#win-game").css("background-color", "green");
                    $("#win-game").css("color", "black");
                    $("#win-game").addClass("win-game");
                    $("#win-game").addClass("h1");
                    $("#win-game").html("<h1> congratulations...You Won</h1>").delay(2000).hide(1);
                    resetVal();
                }
                else if (x > y) {
                    lose++;
                    $("#lose").text(" ");
                    $("#lose").append(lose);
                    $("#win-game").css("background-color", "red");
                    $("#win-game").css("color", "yellow");
                    $("#win-game").addClass("lose-game");
                    $("#win-game").addClass("h1");
                    $("#win-game").html("<h1> Sory...Try again</h1>").delay(2000).hide(1);
                    resetVal();
                }
            }
            function resetVal() {
                status1 = 0;
                status2 = 0;
                status3 = 0;
                status4 = 0;
                $("#txt").text(" ");
                txtval = Math.floor(Math.random() * (120 - 19)) + 19;
                $("#txt").append(txtval);
                $("#score").text(0); 
                $("#win-game").show();
            }
            function crystalGuessIntial(crystalNo) {
                crystalNo = getRandomInt(12);
                console.log("crystal_1 " + crystalNo)
                console.log("actual crystal" + IntialCrystalVal_1);
                scoreval = $("<div>")
                score = $("#score").text();
                score = +score || 0;
                $("#score").text(" ");
                score = parseInt(score) + crystalNo;
                $("#score").append(score);
                checkScore();
                return crystalNo;
            }
            function crystalGuessRemaining(crystalNo) {
                score = $("#score").text();
                score = parseInt(score) + crystalNo;
                $("#score").text(" ")
                $("#score").append(score);
                checkScore();
                return crystalNo;
            }
        });