/* =========================
   AVTOTEST UZ
========================= */

let transportType = "car";

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;


/* =========================
   100 TA DARS
========================= */

const lessonNames = [
    "Yo'l belgilari",
    "Svetoforlar",
    "Chorrahalar",
    "Tezlik qoidalari",
    "To'xtash qoidalari",
    "To'xtab turish",
    "Quvib o'tish",
    "Piyodalar",
    "Yo'l chiziqlari",
    "Burilish qoidalari",
    "Harakatlanish",
    "Xavfsizlik kamari",
    "Tungi harakat",
    "Yomg'irda haydash",
    "Tormoz tizimi",
    "Avtomobil xavfsizligi",
    "Yo'lning asosiy qoidalari",
    "Haydovchi majburiyatlari",
    "Yo'l harakati xavfsizligi",
    "Imtihonga tayyorgarlik"
];


/* =========================
   DARS RENDER
========================= */

function loadLessons() {

    const container =
        document.getElementById("lessonContainer");

    if (!container) return;

    container.innerHTML = "";

    for (let i = 1; i <= 100; i++) {

        let free = i <= 20;

        let card =
            document.createElement("div");

        card.className =
            "lesson-card" +
            (free ? "" : " locked");

        let title =
            lessonNames[(i - 1) % lessonNames.length];

        card.innerHTML = `

            <div class="lesson-number">
                ${String(i).padStart(2, "0")}
            </div>

            ${
                free
                ? ""
                : `<span class="pro-lock">👑 PRO</span>`
            }

            <h3>
                ${title}
            </h3>

            <p>
                ${transportText()}
                bo'yicha ${i}-dars.
                Mavzuni o'rganing va testga o'ting.
            </p>

            <button
                onclick="openSelectedLesson(${i})">

                ${
                    free
                    ? "📖 Darsni o'qish"
                    : "🔒 PRO bilan ochish"
                }

            </button>

        `;

        container.appendChild(card);
    }
}


/* =========================
   TRANSPORT MATNI
========================= */

function transportText() {

    if (transportType === "truck") {
        return "Yuk mashinasi";
    }

    if (transportType === "moto") {
        return "Motosikl";
    }

    return "Avtomobil";
}


/* =========================
   TRANSPORT TANLASH
========================= */

function setType(type) {

    transportType = type;

    loadLessons();
}


/* =========================
   DARS OCHISH
========================= */

function openSelectedLesson(number) {

    if (number > 20) {

        let pro =
            localStorage.getItem("avtotestPro");

        if (pro !== "true") {

            alert(
                "🔒 Bu dars PRO rejimda!\n\n" +
                "20 ta bepul dars tugadi.\n" +
                "PRO — 10 000 so'm."
            );

            window.location.href =
                "pro.html";

            return;
        }
    }


    const modal =
        document.getElementById("lessonModal");

    const title =
        document.getElementById("modalTitle");

    const text =
        document.getElementById("modalText");


    if (!modal) return;


    title.textContent =
        `${number}-dars: ${
            lessonNames[(number - 1) %
            lessonNames.length]
        }`;


    text.textContent =
        `${transportText()} uchun ushbu darsda `
        +
        `yo'l harakati qoidalarining muhim `
        +
        `jihatlari o'rganiladi. Darsni diqqat `
        +
        `bilan o'qib chiqing va keyin testga o'ting.`;


    modal.style.display = "flex";
}


function closeLesson() {

    const modal =
        document.getElementById("lessonModal");

    if (modal) {

        modal.style.display = "none";

    }
}


/* =========================
   TEST SAVOLLARI
========================= */

const carQuestions = [

    {
        q: "Qizil svetofor nimani bildiradi?",

        a: [
            "Harakatlanish taqiqlanadi",
            "Tezlikni oshirish",
            "Burilishni boshlash",
            "To'xtamasdan o'tish"
        ],

        c: 0
    },

    {
        q: "Haydovchi xavfsizlik kamaridan foydalanishi kerakmi?",

        a: [
            "Ha",
            "Yo'q",
            "Faqat kechasi",
            "Faqat shahardan tashqarida"
        ],

        c: 0
    },

    {
        q: "Piyodalar o'tish joyida haydovchi qanday harakat qiladi?",

        a: [
            "Ehtiyotkorlik bilan",
            "Tezlikni oshiradi",
            "Signal beradi",
            "Yo'lni tark etadi"
        ],

        c: 0
    },

    {
        q: "Burilishdan oldin nima qilish kerak?",

        a: [
            "Burilish signalini berish",
            "Tezlikni oshirish",
            "Ko'zni yumish",
            "Signal bermaslik"
        ],

        c: 0
    }

];


const truckQuestions = [

    {
        q: "Yuk mashinasida yuk qanday joylashtirilishi kerak?",

        a: [
            "Xavfsiz va mahkam",
            "Istalgancha",
            "Faqat tepaga",
            "Mahkamlamasdan"
        ],

        c: 0
    },

    {
        q: "Yuk mashinasi haydovchisi nimaga ko'proq e'tibor beradi?",

        a: [
            "Yuk xavfsizligiga",
            "Faqat tezlikka",
            "Musiqaga",
            "Telefoniga"
        ],

        c: 0
    },

    {
        q: "Yuk avtomobili bilan harakatlanishda nima muhim?",

        a: [
            "Masofani saqlash",
            "Tezlikni oshirish",
            "Keskin burilish",
            "Belgilarni e'tiborsiz qoldirish"
        ],

        c: 0
    },

    {
        q: "Yuk transportida xavfsizlik uchun nima kerak?",

        a: [
            "Yukni mahkamlash",
            "Yukni ochiq qoldirish",
            "Tezlikni oshirish",
            "Chiroqlarni o'chirish"
        ],

        c: 0
    }

];


const motoQuestions = [

    {
        q: "Motosikl haydovchisi himoya vositalaridan foydalanishi kerakmi?",

        a: [
            "Ha",
            "Yo'q",
            "Faqat kechasi",
            "Faqat uzoq yo'lda"
        ],

        c: 0
    },

    {
        q: "Motosiklda xavfsizlik uchun nima muhim?",

        a: [
            "Himoya kiyimlari",
            "Tezlikni oshirish",
            "Telefon ishlatish",
            "Belgilarni e'tiborsiz qoldirish"
        ],

        c: 0
    },

    {
        q: "Motosikl bilan burilishda nima muhim?",

        a: [
            "Ehtiyotkorlik",
            "Tezlikni oshirish",
            "Keskin harakat",
            "Signal bermaslik"
        ],

        c: 0
    },

    {
        q: "Motosikl boshqarishda yo'lga qanday munosabatda bo'lish kerak?",

        a: [
            "Diqqat bilan",
            "E'tiborsiz",
            "Telefon bilan",
            "Tezlikni doim oshirib"
        ],

        c: 0
    }

];


/* =========================
   16 TA SAVOLGA TO'LDIRISH
========================= */

function getQuestions() {

    let base;

    if (transportType === "truck") {
        base = truckQuestions;
    }

    else if (transportType === "moto") {
        base = motoQuestions;
    }

    else {
        base = carQuestions;
    }


    let result = [];

    for (let i = 0; i < 16; i++) {

        result.push(
            base[i % base.length]
        );

    }

    return result;
}


let questions = getQuestions();


/* =========================
   TESTNI YUKLASH
========================= */

function loadQuestion() {

    const q =
        questions[currentQuestion];

    const question =
        document.getElementById("question");

    const answers =
        document.getElementById("answers");

    const number =
        document.getElementById("questionNumber");

    const progress =
        document.getElementById("progress");


    if (!question || !answers)
        return;


    question.textContent =
        q.q;


    answers.innerHTML = "";


    q.a.forEach(
        function(text, index) {

            const button =
                document.createElement("button");

            button.textContent =
                String.fromCharCode(65 + index)
                + ") "
                + text;

            button.onclick =
                function() {

                    selectAnswer(
                        button,
                        index
                    );

                };

            answers.appendChild(button);

        }
    );


    number.textContent =
        `Savol ${currentQuestion + 1} / 16`;


    progress.style.width =
        ((currentQuestion + 1) / 16 * 100)
        + "%";


    selectedAnswer = null;
}


/* =========================
   JAVOB
========================= */

function selectAnswer(
    button,
    index
) {

    document
        .querySelectorAll("#answers button")
        .forEach(
            b => b.classList.remove("selected")
        );


    button.classList.add("selected");

    selectedAnswer = index;
}


/* =========================
   KEYINGI SAVOL
========================= */

function nextQuestion() {

    if (selectedAnswer === null) {

        alert(
            "Avval javobni tanlang!"
        );

        return;
    }


    if (
        selectedAnswer ===
        questions[currentQuestion].c
    ) {

        score++;

    }


    currentQuestion++;


    if (
        currentQuestion >= 16
    ) {

        finishTest();

        return;
    }


    loadQuestion();
}


/* =========================
   TEST YAKUNI
========================= */

function finishTest() {

    const modal =
        document.getElementById("resultModal");

    const result =
        document.getElementById("result");


    if (result) {

        result.textContent =
            `${score} / 16`;

    }


    if (modal) {

        modal.style.display =
            "flex";

    }

}


/* =========================
   PRO
========================= */

function activatePro() {

    localStorage.setItem(
        "avtotestPro",
        "true"
    );


    alert(
        "👑 PRO rejim demo tarzda faollashtirildi!"
    );


    window.location.href =
        "lessons.html";
}


/* =========================
   TIMER
========================= */

let secondsLeft =
    20 * 60;


function startTimer() {

    const timer =
        document.getElementById("timer");


    if (!timer)
        return;


    const interval =
        setInterval(
            function() {

                let minutes =
                    Math.floor(
                        secondsLeft / 60
                    );

                let seconds =
                    secondsLeft % 60;


                timer.textContent =
                    String(minutes)
                    .padStart(2, "0")
                    + ":"
                    +
                    String(seconds)
                    .padStart(2, "0");


                secondsLeft--;


                if (
                    secondsLeft < 0
                ) {

                    clearInterval(interval);

                    finishTest();

                }

            },
            1000
        );

}


/* =========================
   SAHIFA OCHILISHI
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadLessons();

        if (
            document.getElementById("question")
        ) {

            questions =
                getQuestions();

            loadQuestion();

            startTimer();

        }

    }
);