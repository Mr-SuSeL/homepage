{


const toggleContactInfo = () => {
    const data = new Date();
    const actualHour = data.getHours();
    const buttonReaction = document.querySelector(".button__reaction");

    if (actualHour >= 15 && actualHour <= 19) {
        buttonReaction.innerHTML = "<p>To jest dobry czas na telefon:</p><p><ul><li><a href='tel:+48.888269988'>Telefon</a></li></ul></p>";
    }
    else if (actualHour > 19) {
        buttonReaction.innerHTML = "<p>Po czasie, zatem napisz mejla</p><p><ul><li><a href='mailto: susel.invest@gmail.com'>E-mail</a></li></ul></p>";
    }
    else if (actualHour < 15) {
        buttonReaction.innerHTML = "<p>Jestem w drugiej pracy teraz, zatem napisz mejla</p><p><ul><li><a href='mailto: susel.invest@gmail.com'>E-mail</a></li></ul></p><p>Lub poczekaj do godziny 15-tej</p>";
    }
    else {
        alert("Problem ze stroną lub serwerem");
    }


};

const init = () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", toggleContactInfo);
};

init();

}

