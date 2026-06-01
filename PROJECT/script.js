function bookMovie(movie){

    localStorage.setItem("selectedMovie", movie);

    window.location.href = "booking.html";
}

window.onload = function(){

    let movieName =
    document.getElementById("movieName");

    if(movieName){

        movieName.innerText =
        localStorage.getItem("selectedMovie")
        || "Movie Not Selected";
    }

    let seats =
    document.querySelectorAll(".seat");

    seats.forEach(seat => {

        seat.addEventListener("click", function(){

            seats.forEach(btn => {
                btn.classList.remove("selected");
            });

            this.classList.add("selected");

            document.getElementById(
                "seatNumber"
            ).innerText =
            this.innerText;

        });

    });

};

function confirmBooking(){

    let movie =
    localStorage.getItem(
    "selectedMovie");

    let seat =
    document.getElementById(
    "seatNumber").innerText;

    let time =
    document.getElementById(
    "showTime").value;

    if(seat === "None"){

        alert(
        "Please select a seat.");
        return;
    }

    alert(
    "Booking Successful!\n\n" +
    "Movie: " + movie +
    "\nShow Time: " + time +
    "\nSeat: " + seat
    );
}

function searchMovie(){

    let input =
    document.getElementById(
    "searchInput")
    .value
    .toLowerCase();

    let cards =
    document.querySelectorAll(
    ".movie-card");

    cards.forEach(card => {

        let title =
        card.querySelector("h3")
        .innerText
        .toLowerCase();

        if(title.includes(input)){

            card.style.display =
            "block";

        }else{

            card.style.display =
            "none";
        }

    });

}