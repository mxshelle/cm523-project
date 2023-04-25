const hamburger = document.querySelector(".hamburger"); /* hamburger menu expand and close */
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




/* QUIZ */


const questions = [
    {
        question: "What song is currently playing?",
        options: ["Alone Again", "Live For", "Earned It", "Gasoline"],
        answer: 0,
        path: "music/afterhours/aloneagain.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["All I Know", "Rockin'", "Shameless", "Faith"],
        answer: 3,
        path: "music/afterhours/faith.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Less than Zero", "Too Late", "The Morning", "Heartless"],
        answer: 1,
        path: "music/afterhours/toolate.mp3"
    },
    {
        question: "What song is currently playing?", 
        options: ["I Feel It Coming", "False Alarm", "Angel", "Try Me"],
        answer: 2,
        path: "music/bbtm/angel.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Die for You", "Blinding Lights", "As You Are", "Scared to Live"],
        answer: 2,
        path: "music/bbtm/asyouare.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Twenty Eight", "I Was Never There", "Adaptation", "The Hills"],
        answer: 3,
        path: "music/bbtm/thehills.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["A Lonely Night", "I Heard You're Married", "Belong to the World", "Can't Feel My Face"],
        answer: 1,
        path: "music/dawnfm/iheardyouremarried.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Less than Zero", "Tell Your Friends", "Call Out My Name", "Losers"],
        answer: 0,
        path: "music/dawnfm/lessthanzero.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Hurt You", "Out of Time", "Escape from LA", "Dark Times"],
        answer: 1,
        path: "music/dawnfm/outoftime.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["In the Night", "Party Monster", "Often", "Montreal"],
        answer: 3,
        path: "music/eos/montreal.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["In Your Eyes", "How Do I Make You Love Me?", "Next", "After Hours"],
        answer: 2,
        path: "music/eos/next.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Acquainted", "The Host", "Crew Love", "Take My Breath"],
        answer: 1,
        path: "music/eos/thehost.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["High for This", "Try Me", "Wicked Games", "Reminder"],
        answer: 0,
        path: "music/hob/highforthis.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Sidewalks", "Prisoner", "Often", "Loft Music"],
        answer: 3,
        path: "music/hob/loftmusic.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Lost in the Fire", "Is There Someone Else?", "King of the Fall", "The Morning"],
        answer: 3,
        path: "music/hob/themorning.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Hurricane", "Professional", "Kiss Land", "Repeat After Me (Interlude)"],
        answer: 2,
        path: "music/kissland/kissland.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Live For", "Sacrifice", "Privilege", "Until I Bleed Out"],
        answer: 0,
        path: "music/kissland/livefor.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Real Life", "Secrets", "Wanderlust", "Tears in the Club"],
        answer: 2,
        path: "music/kissland/wanderlust.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Six Feet Under", "Hurt You", "Low Life", "Blinding Lights"],
        answer: 1,
        path: "music/mdm/hurtyou.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Starboy", "I Was Never There", "You Right", "Double Fantasy"],
        answer: 1,
        path: "music/mdm/iwasneverthere.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Wasted Times", "Losers", "Hardest to Love", "One Right Now"],
        answer: 0,
        path: "music/mdm/wastedtimes.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["The Town", "Smile", "Die for You", "Snowchild"],
        answer: 2,
        path: "music/starboy/dieforyou.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Love Me Harder", "Moth to a Flame", "Creepin'", "Ordinary Life"],
        answer: 3,
        path: "music/starboy/ordinarylife.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Hurricane", "Party Monster", "False Alarm", "Dark Times"],
        answer: 1,
        path: "music/starboy/partymonster.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Heaven or Las Vegas", "Privilege", "Belong to the World", "Coming Down"],
        answer: 0,
        path: "music/thursday/heavenorlasvegas.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Wicked Games", "Life of the Party", "Sacrifice", "Best Friends"],
        answer: 1,
        path: "music/thursday/lifeoftheparty.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Take My Breath", "XO / The Host", "The Birds, Pt. 1", "Love to Lay"],
        answer: 2,
        path: "music/thursday/thebirds1.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Too Late", "The Birds, Pt. 2", "All I Know", "Till Dawn"],
        answer: 3,
        path: "music/trilogy/tilldawn.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Reminder", "Sidewalks", "Twenty", "Some Way"],
        answer: 2,
        path: "music/trilogy/twenty.mp3"
    },
    {
        question: "What song is currently playing?",
        options: ["Moth to a Flame", "Valerie", "Love Me Harder", "Here We Go... Again"],
        answer: 1,
        path: "music/trilogy/valerie.mp3"
    }
]

let playPauseBtn = document.querySelector('.playpause-track');
let slider = document.querySelector('.styled-slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let playing = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let updateTimer;

//loadTrack(track_index);

/*
function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    playing.src = tracks[track_index].path;
    playing.load();

    updateTimer = setInterval(setUpdate, 1000);
}
*/

function reset(){
    slider.value = 0;
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack(); 
}

function playTrack(){
    playing.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
}

function pauseTrack(){
    playing.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
}

function seekTo(){
    let seekto = playing.duration * (slider.value / 100);
    playing.currentTime = seekto;
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(playing.duration)){
        seekPosition = playing.currentTime * (100 / playing.duration);
        slider.value = seekPosition;

        let currentMinutes = Math.floor(playing.currentTime / 60);
        let currentSeconds = Math.floor(playing.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(playing.duration / 60);
        let durationSeconds = Math.floor(playing.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;

        for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
            e.style.setProperty('--value', e.value);
            e.style.setProperty('--min', e.min == '' ? '0' : e.min);
            e.style.setProperty('--max', e.max == '' ? '100' : e.max);
            e.addEventListener('input', () => e.style.setProperty('--value', e.value));
        }

        playing.addEventListener("ended", function() {
            pauseTrack();
        })

    }
}

const questionText = document.querySelector('.question-text');
const optionContainer = document.querySelector('.option-container');
const questionLimit = 10;
const nextBtn = document.querySelector('.next-btn');
const progressIndicatorArea = document.querySelector('.progress-indicator');
const home = document.querySelector('.home-box');
const quiz = document.querySelector('.quiz-box')
const results = document.querySelector('.result-box')

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;

// push all questions into an array
function setAvailableQuestions() {
    questions.forEach ( question => {
        availableQuestions.push(question);
    })
}

function getNewQuestion() {

    // get random question & set question text
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.question;

    // load track
    clearInterval(updateTimer);
    reset();

    playing.src = currentQuestion.path;
    playing.load();

    updateTimer = setInterval(setUpdate, 1000);

    // get position of current question and rid of the used question from question array
    const index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1, 1);

    console.log(currentQuestion);

    // set question options (songs) and add to quiz
    currentQuestion.options.forEach ( option => {
        availableOptions.push(option);
    })

    // reset options
    optionContainer.innerHTML = '';
    for (let i = 0; i < currentQuestion.options.length; i++) {

        // randomize option choices
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2, 1);

        // add options to HTML
        const option = document.createElement('div');
        option.innerHTML = optionIndex;
        option.id = currentQuestion.options.indexOf(optionIndex);
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    }


    questionCounter++;

}

function getResult(choice) {
    const id = parseInt(choice.id)
    if (id === currentQuestion.answer) {
        choice.classList.add("correct");
        updateProgress("correct");
        correctAnswers++;
    } else {
        choice.classList.add("incorrect");
        updateProgress("incorrect");
        const options = optionContainer.children.length;
        for (let i = 0; i < options ; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    
    nextBtn.classList.remove('hide');
    oneChoice();
}

function oneChoice() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

function progressIndicator() {
    progressIndicatorArea.innerHTML = '';
    const totalQuestions = questionLimit;
    for (let i = 0; i < totalQuestions; i++) {
        const circle = document.createElement("div");
        progressIndicatorArea.appendChild(circle);
    }
}

function updateProgress(answer) {
    progressIndicatorArea.children[questionCounter - 1].classList.add(answer);
}

function next() {
    if (questionCounter === questionLimit) {
        end();
    } else {
        if(playPauseBtn.innerHTML === '<i class="fa fa-pause-circle fa-2x"></i>') {
            playPauseBtn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>'
        }
        getNewQuestion();
    }

    nextBtn.classList.add('hide');
}

function end() {
    quiz.classList.add('hide');
    results.classList.remove('hide');
    quizResults();
}

function quizResults() {
    results.querySelector('.total-correct').innerHTML = correctAnswers;
    results.querySelector('.percentage').innerHTML = (correctAnswers / 10) * 100;
    if (correctAnswers <= 5) {
        results.querySelector('.changing-result-text').innerHTML = "Nice try but consider listening to more of his music!";
    } else if (correctAnswers < 8) {
        results.querySelector('.changing-result-text').innerHTML = "You're a fan! You seem to know a lot of his music!";
    } else {
        results.querySelector('.changing-result-text').innerHTML = "Wow! You really know your stuff. Good job!";
    }
}

function tryAgain() {
    results.classList.add('hide');
    quiz.classList.remove('hide');
    resetQuiz();
    startQuiz();
}

function quit() {
    results.classList.add('hide');
    home.classList.remove('hide');
    resetQuiz();
}

function resetQuiz() {
    questionCounter = 0;
    correctAnswers = 0;
}

function startQuiz() {
    home.classList.add('hide');
    quiz.classList.remove('hide');
    setAvailableQuestions();
    getNewQuestion();
    progressIndicator();
}
