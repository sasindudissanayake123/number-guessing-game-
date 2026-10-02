let randomNumber = Math.floor(Math.random() * 10) + 1;


function guessBtnOnAction() {

    let num = document.getElementById("num").value;


    if (num == randomNumber) {

        document.getElementById("result").innerHTML =
            "Correct! ❤️";

        // Correct image
        document.getElementById("correctImage").style.display = "block";

        // Wrong image hide
        document.getElementById("wrongImage").style.display = "none";


        let hearts = "";

        for (let i = 0; i < 50; i++) {
            hearts += "❤️ ";
        }

        document.getElementById("hearts").innerHTML = hearts;


    } else {

        document.getElementById("result").innerHTML =
            "Wrong! 👀";

        document.getElementById("num").value = "";

        // Wrong image
        document.getElementById("wrongImage").style.display = "block";

        // Correct image hide
        document.getElementById("correctImage").style.display = "none";

        // Hearts hide
        document.getElementById("hearts").innerHTML = "";


        if (num < randomNumber) {

            document.getElementById("result").innerHTML =
                "Wrong! 👀 Hint: Number eka " + num + " ta wada wedi!";

        } else {

            document.getElementById("result").innerHTML =
                "Wrong! 👀 Hint: Number eka " + num + " ta wada adui!";
        }
    }
}