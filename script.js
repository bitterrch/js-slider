const entities = [
    {
        city: 'Rostov-on-Don',
        place: 'LCD Admiral',
        area: 81,
        time: '3.5 months',
        img: 'img1'
    },
    {
        city: 'Sochi',
        place: 'Thieves',
        area: 105,
        time: '4 months',
        img: 'img2'
    },
    {
        city: 'Rostov-on-Don',
        place: 'Patriotic',
        area: 93,
        time: '3 months',
        img: 'img3'
    }
];

const img = document.querySelector(".projects-img");
const city = document.querySelector(".city");
const place = document.querySelector(".place");
const area = document.querySelector(".area");
const time = document.querySelector(".time");

const city_0 = document.querySelector(".city_1");
const city_1 = document.querySelector(".city_2");
const city_2 = document.querySelector(".city_3");

const circle_0 = document.querySelector(".circle_1");
const circle_1 = document.querySelector(".circle_2");
const circle_2 = document.querySelector(".circle_3");

function setEntity(index) {
    city.innerHTML = entities[index].city;
    place.innerHTML = entities[index].place;
    area.innerHTML = `${entities[index].area}m<sup>2</sup>`;
    time.innerHTML = entities[index].time;
    img.innerHTML = `<img src="img/${entities[index].img}.png" alt="Projects showcase">`

    if (index == 0) {
        city_0.classList.add("orange-text");
        city_0.classList.add("underlined");
        circle_0.innerHTML = '<img src="img/white-circle.svg" width="10" height="10">';
        if (city_1.classList.contains("orange-text")) {
            city_1.classList.remove("orange-text");
            city_1.classList.remove("underlined");
            circle_1.innerHTML = '<img src="img/gray-circle.svg" width="10" height="10">';
        }
        else {
            city_2.classList.remove("orange-text");
            city_2.classList.remove("underlined");
            circle_2.innerHTML = '<img src="img/gray-circle.svg" width="10" height="10">';
        }
    }
    else if (index == 1) {
        city_1.classList.add("orange-text");
        city_1.classList.add("underlined");
        circle_1.innerHTML = '<img src="img/white-circle.svg" width="10" height="10">';
        if (city_0.classList.contains("orange-text")) {
            city_0.classList.remove("orange-text");
            city_0.classList.remove("underlined");
            circle_0.innerHTML = '<img src="img/gray-circle.svg" width="10" height="10">';
        }
        else {
            city_2.classList.remove("orange-text");
            city_2.classList.remove("underlined");
            circle_2.innerHTML = '<img src="img/gray-circle.svg" width="10" height="10">';
        }
    }
    else {
        city_2.classList.add("orange-text");
        city_2.classList.add("underlined");
        circle_2.innerHTML = '<img src="img/white-circle.svg" width="10" height="10">';
        if (city_1.classList.contains("orange-text")) {
            city_1.classList.remove("orange-text");
            city_1.classList.remove("underlined");
            circle_1.innerHTML = '<img src="img/gray-circle.svg" width="10" height="10">';
        }
        else {
            city_0.classList.remove("orange-text");
            city_0.classList.remove("underlined");
            circle_0.innerHTML = '<img src="img/gray-circle.svg" width="10" height="10">';
        }
    }
}

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentIndex = 0;

prev.addEventListener('click', () => {
    if (currentIndex == 0) {
        currentIndex = 2;
    }
    else {
        currentIndex -= 1;
    }
    setEntity(currentIndex);

});

next.addEventListener('click', () => {
    if (currentIndex == 2) {
        currentIndex = 0;
    }
    else {
        currentIndex += 1;
    }
    setEntity(currentIndex);
});

city_0.addEventListener('click', () => {
    currentIndex = 0;
    setEntity(currentIndex);
})

city_1.addEventListener('click', () => {
    currentIndex = 1;
    setEntity(currentIndex);
})

city_2.addEventListener('click', () => {
    currentIndex = 2;
    setEntity(currentIndex);
})

circle_0.addEventListener('click', () => {
    currentIndex = 0;
    setEntity(currentIndex);
})

circle_1.addEventListener('click', () => {
    currentIndex = 1;
    setEntity(currentIndex);
})

circle_2.addEventListener('click', () => {
    currentIndex = 2;
    setEntity(currentIndex);
})