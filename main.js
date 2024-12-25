const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");

const calendarDays = 24;
const currentDate = new Date().getDate();

let openedDoors = [];

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#fff";

    const r = /\d+/;

    openedDoors.push(path.match(r));
    
    document.getElementById("list-num").innerHTML = `The opened number doors are ${openedDoors.join(', ')}`;
}

const createCalendar = () => {
    for (let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        let imagePath = `./images/image-${i + 1}.gif`;

        if (currentDate >= i + 1) {
            calendarDoorText.addEventListener("click", openDoor.bind(null, imagePath));
        }
    }

    openedDoors.sort((a, b) => a - b);
    document.getElementById("list-num").innerHTML = `The opened number doors are ${openedDoors.join(', ')}`;

    calendarButton.disabled = true;
};

calendarButton.addEventListener("click", createCalendar);

const surprise = document.querySelector("#surprise");
const initial_view = document.querySelector("#initial-view");
const subtitle = document.querySelector("#subtitle");
xmasDate = new Date("December 25")

console.log(currentDate);
console.log(xmasDate.getDate());

const createGift = () => {
    const gift = document.querySelector("#gift");
    gift.innerHTML = `
        <img class="img_xmas" data-aos="fade-in" data-aos-duration="5000" src="./images/xmas.jpg" alt="Ronin Malli" style="width:95%;">
        <br>
        <audio controls loop autoplay style="display: none;">
            <source src="audio.mp3" type="audio/mpeg">
            Your browser does not support this audio element.
        </audio>
    `
}

if (currentDate == xmasDate.getDate()) {
    surprise.innerHTML = `
        <button id="presentOpener" class="btn-gift">Click here to open the gift!</button>
        <br>
        <div id="gift" data-aos="fade-in"></div>
    `;
    initial_view.innerHTML = "" 
    subtitle.innerHTML = "HERE IS A PRESENT FOR YOU!"
    const presentOpenerBtn = document.querySelector("#presentOpener");
    presentOpenerBtn.addEventListener("click", createGift)
}
document.getElementById("countdown").innerHTML = `There are ${xmasDate.getDate() - new Date().getDate()} days left to see it!`;