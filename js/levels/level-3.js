// build my Quiz
// change data HARD
(function() {
  const myQuestions = [
    {
      question: "Who was the Potters' secret keeper<br> before they died? ",
      answers: {
        a: "Peter Pettigrew",
        b: "Sirius Black",
        c: "Albus Dumbledore",
        d: "Remus Lupin"
      },
      correctAnswer: "a",
      level: "hard"
    },
    {
      question:
        "What are the last words of Severus Snape <br>in The Deathly Hallows?",
      answers: {
        a: "Not Harry! Please..",
        b: "Look.. at me",
        c: "You could do better..",
        d: "Avada Kedavra"
      },
      correctAnswer: "b",
      level: "hard"
    },
    {
      question:
        "At Ollivander, Harry Potter will find his first wand.<br> Or rather, the wand will choose it.<br> What is it?",
      answers: {
        a: "Willow wood and unicorn hair",
        b: "In vine wood and dragon ventricle",
        c: "In elderwood and hair of oval",
        d: "In holly wood and phoenix feather"
      },
      correctAnswer: "d",
      level: "hard"
    },
    {
      question:
        "Albus Dumbledore claims to have a scar above his left knee. <br> What does it look like ?",
      answers: {
        a: "This is the spitting portrait of the Mona Lisa",
        b: "It's a perfect plan of the London underground",
        c: "Merlin's Portrait",
        d: "The portrait of GrindenWald"
      },
      correctAnswer: "b",
      level: "hard"
    },
    {
      question: "In order of birth, who are the seven weasley siblings?",
      answers: {
        a: "Percy, Ron, Bill, Fred, Ginny, Georges, Charlie",
        b: "Bill, Charlie, Percy, Fred, George, Ron, Ginny",
        c: "Fred, George, Ginny, Ron, Bill, Charlie, Percy",
        d: "Bill, Charlie, Percy, George, Fred, Ron, Ginny"
      },
      correctAnswer: "b",
      level: "hard"
    },
    {
      question: "Who first shows the diary <br>of Tom Riddle ?",
      answers: {
        a: "Moaning Myrtle",
        b: "Ginny Weasley",
        c: "Nearly Headless Nick",
        d: "Hermione Granger"
      },
      correctAnswer: "a",
      level: "hard"
    },
    {
      question:
        "What's the name of the fairy-talebook that Dumbledore <br>bequeaths to Hermione in 'The Deathly Hallows'?",
      answers: {
        a: "The Tales of Beedle the Bard",
        b: "The Tales of Crookshanks the cat",
        c: "The Tales of Gilderoy the Great",
        d: "The Tales of The Wonderfull Voldy"
      },
      correctAnswer: "a",
      level: "hard"
    }
  ];

  function buildQuiz() {
    const output = [];
    var letter = [];
    // var level = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
                 <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
            
               </label>`
        );
      }

      output.push(
        `<div class="slide">
               <div class="question" style="font-family:'Harry Potter Regular';font-weight:normal;font-size:42px"> ${
                 currentQuestion.question
               } </div>
               <div class="answers" > ${answers.join("")} </div>
             </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.querySelector("#quiz");
  const resultsContainer = document.querySelector("#results");
  const submitButton = document.querySelector("#submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.querySelector("#previous");
  const nextButton = document.querySelector("#next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
